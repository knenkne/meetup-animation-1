const config = require('@sbol/jest-config')

delete config.moduleNameMapper['\\.svg$']

config.transform['\\.svg$'] = './src/tests/svg-transformer.js'

module.exports = config
