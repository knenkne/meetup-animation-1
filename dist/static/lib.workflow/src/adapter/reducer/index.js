import { CLEAR_STATE } from '../action-types'

import workflowReducer from './workflow-reducer'

export default (state, action) => {
    if (action.type === CLEAR_STATE) {
        // eslint-disable-next-line no-param-reassign, no-undefined, comment: Стей не мутируется, меняется ссылка. Undefined передеается с целью инициализации начального стейта в редьюсере
        state = void 0
    }

    return workflowReducer(state, action)
}
