module.exports = {
    parser: 'babel-eslint',
    extends: '@sbol/eslint-config',

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
    }
}
