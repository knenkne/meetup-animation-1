const router = require('express').Router()

const { getMiddleware } = require('../../../middleware')

module.exports = router
    .use(require('@sbol/region.scaffold/stub/api/public'))
    // flows
    .use('/UFS/events', getMiddleware(require('./flows/events')))
    .use('/UFS/params-event', getMiddleware(require('./flows/params-event')))
    .use('/UFS/examples-personal-data', getMiddleware(require('./flows/examples-personal-data')))
    .use('/UFS/examples-platform-widgets', getMiddleware(require('./flows/examples-platform-widgets')))
    .use('/UFS/examples-status-proposal', getMiddleware(require('./flows/examples-status-proposal')))
    .use('/UFS/examples-multi-widget', getMiddleware(require('./flows/examples-multi-widget')))
    .use('/UFS/examples-accessibility', getMiddleware(require('./flows/examples-accessibility')))
    .use('/UFS/formats', getMiddleware(require('./flows/formats')))
    .use('/UFS/messages', getMiddleware(require('./flows/messages')))
    .use('/UFS/only-fields', getMiddleware(require('./flows/only-fields')))
    .use('/UFS/only-references', getMiddleware(require('./flows/only-references')))
    .use('/UFS/screen', getMiddleware(require('./flows/screen')))
    .use('/UFS/server-validation', getMiddleware(require('./flows/server-validation')))
    .use('/UFS/sub-flows', getMiddleware(require('./flows/sub-flows')))
    .use('/UFS/sub-flows-sub', getMiddleware(require('./flows/sub-flows').sub))
    .use('/UFS/sync-validation', getMiddleware(require('./flows/sync-validation')))
    .use('/UFS/types', getMiddleware(require('./flows/types')))
    .use('/UFS/visible', getMiddleware(require('./flows/visible')))
    .use('/UFS/strategies', getMiddleware(require('./flows/strategy')))
    .use('/UFS/core-buttons', getMiddleware(require('./flows/core-buttons')))
    .use('/UFS/hide-widget-strategy', getMiddleware(require('./flows/hide-widget-strategy')))

    .use('/UFS/region-sub-flows', getMiddleware(require('./flows/region-sub-flows')))
    .use('/UFS/region-sub-flows-sub', getMiddleware(require('./flows/region-sub-flows-sub')))

    // not middleware flows
    .use('/UFS/fatal-error', require('./handlers/fatal-error'))
    .use('/UFS/event-error', require('./handlers/event-error'))
    .use('/UFS/event-error-with-screens', require('./handlers/event-error-with-screens'))
    .use('/UFS/custom-start-event', require('./handlers/custom-start-event'))

    // technical
    .post([
        '/api/init',
        '/api/warmUpSession',
        '/api/log',
        '/api/log/v2',
        '/sbtsbol/api/init',
        '/sbtsbol/api/warmUpSession',
        '/sbtsbol/api/log',
        '/sbtsbol/api/log/v2'
    ], (req, res) => res.send({}))
