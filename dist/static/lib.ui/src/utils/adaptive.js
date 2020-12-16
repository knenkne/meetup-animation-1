import _ from 'lodash'

import mediaConfig from './styles/media.config.css'

const { mediaLg, mediaMd, mediaSm } = mediaConfig

/* from modernizr */
function isTouchDevice () {
    if (('ontouchstart' in window) || (window.DocumentTouch && document instanceof window.DocumentTouch)) {
        return true
    }

    return window.matchMedia('(touch-enabled),(-webkit-touch-enabled),(-moz-touch-enabled),(-o-touch-enabled),(-ms-touch-enabled),(heartz)').matches
}

/* Touch | No touch */
export const isTouchable = _.memoize(isTouchDevice)
export const isNotTouchable = _.memoize(() => !isTouchable())
export const applyForTouchable = (value, defaultValue) => isTouchable() ? value : defaultValue

/* Mobile | Desktop */
const mobileRegExp = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i
const isNormalMobile = () => window.navigator && mobileRegExp.test(window.navigator.userAgent)
// https://stackoverflow.com/questions/58019463/how-to-detect-device-name-in-safari-on-ios-13-while-it-doesnt-show-the-correct
const isSpecialIOS = () => window.navigator && window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1

export const isMobilePlatform = _.memoize(() => isNormalMobile() || isSpecialIOS())
export const isMobile = isMobilePlatform
export const isDesktopPlatform = _.memoize(() => !isMobilePlatform())

/* Viewport: Desktop | Tablet | Phone (no memoize, cause viewport size is editable */
export const isDesktopViewport = () => window.matchMedia(mediaLg).matches
export const isTabletViewport = () => window.matchMedia(mediaMd).matches
export const isPhoneViewport = () => window.matchMedia(mediaSm).matches

/* IE */
export const isIE = navigator.appName === 'Microsoft Internet Explorer' ||
    !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/))
