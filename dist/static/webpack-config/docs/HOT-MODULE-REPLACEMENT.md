# Hot Module Replacement

```
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Main from './main'

const renderApp = (RootComponent) => render(
    <AppContainer>
        <RootComponent />
    </AppContainer>
, document.getElementById('app'))

renderApp(Main)

if (module.hot) {
    module.hot.accept('./main', () => {
        require('./main').default
        renderApp(Main)
    })
}
```