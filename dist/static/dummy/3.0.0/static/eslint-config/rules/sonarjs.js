module.exports = {
    plugins: [
        'sonarjs'
    ],

    rules: {
        // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/27e9d7e4567b15b573cc10adf55e14f215177032/docs/rules/no-all-duplicated-branches.md
        // All branches in a conditional structure should not have exactly the same implementation
        'sonarjs/no-all-duplicated-branches': 'error',

        // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/27e9d7e4567b15b573cc10adf55e14f215177032/docs/rules/no-element-overwrite.md
        // Collection elements should not be replaced unconditionally
        'sonarjs/no-element-overwrite': 'warn',

        // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/27e9d7e4567b15b573cc10adf55e14f215177032/docs/rules/no-extra-arguments.md
        // Function calls should not pass extra arguments
        'sonarjs/no-extra-arguments': 'error',

        // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/27e9d7e4567b15b573cc10adf55e14f215177032/docs/rules/no-identical-conditions.md
        // Related "if/else if" statements should not have the same condition
        'sonarjs/no-identical-conditions': 'error',

        // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/27e9d7e4567b15b573cc10adf55e14f215177032/docs/rules/no-identical-expressions.md
        // Identical expressions should not be used on both sides of a binary operator
        'sonarjs/no-identical-expressions': 'error',

        // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/27e9d7e4567b15b573cc10adf55e14f215177032/docs/rules/no-one-iteration-loop.md
        // Loops with at most one iteration should be refactored
        'sonarjs/no-one-iteration-loop': 'error',

        // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/27e9d7e4567b15b573cc10adf55e14f215177032/docs/rules/no-use-of-empty-return-value.md
        // The output of functions that don't return anything should not be used
        'sonarjs/no-use-of-empty-return-value': 'error',

        // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/27e9d7e4567b15b573cc10adf55e14f215177032/docs/rules/cognitive-complexity.md
        // Cognitive Complexity of functions should not be too high
        // eslint/complexity
        'sonarjs/cognitive-complexity': 'off',

        // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/27e9d7e4567b15b573cc10adf55e14f215177032/docs/rules/max-switch-cases.md
        // "switch" statements should not have too many "case" clauses
        'sonarjs/max-switch-cases': ['warn', 10],

        // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/27e9d7e4567b15b573cc10adf55e14f215177032/docs/rules/no-duplicate-string.md
        // String literals should not be duplicated
        'sonarjs/no-duplicate-string': ['warn', 3],

        // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/27e9d7e4567b15b573cc10adf55e14f215177032/docs/rules/no-duplicated-branches.md
        // Two branches in a conditional structure should not have exactly the same implementation
        'sonarjs/no-duplicated-branches': 'warn',

        // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/27e9d7e4567b15b573cc10adf55e14f215177032/docs/rules/no-identical-functions.md
        // Functions should not have identical implementations
        'sonarjs/no-identical-functions': 'warn',

        // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/27e9d7e4567b15b573cc10adf55e14f215177032/docs/rules/no-inverted-boolean-check.md
        // Boolean checks should not be inverted
        'sonarjs/no-inverted-boolean-check': 'error',

        // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/27e9d7e4567b15b573cc10adf55e14f215177032/docs/rules/no-redundant-boolean.md
        // Boolean literals should not be redundant
        'sonarjs/no-redundant-boolean': 'warn',

        // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/27e9d7e4567b15b573cc10adf55e14f215177032/docs/rules/no-small-switch.md
        // "switch" statements should have at least 3 "case" clauses
        'sonarjs/no-small-switch': 'warn',

        // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/27e9d7e4567b15b573cc10adf55e14f215177032/docs/rules/no-useless-catch.md
        // "catch" clauses should do more than rethrow
        'sonarjs/no-useless-catch': 'error',

        // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/27e9d7e4567b15b573cc10adf55e14f215177032/docs/rules/prefer-immediate-return.md
        // Local variables should not be declared and then immediately returned or thrown
        'sonarjs/prefer-immediate-return': 'warn',

        // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/27e9d7e4567b15b573cc10adf55e14f215177032/docs/rules/prefer-object-literal.md
        // Object literal syntax should be used
        'sonarjs/prefer-object-literal': 'error',

        // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/27e9d7e4567b15b573cc10adf55e14f215177032/docs/rules/prefer-single-boolean-return.md
        // Return of boolean expressions should not be wrapped into an "if-then-else" statement
        // TODO: не работает с `if (condition) { return true }; return false`
        'sonarjs/prefer-single-boolean-return': 'off',

        // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/27e9d7e4567b15b573cc10adf55e14f215177032/docs/rules/prefer-while.md
        // A "while" loop should be used instead of a "for" loop
        'sonarjs/prefer-while': 'error'
    }
}
