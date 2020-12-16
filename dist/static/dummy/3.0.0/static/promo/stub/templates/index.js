const devServer = require('@sbol/dev.server')
const scaffoldVersion = require('@sbol/region.scaffold/package').version

const navigation = require('./navigation')
const apps = require('./apps')
const config = require('./config')
const modules = require('./modules')
const profile = require('./prefetch/profile')
const products = require('./prefetch/products')
const employee = require('./prefetch/employee')

const base = (defaultConfig) => ({
    ...defaultConfig,
    navigation: {
        ...defaultConfig.navigation,
        ...navigation
    },
    apps: {
        ...defaultConfig.apps,
        ...apps
    },
    regions: {
        'scaffold.region': {
            name: 'region.scaffold',
            version: scaffoldVersion
        }
    },
    config: {
        ...defaultConfig.config,
        ...config
    },
    launcher: {
        ...defaultConfig.launcher,
        ...modules
    },
    data: {
        'region.products': {
            profile,
            products,
            employee
        }
    }
})

module.exports = () => {
    const viewModel = base(devServer.getDefaultConfig())

    if (process.env.NO_REGIONS) {
        // Данный режим предлагается для анализа непосредственно вашего приложения
        return {
            ...viewModel,
            regions: {}
        }
    }

    return viewModel
}
