const path = require('path')

const express = require('express')
const { version } = require('@sbol/webpack-config/package')

const getStub = require('../getters/get-stub')

const app = express()

module.exports = (port) => new Promise((resolve) => {
    getStub()(app)

    app
        .use(express.static(path.resolve('target')))
        .listen(
            port,
            () => {
                console.log(`Start @sbol/webpack-config@${version} stub with target on port ${port}`)
                resolve()
            }
        )
})
