import * as types from '../../action-types'

const initialState = {}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FAILED:
            return { ...action.error }
        case types.START_REQUEST:
            return initialState
        default:
            return state
    }
}
