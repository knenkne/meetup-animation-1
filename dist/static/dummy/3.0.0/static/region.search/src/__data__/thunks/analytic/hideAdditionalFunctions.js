import { simpleSearchQuerySelector } from '../../selectors'
import { hideAdditionalFunctionsMetric } from '../../../header/search/analytics/hideAdditionalFunctions'

/**
 * Отправить метрику клика по кнопке "Скрыть"
 * @return {undefined} - ничего не возвращает.
 */
export const hideAdditionalFunctions = () => (dispatch, getState) => {
    const state = getState()
    const query = simpleSearchQuerySelector(state)

    hideAdditionalFunctionsMetric(query)
}
