const _ = require('lodash')

const utils = require('../utils')

const { createValidationMessage } = require('./helpers')
const { NOT_EMPTY_BODY_ERROR, ABSENT_PID, WRONG_PID, MISSING_HISTORY_ID, ABSENT_ROLLBACK_ID } = require('./errors-map')
const { ERROR } = require('./message-types-map')


const rollbackRequest = (req, systemPID/* , state, params */) => {
    const errors = []

    if (!_.isEmpty(req.body)) {
        errors.push(createValidationMessage({ title: NOT_EMPTY_BODY_ERROR, text: NOT_EMPTY_BODY_ERROR, type: ERROR }))
    }

    if (!req.query.pid) {
        errors.push(createValidationMessage({ title: ABSENT_PID, text: ABSENT_PID, type: ERROR }))
    } else if (req.query.pid !== systemPID) {
        errors.push(createValidationMessage({ title: WRONG_PID, text: WRONG_PID, type: ERROR }))
    }

    if (!req.query.name) {
        errors.push(createValidationMessage({ title: ABSENT_ROLLBACK_ID, text: ABSENT_ROLLBACK_ID, type: ERROR }))
    } else {
        const itemExists = utils.isHistoryItemExist(req.query.name, global.flow.history)
        if (!itemExists) {
            errors.push(createValidationMessage({ title: MISSING_HISTORY_ID, text: MISSING_HISTORY_ID, type: ERROR }))
        }
    }

    return errors
}

module.exports = rollbackRequest
