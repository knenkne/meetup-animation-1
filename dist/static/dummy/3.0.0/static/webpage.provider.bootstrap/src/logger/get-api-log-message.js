import getTimestamp from '../utils/get-timestamp'

const stringify = (value) => {
    try {
        return JSON.stringify(value)
    } catch (e) {
        return Object(value).toString()
    }
}

const typedStringify = (arg) => {
    if (arg instanceof Error) {
        return arg.name
    } else if (arg instanceof XMLHttpRequest) {
        return void ''
    } else if (arg && arg.__moduleId) {
        return void ''
    }

    return stringify(arg)
}

export const getApiLogMessageFactory = (level) => (...args) => {
    const logBody = {
        level,
        timestamp: getTimestamp(),
        location: window.location.href,
        message: args
            .map(typedStringify)
            .filter((arg) => arg)
            .join(', ')
    }

    // Привязка moduleId
    const moduleId = args.find((arg) => arg && arg.__moduleId)
    if (moduleId) {
        Object.assign(logBody, {
            moduleId: moduleId.__moduleId
        })
    }

    // Привязка ошибки
    const error = args.find((arg) => arg instanceof Error)
    if (error) {
        const { stack, message } = error

        Object.assign(logBody, {
            errorStack: stack,
            errorMessage: message
        })
    }

    // Привязка XHR-запроса
    const ajax = args.find((arg) => arg instanceof XMLHttpRequest)
    if (ajax) {
        const {
            status,
            requestMethod,
            requestURL,
            requestBody,
            responseBody,
            // Модификаторы запроса/ответа для чистки логов от чувствительных данных
            modifyRqUrl,
            modifyRq,
            modifyRs
        } = ajax

        Object.assign(logBody, {
            requestMethod,
            responseStatus: status || 'No server response',
            requestUrl: modifyRqUrl ? modifyRqUrl(requestURL) : requestURL,
            requestBody: modifyRq ? modifyRq(requestBody) : requestBody,
            responseBody: modifyRs ? modifyRs(responseBody) : responseBody,

            // TODO: добавлять только необходимые/валидные заголовки
            // requestHeaders: '{}',
            // responseHeaders: '{}',
        })
    }

    return logBody
}
