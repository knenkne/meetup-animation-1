import { clickProductFromPageMetric } from '../../../header/search/analytics/clickProductFromPage'
import { getProductsFromPages } from '../../selectors'

/**
 * Клик по функции.
 * @param {Object} item - объект выбранного элемента
 * @return {function(...[*]=)} - ничего не возращает
 */
export const clickProductFromPage = (item) => (dispatch, getState) => {
    const state = getState()
    const productsFromPage = getProductsFromPages(state)
    const totalCount = productsFromPage.length

    clickProductFromPageMetric(totalCount, item.position, item.title, item.id)
}
