import {
    autocompleteSelector,
    simpleSearchQuerySelector,
} from '../../selectors'
import { suggestArrowRightMetric } from '../../../header/search/analytics/suggestArrowRight'

/**
 * Вызов метрики для фиксирования текста запроса и подсказки при нажатии стрелки вправо
 * @return {function(...[*]=)} - ничего не возращает
 */
export const suggestArrowRight = () => (dispatch, getState) => {
    const state = getState()
    const query = simpleSearchQuerySelector(state)
    const suggest = autocompleteSelector(state)
    suggestArrowRightMetric(query, suggest)
}
