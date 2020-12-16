const path = require('path')

const webpack = require('webpack')

process.env.BUILD_TARGET = true

webpack(require(path.resolve(__dirname, '../webpack.config.js')), (error, stats) => {
    if (error) {
        throw error
    }
    console.log(
        `Output:\n${stats.toString({
            chunks: false
        })}`
    )
})
