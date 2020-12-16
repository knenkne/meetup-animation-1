import { combineReducers } from 'redux'

import references from './slice-reducers/references-reducer'
import document from './slice-reducers/document-reducer'
import screens from './slice-reducers/screens-reducer'
import progress from './slice-reducers/progress-reducer'
import history from './slice-reducers/history-reducer'
import error from './slice-reducers/error-reducer'
import messages from './slice-reducers/messages-reducer'
import process from './slice-reducers/process-reducer'
import status from './slice-reducers/status-reducer'
import { subFlow } from './slice-reducers/sub-flow-reducer'


export default combineReducers({
    process,
    status,
    document,
    screens,
    progress,
    references,
    history,
    error,
    messages,
    subFlow
})
