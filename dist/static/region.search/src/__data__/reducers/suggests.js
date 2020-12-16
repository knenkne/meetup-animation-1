import * as types from '../action-types'

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

export default (state = initialState, action) => {

    switch (action.type) {
        case types.SET_SEARCHED_VALUES: {
            return {
                ...state,
                searchedValues: action.values
            }
        }

        case types.ADD_SUGGEST_VALUE: {
            return {
                ...state,
                searchedValues: [action.value, ...state.searchedValues]
            }
        }

        case types.UPDATE_SEARCH_QUERY_SUGGESTIONS: {
            const { key, value } = action.payload
            return {
                ...state,
                searchQuerySuggestions: { ...state.searchQuerySuggestions, [key]: value }
            }
        }

        case types.IS_LOADING_QUICK_SUGGESTIONS: {
            return {
                ...state,
                quick: {
                    data: [...state.quick.data],
                    isLoading: true,
                    isLoadingFailed: false
                }
            }
        }

        case types.IS_LOADING_FAILED_QUICK_SUGGESTIONS: {
            return {
                ...state,
                quick: {
                    data: [...state.quick.data],
                    isLoading: false,
                    isLoadingFailed: true
                }
            }
        }

        case types.UPDATE_QUICK_SUGGESTIONS: {
            return {
                ...state,
                quick: {
                    data: action.payload,
                    isLoading: state.quick.isLoading,
                    isLoadingFailed: state.quick.isLoadingFailed
                }
            }
        }

        default:
            return state

    }
}
