module.exports = {
    plugins: [
        'unicorn'
    ],

    rules: {
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/catch-error-name.md
        // Enforce a specific parameter name in catch clauses.
        // TODO: в этом виде падает линтинг, если использовать имя переменной e
        'unicorn/catch-error-name': ['off', { caughtErrorsIgnorePattern: '^(e|error)$' }],

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/explicit-length-check.md
        // Enforce explicitly comparing the length property of a value.
        // TODO: Discuss this!
        'unicorn/explicit-length-check': 'off',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/filename-case.md
        // Enforce a case style for filenames.
        'unicorn/filename-case': ['warn', { case: 'kebabCase' }],

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-abusive-eslint-disable.md
        // Enforce specifying rules to disable in eslint-disable comments.
        'unicorn/no-abusive-eslint-disable': 'warn',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-process-exit.md
        // Disallow process.exit().
        'unicorn/no-process-exit': 'error',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/throw-new-error.md
        // Require new when throwing an error.
        'unicorn/throw-new-error': 'error',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/number-literal-case.md
        // Enforce lowercase identifier and uppercase value for number literals.
        'unicorn/number-literal-case': 'error',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/escape-case.md
        // Require escape sequences to use uppercase values.
        'unicorn/escape-case': 'warn',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-array-instanceof.md
        // Require Array.isArray() instead of instanceof Array.
        'unicorn/no-array-instanceof': 'warn',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-new-buffer.md
        // Enforce the use of Buffer.from() and Buffer.alloc() instead of the deprecated new Buffer().
        'unicorn/no-new-buffer': 'error',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-hex-escape.md
        // Enforce the use of unicode escapes instead of hexadecimal escapes.
        'unicorn/no-hex-escape': 'error',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/custom-error-definition.md
        // Enforce correct Error subclassing.
        'unicorn/custom-error-definition': 'warn',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-starts-ends-with.md
        // Prefer String#startsWith & String#endsWith over more complex alternatives.
        // TODO: IE11, polyfill
        'unicorn/prefer-starts-ends-with': 'off',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-type-error.md
        // Enforce throwing TypeError in type checking conditions.
        'unicorn/prefer-type-error': 'error',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-fn-reference-in-iterator.md
        // Prevents passing a function reference directly to iterator methods.
        // TODO: Discuss this!
        'unicorn/no-fn-reference-in-iterator': 'off',

        // Enforce importing index files with ..
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/import-index.md
        'unicorn/import-index': 'warn',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/new-for-builtins.md
        // Enforce the use of new for all builtins, except String, Number and Boolean.
        'unicorn/new-for-builtins': 'error',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/better-regex.md
        // Enforce the use of regex shorthands to improve readability.
        'unicorn/regex-shorthand': 'warn',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-spread.md
        // Prefer the spread operator over Array.from().
        'unicorn/prefer-spread': 'error',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/error-message.md
        // Enforce passing a message value when throwing a built-in error.
        'unicorn/error-message': 'error',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-unsafe-regex.md
        // Disallow unsafe regular expressions.
        'unicorn/no-unsafe-regex': 'warn',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-add-event-listener.md
        // Prefer addEventListener over on-functions.
        'unicorn/prefer-add-event-listener': 'error',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-exponentiation-operator.md
        // Prefer the exponentiation operator over Math.pow()
        // TODO: babel
        'unicorn/prefer-exponentiation-operator': 'off',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-console-spaces.md
        // Do not use leading/trailing space between console.log parameters.
        'unicorn/no-console-spaces': 'off'
    }
}
