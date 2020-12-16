import { getCommonConfigValue } from '../configuration/config'

import { getApiLogMessageFactory } from './get-api-log-message'
import { addLog } from './queue'

const ORIGINALS = {
    error: console.error.bind(console),
    warn: console.warn.bind(console),
    info: console.info.bind(console),
    debug: console.debug.bind(console),
    log: console.log.bind(console)
}

const LOG_LEVELS = [
    'SILENT',
    'ERROR',
    'WARN',
    'INFO',
    'DEBUG'
]

const LOADING_TAGS = {
    IMG: 'src',
    SCRIPT: 'src',
    LINK: 'href'
}

const isLogUrl = (url, loggerIgnoreList) =>
    !loggerIgnoreList.find((ignorePatternUrl) => url.includes(ignorePatternUrl))

const isLog = (method, level = LOG_LEVELS[0]) => {
    if (method === 'log') {
        method = 'info'
    }

    return (
        level &&
        LOG_LEVELS.indexOf(level) >= LOG_LEVELS.indexOf(method.toUpperCase())
    )
}

const safeJsonParse = (string) => {
    try {
        return JSON.parse(string)
    } catch (error) {
        return null
    }
}

const isUfsError = (url, response) => {
    const ufsHost = getCommonConfigValue('ufs.block.root.url')

    return ufsHost
        && response
        && url.startsWith(ufsHost)
        && response.success === false
        && typeof response.error === 'object'
        && Object.keys(response.error).length
}

export default (configLogLevel, configLogUrl, loggerIgnoreList = []) => {
    // Переопределяем console для логирования
    Object.keys(ORIGINALS).forEach((method) => {
        const getApiLogMessage = getApiLogMessageFactory(method)

        console[method] = (...args) => {
            if (isLog(method, getCommonConfigValue('log.level'))) {
                if (configLogUrl) {
                // Отправляем логирование на api/log
                    try {
                        addLog(getApiLogMessage(...args))
                    } catch (error) {
                        ORIGINALS.error(error)
                    }
                }

                ORIGINALS[method](...args)
            }
        }
    })

    if (isLog('error', configLogLevel)) {
        // Ловим события ошибок html
        document.addEventListener(
            'error',
            (event) => {
                const {
                    target: {
                        tagName,
                        [LOADING_TAGS[tagName]]: url
                    }
                } = event

                if (url && isLogUrl(url, loggerIgnoreList)) {
                    console.error(
                        new Error(`Loading error ${tagName} by url ${url}`)
                    )
                }
            },
            true
        )

        // Ловим ошибки js
        window.addEventListener(
            'error',
            (event) => {
                if (event.error) {
                    console.error(event.error)
                } else {
                    console.warn('Ошибка JavaScript в скрипте с закрытой политикой crossorigin.')
                }
            }
        )

        // Логируем xhr
        XMLHttpRequest.prototype.originOpen = XMLHttpRequest.prototype.open
        XMLHttpRequest.prototype.open = function open (...args) {
            this.requestURL = args[1]
            XMLHttpRequest.prototype.originOpen.apply(this, args)
        }

        XMLHttpRequest.prototype.originSend = XMLHttpRequest.prototype.send
        XMLHttpRequest.prototype.send = function send (...args) {
            this.requestBody = args[0]

            this.addEventListener('load', () => {
                if (isLogUrl(this.requestURL, loggerIgnoreList)) {
                    const response = safeJsonParse(this.response)
                    // UFS errors
                    if (isUfsError(this.requestURL, response)) {
                        console.error(this)
                    } else if (isLog('info', configLogLevel)) {
                        console.info(this)
                    }

                }
            })
            this.addEventListener('error', () => {
                if (isLogUrl(this.requestURL, loggerIgnoreList)) {
                    console.error(this)
                }
            })
            XMLHttpRequest.prototype.originSend.apply(this, args)
        }
    }
}
