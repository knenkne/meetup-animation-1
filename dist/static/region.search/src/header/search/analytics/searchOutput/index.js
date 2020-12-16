import { analytics } from '@sbol/lib.analytics'

import {
    APP,
    SEARCH_SUB_REGION
} from '..'

/**
 * Метрика, фиксирующая нажатие клиента по элементу очистки поля
 * @return {Object} - метрику
 */
export const closeSearchMetric = () => {
    const metric = {
        application: APP,
        action: SEARCH_SUB_REGION,
        label: 'Элемент очистки поля ввода поискового запроса_Клик'
    }

    analytics.private(metric)
    return metric
}

