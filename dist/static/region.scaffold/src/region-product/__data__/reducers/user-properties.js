import * as types from '../action-types'
import { LOADING, ERROR } from '../../personal-menu/utils/constants'


// TODO: переименовать редьюсер,
// настройка темы тоже приходит из user properties
export default (state = {}, action) => {
    switch (action.type) {
        case types.USER_PROPERTIES_LOADING: {
            return { status: LOADING }
        }
        case types.USER_PROPERTIES_FETCH: {
            return action.payload
        }
        case types.USER_PROPERTIES_ERROR: {
            return { status: ERROR }
        }
        default:
            return state
    }
}
