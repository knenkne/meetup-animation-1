const _ = require('lodash')
const express = require('express')
const bodyParser = require('body-parser')

const { flushServerState } = require('../workflow/helpers')
const { getMiddleware } = require('../')

const app = express()

const DEFAULT_PORT = 3000
const DEFAULT_ENDPOINT = '/test'

const makeServer = (flowConfigs = []) => {
    app.use(bodyParser.json())

    _.forEach(flowConfigs, (schema) => {
        app.use(_.get(schema, 'endPoint', DEFAULT_ENDPOINT), getMiddleware(schema))
    })

    return app.listen(DEFAULT_PORT)
}

module.exports = {
    makeServer,
    flushServerState
}
