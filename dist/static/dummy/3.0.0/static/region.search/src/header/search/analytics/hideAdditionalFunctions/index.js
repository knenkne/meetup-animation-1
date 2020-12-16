import { analytics } from '@sbol/lib.analytics'

import { hideNumbers } from '../utils'
import {
    APP,
    SEARCH_SUB_REGION
} from '..'

/**
 * Метрика, свернуть функции
 * @param {String} query - строка запроса
 * @return {Object} - метрику
 */
export const hideAdditionalFunctionsMetric = (query) => {
    const metric = {
        application: APP,
        action: SEARCH_SUB_REGION,
        label: 'Выдача/Функции приложения/Свернуть_Клик',
        value: `${hideNumbers(query)}`
    }

    analytics.private(metric)

    return metric
}
