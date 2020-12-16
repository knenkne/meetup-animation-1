import axios from 'axios'
import _ from 'lodash'

import { getConfigValue, getConfig } from '../../config'
import useUfsBlockRoot from '../rq/use-ufs-block-root'
import { log } from '../../log'

import logErrors from './log-errors'

const HTTP_CODE_FORBIDDEN = 403
const HTTP_CODE_UNAUTHORIZED = 401
const HTTP_CODE_OK = 200

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

const redirectToLogin = (error) => redirectToWithError(getConfigValue('entry.login.url', 'https://online.sberbank.ru'), error)
const redirectTo500 = (error) => {
    logErrors.handleError(error)
    redirectToWithError(getConfigValue('error.500.url'), error)
}

/**
 * Handle response for reopen session UFS
 * @namespace
 * @property {Function} handleSuccess - Refresh inc
 * @property {Function} handleError - Getting the session
 */

export const axiosClean = axios.create()

const FORBIDDEN = [HTTP_CODE_UNAUTHORIZED, HTTP_CODE_FORBIDDEN]

export default {
    handleError: async (error) => {
        const responseStatus = _.get(error, ['response', 'status'])
        if (FORBIDDEN.includes(responseStatus)) {
            const sessionCreateUrl = getConfigValue('session.create.url', '/sbtsbol/api/ufs/session/create')

            const { status, data } = await axiosClean
                .post(sessionCreateUrl)
                .catch((e) => ({
                    status: e.response.status
                }))

            if (data && data['ufs.block.root.url']) {
                Object.assign(getConfig(), {
                    'ufs.block.root.url': data['ufs.block.root.url']
                })
            }
            switch (status) {
                case HTTP_CODE_UNAUTHORIZED:
                case HTTP_CODE_FORBIDDEN: {
                    return redirectToLogin(error)
                }
                case HTTP_CODE_OK: {
                    return axiosClean(useUfsBlockRoot(error.config))
                        // .then(logSuccess.handleSuccess)
                        .catch(
                            redirectTo500
                        )
                }
                default: {
                    log.error(`${sessionCreateUrl} returned ${status}`)
                    return redirectTo500(error)
                }
            }
        }

        throw error
    }
}
