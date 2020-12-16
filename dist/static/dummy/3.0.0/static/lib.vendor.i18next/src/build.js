const path = require('path')

const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const zopfli = require('@gfx/zopfli')

const { NODE_ENV } = process.env

const webpackConfig = {
    node: {
        fs: 'empty'
    },
    devtool: 'source-map',
    entry: 'i18next',
    output: {
        path: path.resolve('target'),
        filename: 'index.js',
        libraryTarget: 'umd'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':
                NODE_ENV === 'development'
                    ? JSON.stringify('development')
                    : JSON.stringify('production')
        })
    ],
    mode: NODE_ENV
}

if (NODE_ENV === 'production') {
    webpackConfig.plugins = [
        ...webpackConfig.plugins,
        new CompressionPlugin({
            compressionOptions: {
                numiterations: 15
            },
            algorithm: zopfli.gzip
        }),
        new UglifyJsPlugin({
            sourceMap: true,
            uglifyOptions: {
                compress: {
                    warnings: false,
                    dead_code: true
                }
            }
        })
    ]
}

webpack(webpackConfig, (err, stats) => {
    if (err) {
        throw new Error('Webpack', err)
    }
    console.log(`Output:\n${stats.toString({
        chunks: false
    })}`)
})
