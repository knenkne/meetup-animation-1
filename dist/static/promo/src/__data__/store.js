/* eslint no-underscore-dangle: 0 */
import { createStore as createReduxStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { devToolsEnhancer } from 'redux-devtools-extension/developmentOnly'

import * as appReducers from './reducers'

export const createReducer = (reducers = {}) => combineReducers({
    ...appReducers,
    ...reducers
})


export const createStore = () => {
    const reducer = createReducer()

    const composedEnhancer = process.env.NODE_ENV === 'production'
        ? applyMiddleware(thunkMiddleware)
        : compose(
            applyMiddleware(thunkMiddleware),
            devToolsEnhancer({
                name: 'Promo СБОЛ',
            })
        )

    return createReduxStore(reducer, composedEnhancer)
}

export default createStore()
