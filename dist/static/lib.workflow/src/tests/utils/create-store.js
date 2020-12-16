import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { createStore as createReduxStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

import { getReducerWorkflow } from '../..'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

export const createMockStore = (workflowSlice = {}, formSlice = {}) => mockStore({
    workflow: workflowSlice,
    form: formSlice
})

export const createStore = (initialState = {}) => createReduxStore(
    combineReducers(
        {
            ...getReducerWorkflow(),
            form: reduxFormReducer
        }
    ),
    initialState,
    applyMiddleware(thunk)
)
