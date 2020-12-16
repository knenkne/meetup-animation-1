import getBrowser from './get-browser'
import getLanguage from './get-language'

const queue = []

const config = {
    url: '',
    buffer: 10
}

const meta = {
    platform: 'WEB',
    screenSize: `${window.screen.width}x${window.screen.height}`,
    browser: getBrowser(),
    systemLanguage: getLanguage()
}

const profile = {}

export const setConfig = (nextConfig) => {
    Object.assign(config, nextConfig)
}

export const setMeta = (nextMeta) => {
    Object.assign(meta, nextMeta)
}

export const setProfile = (nextProfile) => {
    Object.assign(profile, nextProfile)
}
export const pushQueue = (nextItem) => {
    queue.push(nextItem)
}
export const getMeta = () => meta
export const getProfile = () => profile
export const getConfig = () => config

export const pickQueue = () => queue.splice(0, queue.length)
export const revertQueue = (prevQueue) => queue.splice(0, 0, ...prevQueue)
export const getQueueLength = () => queue.length
