module.exports = {
    parser: 'babel-eslint',
    extends: 'sbtsbol',
    settings: {
        'import/resolver': {
            webpack: {
                config: './node_modules/@sbol/webpack-config/webpack.config.js'
            }
        }
    }
}
