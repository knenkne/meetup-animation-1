import * as types from '../../action-types'

const initialState = {
    pid: null,
    url: null,
    flow: null,
    state: null,
    name: null,
    mainProcessId: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.INIT: {
            if (!action.options.url) {
                throw new Error('Not specified URL to workflow')
            }
            if (!action.options.name) {
                throw new Error('Not specified flow name')
            }
            return {
                ...state,
                url: action.options.url,
                name: action.options.name,
                mainProcessId: action.options.mainProcessId
            }
        }
        case types.SUCCESS:
            return { ...state, pid: action.pid }
        case types.CHANGE_FLOW:
        case types.ENTERING_SUBFLOW:
        case types.RETURNING_FROM_SUBFLOW:
            return { ...state, url: action.url }
        case types.UPDATE:
            return {
                ...state,
                pid: action.pid,
                flow: action.flow,
                state: action.state
            }
        default:
            return state
    }
}
