import { clickProductMetric } from '../../../header/search/analytics/clickProduct'
import { getFilteredProducts } from '../../selectors'

/**
 * Клик по продукту.
 * @param {Object} item - объект выбранного элемента
 * @return {function(...[*]=)} - ничего не возращает
 */
export const clickProduct = (item) => (dispatch, getState) => {
    const state = getState()
    const products = getFilteredProducts(state)
    const totalCount = products.length

    clickProductMetric(totalCount, item.position, item.title, item.id)
}
