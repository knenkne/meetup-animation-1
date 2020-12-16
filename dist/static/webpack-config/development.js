require('./webpack/utils/default-envs')

process.env.NODE_ENV = 'development'

const webpack = require('webpack')
const merge = require('webpack-merge')

const base = require('./webpack/base')

module.exports = merge(
    process.env.BUILD_TARGET ? {} : {
        entry: [
            // Добавляет в сборку слушатель изменений
            'webpack-hot-middleware/client',
            // Позволяет первоочередно добавить react-hot-reload
            'react-hot-loader/patch'
        ]
    },
    base,
    {
        plugins: [
            new webpack.SourceMapDevToolPlugin(),
            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin()
        ],
        cache: true,
        devtool: 'cheap-module-eval-source-map'
    }
)
