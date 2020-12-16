// @flow
import { setCommonConfig, getCommonConfigValue } from '../../configuration/config'
import { Bootstrap } from '../../bootstrap'

const getLogLevel = ({ options = {}, features = {} } = {}) => {
    const LogLevel = options?.LogLevel
    const ExtendedLogPL = features?.ExtendedLogPL

    if (ExtendedLogPL) {
        if (LogLevel === 'SILENT') {
            // Иначе (для модуля настроен уровень логгирования "SILENT")
            // уровень логгирования не переопределяется.
            // Логгирование не осуществляется.
            return LogLevel
        }

        return ExtendedLogPL?.options?.LogLevel
    }

    if (LogLevel) {
        return LogLevel
    }

    return void 0
}

export const logLevelPlugin = ({ launcher }) => (bootstrap: Bootstrap) => {
    // Уровень логирования PL мидла
    const initialLogLevel = getCommonConfigValue('log.level')

    bootstrap.hooks.beforeLoadingApp.tapPromise(
        'logLevelPlugin', () => {
            const { currentApp } = bootstrap
            const logLevel = getLogLevel(launcher[currentApp]) || initialLogLevel
            
            return Promise.resolve(setCommonConfig({ 'log.level': logLevel }))
        }
    )
}
