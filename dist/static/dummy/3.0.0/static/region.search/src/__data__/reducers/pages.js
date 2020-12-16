import * as types from '../action-types'

const initialState = {
    isLoading: false,
    isLoaded: false,
    loadingFailed: false,
    pages: [],
    productsToShow: {},
    pagesUnAvailable: {},
    serverData: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.PAGES_SEARCH_STARTED: {
            return {
                ...state,
                isLoading: true,
                isLoaded: false,
                loadingFailed: false
            }
        }

        case types.PAGES_SEARCH_FAILED: {
            return {
                ...state,
                isLoading: false,
                isLoaded: false,
                loadingFailed: true
            }
        }

        case types.PAGES_SEARCH_COMPLETE: {
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                loadingFailed: false,
                pages: action.pages,
                serverData: action.serverData
            }
        }

        case types.SET_PRODUCTS_TO_SHOW: {
            return {
                ...state,
                productsToShow: action.item
            }
        }

        case types.CLEAR_PRODUCTS_TO_SHOW: {
            return {
                ...state,
                productsToShow: {}
            }
        }

        case types.PAGES_AVAILABILITY: {
            return {
                ...state,
                pagesUnAvailable: {
                    ...state.pagesUnAvailable,
                    ...action.payload
                }
            }
        }

        default:
            return state
    }
}
