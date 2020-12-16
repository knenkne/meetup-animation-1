import { analytics } from '@sbol/lib.analytics'

import {
    APP,
    SEARCH_SUB_REGION
} from '..'

/**
 * Метрика для фиксирования нажатия кнопки "Показать все", ведущей в историю операций.
 * @param {Number} count - количество элементов в блоке
 * @return {Object} - метрику
 */
export const showAllHistoryMetric = (count) => {
    const metric = {
        application: APP,
        action: SEARCH_SUB_REGION,
        label: 'Выдача/История операций/Показать все_Клик',
        value: `${count}`
    }

    analytics.private(metric)

    return metric
}

/**
 * Метрика для фиксирования нажатия кнопки "Показать все", ведущей в поставщики услуг.
 * @param {Number} count - количество элементов в блоке
 * @return {Object} - метрику
 */
export const showAllProvidersMetric = (count) => {
    const metric = {
        application: APP,
        action: SEARCH_SUB_REGION,
        label: 'Выдача/Организации/Показать все_Клик',
        value: `${count}`
    }

    analytics.private(metric)

    return metric
}
