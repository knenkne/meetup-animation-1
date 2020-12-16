/* eslint no-underscore-dangle: 0 */
import {
    createStore as createReduxStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux'
import thunkMiddleware from 'redux-thunk'

import * as reducers from './reducers'
import { messageBusMiddleware } from './bus'

export const createReducer = () =>
    combineReducers({
        ...reducers
    })

export function createStore () {
    const reducer = createReducer()

    const composeEnhancers =
        DEBUG &&
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            : compose

    return composeEnhancers(applyMiddleware(thunkMiddleware, messageBusMiddleware))(createReduxStore)(
        reducer,
        {}
    )
}

export default createStore
