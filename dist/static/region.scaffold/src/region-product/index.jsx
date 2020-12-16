import React from 'react'
import i18next from 'i18next'
import ReactDOM from 'react-dom'
import { promise, i18nextInit } from '@sbol/lib.app'
import { IconLoader } from '@sbol/design-system/core/icon'
import { setProjectId } from '@sbol/design-system/core/icon/utils/set-project-id'

import { subscribeToMessageBusEvents, unsubscribeFromMessageBusEvents } from './__data__/bus'
import { actions, createStore } from './__data__'
import Region from './region'
import * as assets from './assets'
import * as common from './assets/common'
import * as notifications from './assets/notifications'
import locales from './locales/ru.json'

export const store = createStore()

IconLoader.addIcons('icon:region.product/common', assets)
IconLoader.addIcons('icon:products/common', common)
IconLoader.addIcons('icon:products/notifications', notifications)
setProjectId(process.env.PKG_ID)
export const SkeletonProfile = document.getElementsByClassName('skeleton-profile')?.[0]?.innerHTML
export const SkeletonProduct = document.getElementsByClassName('skeleton-products')?.[0]?.innerHTML

export default () => {
    store.dispatch(actions.init.fetchPropTheme())
    store.dispatch(actions.init.fetchEmployee())
    store.dispatch(actions.init.fetchClient({ initialFetch: true }))
    store.dispatch(actions.init.fetchPropForBlockedCards())
    store.dispatch(actions.init.fetchProducts({ initialFetch: true }))
    store.dispatch(actions.claims.fetchClaims())
    // TODO: Переименовать функцию офферов
    store.dispatch(actions.loans.legacyLoans.fetchOffer())
    return (
        <Region store={store} />
    )
}

const i18nextPromise = i18nextInit({
    i18next,
    name: process.env.PKG_ID,
    libs: process.env.LIBS,
    locales: process.env.LOCALES,
    version: process.env.VERSION,
    resources: { ru: locales },
})

export const mount = async (element, { region }) => {
    await promise.allOnce([i18nextPromise])
    ReactDOM.render(element, region)
    subscribeToMessageBusEvents(store)
}

export const unmount = ({ region }) => {
    unsubscribeFromMessageBusEvents()
    ReactDOM.unmountComponentAtNode(region)
}

// Контракт с внешним миром на типы событий, отправляемых приложением в общую шину сообщений
export { events } from './__data__'
