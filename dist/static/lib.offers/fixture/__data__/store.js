/* eslint no-underscore-dangle: 0 */
import { createStore as createReduxStore, combineReducers, applyMiddleware, compose } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk'

export const createReducer = (reducers = {}) => combineReducers({
    form: formReducer,
    ...reducers
})

export function createStore (additionalReducerFn) {
    const reducer = createReducer()

    const composeEnhancers =
        DEBUG && typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

    return composeEnhancers(applyMiddleware(thunkMiddleware))(createReduxStore)(reducer, {}, additionalReducerFn)
}

export default createStore()
