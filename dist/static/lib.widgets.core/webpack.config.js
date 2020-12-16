const config = require('@sbol/webpack-config')
const ModuleReplaceWebpackPlugin = require('module-replace-webpack-plugin')

config.plugins.push(
    new ModuleReplaceWebpackPlugin({
        modules: [{
            test: /^@sbol\/webpage\.provider\.bootstrap$/,
            replace: './styleguide/bootstrap-mock.js'
        }]
    })
)

module.exports = config
