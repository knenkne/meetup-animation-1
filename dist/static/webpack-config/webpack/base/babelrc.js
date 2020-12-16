module.exports = {
    babelrc: false,
    cacheDirectory: true,
    presets: [
        [
            '@babel/preset-env',
            {
                modules: false,
                targets: {
                    browsers: ['last 2 versions', '> 1%', 'not ie < 11']
                },
                // debug: true // to get the list below
                // proposal-numeric-separator { "ie":"10", "ios":"12.2" }
                // proposal-logical-assignment-operators { "android":"83", "chrome":"83", "edge":"83", "firefox":"78", "ie":"10", "ios":"12.2", "opera":"68", "safari":"13", "samsung":"11.1" }
                // proposal-nullish-coalescing-operator { "ie":"10", "ios":"12.2", "safari":"13", "samsung":"11.1" }
                // proposal-optional-chaining { "ie":"10", "ios":"12.2", "safari":"13", "samsung":"11.1" }
                // proposal-json-strings { "ie":"10" }
                // proposal-optional-catch-binding { "ie":"10" }
                // transform-parameters { "ie":"10" }
                // proposal-async-generator-functions { "ie":"10" }
                // proposal-object-rest-spread { "ie":"10" }
                // transform-dotall-regex { "ie":"10" }
                // proposal-unicode-property-regex { "ie":"10" }
                // transform-named-capturing-groups-regex { "ie":"10" }
                // transform-async-to-generator { "ie":"10" }
                // transform-exponentiation-operator { "ie":"10" }
                // transform-template-literals { "ie":"10", "ios":"12.2" }
                // transform-literals { "ie":"10" }
                // transform-function-name { "ie":"10" }
                // transform-arrow-functions { "ie":"10" }
                // transform-block-scoped-functions { "ie":"10" }
                // transform-classes { "ie":"10" }
                // transform-object-super { "ie":"10" }
                // transform-shorthand-properties { "ie":"10" }
                // transform-duplicate-keys { "ie":"10" }
                // transform-computed-properties { "ie":"10" }
                // transform-for-of { "ie":"10" }
                // transform-sticky-regex { "ie":"10" }
                // transform-unicode-escapes { "ie":"10" }
                // transform-unicode-regex { "ie":"10" }
                // transform-spread { "ie":"10" }
                // transform-destructuring { "ie":"10" }
                // transform-block-scoping { "ie":"10" }
                // transform-typeof-symbol { "ie":"10" }
                // transform-new-target { "ie":"10" }
                // transform-regenerator { "ie":"10" }
                // proposal-export-namespace-from { "firefox":"78", "ie":"10", "ios":"12.2", "safari":"13" }
                // syntax-dynamic-import { "android":"83", "chrome":"83", "edge":"83", "firefox":"78", "ie":"10", "ios":"12.2", "opera":"68", "safari":"13", "samsung":"11.1" }
            }
        ],
        '@babel/preset-react',
        '@babel/preset-flow'
    ],
    plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }], /* Stage 2 */
        ['@babel/plugin-proposal-class-properties', { loose: false }], /* Stage 3 */
        '@babel/plugin-transform-property-mutators',
        '@babel/plugin-syntax-class-properties', /* Stage 3 */
        '@babel/plugin-transform-proto-to-assign', /* Proto нам не нужен (он устарел) */
        '@babel/plugin-transform-classes',
        // TODO: revert with _.chain problem solution
        // 'lodash',
    ]
}

if (process.env.NODE_ENV === 'development') {
    module.exports.plugins
        .push('react-hot-loader/babel')
}

if (process.env.MODE === 'testing') {
    module.exports.plugins
        .push(['babel-plugin-istanbul', {
            exclude: ['**/*.spec.js?(x)']
        }])
}
