import {
    addSuggestValue,
    setSearchedValues,
    updateSearchQuerySuggestions,
    updateQuickSuggestions,
    isLoadingQuickSuggestions,
    isLoadingFailedQuickSuggestions
} from '../suggests'

describe('Тесты для actionCreators:', () => {
    it('updateSearchQuerySuggestions', () => {
        const payload = { key: 'a', value: 'b' }
        const result = updateSearchQuerySuggestions(payload)

        expect(result).toEqual({ payload, type: 'UPDATE_SEARCH_QUERY_SUGGESTIONS' })
    })

    it('addSuggestValue', () => {
        const payload = 'anything'
        const result = addSuggestValue(payload)

        expect(result).toEqual({ value: payload, type: 'ADD_SUGGEST_VALUE' })
    })

    it('setSearchedValues', () => {
        const payload = 'anything'
        const result = setSearchedValues(payload)

        expect(result).toEqual({ values: payload, type: 'SET_SEARCHED_VALUES' })
    })

    it('updateQuickSuggestions', () => {
        const payload = [1]
        const result = updateQuickSuggestions(payload)

        expect(result).toEqual({ payload, type: 'UPDATE_QUICK_SUGGESTIONS' })
    })

    it('isLoadingQuickSuggestions', () => {
        const result = isLoadingQuickSuggestions()

        expect(result).toEqual({ type: 'IS_LOADING_QUICK_SUGGESTIONS' })
    })

    it('isLoadingFailedQuickSuggestions', () => {
        const result = isLoadingFailedQuickSuggestions()

        expect(result).toEqual({ type: 'IS_LOADING_FAILED_QUICK_SUGGESTIONS' })
    })
})
