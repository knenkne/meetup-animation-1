const _ = require('lodash')

let platformBabelConfig
try {
    // webpack-config с 12.0.3
    platformBabelConfig = require('@sbol/webpack-config/webpack/base/babelrc')
} catch (e) {
    // старый babel-конфиг до webpack-config <= 12.0.3
    platformBabelConfig = require('@sbol/webpack-config/webpack/utils/babelrc')
}

const pConfig = _(platformBabelConfig)
    .omit(['cacheDirectory'])
    .set('presets[0][1].modules', 'auto')
    .value()

const customBabelPlugins = [
    'dynamic-import-node',
    ['@babel/plugin-proposal-class-properties', { loose: false }],
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-optional-chaining'
]

pConfig.plugins = _.unionBy(
    // Убираем конфликт плагинов, выпиливаем конфилктный
    _.filter(pConfig.plugins, (item) => !_.isArray(item) || (_.isArray(item) && item[0] !== 'babel-plugin-istanbul')),
    customBabelPlugins,
    (item) => _.isArray(item) ? item[0] : item
)

const config = {
    env: {
        test: pConfig
    }
}

module.exports = require('babel-jest').createTransformer(config)
