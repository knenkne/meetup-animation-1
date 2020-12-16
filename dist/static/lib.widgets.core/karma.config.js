const { configure, defaultSetups } = require('@sbol/karma-config')

module.exports = configure({
    setups: [
        ...defaultSetups,
        'src/tests/setup.js'
    ],
    files: [
        './src/tests/mock.spec.js'
    ],
})
