import * as types from '../../action-types'
import { ERROR, LOADING, SUCCESS } from '../../../personal-menu/utils/constants'

export default (state = {}, action) => {

    switch (action.type) {
        case types.BROKERAGE_LOADING:
            return { ...state, ...{ status: LOADING } }
        case types.BROKERAGE_FETCH:
            return { ...state, ...{ products: action.payload, status: SUCCESS } }
        case types.BROKERAGE_ERROR: {
            return { ...state, ...{ status: ERROR } }
        }
        default:
            return state
    }
}
