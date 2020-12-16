import xhr from '../utils/xhr'
import { getCommonConfigValue } from '../configuration/config'

const QUEUE = []

const sendPackage = () => {
    if (QUEUE.length) {
        const activeQueue = QUEUE.splice(0, QUEUE.length)

        const logUrl = getCommonConfigValue('log.url') || ''
        const plUrl = getCommonConfigValue('pl.url') || ''

        const body = {
            userAgent: window.navigator.userAgent,
            channel: getCommonConfigValue('isSbolPro') ? 'SBOL.PRO' : 'SBOL.WEB',
            messages: activeQueue
        }

        xhr(`${plUrl}${logUrl}/v2`, body, { originSend: true, requestedWith: true })
            .catch(() => {
                QUEUE.splice(0, 0, ...activeQueue)
            })
    }
}

// Кидаем пачку любой ценой перед уходом
window.addEventListener('beforeunload', sendPackage)

let autoTimeout
export const addLog = (message) => {
    clearTimeout(autoTimeout)
    autoTimeout = setTimeout(sendPackage, getCommonConfigValue('frontend.log.timeout') || 30000)

    QUEUE.push(message)

    if (QUEUE.length >= (getCommonConfigValue('frontend.log.batch.capacity') || 10)) {
        clearTimeout(autoTimeout)
        sendPackage()
    }
}
