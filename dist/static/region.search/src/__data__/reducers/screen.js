import * as types from '../action-types'

const initialState = {
    url: '',
    blockOrder: ['Pages', 'OperationsHistory', 'Providers', 'Products']
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SCREEN_UPDATE_URL: {
            return {
                ...state,
                url: action.payload
            }
        }
        case types.SCREEN_UPDATE_BLOCK_ORDER: {
            return {
                ...state,
                blockOrder: action.payload
            }
        }
        default:
            return state
    }
}
