module.exports = {
    parser: 'babel-eslint',
    extends: '@sbol/eslint-config',

    rules: {
        'global-require': 0,
        'no-console': 0,
        'import/no-dynamic-require': 0,
        'no-magic-numbers': 0,
        'no-sync': 0,
        'no-underscore-dangle': 0
    }
}
