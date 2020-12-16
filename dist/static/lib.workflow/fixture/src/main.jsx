import React from 'react'
import ReactDOM from 'react-dom'
import i18next from 'i18next'
import axios from 'axios'
import { App, axiosConfig } from '@sbol/lib.app'
import { Grid } from '@sbol/lib.ui'

import Router from './router'

axiosConfig.useMultipleInterceptors(axios, [
    ...axiosConfig.rq.ufsInterceptors,
    ...axiosConfig.rs.ufsInterceptors
])

Grid.defaultProps.mode = 'strict'
Grid.Cell.defaultProps.mode = 'strict'

const Main = () => (
    <App
        name={process.env.PKG_ID}
        version={process.env.VERSION}
        libs={process.env.LIBS}
        locales={process.env.LOCALES}
        i18next={i18next}
    >
        <Router />
    </App>
)

const mount = (element, { region }) => {
    ReactDOM.render(element, region)
}

const unmount = ({ region }) => {
    ReactDOM.unmountComponentAtNode(region)
}

Main.mount = mount
Main.unmount = unmount

export default Main
export {
    Main,
    mount,
    unmount
}
