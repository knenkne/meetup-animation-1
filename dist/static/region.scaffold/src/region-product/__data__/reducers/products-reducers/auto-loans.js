import * as types from '../../action-types'
import { ERROR, LOADING, SUCCESS } from '../../../personal-menu/utils/constants'

export default (state = {}, action) => {

    switch (action.type) {
        case types.CAR_LOAN_LOADING:
            return { ...state, ...{ status: LOADING } }
        case types.CAR_LOAN_FETCH:
            return { ...state, ...{ loansList: action.payload, status: SUCCESS } }
        case types.CAR_LOAN_ERROR: {
            return { ...state, ...{ status: ERROR } }
        }
        default:
            return state
    }
}
