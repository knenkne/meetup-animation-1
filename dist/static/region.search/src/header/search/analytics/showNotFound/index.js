import { analytics } from '@sbol/lib.analytics'

import { hideNumbers } from '../utils'
import {
    APP,
    SEARCH_SUB_REGION
} from '..'

/**
 * Метрика, фиксирующая отображение экрана "Ничего не найдено"
 * @param {String} query - строка запроса
 * @return {Object} - метрику
 */
export const showNotFoundMetric = (query) => {
    const metric = {
        application: APP,
        action: SEARCH_SUB_REGION,
        label: 'Выдача/Ничего не найдено_Отображение',
        value: `${hideNumbers(query)}`
    }

    analytics.private(metric)

    return metric
}
