import { analytics } from '@sbol/lib.analytics'

import { hideNumbers } from '../utils'
import {
    APP,
    SEARCH_SUB_REGION
} from '..'

/**
 * Метрика для клика по элементу в примерах поиска.
 * @param {String} name - наименование элемента.
 * @return {Object} - метрику
 */
export const clickSearchExamplesMetric = (name) => {
    const metric = {
        application: APP,
        action: SEARCH_SUB_REGION,
        label: 'Выдача/Элемент в примерах поиска_Клик',
        value: `${hideNumbers(name)}`
    }

    analytics.private(metric)

    return metric
}
