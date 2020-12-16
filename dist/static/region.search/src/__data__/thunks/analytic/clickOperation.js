import { clickOperationMetric } from '../../../header/search/analytics/clickOperation'
import { simpleOperationsTotalCountSelector } from '../../selectors'

/**
 * Клик по операции из истории операций.
 * @param {Object} item - объект выбранного элемента
 * @return {function(...[*]=)} - ничего не возращает
 */
export const clickOperation = (item) => (dispatch, getState) => {
    const state = getState()
    const totalCount = simpleOperationsTotalCountSelector(state)

    clickOperationMetric(totalCount, item.position, item.description, item.id)
}
