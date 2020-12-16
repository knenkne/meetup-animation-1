import _ from 'lodash'
import { initialize, reset, destroy } from 'redux-form'

import { RESULT_END } from '../../../constants'
import { noScreensResponse } from '../utils'
import { update, updateReferences } from '../actions'
import { getFieldsFromScreens } from '../../utils'

const getNormalValue = (field) => {
    if (field.type === 'multiselect') {
        return field.values
    }

    if (field.type === 'checkbox') {
        return field.value === 'true'
    }

    return field.value
}

export const handleView = (formName, responseBody = {}, result) => (dispatch) => {
    const {
        body: {
            output: {
                fields = {},
                screens = [],
                references = {}
            } = {}
        } = {}
    } = responseBody

    if (!_.isEmpty(fields)) {
        dispatch(destroy(formName))
        dispatch(initialize(formName, fields, false))
        dispatch(reset(formName))
    } else if (!_.isEmpty(screens)) {
        const nextValues = {
            // TODO: дублирует src/adapter/utils/value-transform/normalize-value.js
            ..._.reduce(getFieldsFromScreens(screens), (memo, field) => {
                memo[field.id] = getNormalValue(field)
                return memo
            }, {}),
            ...fields
        }
        dispatch(destroy(formName))
        dispatch(initialize(formName, nextValues, false))
        dispatch(reset(formName))
        // Обновляем данные экранных форм, если в ответе есть экраны
        dispatch(update(responseBody))
    } else if (result === RESULT_END) {
        // Принудительно обновляем состояние без экранов
        dispatch(update(noScreensResponse(responseBody)))
    } else if (!_.isEmpty(references)) {
        // Обновляем справочники, если они есть
        dispatch(updateReferences(references))
    }
}
