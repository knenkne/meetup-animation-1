// @flow

/* eslint-disable no-magic-numbers, comment: много чисел для определения времени */

import { Bootstrap } from '../../bootstrap'

import { GlobalLoader } from './global-loader'

export const loaderViewPlugin = (isErib: boolean, stopInitialLoader) => (bootstrap: Bootstrap) => {
    // В ЕРИБ лоадер не отображаем
    if (isErib) {
        return null
    }

    const globalLoader = new GlobalLoader()
    loaderViewPlugin.currentLoader = globalLoader

    bootstrap.hooks.start.tapPromise('loaderViewPlugin', () =>
        Promise.resolve(globalLoader.start(0))
    )

    bootstrap.hooks.beforeLoadingApp.tapPromise('loaderViewPlugin', () =>
        Promise.resolve(globalLoader.setPercent(30))
    )

    bootstrap.hooks.executeApp.tapPromise('loaderViewPlugin', () =>
        Promise.resolve(() => globalLoader.setPercent(60))
    )

    bootstrap.hooks.afterLoadingApp.tapPromise('loaderViewPlugin', () =>
        Promise.resolve(globalLoader.setPercent(80))
    )

    bootstrap.hooks.mountApp.tapPromise('loaderViewPlugin', () => {
        if (!globalLoader.isVisible()) {
            globalLoader.start(30)
        }
    })

    bootstrap.hooks.appStartLoadingData.tapPromise(
        'loaderViewPlugin',
        (longRequest) => {
            const percent = longRequest ? 80 : 90
            if (globalLoader.isVisible()) {
                return Promise.resolve(globalLoader.setPercent(percent))
            }
            return Promise.resolve(globalLoader.start(percent))
        }
    )

    bootstrap.hooks.appFinishLoadingData.tapPromise('loaderViewPlugin', () =>
        Promise.resolve(globalLoader.stop())
    )

    bootstrap.hooks.afterMountApp.tapPromise('loaderViewPlugin', () => {
        Promise.resolve(setTimeout(() => {
            stopInitialLoader()
            globalLoader.stop()
        }, 500))
    })

    bootstrap.hooks.error.tapPromise('loaderViewPlugin', () =>
        Promise.resolve(globalLoader.stop())
    )

    bootstrap.hooks.errorApp.tapPromise('loaderViewPlugin', () =>
        Promise.resolve(globalLoader.stop())
    )

    bootstrap.hooks.errorRegion.tapPromise('loaderViewPlugin', () =>
        Promise.resolve(globalLoader.stop())
    )

    return bootstrap
}
