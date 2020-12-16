const has = require('has')

const allRules = {
    'no-warning-comments-regexp': require('./lib/rules/no-warning-comments-regexp'),
    'jsx-no-tag-anchor': require('./lib/rules/jsx-no-tag-anchor'),
    'jsx-no-tag-button-without-type': require('./lib/rules/jsx-no-tag-button-without-type'),
    'jsx-string-props': require('./lib/rules/jsx-string-props'),
    'no-direct-imports': require('./lib/rules/no-direct-imports'),
    'no-end-slash-imports': require('./lib/rules/no-end-slash-imports'),
    'no-index-imports': require('./lib/rules/no-index-imports'),
    'no-cyrillic-outside-cms': require('./lib/rules/no-cyrillic-outside-cms'),
    'no-package-json-imports': require('./lib/rules/no-package-json-imports'),
}

function filterRules (rules, predicate) {
    const result = {}
    for (const key in rules) {
        if (has(rules, key) && predicate(rules[key])) {
            result[key] = rules[key]
        }
    }
    return result
}

function configureAsError (rules) {
    const result = {}
    for (const key in rules) {
        if (!has(rules, key)) {
            continue
        }
        result['@sbol/common/' + key] = 2
    }
    return result
}

const activeRules = filterRules(allRules, function (rule) {
    return !rule.meta.deprecated
})
const activeRulesConfig = configureAsError(activeRules)

const deprecatedRules = filterRules(allRules, function (rule) {
    return rule.meta.deprecated
})

module.exports = {
    deprecatedRules: deprecatedRules,
    rules: allRules,
    configs: {
        recommended: {
            plugins: [
                '@sbol/common'
            ],
            rules: {
                '@sbol/common/no-warning-comments-regexp': 2,
                '@sbol/common/jsx-string-props': 1,
                '@sbol/common/jsx-no-tag-anchor': 2,
                '@sbol/common/jsx-no-tag-button-without-type': 1,
                '@sbol/common/no-cyrillic-outside-cms': 2,
                '@sbol/common/no-direct-imports': 1,
                '@sbol/common/no-end-slash-imports': 1,
                '@sbol/common/no-index-imports': 2,
                '@sbol/common/no-package-json-imports': 2
            }
        },
        all: {
            plugins: [
                '@sbol/common'
            ],
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            rules: activeRulesConfig
        }
    }
}
