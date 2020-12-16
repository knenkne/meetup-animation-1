import { createSelector } from 'reselect'
import {
    mappedCards,
    creditCardsList,
    loanCardOffer
} from '@sbol/region.scaffold/src/region-product/__data__/selectors/products/cards'
import {
    getClaimsStatus,
    loanCardClaimsMapped,
    debitCardClaimsMapped,
    virtualCardClaimsMapped
} from '@sbol/region.scaffold/src/region-product/__data__/selectors/products/cards/claims'
import {
    mappedAccounts
} from '@sbol/region.scaffold/src/region-product/__data__/selectors/products/accounts'
import {
    mappedDepo,
    depoAccountsStatus
} from '@sbol/region.scaffold/src/region-product/__data__/selectors/products/depo'
import {
    mappedImpersonalMetalAccounts
} from '@sbol/region.scaffold/src/region-product/__data__/selectors/products/impersonal-metal-accounts'
import {
    loanHeadersList,
    ufsLoanReceivedSelector,
    ufsLoanClaimsReceivedSelector,
    loanApplicationList,
    techBreakUfsSelector
} from '@sbol/region.scaffold/src/region-product/__data__/selectors/products/loans'
import {
    getAutoLoansStatus,
    autoLoanMapped
} from '@sbol/region.scaffold/src/region-product/__data__/selectors/products/loans/auto-loan'
import {
    autoLoanClaimsMapped
} from '@sbol/region.scaffold/src/region-product/__data__/selectors/products/loans/claims'
import {
    mappedTargets
} from '@sbol/region.scaffold/src/region-product/__data__/selectors/products/targets'

import {
    checkFeature,
    isStatusLoading,
    filterListByFeature
} from './utils'

export const cardsList = createSelector(
    mappedCards,
    creditCardsList,
    loanCardOffer,
    getClaimsStatus,
    loanCardClaimsMapped,
    debitCardClaimsMapped,
    virtualCardClaimsMapped,
    (
        cards,
        creditCards,
        loanOffer,
        claimsStatus,
        loanCardClaims,
        debitCardClaims,
        virtualCardClaims
    ) => {
        let content = cards

        if (checkFeature('ShowCardClaims') && !isStatusLoading(claimsStatus)) {
            content = [
                ...content,
                ...debitCardClaims,
                ...loanCardClaims,
                ...virtualCardClaims
            ]
        }

        if (checkFeature('ShowCreditCardGhost') && !creditCards.length && !loanCardClaims.length) {
            content = [...content, ...loanOffer]
        }

        return {
            type: 'cards',
            content,
            feature: 'AccessCardsTab'
        }
    }
)

export const accountList = createSelector(
    mappedAccounts,
    (accounts) => ({
        type: 'accounts',
        content: accounts,
        feature: 'AccessAccountsTab'
    })
)

export const depoList = createSelector(
    mappedDepo,
    depoAccountsStatus,
    (depo, depoAccountsStatusValue) => ({
        type: 'depo',
        content: !isStatusLoading(depoAccountsStatusValue) && depo.length === 0 ? [] : depo,
        feature: 'AccessDepoAccTab',
    })
)

export const impersonalMetalAccountsList = createSelector(
    mappedImpersonalMetalAccounts,
    (impersonalMetalAccount) => ({
        type: 'imaccounts',
        content: impersonalMetalAccount.length > 0 ? impersonalMetalAccount : [],
        feature: 'AccessIMATab'
    })
)

export const loanList = createSelector(
    loanHeadersList,
    getAutoLoansStatus,
    autoLoanClaimsMapped,
    autoLoanMapped,
    ufsLoanReceivedSelector,
    ufsLoanClaimsReceivedSelector,
    loanApplicationList,
    techBreakUfsSelector,
    (
        loans,
        autoLoansStatus,
        autoLoanClaims,
        autoLoans,
        loanReceived,
        loanClaimsReceived,
        applicationList,
        techBreak,
    ) => {
        let products = [
            ...loans
        ]

        if (checkFeature('ShowLoanClaims')) {
            products = [
                ...products,
                ...applicationList
            ]
        }

        if (checkFeature('ShowCarLoans') && !isStatusLoading(autoLoansStatus)) {
            products = [
                ...products,
                ...autoLoans,
                ...autoLoanClaims
            ]
        }

        if (loanReceived === 'techBreak' || loanClaimsReceived === 'techBreak') {
            products = [
                ...techBreak
            ]
        }

        return {
            type: 'loans',
            content: products,
            feature: 'AccessLoansTab'
        }
    }
)

export const targetList = createSelector(
    mappedTargets,
    (targets) => ({
        type: 'targets',
        content: targets,
        feature: 'AccessTargetsTab'
    })
)

export const filteredList = createSelector(
    cardsList,
    accountList,
    depoList,
    impersonalMetalAccountsList,
    loanList,
    targetList,
    (cards, accounts, depo, ima, loans, targets) =>
        [cards, accounts, depo, ima, loans, targets]
            .filter(filterListByFeature)
            .reduce((memo, item) => ({
                ...memo,
                [item.type]: item
            }), {})
)

/**
 * Селектор продуктов.
 */
export default createSelector(
    filteredList,
    (filtered) => Object.keys(filtered).length > 0 ? filtered : {}
)
