import * as types from '../action-types'

const initialState = {
    searched: {
        isLoading: false,
        loadingFailed: false,
        operations: [],
        requestCount: 0
    },
    preFetched: {
        isLoading: false,
        loadingFailed: false,
        operations: []
    },
    result: {
        lastQuery: '',
        operations: [],
        showAll: false,
        totalCount: 0
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.OPERATIONS_SEARCH_STARTED: {
            return {
                ...state,
                searched: {
                    operations: [...state.searched.operations],
                    isLoading: true,
                    loadingFailed: false,
                    requestCount: state.searched.requestCount + 1
                }

            }
        }

        case types.OPERATIONS_SEARCH_FAILED: {
            return {
                ...state,
                searched: {
                    operations: [],
                    isLoading: false,
                    loadingFailed: true,
                    requestCount: state.searched.requestCount
                }
            }
        }

        case types.OPERATIONS_SEARCH_COMPLETE: {
            return {
                ...state,
                searched: {
                    operations: action.operations,
                    isLoading: false,
                    loadingFailed: false,
                    requestCount: state.searched.requestCount
                }
            }
        }

        case types.OPERATIONS_RESULT: {
            return {
                ...state,
                result: {
                    lastQuery: action.lastQuery,
                    operations: action.operations,
                    showAll: action.showAll,
                    totalCount: action.totalCount
                }
            }
        }

        case types.OPERATIONS_SEARCH_RESET: {
            return {
                ...state,
                searched: {
                    operations: [],
                    isLoading: false,
                    loadingFailed: false,
                    requestCount: 0
                },
                result: {
                    lastQuery: '',
                    operations: [],
                    showAll: false,
                    totalCount: 0
                }
            }
        }

        case types.OPERATIONS_PREFETCH_STARTED: {
            return {
                ...state,
                preFetched: {
                    operations: [...state.preFetched.operations],
                    isLoading: true,
                    loadingFailed: false
                }
            }
        }

        case types.OPERATIONS_PREFETCH_FAILED: {
            return {
                ...state,
                preFetched: {
                    operations: [],
                    isLoading: false,
                    loadingFailed: true
                }
            }
        }

        case types.OPERATIONS_PREFETCH_COMPLETE: {
            return {
                ...state,
                preFetched: {
                    operations: action.operations,
                    isLoading: false,
                    loadingFailed: false
                }
            }
        }

        default:
            return state
    }
}
