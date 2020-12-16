const { jest } = require('@jest/globals')

module.exports = {
    analytics: {
        event: jest.fn(),
        private: jest.fn(),
        transition: jest.fn(),
        stage: jest.fn(),
        finish: jest.fn()
    },
    name: '@sbol/lib.analitics'
}

