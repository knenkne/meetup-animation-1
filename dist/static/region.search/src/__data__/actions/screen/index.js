import * as types from '../../action-types'

export const updateScreenUrl = (payload) => ({
    type: types.SCREEN_UPDATE_URL,
    payload
})

export const updateScreenBlockOrder = (payload) => ({
    type: types.SCREEN_UPDATE_BLOCK_ORDER,
    payload
})
