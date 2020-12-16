module.exports = {
    globals: {
        browser: true,
    },
    env: {
        browser: true,
        node: true,
        jasmine: true
    },
    extends: '@sbol/eslint-config',
    rules: {
        'global-require': 0,
        'no-console': 0,
    }
}
