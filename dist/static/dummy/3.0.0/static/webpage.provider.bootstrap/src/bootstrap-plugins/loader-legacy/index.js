// @flow
import { Bootstrap } from '../../bootstrap'
import { getCommonConfig } from '../../configuration/config'
import { getInitOptions } from '../../configuration/init'

const versionRegExp = /^\d+(\.\d+(\.\d+)?)?/

export const loaderLegacyPlugin = ({
    navigation
}: {
    [key: string]: string
}) => (bootstrap: Bootstrap) => {
    bootstrap.hooks.beforeLoadingApp.tapPromise(
        'loaderLegacyPlugin',
        async (requestUrl, appData) => {
            if (
                appData.vendorVersion &&
                versionRegExp.test(appData.vendorVersion)
            ) {
                await bootstrap.unmount()

                // Если есть релизные вендоры в настройках, заменяем на старое приложение
                const {
                    settings,
                    options,
                    features,
                    messages
                } = getInitOptions(appData && appData.name)

                bootstrap.apps.setCurrentApp(appData.name, {
                    unmount: () => {
                        // FIXME: 💩💩💩 грязное удаление react элементов
                        const mainTag = document.getElementById('main')
                        if (mainTag) {
                            mainTag.innerHTML = ''
                        }
                    },
                    appData
                })

                import(
                    /* webpackChunkName: "loader-legacy" */ './loader-legacy'
                ).then(({ default: loaderLegacy }) => {
                    loaderLegacy(appData, {
                        navigation,
                        config: getCommonConfig(),
                        initResponse: {
                            settings: settings || {},
                            options: options || {},
                            features: features || {},
                            messages: messages || {}
                        }
                    })
                })

                // Вешаем дополнительный класс на body
                if (
                    document.body &&
                    !document.body.classList.contains('is-legacy')
                ) {
                    document.body.classList.add('is-legacy')
                }

                console.info('Load legacy project')
                // Останавливаем работу bootstrap)
                return new Promise(() => {})
            }

            // Если не 2.4, удаляем ненужный класс на body
            if (
                document.body &&
                document.body.classList.contains('is-legacy')
            ) {
                document.body.classList.remove('is-legacy')
            }

            return Promise.resolve()
        }
    )
}
