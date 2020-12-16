import { createSelector } from 'reselect'
import _ from 'lodash'

import { checkFeature } from '../../../../utils/check-feature'
import { isStatusError } from '../../../personal-menu/utils/helpers'

import { accountList } from './accounts'
import { cardsOrWalletList } from './cards'
import { loanList, loanStatus } from './loans'
import { depoList, depoAccountsStatus } from './depo'
import { targetList } from './targets'
import { insuranceList, insuranceContractsStatus } from './insurance'
import { trustManagementList, trustManagementStatus } from './trust-management'
import { getAutoLoansStatus } from './loans/auto-loan'
import { impersonalMetalAccountsList } from './impersonal-metal-accounts'
import { certificateList, certificateStatus } from './certificate'
import { brokerageList, brokerageStatus } from './brokerage'
import { investmentsList } from './investments'

export const rootProductsSelector = (state) => state.products

const unfilteredList = [
    cardsOrWalletList,
    accountList,
    loanList,
    impersonalMetalAccountsList,
    depoList,
    targetList,
    insuranceList,
    trustManagementList,
    certificateList,
    brokerageList,
    investmentsList
]

export const initialFetchStatus = createSelector(
    rootProductsSelector,
    (products) => _.get(products, 'initialFetch', false)
)

export const productsStatus = createSelector(
    rootProductsSelector,
    (products) => _.get(products, 'commonStatus')
)

const claimsStatus = createSelector(
    rootProductsSelector,
    (products) => _.get(products, 'claims.status')
)

// Продукты отображаются если нет контента, кроме сертификатов
export const filterForList = ({ content, displayIfEmpty }) => content?.length > 0 || displayIfEmpty !== false

/* Фильтруем только если указана фича, она не false, и вообще лончер существует */
export const filterListByFeature = ({ feature }) => !feature || checkFeature(feature)

export const filteredList = createSelector(
    unfilteredList,
    (cards, accounts, loans, ima, depo, targets, insurance, trustManagement, certificates, brokerage, investments) =>
        [cards, accounts, loans, ima, depo, targets, insurance, trustManagement, certificates, brokerage, investments]
            .filter(filterForList)
            .filter(filterListByFeature)
            .reduce((memo, item) => ({
                ...memo,
                [item.type]: item
            }), {})
)

export const globalStatus = createSelector(
    productsStatus,
    claimsStatus,
    (products, claims) => [products, claims].every((status) => isStatusError(status))
)

export const list = createSelector(
    filteredList,
    (filtered) => Object.keys(filtered).length > 0 ? filtered : {}
)

export {
    claimsStatus,
    loanStatus,
    depoAccountsStatus,
    getAutoLoansStatus,
    insuranceContractsStatus,
    trustManagementStatus,
    certificateStatus,
    brokerageStatus,
}
