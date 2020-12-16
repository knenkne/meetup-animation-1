import { simpleSearchQuerySelector } from '../selectors'
import * as actions from '../actions'

export const openChat = () => (dispatch, getState) => {
    const searchString = simpleSearchQuerySelector(getState())

    dispatch(actions.pagesChatOpen(searchString))
}
