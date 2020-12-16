import * as types from '../action-types'
import { LOADING, ERROR } from '../../personal-menu/utils/constants'

export default (state = {}, action) => {
    switch (action.type) {
        case types.EMPLOYEE_LOADING: {
            return { status: LOADING }
        }
        case types.EMPLOYEE_FETCH: {
            return action.payload
        }
        case types.EMPLOYEE_ERROR: {
            return { status: ERROR }
        }
        default:
            return state
    }
}
