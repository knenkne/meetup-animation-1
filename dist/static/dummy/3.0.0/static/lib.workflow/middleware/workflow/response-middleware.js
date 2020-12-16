const _ = require('lodash')

const { responseFactory, responseErrorFactory, responseEndFactory, responseSubFlowFactory } = require('../utils')
const { END } = require('../constants').statusMappings

const { flushServerState } = require('./helpers')


const responseMiddleware = (req, res) => {
    let response = {}
    const { state } = global.flow
    const { form: { data }, end = [] } = res.locals

    if (!res.validateAndSend) {
        res.validateAndSend = res.send
    }

    if (data.subFlow === true) {
        const { result, url, pid } = data
        return res.validateAndSend(responseSubFlowFactory(result, url, pid))
    }

    if (state === END) {
        response = responseEndFactory({})
        flushServerState()
    } else if (_.includes(end, _.toString(state))) {
        response = responseEndFactory(data)
        flushServerState()
    } else if (!_.isEmpty(data.messages)) {
        response = responseErrorFactory(data)
    } else {
        response = responseFactory(data)
    }

    return res.validateAndSend(response)
}

module.exports = responseMiddleware
