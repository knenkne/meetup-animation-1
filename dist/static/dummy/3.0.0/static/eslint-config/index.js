module.exports = {
    globals: {
        DEBUG: true
    },
    env: {
        browser: true,
        es6: true,
        jasmine: true
    },
    extends: [
        './rules/possible-errors',
        './rules/best-practices',
        './rules/strict-mode',
        './rules/variables',
        './rules/node-js-and-common-js',
        './rules/stylistic',
        './rules/es6',
        './rules/react',
        './rules/import',
        './rules/unicorn',
        './rules/promise',
        './rules/sonarjs',
        './rules/a11y',
        './rules/babel',
        './rules/sbol'
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
        ecmaFeatures: {
            arrowFunctions: true,
            blockBindings: true,
            classes: true,
            defaultParams: true,
            destructuring: true,
            jsx: true,
            modules: true,
            objectLiteralShorthandMethods: true,
            objectLiteralShorthandProperties: true,
            spread: true,
            templateStrings: true,
            experimentalObjectRestSpread: true
        }
    },
    rules: {},
    overrides: [
        {
            files: ['**/tests/**', '**/*.spec.js', '**/*.spec.jsx'],
            rules: {
                'no-console': 'off',
                'no-magic-numbers': 'off',
                'no-mixed-operators': 'off',
                'no-underscore-dangle': 'off',
                '@sbol/common/no-cyrillic-outside-cms': 'off',
                'sonarjs/no-duplicate-string': 'off',
                'promise/always-return': 'off',
                'promise/catch-or-return': 'off',
                '@sbol/common/no-package-json-imports': 'off'
            }
        },
        {
            files: [
                '**/analytics/**',
                '**/metrics/**',
                '**/log/**',
                '**/logger/**'
            ],
            rules: {
                '@sbol/common/no-cyrillic-outside-cms': 'off'
            }
        },
        {
            files: ['**/stub/**'],
            rules: {
                'sonarjs/no-duplicate-string': 'off',
                '@sbol/common/no-package-json-imports': 'off'
            }
        }
    ]
}
