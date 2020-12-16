// @flow
import { Bootstrap } from '../../bootstrap'

export const errorHandlerPlugin = () => (bootstrap: Bootstrap) => {
    // Начинаем грузить чанк раньше чем его попросят, для быстрого отображения 404 ошибки
    const loadErrorPageModule = import(
        /* webpackChunkName: "error" */ './error-page'
    )

    bootstrap.hooks.errorApp.tapPromise(
        'errorHandlerPlugin',
        async (error, appData) => {
            if (error && appData) {
                const currentDataApp = {
                    ...appData,
                    region: document.getElementById(
                        bootstrap.defaultRegionForMountApp
                    )
                }

                // Загрузка страницы error
                const notFoundApp = await loadErrorPageModule

                // Делаем unmount последнего модуля
                await bootstrap.unmount()

                // Добавляем как текущий модуль, для быстрого анмаунта ошибки
                bootstrap.apps.setCurrentApp('ERROR-PAGE', {
                    unmount: notFoundApp.unmount,
                    appData: currentDataApp
                })

                // Если мы еще находимся на той же странице, то отображаем ошибку
                // Mount страницу ошибки
                notFoundApp.mount(
                    notFoundApp.default(
                        currentDataApp
                    ),
                    currentDataApp
                )
            }

            // Отправляем ошибку в консоль
            return Promise.reject(`Application error! Stop module ${appData && appData.name ? appData.name : 'bootstrap'}`)
        }
    )
}
