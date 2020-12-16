import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import i18next from 'i18next'
import moment from 'moment'
import { axiosConfig, i18nextInit, promise } from '@sbol/lib.app'
import axios from 'axios'
import { setProjectId } from '@sbol/lib.ui'

import { createStore } from 'Data'
import { mapiRequestInterceptor } from 'Data/axios'
import {
    subscribeToMessageBusEvents,
    unsubscribeFromMessageBusEvents
} from 'Data/bus'

import { Search } from './header/search'
import { IS_ERIB } from './header/search/constants'

const store = createStore()

const {
    useMultipleInterceptors,
    rq,
    rs
} = axiosConfig

useMultipleInterceptors(
    axios,
    [
        mapiRequestInterceptor,
        rq.useMapiRoot,
        ...rq.defaultInterceptors,
        ...rs.defaultInterceptors,
        rs.logErrors
    ]
)

const i18nextPromise = i18nextInit({
    i18next,
    name: process.env.PKG_ID,
    locales: process.env.LOCALES,
    libs: process.env.LIBS,
    version: process.env.VERSION,
})

moment.locale('ru')

setProjectId(process.env.PKG_ID)

export default () => (
    <Provider store={store}>
        <Search isErib={IS_ERIB} />
    </Provider>
)

export const mount = async (element, { region }) => {
    await promise.allOnce([i18nextPromise])
    ReactDOM.render(element, region)
    subscribeToMessageBusEvents(store)
}

export const unmount = ({ region }) => {
    unsubscribeFromMessageBusEvents()
    ReactDOM.unmountComponentAtNode(region)
}
