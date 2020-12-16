import * as types from '../action-types'

const defaultState = {
    loading: true,
    promo: void 0,
    contentId: void ''
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case types.LOADING_START: {
            return {
                ...state,
                loading: true
            }
        }
        case types.LOADING_STOP: {
            return {
                ...state,
                loading: false
            }
        }
        case types.INIT_FETCH: {
            return {
                ...state,
                promo: action.promo,
                contentId: action.contentId
            }
        }
        case types.RESET: {
            return {
                ...defaultState
            }
        }
        default:
            return state
    }
}
