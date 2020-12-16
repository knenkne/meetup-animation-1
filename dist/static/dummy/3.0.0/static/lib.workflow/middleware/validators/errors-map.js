const errors = {
    MISSING_QUERY_CMD: 'Request does not have required cmd property',
    MISSING_QUERY_NAME: 'Request does not have required name property',
    EMPTY_BODY_ERROR: 'Body is empty',
    NOT_EMPTY_BODY_ERROR: 'Body should be empty',
    MISSING_FIELD_ITEMS: 'Provided fields" keys do not fully or partially match against step" fields',
    ABSENT_PID: 'Request query should have pid',
    WRONG_PID: 'Process does not exist. provided process id is not correct',
    MISSING_HISTORY_ID: 'There is no step with provided history id in system',
    ABSENT_ROLLBACK_ID: 'Request query should have destination name for rollback',
    WRONG_EVENT_NAME: 'Event name could not be fired for current state'
}

module.exports = errors
