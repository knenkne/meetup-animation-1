# Eslint config

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint -D
```

Next, install `@sbol/lib.creditability`

```
$ npm install @sbol/lib.creditability --save
```

## Usage

Add this hack to `.eslintrc` configuration file:

```js
const Module = require('module')

// Hack Node module system to recognize local plugin.
Module._findPath = (original => (name, lookupPaths) => {
    if (name === '@sbol/eslint-config-lib-creditability') {
        return require.resolve('@sbol/lib.creditability/eslint-rules/eslint-config')
    }
    if (name === '@sbol/eslint-plugin-lib-creditability') {
        return require.resolve('@sbol/lib.creditability/eslint-rules/lib')
    }
    return original(name, lookupPaths)
})(Module._findPath)
```

Add `@sbol/lib-creditability` to the `extends` section of your `.eslintrc` configuration file:

```js
extends: [
    '@sbol/lib-creditability'
]
```

Then you can configure the rules you want to use under the `rules` section:

```js
rules: {
    '@sbol/lib-creditability/rule-name': 1
}
```

## Supported Rules

* ### [no-undefined-display-name](./lib/docs/no-undefined-display-name.md) 

    Prevent missing `displayName` in a React component definition.
