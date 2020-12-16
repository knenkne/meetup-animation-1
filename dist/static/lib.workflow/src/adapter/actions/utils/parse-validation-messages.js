import { CONFIRMATION_EXCLUDES, messageTypes } from '../../../constants'

const emptyString = ''

const warningForConfirmation = `lib.workflow c версии 4.0.0 будут отключен показ сообщений с кодами:
'${CONFIRMATION_EXCLUDES.join(' || ')}' и type === 'error' под полем ввода.
 Необходимо прислать сообщения с type: 'validation'`

export const parseValidationMessages = (messages = []) =>
    messages.reduce((result, message) => {
        const { type, code, title = emptyString, text = emptyString } = message

        if (process.env.NODE_ENV !== 'production' && type === messageTypes.VALIDATION && !code) {
            throw new Error('Отсутствует обязательный атрибут code для message с типом \'validation\'')
        }

        const standardValidation = code && type === messageTypes.VALIDATION

        const confirmationException = CONFIRMATION_EXCLUDES.includes(message.code) &&
            message.type === messageTypes.ERROR

        if (process.env.NODE_ENV !== 'production' && confirmationException) {
            console.warn(warningForConfirmation)
        }

        return standardValidation || confirmationException
            ? Object.assign(result, { [code]: `${title} ${text}` })
            : result
    }, {})
