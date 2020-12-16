import { analytics } from '@sbol/lib.analytics'

import { hideNumbers } from '../utils'
import {
    APP,
    SEARCH_SUB_REGION
} from '..'

/**
 * Метрика, фиксирующая текст запроса и подсказки при нажатии стрелки вправо
 * @param {String} query - строка запроса
 * @param {String} suggest - текст подсказки
 * @return {Object} - метрику
 */
export const suggestArrowRightMetric = (query, suggest) => {
    const metric = {
        application: APP,
        action: SEARCH_SUB_REGION,
        label: 'Подсказка_Нажатие стрелки вправо',
        value: `${hideNumbers(query)}, ${hideNumbers(suggest)}`
    }

    analytics.private(metric)

    return metric
}
