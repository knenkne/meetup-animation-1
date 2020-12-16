import React from 'react'
import { Provider } from 'react-redux'
import { Router as ReactRouter, Route, Switch } from 'react-router'
import i18next from 'i18next'
import { App, getNavigationValue, getHistory, NotFound } from '@sbol/lib.app'

import { store } from './__data__'
import Promo from './pages/promo'

const base = getNavigationValue(process.env.PKG_ID)

const MainContainer = () => (
    <Provider store={store}>
        <ReactRouter history={getHistory()}>
            <Switch>
                <Route
                    component={Promo}
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

export default (props) => (
    <App
        {...props}
        name={process.env.PKG_ID}
        version={process.env.VERSION}
        libs={process.env.LIBS}
        locales={process.env.LOCALES}
        i18next={i18next}
    >
        <MainContainer />
    </App>
)
