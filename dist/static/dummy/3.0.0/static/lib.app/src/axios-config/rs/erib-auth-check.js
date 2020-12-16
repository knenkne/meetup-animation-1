import _ from 'lodash'

import { getConfigValue } from '../../config'

const redirectToWithError = (url, error) => {
    if (typeof window === 'object') {
        if (process.env.MODE === 'testing') {
            // Для тестов возвращаем адрес редиректа
            window.locationStub = url
        } else {
            window.location = url
        }
    }
    return Promise.reject(error)
}


const HTTP_CODE_UNAUTHORIZED = 401
const HTTP_CODE_FORBIDDEN = 403

const AUTH_CODES = [HTTP_CODE_UNAUTHORIZED, HTTP_CODE_FORBIDDEN]

/**
 * Handle response with 401 or 403 status
 * @namespace
 * @property {Function} handleSuccess - identity
 * @property {Function} handleError - full page reload
 */
export default {
    handleError: (error) => {
        if (AUTH_CODES.includes(_.get(error, ['response', 'status']))) {
            redirectToWithError(getConfigValue('entry.login.url', 'https://online.sberbank.ru'), error)
        }

        return Promise.reject(error)
    }
}
