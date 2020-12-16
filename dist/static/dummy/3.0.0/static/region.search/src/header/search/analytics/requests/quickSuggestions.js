import { analytics } from '@sbol/lib.analytics'

import {
    APP,
    SEARCH_SUB_REGION
} from '..'

/**
 * Метрика для запроса примеров поиска. Собрать значение время ответа сервера и пустой ответ или нет.
 * @param {String} _ - Строка запроса.
 * @param {Number} responseTime - разница между временем завершения запроса и стартом запроса (миллисекунды).
 * @param {Boolean} responseEmpty - true если ответ пустой, иначе false.
 * @return {Object} - метрику
 */
export const quickSuggestionsMetric = (_, responseTime, responseEmpty) => {
    const metric = {
        application: APP,
        action: SEARCH_SUB_REGION,
        label: 'Поисковый запрос/DDP/Примеры поиска_Автоматически',
        value: `${responseTime}, ${responseEmpty}`
    }

    analytics.private(metric)

    return metric
}
