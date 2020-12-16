import _ from 'lodash'
import { getFeatureValue } from '@sbol/lib.app'

import {
    simpleOperationsRequestCountSelector,
    simpleOperationsSearchedSelector,
    simpleOperationsPreFetchedSelector, simpleOperationsLastQuerySelector
} from 'Selectors'
import * as types from 'Data/action-types'

import { ITEMS_MAX_COUNT } from '../../../../header/search/constants'
import { getConvertedString } from '../searchString/changeLanguage'

import { filterByContent } from './filter'
import { sortOperations } from './sort'

/**
 * Метод сохраняет операции для отображения на экране
 * @param {Function} dispatch - dispatch
 * @param {Object[]} operations - операции пользователя
 * @param {Number} totalCount - всего найденных операций
 * @param {String} query - поисковый запрос
 * @return {{operations: *, type: *}} - операции пользователя
 */
export const saveOperations = (dispatch, operations, totalCount, query) => {
    const result = {
        type: types.OPERATIONS_RESULT,
        operations,
        showAll: totalCount > ITEMS_MAX_COUNT,
        totalCount,
        lastQuery: query
    }

    dispatch(result)

    return result
}

/**
 * Метод описывает действия которые нужно выполнить после выполнения дополнительного запроса,
 * если поиск начался в предзагруженных операциях пользователя.
 * @param {Function} dispatch - dispatch
 * @param {Object[]} data - ответ сервера с доп. операциями
 * @param {Object[]} operation - предзагруженные операции, удовлетворяющие фильтру
 * @param {String} query - поисковый запрос
 * @return {*} - ничего не возвращает
 */
export const preFetchedAdditionalRequest = (dispatch, data, operation, query) => {
    // Собрать идентификаторы предзагруженных опраций
    const preFetchedUIds = operation.reduce((a, c) => ({ ...a, [c.id]: true }), {})
    // Исключить из новых операций предзагруженные
    const excludePreFetched = data.filter((item) => !preFetchedUIds[item.id])
    // Фильтровать не нужно, потому что сервер получил строку по которой сам отфильтрует
    const resultData = [...operation, ...excludePreFetched]
    // Вначале брать срез, чтобы не перемешать новые операции с предзагруженными - предзагруженные не должны пропасть
    const sliced = resultData.slice(0, ITEMS_MAX_COUNT)
    const sorted = sortOperations(sliced)

    return saveOperations(dispatch, sorted, resultData.length, query)
}

/**
 * Искать в кэше, если нужно запросить операции дополнительно.
 * @param {Function} dispatch - dispatch
 * @param {String} query - строка запроса
 * @param {Object[]} operations - операции
 * @param {Function} getOperations - получить дополнительные операции
 * @return {Promise<unknown>|*} - ничего не возвращает
 */
export const searchInPreFetched = (dispatch, query, operations, getOperations) => {
    const useSearchWithConvertedQuery = getFeatureValue('useSearchWithConvertedQuery', 'region.search')

    // Фильтруем руками, потому что сервер в предзагрузке вернул всё подряд
    let filteredOperations = filterByContent(operations, query)

    if (useSearchWithConvertedQuery && useSearchWithConvertedQuery === 'true') {
        const convertedQuery = getConvertedString(query)
        if (convertedQuery) {
            const filteredByConvertedString = filterByContent(operations, convertedQuery)

            filteredOperations = _.uniqBy([...filteredOperations, ...filteredByConvertedString], (item) => item.id)
        }
    }

    /*
    Дополнительный запрос не нужно делать.
     */
    if (filteredOperations.length >= ITEMS_MAX_COUNT) {
        const sorted = sortOperations(filteredOperations)
        const sliced = sorted.slice(0, ITEMS_MAX_COUNT)

        return saveOperations(dispatch, sliced, filteredOperations.length, query)
    }

    /*
    Дополнительный запрос нужно делать.
     */
    return getOperations(query)(dispatch)
        .then((response) => preFetchedAdditionalRequest(dispatch, response, filteredOperations, query))
}

