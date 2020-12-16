import _ from 'lodash'
import { createSelector } from 'reselect'

import { makeArray } from '../../utils'
import { parseFakeISO } from '../../../utils/parse-fake-iso'
import { formatDate } from '../../../utils/format-date'
import { convertStringToDecimalNumber } from '../../../utils/convert-string-to-decimal-number'
import { urlOpenNewAccount, accountsDetailsUrl } from '../../../links'
import { ACCOUNTS_COLOR } from '../../../../style-constants'

import { getNotification } from './utils'

const rootProductsSelector = (state) => state.products

const accountsData = createSelector(
    rootProductsSelector,
    (products) => makeArray(_.get(products, 'accounts.account'))
)
/**
 *  make array from single object
 */
const accountsSelector = createSelector(
    accountsData,
    makeArray
)

const mapperForAccounts = (account) => {
    const { closeDate = '' } = account
    const formattedDate = formatDate(parseFakeISO(closeDate))
    return {
        id: parseInt(account.id, 10),
        name: account.name,
        icon: 'icon:products/common/ic36Safe',
        colorScheme: ACCOUNTS_COLOR,
        href: accountsDetailsUrl(account.id),
        rate: convertStringToDecimalNumber(account.rate),
        currency: {
            amount: _.get(account, 'balance.amount', ''),
            currency: _.get(account, 'balance.currency.code', '')
        },
        closeDate: formattedDate,
        ...getNotification(account)
    }
}

export const mappedAccounts = createSelector(
    accountsSelector,
    (accounts) => accounts.map(mapperForAccounts)
)

export const ghostAccountSelector = createSelector(
    accountsSelector,
    () => [
        {
            id: 'ghostAccount',
            name: 'region.scaffold:accounts.ghost.title',
            icon: 'icon:products/common/ic36Safe',
            colorScheme: ACCOUNTS_COLOR,
            href: urlOpenNewAccount,
            type: 'ghost',
            message: {
                text: 'region.scaffold:accounts.ghost.description',
                style: 'additional'
            }
        }
    ]
)

export const accountList = createSelector(
    mappedAccounts,
    ghostAccountSelector,
    (accounts, ghostAccount) => ({
        title: 'region.scaffold:accounts',
        content: accounts.length ? accounts : ghostAccount,
        type: 'accounts',
        newProductUrl: urlOpenNewAccount,
        feature: 'AccessAccountsTab'
    })
)
