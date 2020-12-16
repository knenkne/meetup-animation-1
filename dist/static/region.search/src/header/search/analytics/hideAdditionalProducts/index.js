import { analytics } from '@sbol/lib.analytics'

import { hideNumbers } from '../utils'
import {
    APP,
    SEARCH_SUB_REGION
} from '..'

/**
 * Метрика, свернуть продукты
 * @param {String} query - строка запроса
 * @return {Object} - метрику
 */
export const hideAdditionalProductsMetric = (query) => {
    const metric = {
        application: APP,
        action: SEARCH_SUB_REGION,
        label: 'Выдача/Продукты/Свернуть_Клик',
        value: `${hideNumbers(query)}`
    }

    analytics.private(metric)

    return metric
}
