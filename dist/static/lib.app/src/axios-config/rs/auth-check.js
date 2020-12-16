import _ from 'lodash'

import { getConfigValue } from '../../config'
import { log } from '../../log'

const HTTP_CODE_UNAUTHORIZED = 401
const HTTP_CODE_FORBIDDEN = 403

const AUTH_CODES = [HTTP_CODE_UNAUTHORIZED, HTTP_CODE_FORBIDDEN]

const isRequestToUfs = (url) => getConfigValue('ufs.block.root.url') &&
    url.startsWith(getConfigValue('ufs.block.root.url'))

/**
 * Handle response with 401 or 403 status
 * @namespace
 * @property {Function} handleSuccess - identity
 * @property {Function} handleError - full page reload
 */
export default {
    handleError: (error) => {
        const statusCode = _.get(error, ['response', 'status'])

        if (
            AUTH_CODES.includes(statusCode) &&
            // URL запроса не содержит ufs.block.root.url
            !isRequestToUfs(_.get(error, ['config', 'url'], ''))
        ) {
            log.error(error, 'Can\'t open ERIB session')
            location.reload()
        }

        return Promise.reject(error)
    }
}
