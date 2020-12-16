import * as types from '../../action-types'

const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE:
        case types.UPDATE_MESSAGES:
            return action.messages || []
        case types.START_REQUEST:
            return initialState
        default:
            return state
    }
}
