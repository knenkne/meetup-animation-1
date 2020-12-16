import * as types from '../../action-types'

export const setSearchedValues = (values) => ({
    type: types.SET_SEARCHED_VALUES,
    values
})

export const addSuggestValue = (value) => ({
    type: types.ADD_SUGGEST_VALUE,
    value
})

/**
 * Обновить вычесленные результаты поиска в файле assets/merchantsData.json
 * @param {String} key - поисковая строка
 * @param {Object} value - найденные для неё suggests
 * @return {{payload: {value: Object, key: String}, type: String}} - action
 */
export const updateSearchQuerySuggestions = ({ key, value }) => ({
    type: types.UPDATE_SEARCH_QUERY_SUGGESTIONS,
    payload: { key, value }
})

/**
 * Начать загрузку подсказок (строка поиска пустая, левый столбец в поисковой выдачи
 * @return {{type: String}} - action
 */
export const isLoadingQuickSuggestions = () => ({
    type: types.IS_LOADING_QUICK_SUGGESTIONS
})

/**
 * Загрузка подсказок завершилась с ошибкой (строка поиска пустая, левый столбец в поисковой выдачи
 * @return {{type: String}} - action
 */
export const isLoadingFailedQuickSuggestions = () => ({
    type: types.IS_LOADING_FAILED_QUICK_SUGGESTIONS
})

/**
 * Обновить подсказки (строка поиска пустая, левый столбец в поисковой выдачи
 * @param {String[]} payload - массив подсказок.
 * @return {{payload: String[], type: String}} - action
 */
export const updateQuickSuggestions = (payload) => ({
    type: types.UPDATE_QUICK_SUGGESTIONS,
    payload
})
