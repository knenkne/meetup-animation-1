import * as types from '../action-types'

const initialState = {
    isLoading: false,
    loadingFailed: false,
    providers: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.PROVIDERS_SEARCH_STARTED: {
            return {
                ...state,
                isLoading: true,
                loadingFailed: false
            }
        }

        case types.PROVIDERS_SEARCH_FAILED: {
            return {
                ...state,
                isLoading: false,
                loadingFailed: true,
                providers: []
            }
        }

        case types.PROVIDERS_SEARCH_COMPLETE: {
            return {
                ...state,
                isLoading: false,
                loadingFailed: false,
                providers: action.providers
            }
        }

        default:
            return state
    }
}
