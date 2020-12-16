import { analytics } from '@sbol/lib.analytics'

import { hideNumbers } from '../utils'
import {
    APP,
    SEARCH_SUB_REGION
} from '..'

/**
 * Метрика для запроса платежей (они же поставщики услуг). Собрать значение из строки поиска и время ответа сервера.
 * @param {String} query - строка запроса
 * @param {Number} responseTime - разница между временем завершения запроса и стартом запроса (миллисекунды).
 * @param {Boolean} responseEmpty - true если ответ пустой, иначе false.
 * @return {Object} - метрику
 */
export const providersMetric = (query, responseTime, responseEmpty) => {
    const metric = {
        application: APP,
        action: SEARCH_SUB_REGION,
        label: 'Поисковый запрос/ЕРИБ/Поставщики услуг_Нажатие клавиши',
        value: `${hideNumbers(query)}, ${responseTime}, ${responseEmpty}`
    }

    analytics.private(metric)

    return metric
}
