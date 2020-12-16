import { getConfigValue } from '@sbol/lib.app/src/config'
import { log } from '@sbol/lib.app/src/log'

const FEEDBACK_PARAMS = {
    offersContentId: 'contentId',
    offersPlaceName: 'placeName',
    offersCampaignId: 'campaignId',
    offersTemplateId: 'templateId',
    offersCampaignCode: 'campaignCode'
}

const NUM_PARAMS = ['offersCampaignId', 'offersTemplateId']

export const getParamsFromLocation = () => {
    const query = window.location.search.substring(1)
    const params = query.split('&')

    return params.reduce((memo, param) => {
        const [key, value] = param.split('=')
        const decodedKey = decodeURIComponent(key)

        if (decodedKey in FEEDBACK_PARAMS) {
            const decodedValue = decodeURIComponent(value)
            memo[FEEDBACK_PARAMS[decodedKey]] = NUM_PARAMS.includes(decodedKey)
                ? Number(decodedValue)
                : decodedValue
        }

        return memo
    }, {})
}

const getModuleUrl = (id) => {
    const bannerUrl = getConfigValue('banners', {})[id]

    if (bannerUrl) {
        return bannerUrl
    }

    if (id.startsWith('/PhizIC')) {
        return `${getConfigValue('erib.url')}${id}`
    }

    return void ''
}
const cleanId = (id) => id.replace('}', '').replace('{', '')

const getUrlById = (id) => {
    if (getModuleUrl(id)) {
        return getModuleUrl(id)
    }

    const matches = id.match(/{.+?}/g)

    if (matches) {
        const replacer = getModuleUrl(cleanId(matches[0]))

        if (!replacer) {
            return void ''
        }

        return id.replace(matches[0], replacer)
    }

    return void ''
}

export const offersQueryParams = (url, params) => {
    const additionalQueryProps = Object.keys(FEEDBACK_PARAMS)
        .filter((key) => params[FEEDBACK_PARAMS[key]])
        .map((key) => `${key}=${params[FEEDBACK_PARAMS[key]]}`)

    const [path, query] = url.split('?')

    const queryProps = query ? additionalQueryProps.concat(query) : additionalQueryProps

    return `${path}?${queryProps.join('&')}`
}

export const updateUrl = (offer, placeName, id) => {
    if (!id) {
        log.info('Предложение без ссылки', offer.contentId)
        return void 0
    }

    const url = getUrlById(id)

    if (!url) {
        log.info('Не найдена ссылка для идентификатора', id, 'предложения', offer.contentId)
        return void 0
    }

    return offersQueryParams(url, {
        ...offer,
        placeName
    })
}
