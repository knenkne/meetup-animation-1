const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require('@sbol/webpack-config')
const { version } = require('@sbol/webpack-config/package')

const getStub = require('../getters/get-stub')

module.exports = (port) => new Promise((resolve) => {
    new WebpackDevServer(webpack(webpackConfig), {
        contentBase: './target',
        port,
        overlay: true,
        hot: false,
        noInfo: false,
        historyApiFallback: true,
        setup: getStub(),
        stats: 'normal'
    }).listen(
        port,
        null,
        () => {
            console.log(`Start @sbol/webpack-config@${version} stub with building project on port ${port}`)
            resolve()
        }
    )
})
