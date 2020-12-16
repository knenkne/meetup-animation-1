module.exports = {
    plugins: [
        'babel'
    ],

    // https://github.com/babel/eslint-plugin-babel
    // same to common rules but just for next gen features
    rules: {
        // doesn't complain about optional chaining (var foo = bar?.a_b;`)
        'babel/camelcase': ['warn', { properties: 'always' }],

        // doesn't complain about JSX fragment shorthand syntax (<>foo</>;)
        'babel/quotes': ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: false }],

        // doesn't fail when using do expressions or optional chaining (a?.b()).
        'babel/no-unused-expressions': ['error', {
            allowShortCircuit: false,
            allowTernary: false
        }],

        // Ignores capitalized decorators (@Decorator)
        'babel/new-cap': ['off', {
            newIsCap: true,
            newIsCapExceptions: [],
            capIsNew: false,
            capIsNewExceptionPattern: '^Immutable\\..+',
            properties: true,
        }],

        // doesn't fail when inside class properties (class A { a = this.b; })
        'babel/no-invalid-this': 'off',

        // doesn't complain about export x from "mod"; or export * as x from "mod"
        'babel/object-curly-spacing': ['off', 'always'],

        // doesn't fail when using for await (let something of {}). Includes class properties
        'babel/semi': ['off', 'never']
    }
}
