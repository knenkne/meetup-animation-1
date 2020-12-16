module.exports = {
    plugins: [
        'promise'
    ],

    rules: {
        // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/always-return.md
        // Return inside each then() to create readable and reusable Promise chains
        'promise/always-return': 'warn',

        // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-return-wrap.md
        // Avoid wrapping values in Promise.resolve or Promise.reject when not needed
        'promise/no-return-wrap': ['error', { allowReject: true }],

        // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/param-names.md
        // Enforce consistent param names when creating new promises
        'promise/param-names': 'warn',

        // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/catch-or-return.md
        // Enforces the use of catch() on un-returned promises
        'promise/catch-or-return': ['warn', { terminationMethod: ['catch', 'finally'] }],

        // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-native.md
        // In an ES5 environment, make sure to create a Promise constructor before using
        'promise/no-native': 'off',

        // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-nesting.md
        // Avoid nested then() or catch() statements
        'promise/no-nesting': 'warn',

        // https://github.com/xjamundx/eslint-plugin-promise/blob/master/__tests__/no-promise-in-callback.js
        // Avoid using promises inside of callbacks
        'promise/no-promise-in-callback': 'off',

        // https://github.com/xjamundx/eslint-plugin-promise/blob/master/__tests__/no-callback-in-promise.js
        // Avoid calling cb() inside of a then()
        'promise/no-callback-in-promise': 'off',

        // https://github.com/xjamundx/eslint-plugin-promise/blob/master/__tests__/avoid-new.js
        // Avoid creating new promises outside of utility libs
        'promise/avoid-new': 'off',

        // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-new-statics.md
        // Avoid calling new on a Promise static method
        'promise/no-new-statics': 'error',

        // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-return-in-finally.md
        // Disallow return statements in finally()
        'promise/no-return-in-finally': 'warn',

        // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/valid-params.md
        // Ensures the proper number of arguments are passed to Promise functions
        'promise/valid-params': 'warn',

        // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/prefer-await-to-then.md
        // Prefer await to then() for reading Promise values
        'promise/prefer-await-to-then': 'warn',

        // https://github.com/xjamundx/eslint-plugin-promise/blob/master/__tests__/prefer-await-to-callbacks.js
        // Prefer async/await to the callback pattern
        'promise/prefer-await-to-callbacks': 'off'
    }
}
