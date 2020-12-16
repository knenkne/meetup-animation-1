import { showAllHistoryMetric } from '../../../header/search/analytics/showAll'
import {
    simpleOperationsTotalCountSelector
} from '../../selectors'

/**
 * Вызов метрики для фиксирования нажатия кнопки "Показать все", ведущей в историю операций.
 * @return {function(...[*]=)} - ничего не возращает
 */
export const showAllHistory = () => (dispatch, getState) => {
    const state = getState()
    const totalCount = simpleOperationsTotalCountSelector(state)

    showAllHistoryMetric(totalCount)
}
