import _ from 'lodash'

export const detectIE = _.memoize(() => {
    const ua = window.navigator.userAgent
    return ua.includes('MSIE') || ua.includes('Edge') || ua.includes('Trident')
})

export const detectSafari = _.memoize(() => window.navigator.vendor && window.navigator.vendor.indexOf('Apple') > -1 &&
        window.navigator.userAgent &&
        window.navigator.userAgent.indexOf('CriOS') === -1 &&
        window.navigator.userAgent.indexOf('FxiOS') === -1)
