require('./webpack/utils/default-envs')

process.env.NODE_ENV = 'development'
process.env.MODE = 'testing'

const path = require('path')

const merge = require('webpack-merge')

const babelOptions = require('./webpack/base/babelrc')
const development = require('./development')

module.exports = merge.smartStrategy({
    externals: 'replace'
})(development, {
    entry: null,
    module: {
        rules: [
            {
                test: /\.spec\.jsx?$/,
                include: [path.resolve('src')],
                loader: 'babel-loader',
                options: babelOptions
            }
        ]
    },

    externals: [
        { 'react/addons': true },
        { 'react/lib/ExecutionEnvironment': true },
        { 'react/lib/ReactContext': true },
        { 'react-addons-test-utils': 'react-dom' },
        {
            '@sbol/webpage.provider.bootstrap': {
                commonjs: '@sbol/webpage.provider.bootstrap',
                commonjs2: '@sbol/webpage.provider.bootstrap',
                amd: '@sbol/webpage.provider.bootstrap',
                // Before:
                // import { method } from '@sbol/webpage.provider.bootstrap'
                // After:
                // window.bootstrap.method
                root: 'bootstrap'
            }
        }
    ]
})
