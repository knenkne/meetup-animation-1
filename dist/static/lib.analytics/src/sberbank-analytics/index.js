import {
    getConfig,
    setConfig,
    getMeta,
    setMeta,
    getProfile,
    setProfile,
    pushQueue,
    pickQueue,
    revertQueue,
    getQueueLength
} from './state'
import request from './request'
import getConnectionType from './get-connection-type'
import getBatteryLevel from './get-battery-level'
import getTimeStamp from './get-time-stamp'
import { ensureCookieExistAndGetIt } from './cookie'

let cookieError = false
let saCookieValue = ''
try {
    saCookieValue = ensureCookieExistAndGetIt()
} catch (error) {
    cookieError = error
}

const getBody = () => {
    setMeta({
        timeStamp: getTimeStamp()
    })

    return {
        meta: getMeta(),
        profile: getProfile(),
        data: pickQueue()
    }
}

window.addEventListener('beforeunload', () => {
    const { url } = getConfig()

    if (url && getQueueLength()) {
        const body = getBody()
        request(url, body)
    }
})

export const sberbankAnalytics = {
    cookie: saCookieValue,
    cookieError,
    setMeta,
    setProfile: (profile) => {
        setProfile({
            ...profile,
            deviceId: saCookieValue
        })
    },
    setConfig,
    push: (event) => {
        pushQueue(Object.assign(event, {
            batteryLevel: getBatteryLevel(),
            connectionType: getConnectionType(),
            timeStamp: getTimeStamp()
        }))

        const { url, buffer } = getConfig()

        if (url && getQueueLength() >= buffer) {
            const body = getBody()
            request(url, body, () => revertQueue(body.data))
        }
    }
}
