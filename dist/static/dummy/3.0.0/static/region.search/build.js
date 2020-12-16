const webpack = require('webpack')

webpack(require('./webpack.config'), (err, stats) => {
    if (err) {
        throw new Error('Webpack', err)
    }
    console.log(
        `Output:\n${stats.toString({
            chunks: false
        })}`
    )
})
