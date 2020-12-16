import { simpleSearchQuerySelector } from '../../selectors'
import { showAdditionalFunctionsMetric } from '../../../header/search/analytics/showAdditionalFunctions'

/**
 * Отправить метрику клика по кнопке "Показать ещё N функций"
 * @param {Number} hiddenFunctions - количество скрытых функций
 * @return {undefined} - ничего не возвращает.
 */
export const showAdditionalFunctions = (hiddenFunctions) => (dispatch, getState) => {
    const state = getState()
    const query = simpleSearchQuerySelector(state)

    showAdditionalFunctionsMetric(query, hiddenFunctions)
}
