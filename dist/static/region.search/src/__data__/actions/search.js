import * as types from '../action-types'

export const searchQueryChange = (query) => ({
    type: types.SEARCH_QUERY_CHANGE,
    query
})

export const clearSearchQuery = () => ({
    type: types.CLEAR_SEARCH_QUERY
})
