const devServer = require('@sbol/dev.server')

const navigation = require('./navigation')
const apps = require('./apps')
const regions = require('./regions')
const config = require('./config')
const modules = require('./modules')
const profile = require('./prefetch/profile')
const employee = require('./prefetch/employee')

module.exports = () => {
    const defaultConfig = devServer.getDefaultConfig()

    return {
        // Весь данный объект - это модель для hbs-шаблона
        ...defaultConfig,
        // Объект навигации PL - getConfigValue(id) -> url
        navigation: {
            ...defaultConfig.navigation,
            ...navigation
        },
        // Объект доступных приложений PL, приложения отвечают структуре: `<url>: { id, version, vendorVersion }`
        apps: {
            ...defaultConfig.apps,
            ...apps
        },
        // Объект доступных регионов PL, регионы отвечают структуре: `<node id>: { id, version }`
        regions: {
            ...regions
        },
        // Объект конфигурации PL
        config: {
            ...defaultConfig.config,
            ...config
        },
        // Объект конфигурации Launcher
        launcher: {
            ...defaultConfig.launcher,
            ...modules
        },
        // Объект prefetch данных
        data: {
            'region.products': {
                profile,
                employee
            }
        }
    }
}
