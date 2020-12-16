import * as types from '../../action-types'

const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_HISTORY:
            return action.history
        case types.UPDATE:
            return action.history
        default:
            return state
    }
}
