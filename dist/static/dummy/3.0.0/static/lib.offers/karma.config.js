const config = require('@sbol/karma-config')

module.exports = config
    .configure({
        setups: [
            ...config.defaultSetups,
            'src/tests/setup.js'
        ]
    })

