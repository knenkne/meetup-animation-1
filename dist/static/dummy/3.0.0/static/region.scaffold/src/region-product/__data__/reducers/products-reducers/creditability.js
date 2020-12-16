import * as types from '../../action-types'
import { ERROR, LOADING, SUCCESS } from '../../../personal-menu/utils/constants'

export default (state = {}, action) => {
    switch (action.type) {
        case types.CREDITABILITY_LOADING:
            return { ...state, status: LOADING }
        case types.CREDITABILITY_FETCH:
            return { ...state, current: action.payload, status: SUCCESS }
        case types.CREDITABILITY_ERROR: {
            return { ...state, status: ERROR }
        }
        default:
            return state
    }
}
