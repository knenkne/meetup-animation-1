const path = require('path')

const express = require('express')

const app = express()

module.exports = (port) => new Promise((resolve) => {
    app
        .use(express.static(path.resolve('target')))
        .listen(
            port,
            () => {
                console.log(`Start static server with target on port ${port}`)
                resolve()
            }
        )
})
