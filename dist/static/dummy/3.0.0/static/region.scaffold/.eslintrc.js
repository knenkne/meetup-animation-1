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
    },
    overrides: [
        {
            files: ["*.spec.js", "*.spec.jsx", "fixture.js"],
            rules: {
                '@sbol/common/no-cyrillic-outside-cms': 'off',
                'no-magic-numbers': 'off',
                'max-lines': 'off',
                '@sbol/common/no-warning-comments-regexp': 'off',
                'unicorn/filename-case': 'off',
                'react/jsx-curly-brace-presence': 'off',
                'unicorn/no-hex-escape': 'off'
            }
        },
        {
            files: ['*'],
            rules: {
                'promise/prefer-await-to-then': 'off',
                'promise/always-return': 'off',
                'react/jsx-curly-brace-presence': 'off',
                'promise/catch-or-return': 'off',
                'unicorn/no-hex-escape': 'off'
            }
        },
        // TODO: линтер для стилей стайледа
        {
            files: ['*.styles.js'],
            rules: {
                'sonarjs/no-identical-functions': 'off',
                'no-use-before-define': 'off'
            }
        }
    ]
}
