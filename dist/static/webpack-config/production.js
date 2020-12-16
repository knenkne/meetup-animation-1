require('./webpack/utils/default-envs')

process.env.NODE_ENV = 'production'

const webpack = require('webpack')
const merge = require('webpack-merge')
const CompressionPlugin = require('compression-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const zopfli = require('@gfx/zopfli')

const base = require('./webpack/base')

module.exports = merge(base, {
    optimization: {
        minimizer: [
            new TerserPlugin({
                sourceMap: true,
                terserOptions: {
                    warnings: false,
                    output: {
                        comments: false
                    },
                    compress: {
                        dead_code: true
                    }
                }
            })
        ]
    },
    plugins: [
        new CompressionPlugin({
            compressionOptions: {
                numiterations: 15
            },
            algorithm (input, compressionOptions, callback) {
                return zopfli.gzip(input, compressionOptions, callback)
            }
        }),
        new webpack.SourceMapDevToolPlugin({
            filename: '[name].map',
            noSources: true
        })
    ],

    cache: false,
    devtool: void 0,

    stats: {
        chunks: false
    }
})
