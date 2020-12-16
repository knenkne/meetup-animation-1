const karmaConfig = require('@sbol/karma-config')

module.exports = karmaConfig
    .configure({
        webpackConfig: require.resolve('./build/webpack.dev'),
        wpb: false
    })
