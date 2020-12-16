const path = require('path')

const webpackConfig = require('@sbol/webpack-config')
const merge = require('webpack-merge')

module.exports = merge(webpackConfig, {
    resolve: {
        alias: {
            Data: path.resolve(__dirname, 'src/__data__/'),
            Thunks: path.resolve(__dirname, 'src/__data__/thunks/'),
            Reducers: path.resolve(__dirname, 'src/__data__/reducers/'),
            Actions: path.resolve(__dirname, 'src/__data__/actions/'),
            Selectors: path.resolve(__dirname, 'src/__data__/selectors/')
        }
    },
})
