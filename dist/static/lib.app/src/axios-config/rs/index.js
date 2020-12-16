import authCheck from './auth-check'
import reopenSession from './reopen-session'
import addResponsePlatformDataExtraction from './add-response-platform-data-extraction'
import logErrors from './log-errors'
import eribAuthCheck from './erib-auth-check'
// import logSuccess from './log-success'
import loggerModifyFactory from './logger-modify-factory'

export {
    /**
     * ufs platform wrapper
     */
    addResponsePlatformDataExtraction,
    /**
     * log.error
     */
    logErrors,
    /**
     * log.info
     */
    // logSuccess,
    /**
     * 403 reload
     */
    authCheck,
    /**
     * 403 to ESA
     */
    eribAuthCheck,
    /**
     * 403 create/session
     */
    reopenSession,
    /**
     * Функции модификации requestBody, responseBody для отправки в логирование
     */
    loggerModifyFactory
}

export const defaultInterceptors = [
    // logErrors,
    // logSuccess,
    authCheck,
    reopenSession
]

export const ufsInterceptors = [
    // logErrors,
    // logSuccess,
    reopenSession
]

export const mapiInterceptors = [
    // logErrors,
    // logSuccess,
    eribAuthCheck
]

export const sbolInterceptors = [
    // logErrors,
    // logSuccess,
    authCheck
]
