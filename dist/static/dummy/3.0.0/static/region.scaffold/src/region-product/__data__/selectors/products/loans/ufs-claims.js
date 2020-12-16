import _ from 'lodash'
import { createSelector } from 'reselect'

import { isClaimDraft } from '../../../../personal-menu/utils/helpers'
import { makeArray } from '../../utils'
import { getRelativePathOperationUrl } from '../../../links'
import { GHOST_COLOR, LOANS_COLOR } from '../../../../style-constants'

import {
    CAR_UFS,
    CONSUMER_SITE_UFS,
    CONSUMER_UFS,
    CREDIT_CARD_UFS,
    IPOS_UFS,
    MORTGAGE_UFS,
    REFINANCE_UFS,
    EDUCATION_UFS,
    PERSON_ORDER_UFS,
    ufsCarLoansClaimsFinished,
    ufsiPosFinished,
    ufsLoansClaimsFinished,
    ufsMortgageFinished,
    loanUfsClaimsStatuses,
    iPosClaimsStatuses,
    autoLoanClaimsStatuses,
    mortgageClaimsStatuses,
    educationClaimsStatuses,
    loanClaimTitle,
    loanIcon
} from './dictionaries'
import { ufsClaimsInfo } from './utils'

const rootProductsSelector = (state) => state.products

const ufsClaimsSelector = createSelector(
    rootProductsSelector,
    (products) => makeArray(_.get(products, 'loans.ufsClaimList'))
)

const offerSelector = createSelector(
    rootProductsSelector,
    (products) => makeArray(_.get(products, 'loans.paymentOrders'))
)

const ufsLoanClaimsSelector = createSelector(
    ufsClaimsSelector,
    (claims) => claims
        .filter((claim) =>
            claim.form !== CREDIT_CARD_UFS)
)

export const ufsRefinanceClaimsSelector = createSelector(
    ufsLoanClaimsSelector,
    (claims) =>
        claims
            .filter((claim) =>
                claim.form === REFINANCE_UFS
            )
            .filter((claim) =>
                !ufsLoansClaimsFinished.includes(claim.status)
            )
            .map((claim) => ({
                ...claim,
                ...getRelativePathOperationUrl({ ...claim, documentId: claim.draftId, form: 'UfsRefinancingClaim', isArchive: false }),
                ...ufsClaimsInfo(claim, loanUfsClaimsStatuses)
            }))
)

export const ufsConsumerClaimsSelector = createSelector(
    ufsLoanClaimsSelector,
    (claims) =>
        claims
            .filter((claim) =>
                claim.form === CONSUMER_UFS || claim.form === CONSUMER_SITE_UFS
            )
            .filter((claim) =>
                !ufsLoansClaimsFinished.includes(claim.status)
            )
            .map((claim) => ({
                ...claim,
                ...getRelativePathOperationUrl({ ...claim, documentId: claim.draftId, form: 'UfsLoanClaim', isArchive: false }),
                ...ufsClaimsInfo(claim, loanUfsClaimsStatuses)
            }))
)

export const ufsCarClaimsSelector = createSelector(
    ufsLoanClaimsSelector,
    (claims) => claims
        .filter((claim) =>
            claim.form === CAR_UFS)
        .filter((claim) =>
            !ufsCarLoansClaimsFinished.includes(claim.status)
        )
        .map((claim) => ({
            ...claim,
            ...getRelativePathOperationUrl({ ...claim, documentId: claim.draftId, form: 'UfsCarLoan', isArchive: false }),
            ...ufsClaimsInfo(claim, autoLoanClaimsStatuses)
        }))
)

export const ufsiPosClaimsSelector = createSelector(
    ufsLoanClaimsSelector,
    (claims) => claims
        .filter((claim) =>
            claim.form === IPOS_UFS)
        .filter((claim) =>
            !ufsiPosFinished.includes(claim.status)
        )
        .map((claim) => ({
            ...claim,
            ...getRelativePathOperationUrl({ ...claim, documentId: claim.draftId, form: 'UfsOnlinePosCreditClaim', isArchive: false }),
            ...ufsClaimsInfo(claim, iPosClaimsStatuses)
        }))
)

export const ufsMortgageClaimsSelector = createSelector(
    ufsLoanClaimsSelector,
    (claims) => claims
        .filter((claim) =>
            claim.form === MORTGAGE_UFS)
        .filter((claim) =>
            !ufsMortgageFinished.includes(claim.status)
        )
        .map((claim) => ({
            ...claim,
            ...ufsClaimsInfo(claim, mortgageClaimsStatuses)
        }))
)

export const ufsEducationClaimsSelector = createSelector(
    ufsLoanClaimsSelector,
    (claims) => claims
        .filter((claim) =>
            claim.form === EDUCATION_UFS)
        .map((claim) => ({
            ...claim,
            ...getRelativePathOperationUrl({ ...claim, documentId: claim.draftId, form: 'UfsEducationLoan', isArchive: false }),
            ...ufsClaimsInfo(claim, educationClaimsStatuses)
        }))
)

export const ufsPersonOrdersSelector = createSelector(
    offerSelector,
    (claims) => claims
        .filter((claim) => claim.orderType === PERSON_ORDER_UFS)
        .map((claim) => ({
            ...claim,
            ...getRelativePathOperationUrl({ ...claim, documentId: claim.id, form: 'UfsPersonOrder', isArchive: false })
        }))
)

export const ufsAllClaimsSelector = createSelector(
    ufsConsumerClaimsSelector,
    ufsCarClaimsSelector,
    ufsiPosClaimsSelector,
    ufsMortgageClaimsSelector,
    ufsEducationClaimsSelector,
    ufsPersonOrdersSelector,
    (
        consumerClaims,
        carClaims,
        iPosClaims,
        mortgageClaims,
        educationClaims,
        personOrder
    ) =>
        [
            ...consumerClaims,
            ...carClaims,
            ...iPosClaims,
            ...mortgageClaims,
            ...educationClaims,
            ...personOrder
        ]
)

const orderClaim = (claim) => {
    const { id, title, orderType, periodPaymentMessage, isClickable, href, colorScheme } = claim
    return {
        id,
        title,
        orderType,
        periodPaymentMessage,
        href,
        colorScheme,
        isProduct: isClickable,
        icon: loanIcon(claim),
        name: ''
    }
}

const regularClaim = (claim) => ({
    id: claim.draftId,
    name: loanClaimTitle(claim),
    icon: loanIcon(claim),
    colorScheme: claim.colorScheme,
    currency: {
        amount: _.get(claim, 'sum'),
        currency: 'RUB'
    },
    href: claim?.href,
    message: claim.message,
    notification: claim.notification
})

export const loanUfsClaimsMapped = createSelector(
    ufsAllClaimsSelector,
    (ufsClaims) => ufsClaims.map((claim) => {
        const colorScheme = isClaimDraft(claim.status) ? GHOST_COLOR : LOANS_COLOR

        return _.get(claim, 'orderType') ?
            orderClaim({ ...claim, colorScheme }) :
            regularClaim({ ...claim, colorScheme })
    })
)
