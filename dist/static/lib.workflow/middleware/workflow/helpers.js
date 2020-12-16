const _ = require('lodash')

const statuses = require('../constants').statusMappings

const shouldBeSkippedOnMessages = (messages) => !_.isEmpty(messages)
const shouldBeSkippedOnMessagesAndEnd = (messages, state) => !_.isEmpty(messages) || state === statuses.END
const shouldBeSkippedOnEnd = (state) => state === statuses.END

// TODO: кто вообще придумал юзать тут global????
const flushServerState = () => {
    if (!flushServerState.stopped) {
        global.flow = {
            history: [],
            mappings: {},
            pid: null,
            values: {},
            state: null,
            flowName: null,
            document: {
                documentId: null,
                templateId: null,
                srcDocumentId: null
            }
        }
    }

    return void 0
}

const stopAutoFlush = () => {
    flushServerState.stopped = true
}

const startAutoFlush = () => {
    flushServerState.stopped = false
}

const ifDocumentExists = (documentId) => !_.isNull(global.flow.document.documentId) && (global.flow.document.documentId === documentId)
const isSameFlow = (flowName) => global.flow.flowName === flowName

module.exports = {
    shouldBeSkippedOnMessages,
    shouldBeSkippedOnMessagesAndEnd,
    shouldBeSkippedOnEnd,
    flushServerState,
    startAutoFlush,
    stopAutoFlush,
    ifDocumentExists,
    isSameFlow
}
