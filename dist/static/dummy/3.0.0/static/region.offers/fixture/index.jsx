import React from 'react'
import ReactDOM from 'react-dom'

import { Dashboard } from './dashboard'

const Component = () => <Dashboard />

const mount = (element, { region }) => {
    ReactDOM.render(element, region)

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./dashboard', () => {
            /* eslint-disable-next-line global-require, comment: react-hot-loader */
            const { default: NextComponent } = require('./dashboard')
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
export { mount, unmount }
