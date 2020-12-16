import { simpleSearchQuerySelector } from '../../selectors'
import { hideAdditionalProductsMetric } from '../../../header/search/analytics/hideAdditionalProducts'

/**
 * Отправить метрику клика по кнопке "Скрыть"
 * @return {undefined} - ничего не возвращает.
 */
export const hideAdditionalProducts = () => (dispatch, getState) => {
    const state = getState()
    const query = simpleSearchQuerySelector(state)

    hideAdditionalProductsMetric(query)
}
