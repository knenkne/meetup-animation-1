// @flow
import { Bootstrap } from '../../bootstrap'

const versionRegExp = /^\d+(\.\d+(\.\d+)?)?/
let legacy

export const legacyReloadPlugin = (bootstrap: Bootstrap) => {
    bootstrap.hooks.beforeLoadingApp.tapPromise(
        'legacyReloadPlugin',
        async (requestUrl, appData) => {

            if (legacy) {
                window.location.reload()
            }
            // Если модуль 2.4, то сохраняем флаг и релоадим страницу при уходе с модуля.
            legacy = appData.vendorVersion && versionRegExp.test(appData.vendorVersion)

            return Promise.resolve()
        }
    )
}
