import {
    simpleSearchQuerySelector,
} from '../../selectors'
import { showNotFoundMetric } from '../../../header/search/analytics/showNotFound'

/**
 * Вызов метрики, фиксирующей отображение экрана "Ничего не найдено"
 * @return {function(...[*]=)} - ничего не возращает
 */
export const showNotFound = () => (dispatch, getState) => {
    const state = getState()
    const query = simpleSearchQuerySelector(state)
    showNotFoundMetric(query)
}
