import React from 'react'
import { Provider } from 'react-redux'
import { Router as ReactRouter, Route, Switch } from 'react-router'
import { getNavigationValue, getHistory, NotFound } from '@sbol/lib.app'

import { store } from './__data__'
import { MainPage } from './main-page'

const base = getNavigationValue(process.env.PKG_ID)

export default () => (
    <Provider store={store}>
        <ReactRouter history={getHistory()}>
            <Switch>
                <Route
                    component={MainPage}
                    exact
                    path={base}
                />
                <Route
                    component={NotFound}
                />
            </Switch>
        </ReactRouter>
    </Provider>
)
