import React from 'react'
import ReactDOM from 'react-dom'
import i18next from 'i18next'
import { i18nextInit, promise } from '@sbol/lib.app'
import { Icon } from '@sbol/lib.ui/core/icon'
import { setProjectId } from '@sbol/lib.ui/core/utils'

import { Header } from './header'
import * as menuIcons from './header/assets/menu'
import locales from './locales/ru.json'

const i18nextPromise = i18nextInit({
    i18next,
    name: process.env.PKG_ID,
    libs: process.env.LIBS,
    locales: process.env.LOCALES,
    version: process.env.VERSION,
    resources: { ru: locales }
})

Icon.addIcons('icon:core/menu', menuIcons)
setProjectId(process.env.PKG_ID)

export const SkeletonSearch = document.getElementsByClassName('skeleton-search')?.[0]?.outerHTML

export default () => (
    <Header skeleton={SkeletonSearch} />
)

export const mount = async (element, { region }) => {
    await promise.allOnce([i18nextPromise])
    ReactDOM.render(element, region)
}

export const unmount = ({ region }) => {
    ReactDOM.unmountComponentAtNode(region)
}
