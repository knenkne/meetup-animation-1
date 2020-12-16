const path = require('path')

const postcssCustomProperties = require('postcss-custom-properties')
const postcssNested = require('postcss-nested')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const pkg = require('../package')

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        library: 'bootstrap',
        path: path.resolve(__dirname, '..', 'target'),
        publicPath: `/${pkg.name.replace('@sbol/', '')}/${process.env.VERSION ||
            pkg.customVersion ||
            pkg.version}/`,
        libraryExport: 'default',
        // Даем разрешение логировать ошибки js из чанков
        crossOriginLoading: 'anonymous'
    },
    module: {
        rules: [
            { parser: { system: false } },
            {
                test: /\.js?$/,
                exclude: /node_modules[\\/].*/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader',
                options: {
                    removeTags: true,
                    removingTags: [
                        'title',
                        'desc'
                    ],
                    removeSVGTagAttrs: false
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            // css-modules используются для изоляции классов
                            modules: true,
                            // Впереди лоадера есть еще 1 лоадер
                            importLoaders: 1,
                            // Также импортировать идентификаторы классов в виде camelCase (помимо kebab-case)
                            camelCase: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                // div { div {} }
                                postcssNested,
                                postcssCustomProperties
                            ]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: path.resolve(process.cwd(), 'locales', '*.json'),
                to: 'locales',
                flatten: true
            }
        ]),
    ]
}
