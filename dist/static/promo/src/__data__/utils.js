import QRCode from 'qrcode'
import { getConfigValue, log } from '@sbol/lib.app'
import { getManagerId } from '@sbol/lib.offers'
import { offersQueryParams, updateUrl } from '@sbol/lib.offers/src/api/url'

const isMultiple = (components) => components.filter((component) => component?.actionType === 'qrCode').length > 1
const isExternal = (url) => url && url.startsWith('http')

export const parsePromo = async (component, options = {}) => {
    const { multiple } = options

    if (component.link) {
        component.link = getConfigValue('isSbolPro') ? component.link.webPro || component.link.webpro : component.link.web
    }

    if (component.actionType === 'qrCode') {
        if (component.style?.id === 'qr-tb' && !getConfigValue('isSbolPro')) {
            return {}
        }

        const link = component.style?.id === 'qr-tb' ? await getManagerId() : component.link

        if (multiple) {
            component.multipleQr = true
        }

        try {
            component.linkQr = await QRCode.toDataURL(String(link))
        } catch (error) {
            log.error(error)
        }
    } else if (component.link) {
        // TODO: скопированное решение. Необходимо пошэрить
        component.external = isExternal(component.link)
        component.link = component.external
            ? offersQueryParams(component.link, options)
            : updateUrl(options, options.placeName, component.link)
    }

    if (component.components) {
        for (let i = 0; i < component.components.length; i += 1) {
            /* eslint-disable-next-line no-await-in-loop, comment: так куда проще реализовать парсер на коленке */
            component.components[i] = await parsePromo(component.components[i], {
                ...options,
                multiple: isMultiple(component.components)
            })
        }
    }

    return component
}

// offersPlaceName=webCatalog&offersCampaignId=5376&offersTemplateId=10494
const QUERIES = [
    'offersPlaceName',
    'offersCampaignId',
    'offersTemplateId'
]

export const parseQuery = () => {
    const query = window.location.search.substring(1)
    const params = query.split('&')

    return params.reduce((memo, param) => {
        const [key, value] = param.split('=')
        const decodedKey = decodeURIComponent(key)

        if (QUERIES.includes(decodedKey)) {
            memo[decodedKey] = decodeURIComponent(value)
        }

        return memo
    }, {})
}
