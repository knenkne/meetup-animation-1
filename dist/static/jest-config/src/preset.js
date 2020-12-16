const path = require('path')
const fs = require('fs')

const safeJsonParse = (settings) => {
    try {
        return JSON.parse(settings)
    } catch (e) {
        return {}
    }
}

const readConfigurationFile = (filename) => {
    const settingsJsonFile = path.resolve(process.cwd(), `stub/${filename}.json`)
    if (!fs.existsSync(settingsJsonFile)) {
        return {}
    }
    const rawFileContent = fs.readFileSync(settingsJsonFile, 'utf-8')
    return safeJsonParse(rawFileContent)
}

const getObjProxyPath = () => {
    const objProxyDefaultPath = '@sbol/jest-config/node_modules/identity-obj-proxy'
    const objProxyReservePath = 'identity-obj-proxy'

    return fs.existsSync(objProxyDefaultPath) ? objProxyDefaultPath : objProxyReservePath
}

const getSetupTest = () => {
    const defaultPath = '@sbol/jest-config/test/setup-tests.js'
    const reservePath = './test/setup-tests.js'

    return !fs.existsSync(reservePath) ? defaultPath : reservePath
}

const config = readConfigurationFile('settings')
const navigation = readConfigurationFile('navigation')

module.exports = {
    roots: [
        '<rootDir>/src'
    ],
    setupFilesAfterEnv: [
        'jest-enzyme',
        getSetupTest()
    ],
    reporters: [
        'default',
        ['jest-junit', {
            outputDirectory: './reports/tests',
            outputName: 'TESTS-junit.xml',
            suiteName: '@sbol/jest-config',
            suiteNameTemplate: '{filepath}',
            classNameTemplate: '{classname}',
            titleTemplate: '{title}',
            ancestorSeparator: ' › '
        }]
    ],
    collectCoverageFrom: [
        '**/src/**/*.{js,jsx}'
    ],
    coverageDirectory: '<rootDir>/reports/coverage',
    coverageReporters: [
        ['html', {
            subdir: 'html'
        }],
        'lcovonly',
        ['cobertura', {
            file: 'cobertura.xml'
        }]
    ],
    testEnvironment: 'enzyme',
    snapshotSerializers: [
        'enzyme-to-json/serializer'
    ],
    testEnvironmentOptions: {
        enzymeAdapter: 'react16'
    },
    testPathIgnorePatterns: [
        '/node_modules/'
    ],
    transform: {
        '^.+\\.(js|jsx)$': '@sbol/jest-config/transformer.js'
    },
    transformIgnorePatterns: [
        'node_modules[\\/](?!((sbtsbol-|sbol-|@sbtsbol|@sbol|i18next/dist/es|date-fns/esm|imask/esm).*)[\\/]).*/'
    ],
    globals: {
        DEBUG: false,
        // eslint-disable-next-line camelcase
        __webpack_public_path__: '',
        config,
        navigation,
        bootstrap: {}
    },
    moduleFileExtensions: [
        'js',
        'jsx',
        'json'
    ],
    moduleNameMapper: {
        '\\.css$': getObjProxyPath(),
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '@sbol/jest-config/test/__mocks__/fileMock',
        '\\.svg$': '@sbol/jest-config/test/__mocks__/fileMock',
        '@sbol/lib.analytics': '@sbol/jest-config/test/__mocks__/lib.analytics',
        i18next: '@sbol/jest-config/test/__mocks__/i18next',
        '@sbol/lib.app': '@sbol/jest-config/test/__mocks__/lib.app.jsx',
        '@sbol/lib.offers': '@sbol/jest-config/test/__mocks__/lib.offers',
        '@sbol/webpage.provider.bootstrap': '@sbol/jest-config/test/__mocks__/webpage.provider.bootstrap',
        'package.json': '<rootDir>/package.json'
    },
    moduleDirectories: ['node_modules', '<rootDir>'],
    coverageThreshold: {
        global: {
            branches: 0,
            functions: 0,
            lines: 0,
            statements: 0
        }
    },
    testMatch: ['**/(__tests__|tests)/**/?(*.)(spec|test).js?(x)']
}
