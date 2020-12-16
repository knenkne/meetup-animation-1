import nanoid from 'nanoid'

import { getConfigValue } from '../config'

if (!window.sbolpro) {
    window.sbolpro = {}
}

const DEFAULT_TIMEOUT = 60000

export const useSbolPro = ({
    method,
    args = [],
    timeout = getConfigValue('sbol.pro.timeout', DEFAULT_TIMEOUT)
}) => new Promise((resolve, reject) => {
    if (!window.webkit?.messageHandlers?.[method]?.postMessage) {
        reject(new Error(`No "${method}" method presented in SBOL.PRO API`))
    } else {
        // Организация места обратного вызова от SBOL.PRO
        if (!window.sbolpro[method]) {
            window.sbolpro[method] = {}
        }

        // Установка timeout, если необходимо
        if (timeout) {
            const token = nanoid()

            const timer = setTimeout(() => {
                delete window.sbolpro[method][token]
                reject(new Error(`Timeout ${timeout}ms exceeded for "${method}" method SBOL.PRO API`))
            }, timeout)

            // Определение функции обратного вызова (только с timeout)
            window.sbolpro[method][token] = (error, response) => {
                if (error) {
                    if (error instanceof Error) {
                        return reject(error)
                    }

                    return reject(new Error(error))
                }

                clearTimeout(timer)
                delete window.sbolpro[method][token]
                return resolve(response)
            }

            // Инициализация запроса к SBOL.PRO
            window.webkit.messageHandlers[method].postMessage({ token, args })
        } else {
            // Инициализация запроса к SBOL.PRO
            window.webkit.messageHandlers[method].postMessage({ args })
        }
    }
})
