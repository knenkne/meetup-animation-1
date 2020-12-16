import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, Switch } from 'react-router'
import { compose } from 'redux'
import { getNavigationValue, getHistory, NotFound } from '@sbol/lib.app'

import { getReducerWorkflow } from '../../src'

import { store, createReducer } from './__data__'
import { Main } from './routes/main'
import { BindWorkflow } from './routes/flows'
import config from './routes/config'

compose(
    store.replaceReducer,
    createReducer,
    getReducerWorkflow
)()

const base = getNavigationValue('lib.workflow')

const ConnectedMain = () => <Main config={config} />

export default () => (
    <Provider store={store}>
        <Router history={getHistory()}>
            <Switch>
                <Route
                    path={base}
                    exact
                    component={ConnectedMain}
                />
                {config.map((route) => (
                    <Route
                        exact
                        key={route.path}
                        path={`${base}${route.path}`}
                        // eslint-disable-next-line
                        render={() => <BindWorkflow {...route.props} title={route.title} />}
                    />
                ))}
                <Route
                    component={NotFound}
                />
            </Switch>
        </Router>
    </Provider>
)
