import * as types from '../action-types'
import { LOADING, ERROR, SUCCESS } from '../../personal-menu/utils/constants'

export default (state = {}, action) => {
    switch (action.type) {
        case types.PROFILE_LOADING: {
            return { status: LOADING }
        }
        case types.PROFILE_FETCH: {
            return {
                status: SUCCESS,
                ...action.payload
            }
        }
        case types.PROFILE_ERROR: {
            return { status: ERROR }
        }

        default:
            return state
    }
}
