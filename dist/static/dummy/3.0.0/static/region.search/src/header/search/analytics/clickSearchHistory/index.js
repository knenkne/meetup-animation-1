import { analytics } from '@sbol/lib.analytics'

import { hideNumbers } from '../utils'
import {
    APP,
    SEARCH_SUB_REGION
} from '..'

/**
 * Метрика для клика по элементу в истории поиска.
 * @param {String} name - наименование элемента.
 * @return {Object} - метрику
 */
export const clickSearchHistoryMetric = (name) => {
    const metric = {
        application: APP,
        action: SEARCH_SUB_REGION,
        label: 'Выдача/Элемент в истории поиска_Клик',
        value: `${hideNumbers(name)}`
    }

    analytics.private(metric)

    return metric
}
