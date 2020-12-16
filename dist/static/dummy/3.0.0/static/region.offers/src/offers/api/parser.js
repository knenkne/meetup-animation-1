import { log } from '@sbol/lib.app/src/log'
import { getOption, getNavigationValue } from '@sbol/lib.app/src/config'


import { MAX_OFFERS, IS_SBOL_PRO, CHANNEL, CHANNEL_CASE } from '../constants'

import { updateUrl, getParamsFromLocation, offersQueryParams } from './url'
import { getUniqueId } from './utils'
import { isRejected } from './reject'

const isLocal = (localContentId, offer) =>
    (localContentId || getParamsFromLocation().contentId) === String(offer.contentId)

const isToPromo = (url) => url.includes(getOption('universalPromoPageLink', process.env.PKG_ID) || '/promo')
const isWant = (promo, url = '') => !(promo && getNavigationValue('promo')) && isToPromo(url)
const isExternal = (url) => url && url.startsWith('http')

const collapseDescription = (textElement) => {
    const {
        text,
        id,
        style: {
            id: styleId,
            image: {
                url: imageUrl
            } = {}
        } = {}
    } = textElement

    return {
        text,
        id,
        styleId,
        imageUrl
    }
}

export const parser = (response, localContentId) => (response?.data?.places || [])
    .reduce((memo, { items = [], place: placeName } = {}) => memo.concat(items.map((offer) => {
        const {
            preview: {
                title,
                text: description,
                texts: descriptions = [],
                image: {
                    url: imageUrl
                } = {},
                buttonName,
                link = {}
            } = {},
            campaignId,
            templateId,
            contentId,
            campaignCode,
            document
        } = offer

        const id = link[CHANNEL] || link[CHANNEL_CASE] || link.web
        const external = isExternal(id)
        const url = external
            ? offersQueryParams(id, { ...offer, placeName })
            : updateUrl(offer, placeName, id)

        const promo = document?.role === 'promo' ? document : null
        const wanted = isWant(promo, url)

        return {
            title,
            description,
            descriptions: descriptions.map(collapseDescription),

            external,

            imageUrl,
            buttonName,
            contentId,
            placeName,
            campaignId,
            templateId,
            campaignCode,

            want: wanted && IS_SBOL_PRO,
            link: wanted ? void '' : url,
            promo: wanted ? void '' : promo,

            originalOffer: offer,
            uniqueId: getUniqueId({
                contentId,
                placeName,
                campaignId,
                templateId,
                campaignCode
            })
        }
    })), [])
    .filter((offer) => {
        // https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=1648596327
        if (!offer.link && !offer.want) {
            log.info('Убрано предложение с неподходящей ссылкой', offer)
            return false
        }

        // Отфильтровка всяких штук на всякий случай
        if (isLocal(localContentId, offer) || isRejected(offer)) {
            log.info('Убрано уже оформляемое предложение', offer)
            return false
        }

        return true
    })
    // Ограничиваем максимум
    .slice(0, MAX_OFFERS)
    // Нумерация для аналитики
    .map((offer, index, collection) => ({
        ...offer,
        position: index + 1,
        last: collection.length === index + 1
    }))
