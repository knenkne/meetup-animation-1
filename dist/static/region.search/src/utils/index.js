import i18next from 'i18next'
import { getConfigValue, getAllFeatures, Link } from '@sbol/lib.app'

export { unicodeToWin1251UrlEncoded } from './unicode-win-encoder'
export { checkHtmlCodes } from './check-html-codes'
export { useMarkup } from './custom-hooks'

export const isSbolPro = getConfigValue('isSbolPro')
export const isErib = getConfigValue('isErib')

export const eribUrl = isErib
    ? window.location.origin
    : getConfigValue('erib.url', '')
export const plUrl = isErib ? getConfigValue('pl.url', '') : ''

const features = getAllFeatures('operations')
const isEribUrlNeed = (addr) => /^\/PhizIC\//.test(addr)
const setLink = (link) => (isEribUrlNeed(link) ? eribUrl : '') + link

// Логика формирования URL взята из компоненты operations
export const operationLink = ({ description, form, ufsId, url, type, stateStyle, id }) => {
    let urlLink

    if (description === i18next.t('operations.debit.card.order') && form === 'UfsDebitCardClaim') {
        urlLink = `/sbtsbol/private/history?documentType=UfsDebitCardClaim&documentId=${ufsId}`
    } else if (form === 'RurPayJurSB' && type === 'servicePayment' && stateStyle !== 'draft' && features && features['RurPayJurSB.ServicePayment']) {
        urlLink = `${Link.createUrl('payments.provider')}/status/${id}`
    } else {
        urlLink = setLink(url)
    }

    return urlLink
}
