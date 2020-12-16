import * as types from '../action-types'

export default (state = {}, action) => {
    switch (action.type) {
        case types.THEME_FETCH: {
            return action.payload
        }
        case types.THEME_ERROR: {
            return null
        }
        default:
            return state
    }
}
