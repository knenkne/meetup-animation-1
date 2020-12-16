# Компонент 404

Данный компонент реализует переиспользуемую страницу 404.
Используйте его как default route, если URL страницы
не соответствует доступным страницам прикладного модуля.

```
import React from 'react'
import { getHistory, NotFound } from '@sbol/lib.app'
import { Router, Route, Switch } from 'react-router'

import { store } from './__data__'
import Main from './pages/main'

export default () => (
    <Router history={getHistory()}>
        <Switch>
            <Route
                component={Main}
                exact
                path="/dummy"
            />
            <Route
                component={NotFound}
            />
        </Switch>
    </Router>
)
```
