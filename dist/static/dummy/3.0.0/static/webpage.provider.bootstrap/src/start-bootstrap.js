import { getCommonConfigValue } from './configuration/config'
import { loadAnalytics } from './analytics'

export async function startBootstrap ({ bootstrap, navigation, data, messages, launcher, stopInitialLoader }) {
    const {
        historyPlugin,
        systemPlugin,
        AMDVirtualModulePlugin,
        notFoundPagePlugin,
        errorHandlerPlugin,
        initAPIPlugin,
        loaderLegacyPlugin,
        loaderViewPlugin,
        networkPlugin,
        legacyReloadPlugin,
        logLevelPlugin,
        cssClearFixPlugin
    } = await import(/* webpackChunkName: "bootstrap-plugins" */ './bootstrap-plugins')
    // Устанавливаем logLevel
    bootstrap.use(logLevelPlugin({ launcher }))

    // Добавляем лоадер между переходами страниц
    bootstrap.use(loaderViewPlugin(getCommonConfigValue('isErib'), stopInitialLoader))

    // Инстанс истории с предустановленным base.client.url
    bootstrap.use(historyPlugin)

    // Конфигурируем SystemJS
    bootstrap.use(systemPlugin)

    // Обработка ошибок network
    bootstrap.use(networkPlugin(getCommonConfigValue('isErib')))

    // Создаем виртуальный AMD модуль
    bootstrap.use(AMDVirtualModulePlugin({ navigation, data, messages, launcher }))

    // Страница не найдена
    bootstrap.use(notFoundPagePlugin(getCommonConfigValue('isErib')))

    // Обработчик ошибок
    bootstrap.use(errorHandlerPlugin())

    // Вызов api/init
    bootstrap.use(initAPIPlugin({
        apiInitDisabled: getCommonConfigValue('api.init.disabled'),
        isErib: getCommonConfigValue('isErib'),
        entryLoginUrl: getCommonConfigValue('entry.login.url')
    }))

    bootstrap.use(cssClearFixPlugin({ launcher }))

    // Загрузка легаси приклада на 2.4
    bootstrap.use(loaderLegacyPlugin({ navigation, data }))

    // Релоад страницы при уходе из приклада на 2.4
    bootstrap.use(legacyReloadPlugin)

    await loadAnalytics()

    bootstrap.start()
}
