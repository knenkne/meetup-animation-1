const path = require('path')

const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const zopfli = require('@gfx/zopfli')

const {
    NODE_ENV = 'production'
} = process.env

const webpackConfig = {
    node: {
        fs: 'empty'
    },
    devtool: 'source-map',
    entry: 'redux-thunk',
    output: {
        path: NODE_ENV === 'production'
            ? path.resolve('target')
            : path.resolve('target-dev'),
        filename: 'index.js',
        libraryTarget: 'umd'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':
                NODE_ENV === 'production'
                    ? JSON.stringify('production')
                    : JSON.stringify('development')
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
