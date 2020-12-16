module.exports = {
    parser: 'babel-eslint',
    extends: '@sbol/eslint-config',
    settings: {
        'import/resolver': {
            webpack: {
                config: './node_modules/@sbol/webpack-config/webpack.config.js'
            }
        }
    },
    overrides: [
        {
            files: ['**/tests/**', '**/*.spec.js', '**/*.spec.jsx'],
            rules: {
                'no-console': 0,
                'no-magic-numbers': 0,
                'no-mixed-operators': 0,
                'no-underscore-dangle': 0,
                '@sbol/common/no-cyrillic-outside-cms': 0,
                'no-undef': 0
            }
        }
    ]
}
