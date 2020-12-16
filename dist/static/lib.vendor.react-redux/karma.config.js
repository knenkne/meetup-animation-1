const path = require('path')

module.exports = (config) => {
    require('@sbol/karma-config').vendor(config)

    config.set({
        files: [
            path.resolve('tests/**/*.spec.js?(x)')
        ]
    })
}
