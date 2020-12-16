import _ from 'lodash'
import { createSelector } from 'reselect'

import { makeArray } from '../../utils'
import { checkFeature } from '../../../../../utils/check-feature'
import { urlCarDetail, urlLoanDetail, urlOpenNewLoan } from '../../../links'
import { ERROR, LOADING, SUCCESS } from '../../../../personal-menu/utils/constants'
import { isFalse, isNotReceivedAll, isStatusError, isStatusLoading } from '../../../../personal-menu/utils/helpers'
import { LOANS_COLOR } from '../../../../style-constants'

import { autoLoanClaimsMapped, loanClaimsMapped } from './claims'
import { CAR_UFS, loanIcon, loanIconDictionary } from './dictionaries'
import { autoLoanMapped, getAutoLoansStatus } from './auto-loan'
import { loanUfsClaimsMapped } from './ufs-claims'
import { creditabilitySelector } from './creditability'

const LOANS_STATUS = 'loans.status'

const rootProductsSelector = (state) => state.products

const loanSelector = createSelector(
    rootProductsSelector,
    (products) => makeArray(_.get(products, 'loans.loan'))
)

const loanInfo = (loan) => {
    let nextPayAmount
    if (loan.nextPayAmount) {
        nextPayAmount = {
            amount: _.get(loan, 'nextPayAmount.amount', ''),
            currency: _.get(loan, 'nextPayAmount.currency.code', ''),
        }
    }
    return {
        currency: {
            amount: _.get(loan, 'remainAmount.amount', ''),
            currency: _.get(loan, 'remainAmount.currency.code', ''),
        },
        nextPayAmount,
        message: {},
    }
}

const ufsLoanSuccessSelector = createSelector(
    rootProductsSelector,
    (products) => _.get(products, 'loans.success')
)

const ufsLoanErrorSelector = createSelector(
    rootProductsSelector,
    (products) => _.get(products, 'loans.error')
)

export const ufsLoanReceivedSelector = createSelector(
    rootProductsSelector,
    (products) => _.get(products, 'loans.loanListReceive')
)

export const ufsLoanClaimsReceivedSelector = createSelector(
    rootProductsSelector,
    (products) => _.get(products, 'loans.applicationReceive')
)

/*
 * map fn
 * @param {Array} loan - list accounts
 * @return {{icon: *, id: *, info: *[]}} - shape for product component
 */
const mapperForLoan = (loan) => ({
    id: parseInt(loan.id, 10),
    name: loan.name,
    icon: loanIcon(loan),
    colorScheme: LOANS_COLOR,
    href: loan?.loanType === CAR_UFS ? urlCarDetail(loan?.id) : urlLoanDetail(loan.id, loan.productType),
    linkRedirector: checkFeature('AllowLoansReload'),
    ...loanInfo(loan),
})

const mappedCredit = createSelector(
    loanSelector,
    (loans) => loans.map(mapperForLoan)
)

const ghostCardSelector = createSelector(
    loanSelector,
    () => [
        {
            id: 'ghostCard',
            name: 'loan.ghost.title',
            icon: loanIconDictionary.ghost,
            colorScheme: LOANS_COLOR,
            type: 'ghost',
            href: urlOpenNewLoan,
            message: {
                text: 'loan.ghost.description',
            },
        }
    ]
)

export const techBreakUfsSelector = createSelector(
    loanSelector,
    () => [
        {
            id: 'techBreakUfsLoan',
            name: 'loan.tech.break',
            icon: loanIconDictionary.waiting,
            type: 'ghost',
            iconStyle: 'tech',
            isProduct: false,
        }
    ]
)

export const loanStatus = createSelector(
    rootProductsSelector,
    ufsLoanSuccessSelector,
    ufsLoanErrorSelector,
    ufsLoanReceivedSelector,
    ufsLoanClaimsReceivedSelector,
    (
        products,
        loanSuccess,
        loanError,
        loanReceived,
        loanClaimsReceived,
    ) => {
        if (checkFeature('NewLoanService')) {

            if (isStatusLoading(_.get(products, LOANS_STATUS))) {
                return LOADING
            }

            const falseSuccess = isFalse(loanSuccess)
            const errorBlockExists = Boolean(loanError)

            if (
                isNotReceivedAll(loanReceived) ||
                isNotReceivedAll(loanClaimsReceived) ||
                falseSuccess ||
                errorBlockExists ||
                isStatusError(_.get(products, LOANS_STATUS))
            ) {
                return ERROR
            }

            return SUCCESS
        }
        return _.get(products, LOANS_STATUS)
    }
)

export const loanHeadersList = createSelector(
    mappedCredit,
    loanStatus,
    (
        loans
    ) => {
        if (loans.length > 0) {
            return loans
        }
        return []
    }
)

export const loanApplicationList = createSelector(
    loanClaimsMapped,
    loanUfsClaimsMapped,
    (
        loanClaims,
        loanUfsClaims
    ) => {
        if (checkFeature('NewLoanService')) {
            return loanUfsClaims
        } else if (checkFeature('ShowLoanClaims')) {
            return loanClaims
        }
        return []
    }
)

export const UfsTechError = createSelector(
    ufsLoanReceivedSelector,
    ufsLoanClaimsReceivedSelector,
    techBreakUfsSelector,
    (
        loanReceived,
        loanClaimsReceived,
        techBreak
    ) => {
        if (loanReceived === 'techBreak' || loanClaimsReceived === 'techBreak') {
            return techBreak
        }
        return []
    }
)


export const loanList = createSelector(
    loanHeadersList,
    ghostCardSelector,
    loanStatus,
    getAutoLoansStatus,
    autoLoanClaimsMapped,
    autoLoanMapped,
    ufsLoanReceivedSelector,
    ufsLoanClaimsReceivedSelector,
    loanApplicationList,
    techBreakUfsSelector,
    creditabilitySelector,
    (
        loans,
        ghostCard,
        status = SUCCESS,
        autoLoansStatus,
        autoLoanClaims,
        autoLoans,
        loanReceived,
        loanClaimsReceived,
        applicationList,
        techBreak,
        creditability
    ) => {
        let products = [...loans]

        if (checkFeature('ShowLoanClaims')) {
            products.push(...applicationList)
        }

        if (checkFeature('ShowCarLoans') && !isStatusLoading(autoLoansStatus)) {
            products.push(...autoLoans, ...autoLoanClaims)
        }

        products.push(...creditability)

        if (loanReceived === 'techBreak' || loanClaimsReceived === 'techBreak') {
            products = [
                ...techBreak
            ]
        }

        if (!isStatusLoading(status) && products.length === 0) {
            products = [
                ...ghostCard
            ]
        }

        return {
            title: 'loan',
            content: products,
            type: 'loans',
            initialOpen: false,
            newProductUrl: urlOpenNewLoan,
            refetchMessage: {
                title: 'refetch.default.title',
                description: 'refetch.default.description',
            },
            feature: 'AccessLoansTab'
        }
    }
)
