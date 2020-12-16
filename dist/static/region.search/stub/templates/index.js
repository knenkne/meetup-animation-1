const devServer = require('@sbol/dev.server')

const regionScaffoldPkg = require('@sbol/region.scaffold/package')
const pkg = require('../../package')

const navigation = require('./navigation')
const apps = require('./apps')
const config = require('./config')
const modules = require('./modules')
const prefetch = require('./prefetch')

const base = (defaultConfig) => ({
    ...defaultConfig,
    regions: {
        'region-scaffold': { name: 'region.scaffold', version: regionScaffoldPkg.version }
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
        'region.search': {
            version: pkg.version,
            features: {
                quickSuggestionsFromDDP: {
                    value: false // TODO изменив на true, исправить тесты src/__data__/actions/suggests/tests/requests.spec.js
                },
                useLevenshteinWithFeatures: {
                    value: 'true'
                },
                useSearchWithConvertedQuery: {
                    value: 'false'
                    //TODO: тесты src/header/search/utils/operationHistory/test/search.spec.js,
                    // UI тесты cucumber/searchResults/index.js, cucumber/searchInput/index.js
                }
            }
        },
    },
    data: {
        'region.scaffold': prefetch
    }
})

module.exports = () => {
    const viewModel = base(devServer.getDefaultConfig())


    return viewModel
}
