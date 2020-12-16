import * as types from '../../action-types'
import { ERROR, LOADING, SUCCESS } from '../../../personal-menu/utils/constants'

export default (state = {}, action) => {

    switch (action.type) {

        case types.LOANS_LOADING:
            return { ...state, ...{ ...state?.loans, status: LOADING } }

        case types.LOANS_FETCH: {
            return { ...state, ...{ ...action.payload, status: SUCCESS } }
        }
        case types.LOANS_ERROR:
            return { ...state, ...{ status: ERROR } }

        case types.LOANS_INFO_FETCH: {
            return {
                ...state,
                ...{
                    loan: state.loans.loan.map((loan) => ({
                        ...loan,
                        ...action.payload.find((b) => b.id === loan.id)
                    }))
                }
            }
        }
        default: return state
    }
}
