import { clickPageMetric } from '../../../header/search/analytics/clickPage'
import { simplePagesSelector } from '../../selectors'

/**
 * Клик по функции.
 * @param {Object} item - объект выбранного элемента
 * @return {function(...[*]=)} - ничего не возращает
 */
export const clickPage = (item) => (dispatch, getState) => {
    const state = getState()
    const pages = simplePagesSelector(state)
    const totalCount = pages.length

    clickPageMetric(totalCount, item.position, item.action, item.id)
}
