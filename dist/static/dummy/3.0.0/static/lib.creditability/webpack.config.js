const webpackConfig = require('@sbol/webpack-config')
const ModuleReplaceWebpackPlugin = require('module-replace-webpack-plugin')

webpackConfig.plugins.push(
    new ModuleReplaceWebpackPlugin({
        modules: [{
            test: /^@sbol\/webpage\.provider\.bootstrap$/,
            replace: './styleguide/bootstrap-mock.js'
        }]
    })
)

module.exports = webpackConfig
