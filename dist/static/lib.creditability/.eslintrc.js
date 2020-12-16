const Module = require('module')

// Hack Node module system to recognize local plugin.
Module._findPath = (original => (name, lookupPaths) => {
    if (name === '@sbol/eslint-config-lib-creditability') {
        return require.resolve('./eslint-rules/eslint-config')
    }
    if (name === '@sbol/eslint-plugin-lib-creditability') {
        return require.resolve('./eslint-rules/lib')
    }
    return original(name, lookupPaths)
})(Module._findPath)

module.exports = {
    parser: 'babel-eslint',
    extends: [
        '@sbol/eslint-config',
        '@sbol/lib-creditability'
    ],
    env: {
        browser: true,
        jest: true
    },
    settings: {
        'import/resolver': {
            webpack: {
                config: './node_modules/@sbol/webpack-config/webpack.config.js'
            }
        }
    },
    parserOptions: {
        allowImportExportEverywhere: true
    },
    overrides: [
        {
            files: ['*.spec.js', '*.spec.jsx'],
            rules: {
                'no-magic-numbers': 'off'
            }
        },
        {
            files: ['**/tests/*.*'],
            rules: {
                'no-magic-numbers': 'off',
                '@sbol/common/no-cyrillic-outside-cms': 'off'
            }
        }
    ]
}
