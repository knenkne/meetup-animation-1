import * as types from '../action-types'

const initialState = {
    query: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH_QUERY_CHANGE: {
            return {
                query: action.query
            }
        }

        case types.CLEAR_SEARCH_QUERY: {
            return {
                query: ''
            }
        }

        default:
            return state
    }
}
