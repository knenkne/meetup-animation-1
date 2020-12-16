const _ = require('lodash')

const PLUGIN_NAME = '@sbol/lib-creditability'

const allRules = {
    'no-undefined-display-name': require('./rules/no-undefined-display-name'),
    'no-includes': require('./rules/no-includes')
}

const filterRules = (rules, predicate) => {
    const result = {}
    _.forEach(rules, (value, key) => {
        if (_.has(rules, key) && predicate(rules[key])) {
            result[key] = rules[key]
        }
    })
    return result
}

const configureAsWarning = (rules) => {
    const result = {}
    _.forEach(rules, (value, key) => {
        if (_.has(rules, key)) {
            result[`${PLUGIN_NAME}/${key}`] = 1
        }
    })
    return result
}

const activeRules = filterRules(allRules, (rule) => !rule.meta.deprecated)
const activeRulesConfig = configureAsWarning(activeRules)
const deprecatedRules = filterRules(allRules, (rule) => rule.meta.deprecated)

module.exports = {
    deprecatedRules,
    rules: allRules,
    env: {
        browser: true,
        es6: true,
        jasmine: true
    },
    parserOptions: {
        ecmaVersion: 2017,
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
    configs: {
        recommended: {
            plugins: [
                PLUGIN_NAME
            ],
            rules: {
                [`${PLUGIN_NAME}/no-undefined-display-name`]: [1, { isCapitalizedOnly: true }],
                [`${PLUGIN_NAME}/no-includes`]: [2, { acceptedObjects: ['_'] }],
            }
        },
        all: {
            plugins: [
                PLUGIN_NAME
            ],
            rules: activeRulesConfig
        }
    }
}
