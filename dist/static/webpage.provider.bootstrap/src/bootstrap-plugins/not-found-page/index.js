// @flow
import { Bootstrap } from '../../bootstrap'

export const notFoundPagePlugin = (isErib: boolean = false) => (
    bootstrap: Bootstrap
) => {
    // Начинаем грузить чанк раньше чем его попросят, для быстрого отображения 404 ошибки
    const loadNotFoundModule = import(
        /* webpackChunkName: "not-found" */ './not-found-page'
    )

    bootstrap.hooks.router.tapPromise(
        'notFoundPagePlugin',
        async (appData) => {
            // Не отрисовываем ошибку если это ЕРИБ
            if (isErib) {
                // Отправляем Promise, который не зарезолвится
                return new Promise(() => {})
            }
            if (!appData.name && !appData.version) {
                const currentDataApp = {
                    ...appData,
                    region: document.getElementById(
                        bootstrap.defaultRegionForMountApp
                    )
                }

                // Загрузка страницы 404
                const notFoundApp = await loadNotFoundModule

                // Делаем unmount последнего модуля
                await bootstrap.unmount()

                // Добавляем как текущий модуль, для быстрого анмаунта ошибки
                bootstrap.apps.setCurrentApp('404-PAGE', {
                    unmount: notFoundApp.unmount,
                    appData: currentDataApp
                })

                // Mount 404 страницы
                notFoundApp.mount(
                    notFoundApp.default(
                        appData
                    ),
                    currentDataApp
                )

                // Отправляем ошибку в консоль
                return Promise.reject(
                    new Error(
                        `No module found for pathname: ${bootstrap.history.location.pathname}`
                    )
                )
            }
            return Promise.resolve()
        }
    )
}
