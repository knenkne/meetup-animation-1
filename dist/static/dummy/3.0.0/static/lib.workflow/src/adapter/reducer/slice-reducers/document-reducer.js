import * as types from '../../action-types'

const initialState = {}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE:
            return action.document
        default:
            return state
    }
}
