import * as types from '../../action-types'
import { ERROR, LOADING, SUCCESS } from '../../../personal-menu/utils/constants'

export default (state = {}, action) => {

    switch (action.type) {
        case types.INSURANCE_CONTRACTS_LOADING:
            return { ...state, ...{ ...state.insurance, contracts: { status: LOADING } } }
        case types.INSURANCE_CONTRACTS_FETCH: {
            const status = action.payload.success ? SUCCESS : ERROR
            return { ...state, ...{ ...state.insurance, contracts: { ...action.payload, status } } }
        }
        case types.INSURANCE_CONTRACTS_ERROR:
            return { ...state, ...{ ...state.insurance, contracts: { status: ERROR } } }
        default:
            return state
    }
}
