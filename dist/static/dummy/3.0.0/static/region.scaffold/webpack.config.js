const webpackConfig = require('@sbol/webpack-config')

// modify jsx out of MODULE scope
const jsxRule = webpackConfig.module.rules.find((rule) => {
    if (rule.test) {
        return rule.test.source === /\.jsx?$/.source
    }

    return false
})

if (jsxRule) {
    Object.assign(jsxRule, {
        options: {
            ...jsxRule.options,
            plugins: [
                ...jsxRule.options.plugins,
                'emotion'
            ]
        }
    })
}

module.exports = webpackConfig
