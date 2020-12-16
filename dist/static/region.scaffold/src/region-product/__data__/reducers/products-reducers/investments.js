import * as types from '../../action-types'
import { ERROR, LOADING, SUCCESS } from '../../../personal-menu/utils/constants'

export default (state = {}, action) => {

    switch (action.type) {
        case types.INVESTMENTS_LOADING:
            return { ...state, ...{ status: LOADING } }
        case types.INVESTMENTS_FETCH:
            return { ...state, ...{ investmentsObj: action.payload, status: SUCCESS } }
        case types.INVESTMENTS_ERROR: {
            return { ...state, ...{ status: ERROR } }
        }
        default:
            return state
    }
}
