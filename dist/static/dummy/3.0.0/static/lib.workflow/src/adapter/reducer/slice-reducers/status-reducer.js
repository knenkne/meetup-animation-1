import * as types from '../../action-types'

const initialState = {
    isInSubflow: false,
    isLoading: true,
    isFailed: false,
    isFinished: false,
    shouldRestart: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.START_REQUEST:
            return { ...state, isLoading: true, isFailed: false }
        case types.STOP_REQUEST:
            return { ...state, isLoading: false }
        case types.FAILED:
            return { ...state, isLoading: false, isFailed: true }
        case types.FINISH:
            return { ...state, isLoading: false, isFailed: false, isFinished: true }
        case types.ENTERING_SUBFLOW:
            return { ...state, isInSubflow: true }
        case types.RETURNING_FROM_SUBFLOW:
            return { ...state, isInSubflow: false }
        case types.UPDATE:
            return { ...state, isLoading: false, isFailed: false }
        case types.SHOULD_RESTART:
            return { ...state, shouldRestart: action.shouldRestart }
        default:
            return state
    }
}
