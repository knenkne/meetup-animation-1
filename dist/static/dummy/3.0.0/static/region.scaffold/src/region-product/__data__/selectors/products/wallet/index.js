import _ from 'lodash'
import { createSelector } from 'reselect'

import { makeArray } from '../../utils'

import { CTACCOUNT } from './dictionaries'

const rootProductsSelector = (state) => state.products

export const ctaccountsSelector = createSelector(rootProductsSelector, (products) => {
    const ctaccounts = _.get(products, 'ctaccounts.ctaccount', [])
    // Хочется как-то отличать ctaccounts от cards по их полям.
    // Пока что единственное более-менее стабильное различие между ними - наличие/отсутствие поля balance, но на него завязываться страшно.
    // Уж лучше так:
    return makeArray(ctaccounts.map((cta) => ({
        ...cta,
        type: CTACCOUNT
    })))
})

