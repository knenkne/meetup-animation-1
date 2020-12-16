const devServer = require('@sbol/dev.server')

const pkg = require('../../package.json')

const navigation = require('./navigation')
const apps = require('./apps')
const config = require('./config')
const modules = require('./modules')
const prefetch = require('./prefetch')

const base = (defaultConfig) => ({
    ...defaultConfig,
    regions: {
        'region-scaffold': { name: 'region.scaffold', version: pkg.version }
    },
    navigation: {
        ...defaultConfig.navigation,
        ...navigation
    },
    apps: {
        ...defaultConfig.apps,
        ...apps
    },
    config: {
        ...defaultConfig.config,
        ...config
    },
    launcher: {
        ...defaultConfig.launcher,
        ...modules,
        "region.search": {
            "version": require('@sbol/region.search/package').version
        },
    },
    data: {
        ...prefetch
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
