import log from 'loglevel'

import { getConfigValue } from '../config'

const level =
    (window.localStorage && window.localStorage.getItem('loglevel:local'))
    || getConfigValue('log.level')
    || log.levels.SILENT

log.setDefaultLevel(level)
log.setLevel(level)

const originalFactory = log.methodFactory
log.methodFactory = (methodName, logLevel, loggerName) => {
    const rawMethod = originalFactory(methodName, logLevel, loggerName)

    return (...messages) => {
        rawMethod({ __moduleId: loggerName }, ...messages)
    }
}

export { log }
