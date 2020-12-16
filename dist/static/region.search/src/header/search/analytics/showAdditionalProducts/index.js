import { analytics } from '@sbol/lib.analytics'

import { hideNumbers } from '../utils'
import {
    APP,
    SEARCH_SUB_REGION
} from '..'

/**
 * Метрика, фиксирующая текст запроса и количество скрытых продуктов, при нажатии на "Показать ещё N продуктов"
 * @param {String} query - строка запроса
 * @param {Number} hiddenProducts - скрытые функции, их количество
 * @return {Object} - метрику
 */
export const showAdditionalProductsMetric = (query, hiddenProducts) => {
    const metric = {
        application: APP,
        action: SEARCH_SUB_REGION,
        label: 'Выдача/Продукты/Показать ещё_Клик',
        value: `${hideNumbers(query)}, ${hiddenProducts}`
    }

    analytics.private(metric)

    return metric
}
