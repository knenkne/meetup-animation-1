import {
    SEARCH_HISTORY_SUGGESTS_COUNT,
    DISPLAY_SUGGESTS_COUNT,
    HASH_PHONE_NUMBER,
    EXAMPLE_KEY,
    HISTORY_KEY
} from '../../header/search/constants'

export const getSuggests = (quickSuggests) => {
    const filteredQuickSuggests = quickSuggests
        .filter((item) => item.type !== HASH_PHONE_NUMBER)
        .map((item) => ({ value: item.text, typeOfSuggest: EXAMPLE_KEY }))

    return filteredQuickSuggests.slice(0, DISPLAY_SUGGESTS_COUNT)
}

export const getHistory = (history) => {
    const uniqueValues = new Set()
    const filteredHistory = history.filter((item) => {
        if (uniqueValues.has(item.suggest)) {
            return false
        }

        uniqueValues.add(item.suggest)
        return true
    })

    return filteredHistory
        .slice(0, SEARCH_HISTORY_SUGGESTS_COUNT)
        .map(({ suggest, date }) => ({ value: suggest, typeOfSuggest: HISTORY_KEY, date }))
}

/**
 * Вычислить значение которым нужно дополнить ввод.
 * @param {String} query - строка, введённая в поле запроса
 * @param {Array} searchedValues - массив строк (история запросов)
 * @param {Object} suggestions - suggests (из assets/merchantsData.json)
 * @return {String} найденная строка
 */
export const getAutocomplete = (query, searchedValues, suggestions) => {
    if (query) {
        const suggests = suggestions[query] ? suggestions[query].suggestions.map((item) => item.e.suggest) : []
        const history = searchedValues.map(({ suggest }) => suggest).filter((suggest) => suggest && typeof suggest === 'string')

        return [...history, ...suggests].find((item) => item.startsWith(query))
    }

    return ''
}
