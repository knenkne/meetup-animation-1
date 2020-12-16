const path = require('path')

const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const zopfli = require('@gfx/zopfli')
const merge = require('webpack-merge')

const basis = require('./basis')

const prodConfig = {
    output: {
        path: path.resolve(__dirname, '..', 'target')
    },
    optimization: {
        minimizer: [new UglifyJSPlugin({ uglifyOptions: { safari10: true } })],
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
        new CleanWebpackPlugin([basis.output.path]),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            'process.env.ALLOW_IMPORT_MAP': process.env.ALLOW_IMPORT_MAP
        }),
        new BundleAnalyzerPlugin({
            reportFilename: './temp/statistics.html',
            analyzerMode: 'static',
            defaultSizes: 'gzip',
            openAnalyzer: false
        })
    ],

    resolve: {
        extensions: ['.jsx', '.js']
    },

    mode: 'production'
}

module.exports = merge(basis, prodConfig)
