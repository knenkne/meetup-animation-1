import { uuidv4 } from './uuid'

const SA_COOKIE_KEY = '_sa'
const COOKIE_PREFIX = 'SA'
const COOKIE_VERSION = '1'

const DAYS_IN_YEAR = 365
const HOURS_IN_DAY = 24
const MINUTES_IN_HOUR = 60
const SECONDS_IN_MINUTE = 60
const MS_IN_SECOND = 1000
const SECONDS_IN_DAY = HOURS_IN_DAY * MINUTES_IN_HOUR * SECONDS_IN_MINUTE * MS_IN_SECOND

const getCookieValueByName = (name) => {
    const cookieValue = document.cookie.match(`(^|[^;]+)\\s*${name}\\s*=\\s*([^;]+)`)
    return cookieValue ? cookieValue.pop() : ''
}

const setCookie = (name, value, days = DAYS_IN_YEAR) => {
    let expires = ''
    if (days) {
        const date = new Date()
        date.setTime(date.getTime() + (days * SECONDS_IN_DAY))
        expires = `expires=${date.toUTCString()};`
    }
    document.cookie = `${name}=${value || ''};${expires}samesite=strict;secure;domain=.sberbank.ru;path=/`
}

export const ensureCookieExistAndGetIt = () => {
    const currentCookieValue = getCookieValueByName(SA_COOKIE_KEY)
    if (!currentCookieValue) {
        const uuid = uuidv4()
        const seconds = Math.floor(new Date().getTime() / MS_IN_SECOND)
        const cookieValue = `${COOKIE_PREFIX}${COOKIE_VERSION}.${uuid}.${seconds}`
        setCookie(SA_COOKIE_KEY, cookieValue)
        return cookieValue
    }
    return currentCookieValue
}
