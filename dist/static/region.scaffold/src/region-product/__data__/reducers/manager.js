import * as types from '../action-types'
import { ERROR, LOADING, SUCCESS } from '../../personal-menu/utils/constants'

export default (state = {}, action) => {
    switch (action.type) {
        case types.MANAGER_LOADING: {
            return {
                status: LOADING,
            }
        }
        case types.MANAGER_FETCH: {
            return {
                status: SUCCESS,
                managerList: action.payload.managerList,
                managerEmployeeStructure: action.payload.managerEmployeeStructure
            }
        }

        case types.MANAGER_ERROR: {
            return {
                status: ERROR,
            }
        }
        default:
            return state
    }
}
