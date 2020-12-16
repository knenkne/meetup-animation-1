module.exports = function babelConfig (api) {
    api.cache(true)

    const env = {
        test: {
            presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-flow'
            ],
            plugins: ['@babel/transform-runtime', 'dynamic-import-node']
        }
    }

    const presets = [
        [
            '@babel/preset-env',
            {
                modules: false,
                targets: {
                    browsers: ['last 2 versions', '> 1%', 'not ie < 11']
                }
            }
        ],
        '@babel/preset-react',
        '@babel/preset-flow'
    ]

    const plugins = [
        '@babel/plugin-proposal-export-namespace-from', /* Stage 2 (NEW FOR US) */
        '@babel/plugin-syntax-dynamic-import', /* Stage 3 */
        '@babel/plugin-syntax-class-properties', /* Stage 3 */
        ['@babel/plugin-syntax-decorators', { legacy: true }], /* Stage 2 */
        '@babel/plugin-proposal-class-properties', /* Stage 3 */
        ['@babel/plugin-transform-classes', { loose: true }], /* Есть в preset env, но мы используем с loose */
        '@babel/plugin-transform-proto-to-assign' /* Proto нам не нужен (он устарел) */
    ]

    return {
        presets,
        plugins,
        env
    }
}
