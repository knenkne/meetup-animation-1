import * as types from '../../action-types'

export const setPagesAvailability = (payload) => ({
    type: types.PAGES_AVAILABILITY,
    payload
})

export const pagesChatOpen = (payload) => ({
    type: types.PAGES_CHAT_OPEN,
    payload
})
