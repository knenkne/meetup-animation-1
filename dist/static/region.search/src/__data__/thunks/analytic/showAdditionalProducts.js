import { simpleSearchQuerySelector } from '../../selectors'
import { showAdditionalProductsMetric } from '../../../header/search/analytics/showAdditionalProducts'

/**
 * Отправить метрику клика по кнопке "Показать ещё N продуктов"
 * @param {Number} hiddenProducts - количество скрытых продуктов
 * @return {undefined} - ничего не возвращает.
 */
export const showAdditionalProducts = (hiddenProducts) => (dispatch, getState) => {
    const state = getState()
    const query = simpleSearchQuerySelector(state)

    showAdditionalProductsMetric(query, hiddenProducts)
}
