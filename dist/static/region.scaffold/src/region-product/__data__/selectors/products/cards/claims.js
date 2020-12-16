import _ from 'lodash'
import { createSelector } from 'reselect'
import { getOption } from '@sbol/lib.app'

import { isClaimDraft } from '../../../../personal-menu/utils/helpers'
import { makeArray } from '../../utils'
import { getRelativePathOperationUrl, ufsCreditCardsClaimUrl } from '../../../links'
import { getProductMessage } from '../../../utils/get-product-message'
import { isDateInterval } from '../../../utils/is-date-interval'
import { parseFakeISO } from '../../../utils/parse-fake-iso'

import {
    CREDIT_CARD_CLAIM,
    DEBIT_CARD_CLAIM,
    VIRTUAL_CARD_CLAIM,
    loanCardClaimsFinished,
    loanCardClaimsStatuses,
    cardClaimsFinished,
    debitCardClaimsStatuses,
    virtualCardClaimsStatuses,
    cardClaimTitle,
    iconDictionary,
} from './dictionaries'

// Платформенная настройка, 7 дней
const DEFAULT_DAYS_RANGE = 7
const Depth1 = getOption('Depth1', 'region.scaffold') || DEFAULT_DAYS_RANGE

const rootProductsSelector = (state) => state.products

const claimsSelector = createSelector(
    rootProductsSelector,
    (products) => makeArray(_.get(products, 'claims.claimList'))
)

export const getClaimsStatus = createSelector(
    rootProductsSelector,
    (products) => _.get(products, 'claims.status')
)

// для каждого продукта выполняется дополнительная фильтрация -
// завершённые заявки ограничиваются диапазоном createdDate [текущая дата-Depth1, текущая дата]
// не отображаем черновики и успешные завершенные заявки
export const loanCardsClaims = createSelector(
    claimsSelector,
    (claims) => claims
        .filter((claim) =>
            claim.form === CREDIT_CARD_CLAIM
        )
        .filter((claim) =>
            !loanCardClaimsFinished.includes(claim.state) || isDateInterval(parseFakeISO(claim.date), Depth1)
        )
        .filter((claim) =>
            claim.state !== 'ISSUED' && claim.state !== 'INITIAL'
        )
)

export const debitCardsClaims = createSelector(
    claimsSelector,
    (claims) => claims
        .filter((claim) =>
            claim.form === DEBIT_CARD_CLAIM
        )
        .filter((claim) =>
            !cardClaimsFinished.includes(claim.state) || isDateInterval(parseFakeISO(claim.date), Depth1)
        )
        .filter((claim) =>
            claim.state !== 'EXECUTED' && claim.state !== 'INITIAL'
        )
)

export const virtualCardsClaims = createSelector(
    claimsSelector,
    (claims) => claims
        .filter((claim) =>
            claim.form === VIRTUAL_CARD_CLAIM
        )
        .filter((claim) =>
            !cardClaimsFinished.includes(claim.state) || isDateInterval(parseFakeISO(claim.date), Depth1)
        )
        .filter((claim) =>
            claim.state !== 'EXECUTED' && claim.state !== 'INITIAL'
        )
)

export const loanCardClaimsInfo = ({ state }) => {
    const {
        message = '',
        status = ''
    } = loanCardClaimsStatuses[state] || {}
    return {
        ...getProductMessage(message),
        notification: status
    }
}

export const debitCardClaimsInfo = ({ state }) => {
    const {
        message = '',
        status = ''
    } = debitCardClaimsStatuses[state] || {}
    return {
        ...getProductMessage(message),
        notification: status
    }
}

export const virtualCardClaimsInfo = ({ state }) => {
    const {
        message = '',
        status = ''
    } = virtualCardClaimsStatuses[state] || {}
    return {
        ...getProductMessage(message),
        notification: status
    }
}

const getClaimInfo = (claim) => ({
    id: claim.ufsId,
    name: cardClaimTitle(claim),
    icon: iconDictionary.ghost,
    iconStyle: isClaimDraft(claim.state) ? 'draft-icon' : ''
})

export const loanCardClaimsMapped = createSelector(
    loanCardsClaims,
    (claims) => claims.map((claim) => ({
        ...getClaimInfo(claim),
        ...loanCardClaimsInfo(claim),
        href: ufsCreditCardsClaimUrl(claim.ufsId)
    }))
)

export const debitCardClaimsMapped = createSelector(
    debitCardsClaims,
    (claims) => claims.map((claim) => ({
        ...getClaimInfo(claim),
        ...debitCardClaimsInfo(claim),
        ...getRelativePathOperationUrl({ ...claim, documentId: claim.ufsId, form: DEBIT_CARD_CLAIM, isArchive: false }),
    }))
)

export const virtualCardClaimsMapped = createSelector(
    virtualCardsClaims,
    (claims) => claims.map((claim) => ({
        ...getClaimInfo(claim),
        ...virtualCardClaimsInfo(claim),
        ...getRelativePathOperationUrl({ ...claim, documentId: claim.ufsId, form: VIRTUAL_CARD_CLAIM, isArchive: false }),
    }))
)
