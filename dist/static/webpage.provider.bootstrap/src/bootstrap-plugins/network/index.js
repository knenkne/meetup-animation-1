// @flow

import { Bootstrap } from '../../bootstrap'
import { i18n } from '../../configuration/i18n'

import networkIcon from './network.svg'
import style from './style.css'

const NETWORK_DEBOUNCE = 1000
const NETWORK_ANIMATION_TIME = 1000

const createNetworkElement = () => {
    const div = document.createElement('div')

    div.classList.add(style.network)

    div.innerHTML = `<div class="${style.container}" role="alert" aria-relevant="all" aria-atomic="false">
<div class="${style.popup}">
    <span class="${style.icon}">
      ${networkIcon}
    </span>
    <span class="${style.message}">
        <span class="${style.messageOff}">${i18n.t('network.error.popup.switch.off')}</span>
        <span class="${style.messageOn}">${i18n.t('network.error.popup.switch.on')}</span>
    </span>
</div>
</div>`

    return div
}

export const networkPlugin = (isErib: boolean = false) => (bootstrap: Bootstrap) => {
    // Начинаем грузить чанк раньше чем его попросят, для быстрого отображения network ошибки
    const loadNetworkModule = import(/* webpackChunkName: "network-page" */ './network-page')

    const networkElement = createNetworkElement()

    const switchOn = () => {
        setTimeout(() => {
            if (!window.navigator.onLine) {
                if (!document.body.contains(networkElement)) {
                    document.body.appendChild(networkElement)
                }

                setTimeout(() => {
                    networkElement.classList.add(style.active)
                })
            }
        }, NETWORK_DEBOUNCE)
    }

    const switchOff = () => {
        setTimeout(() => {
            if (window.navigator.onLine) {
                networkElement.classList.remove(style.active)

                setTimeout(() => {
                    if (document.body.contains(networkElement)) {
                        document.body.removeChild(networkElement)
                    }
                }, NETWORK_ANIMATION_TIME)
            }
        }, NETWORK_DEBOUNCE)
    }

    bootstrap.hooks.start.tapPromise('networkPlugin', () => {
        if (!window.navigator.onLine) {
            switchOn()
        }
        window.addEventListener('offline', switchOn)
        window.addEventListener('online', switchOff)

        return Promise.resolve()
    })

    bootstrap.hooks.router.tapPromise(
        'networkPlugin',
        async (appData) => {
            // Не отрисовываем ошибку если это ЕРИБ
            if (isErib) {
                // Отправляем Promise, который не зарезолвится
                return new Promise(() => {})
            }
            if (!window.navigator.onLine) {
                const currentDataApp = {
                    ...appData,
                    region: document.getElementById(
                        bootstrap.defaultRegionForMountApp
                    )
                }

                // Загрузка страницы network
                const notFoundApp = await loadNetworkModule

                // Делаем unmount последнего модуля
                await bootstrap.unmount()

                // Добавляем как текущий модуль, для быстрого анмаунта ошибки
                bootstrap.apps.setCurrentApp('NETWORK-PAGE', {
                    unmount: notFoundApp.unmount,
                    appData: currentDataApp
                })

                // Mount network страницы
                notFoundApp.mount(
                    notFoundApp.default(
                        appData
                    ),
                    currentDataApp
                )

                // Отправляем ошибку в консоль
                return Promise.reject(
                    new Error(
                        `Network error for pathname: ${bootstrap.history.location.pathname}`
                    )
                )
            }
            return Promise.resolve()
        }
    )

    return bootstrap
}
