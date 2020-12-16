import React from 'react'
import ReactDOM from 'react-dom'

import Component from './component'

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
