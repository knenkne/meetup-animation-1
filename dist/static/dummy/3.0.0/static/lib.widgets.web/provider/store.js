import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import { getReducerWorkflow } from '@sbol/lib.workflow'


export function createStorybookStore () {
    const composeEnhancers =
        DEBUG && typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

    const reducer = combineReducers({
        form: formReducer,
        ...getReducerWorkflow()
    })

    return composeEnhancers(applyMiddleware(thunkMiddleware))(createStore)(reducer, {})
}
