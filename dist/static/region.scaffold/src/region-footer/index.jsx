import React from 'react'
import ReactDOM from 'react-dom'
import i18next from 'i18next'
import { i18nextInit, promise } from '@sbol/lib.app'

import { Footer } from './footer'
import locales from './locales/ru.json'

const i18nextPromise = i18nextInit({
    i18next,
    name: process.env.PKG_ID,
    libs: process.env.LIBS,
    locales: process.env.LOCALES,
    version: process.env.VERSION,
    resources: { ru: locales }
})

export default () => (
    <Footer />
)

let observer
export const mount = async (element, { region }) => {
    await promise.allOnce([i18nextPromise])
    const containerMain = document.getElementById('main')
    const containerGradient = document.getElementById('gradient-region')

    if (observer || containerMain?.childNodes?.length || containerGradient?.childNodes?.length) {
        ReactDOM.render(element, region)
    } else {
        // Покажем футер, если уже существует или когда будет существовать верстка в основном контейнере
        observer = new MutationObserver((mutationsList) => {
            mutationsList.forEach((mutation) => {
                if (mutation.addedNodes.length) {
                    ReactDOM.render(element, region)
                }
            })

            // Есть background + отсутствует контент в main
            const reseted = document.getElementById('important-gradient-background') && region.id === 'footer-region' && !containerMain?.offsetHeight
            region.parentNode.classList.toggle('reseted', reseted)
        })
        if (containerMain) {
            observer.observe(containerMain, { childList: true })
        }
        if (containerGradient) {
            observer.observe(containerGradient, { childList: true })
        }
    }
}

export const unmount = ({ region }) => {
    ReactDOM.unmountComponentAtNode(region)
}
