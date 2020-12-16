import wpb from '@sbol/webpage.provider.bootstrap'
import _ from 'lodash'
import { getConfigValue, Link as ConnectedLink } from '@sbol/lib.app'

import { calcPlUrl } from '../../utils/links'
import { joinUrl } from '../utils/join-url'
import { checkFeature } from '../../utils/check-feature'

export const configHistory = getConfigValue('history')

const isErib = wpb.getOptions(['config', 'isErib'])
export const eribUrl = isErib
    ? window.location.origin
    : wpb.getOptions(['config', 'erib.url'])

export const getSettingsUrl = ConnectedLink.createUrl('settings')

export const getUrlProfile = ConnectedLink.createUrl('profile')

export const urlNotification = ConnectedLink.createUrl('appeals')

export const urlOpenNewCard = ConnectedLink.createUrl('cards.dashboard')

export const cardsDetailsUrl = _.memoize((cardId) => ConnectedLink.createUrl('link.cards.details', { cardId }))

export const ctaDetailsUrl = _.memoize((ctaccountId) => ConnectedLink.createUrl('link.cta.details', { ctaccountId }))

export const urlLoanOffer = ConnectedLink.createUrl('cards.credit')

export const urlOpenNewAccount = ConnectedLink.createUrl('deposit.account.open')

export const accountsDetailsUrl = _.memoize((accountId) => ConnectedLink.createUrl('link.accounts.details', { accountId }))

export const urlNewTarget = ConnectedLink.createUrl('targets.select')

export const urlTargetDetail = _.memoize((accountId) => ConnectedLink.createUrl('targets.details', { accountId }))

export const urlOpenNewLoan = ConnectedLink.createUrl('loans.dashboard')

export const urlLoanDetail = _.memoize((loanId, loanProductType) => {
    if (checkFeature('NewLoanService', 'region.scaffold')) {
        return ConnectedLink.createUrl('loans.detail.hash', { loanId })
    }

    return ConnectedLink.createUrl('loans.detail', {
        loanId,
        loanProductType,
    })
})


export const urlCarDetail = _.memoize((loanId) => ConnectedLink.createUrl('loans.car.details', { loanId }))

export const urlOpenNewIma = ConnectedLink.createUrl('ima.open')

export const urlImaDetail = _.memoize((imaId) => ConnectedLink.createUrl('ima.info', { imaId }))

export const urlOpenNewDepo = ConnectedLink.createUrl('DEPO')
export const urlDepoDetail = _.memoize((depoId) => ConnectedLink.createUrl('depo.details', { depoId }))

export const urlNewCertificate = ConnectedLink.createUrl('CERTIFICATES')
export const urlCertificateDetail = _.memoize((securityId) => ConnectedLink.createUrl('security.details', { securityId }))

export const urlOpenNewInvestments = joinUrl(
    eribUrl,
    '/PhizIC/private/investments'
)

export const urlLogout = ConnectedLink.createUrl('api.logout')

export const ufsCreditCardsClaimUrl = (documentId) => calcPlUrl(`/cards/credit#/?id=${documentId}`)

export const calcEribUrl = (link) => {
    const isEribLink = /^\/PhizIC\//.test(link)

    if (isEribLink) {
        return joinUrl(
            eribUrl,
            link
        )
    }

    return null
}

export const clearPlHost = (link) => link.replace(getConfigValue('pl.url') || window.location.origin, '')

export const getRelativePathOperationUrl = (operation, linkRedirector = false) => {

    const { form, url, isArchive, documentId } = operation

    const plMiddleUrl = configHistory[form]

    const parametersMap = { '{0}': documentId, '{1}': isArchive }

    // если в PL Middle для этой формы операции заведён параметр history.url c кастомным урлом
    if (plMiddleUrl) {
        // урл приходит вида .../link?document={0}&archive={1}',
        // заменяем {0} и {1}
        const templateRegexp = /{\d+}/g
        const plMiddleUrlWithParameters = plMiddleUrl.replace(templateRegexp, (match) => parametersMap[match])

        return {
            href: calcPlUrl(clearPlHost(plMiddleUrlWithParameters)),
            linkRedirector
        }
    }

    // если в мидле ничего нет, генерим ссылку из поля url
    if (url) {
        return {
            href: calcEribUrl(url) || calcPlUrl(url),
            linkRedirector: true
        }
    }

    return {}
}

export { joinUrl }

export const insuranceConsentLink = ConnectedLink.createUrl('link.welfare.insurance.dashboard.consent')
export const insuranceDashboardUrl = ConnectedLink.createUrl('welfare.insurance.dashboard')
