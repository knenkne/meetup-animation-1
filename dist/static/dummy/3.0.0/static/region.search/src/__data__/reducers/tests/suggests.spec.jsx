import { suggests } from '..'

describe('Тесты reducer-а suggests:', () => {
    const initialState = {
        isLoading: false,
        isLoadingFailed: false,
        contacts: [],
        searchedValues: [],
        searchQuerySuggestions: {},
        quick: {
            data: [],
            isLoading: false,
            isLoadingFailed: false
        }
    }
    let state = { ...initialState }

    afterEach(() => {
        state = { ...initialState }
    })

    it('несуществующий action type', () => {
        const result = suggests(state, { type: 'SOME_ACTION_TYPE' })

        expect(result).toEqual({ ...initialState })
    })

    it('SET_SEARCHED_VALUES', () => {
        const result = suggests(state, {
            type: 'SET_SEARCHED_VALUES',
            values: [1]
        })

        expect(result).toEqual({
            ...initialState,
            searchedValues: [1]
        })
    })

    it('ADD_SUGGEST_VALUE', () => {
        const result = suggests(state, {
            type: 'ADD_SUGGEST_VALUE',
            value: 1
        })

        expect(result).toEqual({
            ...initialState,
            searchedValues: [1]
        })
    })

    it('UPDATE_SEARCH_QUERY_SUGGESTIONS', () => {
        const result = suggests({ ...state, searchQuerySuggestions: { 1: 1 } }, {
            type: 'UPDATE_SEARCH_QUERY_SUGGESTIONS',
            payload: { key: 2, value: 2 }
        })

        expect(result).toEqual({
            ...initialState,
            searchQuerySuggestions: { 1: 1, 2: 2 }
        })
    })

    it('IS_LOADING_QUICK_SUGGESTIONS', () => {
        const result = suggests({ ...state }, {
            type: 'IS_LOADING_QUICK_SUGGESTIONS'
        })

        expect(result).toEqual({
            ...initialState,
            quick: {
                data: [],
                isLoading: true,
                isLoadingFailed: false
            }
        })
    })

    it('IS_LOADING_FAILED_QUICK_SUGGESTIONS', () => {
        const result = suggests({ ...state }, {
            type: 'IS_LOADING_FAILED_QUICK_SUGGESTIONS'
        })

        expect(result).toEqual({
            ...initialState,
            quick: {
                data: [],
                isLoading: false,
                isLoadingFailed: true
            }
        })
    })

    it('UPDATE_QUICK_SUGGESTIONS', () => {
        const result = suggests({ ...state }, {
            type: 'UPDATE_QUICK_SUGGESTIONS',
            payload: [1]
        })

        expect(result).toEqual({
            ...initialState,
            quick: {
                data: [1],
                isLoading: false,
                isLoadingFailed: false
            }
        })
    })
})
