import { analytics } from '@sbol/lib.analytics'

import { hideNumbers } from '../utils'
import {
    APP,
    SEARCH_SUB_REGION
} from '..'

/**
 * Метрика, фиксирующая текст запроса и количество скрытых функций, при нажатии на "Показать ещё N функций"
 * @param {String} query - строка запроса
 * @param {Number} hiddenFunctions - скрытые функции, их количество
 * @return {Object} - метрику
 */
export const showAdditionalFunctionsMetric = (query, hiddenFunctions) => {
    const metric = {
        application: APP,
        action: SEARCH_SUB_REGION,
        label: 'Выдача/Функции приложения/Показать ещё_Клик',
        value: `${hideNumbers(query)}, ${hiddenFunctions}`
    }

    analytics.private(metric)

    return metric
}
