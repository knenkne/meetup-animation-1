import _ from 'lodash'
import { createSelector } from 'reselect'

import { makeArray } from '../../utils'
import { urlCarDetail } from '../../../links'
import { LOANS_COLOR } from '../../../../style-constants'

import { loanIconDictionary } from './dictionaries'

const rootProductsSelector = (state) => state.products

export const autoLoanSelector = createSelector(
    rootProductsSelector,
    (products) => makeArray(_.get(products, 'autoLoans.loansList.contracts'))
)

export const getAutoLoansStatus = createSelector(
    rootProductsSelector,
    (products) => _.get(products, 'autoLoans.status')
)

export const autoLoanMapped = createSelector(
    autoLoanSelector,
    (loans) => loans.map((loan) => {
        let nextPayAmount
        if (loan?.details?.paymentSum) {
            nextPayAmount = {
                amount: loan?.details?.paymentSum,
                currency: 'RUB'
            }
        }
        return {
            id: loan.documentId,
            name: loan.productName,
            icon: loanIconDictionary.auto.icon,
            colorScheme: LOANS_COLOR,
            currency: {
                amount: loan?.details?.remainsToPay,
                currency: 'RUB'
            },
            nextPayAmount,
            href: urlCarDetail(loan.documentId)
        }
    })
)
