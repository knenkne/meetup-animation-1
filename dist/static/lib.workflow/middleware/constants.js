const workFlowCommands = {
    START: 'START',
    EVENT: 'EVENT',
    ROLLBACK: 'ROLLBACK',
    EXIT: 'EXIT',
    ABORT: 'ABORT',
    HISTORY: 'HISTORY'
}

const statusMappings = {
    ok: {
        code: 200,
        message: 'OK'
    },
    notFound: {
        code: 404,
        message: 'Not found'
    },
    badRequest: {
        code: 400,
        message: 'Bad request data'
    },
    ACTIVE: 'ACTIVE',
    SUCCESS: 'SUCCESS',
    END: 'END',
    TBD: '???TBD???'
}

const eventNames = {
    ON_ENTER: 'on-enter'
}

const DEFAULT_PID = '123456789-pid'
const DEFAULT_DOCUMENT_ID = '123456789-documentId'
const DEFAULT_MESSAGE_UUID = '123456789-messageUUID'

module.exports = {
    workFlowCommands,
    statusMappings,
    eventNames,
    DEFAULT_PID,
    DEFAULT_DOCUMENT_ID,
    DEFAULT_MESSAGE_UUID
}
