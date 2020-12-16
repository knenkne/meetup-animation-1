import _ from 'lodash'

import {
    historyOperationsAutoMetric,
    historyOperationsMetric
} from '../../../header/search/analytics/requests/historyOperations'
import { recordStartDateTime } from '../../../header/search/analytics/requests/utils/duration'
import * as actionTypes from '../../action-types'
import mApiClientApi from '../../../header/search/__data__/axiosMAPI'
import { unicodeToWin1251UrlEncoded } from '../../../utils'
import {
    USER_HISTORY_LOOKUP_PERIOD_IN_YEARS,
    REQUEST_OPERATION_PAGE_SIZE,
    PREFETCH_OPERATION_PAGE_SIZE,
    URL_OPERATIONS_HISTORY,
    REQUEST_HEADERS
} from '../../../header/search/constants'
import { createUrlParams } from '../utils/urlParams'

export const defaultParams = () => {
    const now = new Date()
    const fiveYearsAgo = new Date(new Date().setFullYear(now.getFullYear() - USER_HISTORY_LOOKUP_PERIOD_IN_YEARS))

    return {
        to: now.toLocaleDateString('ru-RU'),
        from: fiveYearsAgo.toLocaleDateString('ru-RU'),
        includeUfs: true,
        paginationOffset: 0,
        paginationSize: 4,
        showExternal: true
    }
}

/**
 * Метод получения истории операций пользователя.
 * @param {Object} params - параметры запроса
 * @param {Function} onStart - callback, что делать перед запросом
 * @param {Function} onComplete - callback, что делать при успешном завершении запроса
 * @param {Function} onFail - callback, что делать в случае ошибки
 * @param {Function} onFinally - callback, что делать всегда
 * @return {Promise<unknown>} - результат запроса
 */
const request = (params, onStart, onComplete, onFail, onFinally) => {
    onStart()

    return mApiClientApi.post(`${URL_OPERATIONS_HISTORY}?${createUrlParams(params)}`, {}, REQUEST_HEADERS)
        .then(onComplete)
        .catch(onFail)
        .finally(onFinally)
}

export const requestOperations = (query) => (dispatch) => {
    const params = {
        ...defaultParams(),
        paginationSize: REQUEST_OPERATION_PAGE_SIZE,
        search: unicodeToWin1251UrlEncoded(query)
    }
    const sendDuration = recordStartDateTime(historyOperationsMetric, query)

    return request(
        params,
        () => dispatch({ type: actionTypes.OPERATIONS_SEARCH_STARTED }),
        (response) => {
            const operations = _.get(response, 'data.response.operations.operation', [])

            dispatch({
                type: actionTypes.OPERATIONS_SEARCH_COMPLETE,
                operations
            })
            sendDuration(!operations.length)

            return operations
        },
        () => {
            dispatch({ type: actionTypes.OPERATIONS_SEARCH_FAILED })

            return []
        }
    )
}

export const prefetchOperations = () => (dispatch) => {
    const params = {
        ...defaultParams(),
        paginationSize: PREFETCH_OPERATION_PAGE_SIZE
    }
    const sendDuration = recordStartDateTime(historyOperationsAutoMetric)

    return request(
        params,
        () => dispatch({ type: actionTypes.OPERATIONS_PREFETCH_STARTED }),
        (response) => {
            const operations = _.get(response, 'data.response.operations.operation', [])

            dispatch({
                type: actionTypes.OPERATIONS_PREFETCH_COMPLETE,
                operations
            })
            sendDuration(!operations.length)

            return operations
        },
        (error) => {
            dispatch({ type: actionTypes.OPERATIONS_PREFETCH_FAILED })

            return []
        }
    )
}
