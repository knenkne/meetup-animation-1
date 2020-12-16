import { repeatOperationMetric } from '../../../header/search/analytics/repeatOperation'
import { simpleOperationsTotalCountSelector } from '../../selectors'

/**
 * Повтор операции из истории операций.
 * @param {Object} item - объект выбранной операции
 * @return {function(...[*]=)} - ничего не возращает
 */
export const repeatOperation = (item) => (dispatch, getState) => {
    const state = getState()
    const totalCount = simpleOperationsTotalCountSelector(state)

    repeatOperationMetric(totalCount, item.position, item.description, item.id)
}
