const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const chalk = require('chalk')

const wcs = require('../package.json')
const before = require('../example/stub')

const config = require('./webpack.dev')

const DEFAULT_PORT = 4242

const { PORT = DEFAULT_PORT } = process.env

config.mode = 'development'

config.plugins.push(new webpack.HotModuleReplacementPlugin())
config.plugins.push(
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
    })
)

const options = {
    publicPath: `/static${config.output.publicPath}`,
    port: PORT,
    overlay: true,
    hot: true,
    noInfo: false,
    historyApiFallback: true,
    before,
    stats: {
        colors: true
    },
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':
            'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers':
            'X-Requested-With, content-type, Authorization'
    },
    host: 'localhost'
}

WebpackDevServer.addDevServerEntrypoints(config, options)
const server = new WebpackDevServer(webpack(config), options)

server.listen(PORT, null, () => {
    console.log(`
📦  Starting the development server...

${chalk.underline.blue(`http://localhost:${PORT}/sbtsbol/private/foo`)}

${chalk.grey(`@sbol/webpack-config@${wcs.version}`)}

  `)
})