/**
 * Метод описывает действия которые нужно выполнить после выполнения дополнительного запроса,
 * если поиск начался НЕ в предзагруженных операциях пользователя, а в тех которые сами были получены дополнительным
 * запросом - когда в предзагруженных операций оказалось недостаточно или пользователь продолжает ввод в поисковой строе.
 * @param {Function} dispatch - dispatch
 * @param {Object[]} data - ответ сервера с доп. операциями
 * @param {String} query - поисковый запрос
 * @return {*} - ничего не возвращает
 */
export const searchedAdditionalRequest = (dispatch, data, query) => {
    // Фильтровать не нужно, потому что сервер получил строку по которой сам отфильтрует
    const sorted = sortOperations(data)
    const sliced = sorted.slice(0, ITEMS_MAX_COUNT)

    return saveOperations(dispatch, sliced, sorted.length, query)
}

/**
 * Искать НЕ в кэше, если нужно запросить операции дополнительно.
 * @param {Function} dispatch - dispatch
 * @param {String} query - строка запроса
 * @param {Object[]} operations - операции
 * @param {Function} getOperations - получить дополнительные операции
 * @return {Promise<unknown>|*} - ничего не возвращает
 */
export const searchInSearched = (dispatch, query, operations, getOperations) => {
    // Это НЕ предзагруженные операции, но их нужно отфильтровать руками, потому что они актуальны для прошлово запроса,
    // но теперь пользователь продолжил ввод и для текущей строки запроса операции сервер не фильтровал.
    const filteredOperations = filterByContent(operations, query)

    /*
    Дополнительный запрос не нужно делать.
     */
    if (filteredOperations.length >= ITEMS_MAX_COUNT) {
        const sorted = sortOperations(filteredOperations)
        const sliced = sorted.slice(0, ITEMS_MAX_COUNT)

        return saveOperations(dispatch, sliced, sorted.length, query)
    }

    /*
    Дополнительный запрос нужно делать.
     */
    return getOperations(query)(dispatch).then((response) => searchedAdditionalRequest(dispatch, response, query))
}

/**
 * Поиск операций пользователя.
 * @param {Function} dispatch - dispatch
 * @param {String} query - строка запроса
 * @param {Object} state - redux store (готовый объект, не функция)
 * @param {Function} getOperations - получить дополнительные операции
 * @return {Promise<unknown>|*} - ничего не возвращает
 */
export const searchOperations = (dispatch, query, state, getOperations) => {
    const requestCount = simpleOperationsRequestCountSelector(state)
    /*
    Получаем предыдущий запрос, по которому осуществлялся поиск.
    */
    const prevQuery = simpleOperationsLastQuerySelector(state)

    /*
    Если поисковый запрос пустой, сбрасываем счетчик запросов.
    Поиск не осуществляется.
    */
    if (!query) {
        dispatch({
            type: types.OPERATIONS_SEARCH_RESET
        })
        return null
    }

    /*
    Смотреть данные из кэша. Дополнительного запроса не было или он не вернул операции.
     */
    if (requestCount === 0) {
        const preFetched = simpleOperationsPreFetchedSelector(state)

        return searchInPreFetched(dispatch, query, preFetched, getOperations)
    }

    /*
    Пользователь продолжает вводить запрос. В этом случае поиск производится в результатах запроса.
     */
    if (query.length && prevQuery.length && (query.startsWith(prevQuery) || prevQuery.startsWith(query))) {
        const searched = simpleOperationsSearchedSelector(state)

        return searchInSearched(dispatch, query, searched, getOperations)
    }

    /*
    Пользователь изменил строку поиска таким образом,
    что поиск с предыдущим значением параметра search уже не имеет смысла.
    Сбрасываем счётик запросов.
     */
    dispatch({
        type: types.OPERATIONS_SEARCH_RESET
    })

    const preFetched = simpleOperationsPreFetchedSelector(state)

    /*
    Снова ищем в кэше
     */
    return searchInPreFetched(dispatch, query, preFetched, getOperations)
}

export default {
    searchOperations
}
