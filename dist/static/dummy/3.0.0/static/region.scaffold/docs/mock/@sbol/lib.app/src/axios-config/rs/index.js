const addResponsePlatformDataExtraction = () => {}
const logError = () => {}
const authCheck = () => {}
const eribAuthCheck = () => {}
const reopenSession = () => {}
const loggerModifyFactory = () => {}
const logErrors = () => {}

export {
    addResponsePlatformDataExtraction,
    logErrors,
    authCheck,
    eribAuthCheck,
    reopenSession,
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
