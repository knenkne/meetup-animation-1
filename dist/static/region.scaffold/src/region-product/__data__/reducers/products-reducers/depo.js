import * as types from '../../action-types'
import { ERROR, LOADING, SUCCESS } from '../../../personal-menu/utils/constants'

export default (state = {}, action) => {
    switch (action.type) {
        case types.DEPO_ACCOUNTS_LOADING:
            return { ...state, ...{ status: LOADING } }
        case types.DEPO_ACCOUNTS_FETCH:
            return { ...state, ...{ depoaccount: action.payload, status: SUCCESS } }
        case types.DEPO_ACCOUNTS_ERROR:
            return { ...state, ...{ status: ERROR } }
        default:
            return state
    }
}
