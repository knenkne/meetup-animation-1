const webpack = require('webpack')

process.env.BUILD_TARGET = true

webpack(require('./webpack.config.js'), (error, stats) => {
    if (error) {
        throw error
    }
    // eslint-disable-next-line no-console, comment: лог для сборки
    console.log(
        `Output:\n${stats.toString({
            chunks: false
        })}`
    )
})
