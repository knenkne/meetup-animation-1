const path = require('path')

const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const merge = require('webpack-merge')

const basis = require('./basis')

const devConfig = {
    output: {
        path: path.resolve(__dirname, '..', 'target-dev')
    },
    plugins: [
        new CleanWebpackPlugin([basis.output.path]),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            'process.env.ALLOW_IMPORT_MAP': process.env.ALLOW_IMPORT_MAP,
            'process.env.ALLOW_SINGLE_WINDOW': process.env.ALLOW_SINGLE_WINDOW
        }),
        new BundleAnalyzerPlugin({
            reportFilename: './temp/statistics.html',
            analyzerMode: 'static',
            defaultSizes: 'gzip',
            openAnalyzer: false
        }),
    ],

    resolve: {
        extensions: ['.jsx', '.js']
    },

    mode: 'development'
}

module.exports = merge(
    basis,
    devConfig,
)
