import { createSelector } from 'reselect'
import { get } from 'lodash'

import { getProduct, isVisible } from './utils'

const rootProductsSelector = (state) => state.products

export const creditabilitySelector = createSelector(
    rootProductsSelector,
    (products) => {
        const current = get(products, 'creditability.current', {})
        const { status } = current
        if (status && isVisible(status)) {
            return [getProduct(current)]
        }
        return []
    }
)
