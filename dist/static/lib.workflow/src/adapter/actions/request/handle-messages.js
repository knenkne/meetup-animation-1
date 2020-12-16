import _ from 'lodash'
import { setSubmitFailed, stopSubmit } from 'redux-form'
import { getConfigValue, log } from '@sbol/lib.app'

import { parseValidationMessages } from '../utils'
import { setServerValidationError, updateMessages } from '../actions'

const handleFraud = (messages) => {
    const fraudMessage = messages.find((message) => message.type === 'fraud')
    if (fraudMessage) {
        log.error(new Error(fraudMessage))
        alert(`${fraudMessage.title || ''} ${fraudMessage.text || ''}`)

        switch (fraudMessage.code) {
            case 'logout': {
                window.location = getConfigValue('entry.login.url', 'https://online.sberbank.ru')
                break
            }
            case 'review':
            case 'deny':
            default: {
                window.history.back()
                break
            }
        }
    }
}

export const handleMessages = (formName, messages) => (dispatch) => {
    let serverValidationErrors = {}
    if (!_.isEmpty(messages)) {
        handleFraud(messages)

        serverValidationErrors = parseValidationMessages(messages)

        // Обновляем messages workflow (все)
        dispatch(updateMessages(messages))
    }

    // Устанавливаем признак окончания сабмита формы и присваиваем тексты ошибок
    dispatch(stopSubmit(formName, serverValidationErrors))
    dispatch(setServerValidationError(serverValidationErrors))
    if (!_.isEmpty(serverValidationErrors)) {
        // Устанавливаем признак ошибки сабмита формы и идентификаторы полей, которые не прошли валидацию
        dispatch(setSubmitFailed(formName, ...Object.keys(serverValidationErrors)))
    }
}
