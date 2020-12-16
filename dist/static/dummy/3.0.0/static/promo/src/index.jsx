import React from 'react'
import ReactDOM from 'react-dom'
import i18next from 'i18next'
import { Grid } from '@sbol/lib.ui'

import Component from './component'

// Данный биндинг необходим для `import { t } from 'i18next'`,
// поскольку в новых версиях вендоры функция t завязана на контекст i18next
i18next.t = i18next.t.bind(i18next)

// Включает актуальный режим работы Grid
Grid.defaultProps.mode = 'strict'
Grid.Cell.defaultProps.mode = 'strict'

const mount = (element, { region }) => {
    ReactDOM.render(element, region)

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./component', () => {
            /* eslint-disable-next-line global-require, comment: react-hot-loader */
            const { default: NextComponent } = require('./component')
            ReactDOM.render(<NextComponent />, region)
        })
    }
}

const unmount = ({ region }) => {
    ReactDOM.unmountComponentAtNode(region)
}

Component.mount = mount
Component.unmount = unmount

export default Component
export {
    Component,
    mount,
    unmount
}
