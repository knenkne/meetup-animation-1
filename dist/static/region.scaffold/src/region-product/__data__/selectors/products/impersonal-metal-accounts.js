import _ from 'lodash'
import { createSelector } from 'reselect'

import { makeArray } from '../utils'
import { parseFakeISO } from '../../utils/parse-fake-iso'
import { formatDate } from '../../utils/format-date'
import { urlOpenNewIma, urlImaDetail } from '../../links'
import {
    AURUM_COLOR,
    ARGENTUM_COLOR,
    PALLADIUM_COLOR,
    PLATINUM_COLOR,
    ARRESTED
} from '../../../style-constants'
import { getProductMessage } from '../../utils/get-product-message'

const rootProductsSelector = (state) => state.products

const IC_36_INGOT = 'icon:products/common/ic36Ingot'

const impersonalMetalAccountsDictionary = {
    ghost: {
        icon: IC_36_INGOT,
        name: '',
        colorScheme: AURUM_COLOR
    },
    arg: {
        icon: IC_36_INGOT,
        name: 'ima.name.arg',
        colorScheme: ARGENTUM_COLOR
    },
    aur: {
        icon: IC_36_INGOT,
        name: 'ima.name.aur',
        colorScheme: AURUM_COLOR
    },
    ptr: {
        icon: IC_36_INGOT,
        name: 'ima.name.ptr',
        colorScheme: PLATINUM_COLOR
    },
    pdr: {
        icon: IC_36_INGOT,
        name: 'ima.name.pdr',
        colorScheme: PALLADIUM_COLOR
    }
}

const impersonalMetalAccountsSelector = createSelector(
    rootProductsSelector,
    (products) =>
        makeArray(
            _.get(products, 'imaccounts.ima', _.get(products, 'imaacounts.ima'))
        )
)

const getNotification = (impersonalMetalAccount) => {
    if (impersonalMetalAccount.arrested) {
        return { ...getProductMessage('accounts.arrested', 'arrested'), notification: ARRESTED }
    }

    return {}
}

const impersonalMetalAccountInfo = (impersonalMetalAccount) => ({
    currency: {
        amount: _.get(impersonalMetalAccount, ['balance', 'amount'], ''),
        currency: _.get(impersonalMetalAccount, ['balance', 'currency', 'name'], '')
    },
    balanceInNationalCurrency: {
        amount: _.get(impersonalMetalAccount, ['balanceInNationalCurrency', 'amount'], ''),
        currency: _.get(impersonalMetalAccount, ['balanceInNationalCurrency', 'currency', 'code'], '')
    },
    openDate: impersonalMetalAccount.openDate ? formatDate(parseFakeISO(impersonalMetalAccount?.openDate)) : '',
    ...getNotification(impersonalMetalAccount)
})
/**
 * map fn
 * @param {Array} impersonalMetalAccount - list accounts
 * @return {{icon: *, id: *, info: *[]}} - shape for product component
 */
const mapperForImpersonalMetalAccounts = (impersonalMetalAccount) => ({
    id: parseInt(impersonalMetalAccount.id, 10),
    name: _.get(
        impersonalMetalAccountsDictionary,
        [impersonalMetalAccount.balance?.currency.code.toLowerCase(), 'name'],
        'ima.name.default'
    ),
    icon: _.get(
        impersonalMetalAccountsDictionary,
        [impersonalMetalAccount.balance?.currency.code.toLowerCase(), 'icon'],
        impersonalMetalAccountsDictionary.ghost.icon
    ),
    colorScheme: _.get(
        impersonalMetalAccountsDictionary,
        [impersonalMetalAccount.balance?.currency.code.toLowerCase(), 'colorScheme'],
        impersonalMetalAccountsDictionary.ghost.colorScheme
    ),
    href: urlImaDetail(impersonalMetalAccount.id),
    ...impersonalMetalAccountInfo(impersonalMetalAccount)
})
export const mappedImpersonalMetalAccounts = createSelector(
    impersonalMetalAccountsSelector,
    (impersonalMetalAccount) =>
        impersonalMetalAccount.map(mapperForImpersonalMetalAccounts)
)

const ghostImpersonalMetalAccountsSelector = createSelector(
    impersonalMetalAccountsSelector,
    () => [
        {
            id: 'ghostImpersonalMetalAccountsSelector',
            name: 'ima.ghost.title',
            icon: impersonalMetalAccountsDictionary.ghost.icon,
            colorScheme: impersonalMetalAccountsDictionary.ghost.colorScheme,
            href: urlOpenNewIma,
            type: 'ghost',
            message: {
                text: 'ima.ghost.description'
            }
        }
    ]
)

export const impersonalMetalAccountsList = createSelector(
    mappedImpersonalMetalAccounts,
    ghostImpersonalMetalAccountsSelector,
    (impersonalMetalAccount, ghostImpersonalMetalAccounts) => ({
        title: 'ima',
        content:
            impersonalMetalAccount.length > 0
                ? impersonalMetalAccount
                : ghostImpersonalMetalAccounts,
        // impersonal-metal-accounts
        type: 'imaccounts',
        newProductUrl: urlOpenNewIma,
        feature: 'AccessIMATab'
    })
)
