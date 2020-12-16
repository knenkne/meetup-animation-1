import dateFns from 'date-fns'

import { getProductMessage } from '../../../utils/get-product-message'
import { isDateEqual } from '../../../utils/is-date-equal'
import { parseFakeISO } from '../../../utils/parse-fake-iso'

import {
    BAD_ATTENTION,
    WARNING,
    ARRESTED,
} from './dictionaries'

const FOUR_DIGITS = 4
const AVERAGE_MONTH_LENGTH = 30
const YEAR_FOR_TIMELESS_ACCOUNT = 2099

const getProductDate = (date) => {
    const dateArray = date.split('.').map((item) => Number(item))
    const [day, potentiallyMonth, potentiallyYear] = dateArray
    const year = String(potentiallyYear).length < FOUR_DIGITS ? `20${potentiallyYear}` : potentiallyYear
    return new Date(year, potentiallyMonth - 1, day)
}

export const isExpired = (currentDate, date) => dateFns.differenceInCalendarMonths(date, currentDate) < 0

export const isExpireInMonth = (currentDate, date) => dateFns.differenceInCalendarDays(date, currentDate) <= AVERAGE_MONTH_LENGTH

export const getDifferenceInDays = (currentDate, date) => dateFns.differenceInCalendarDays(date, currentDate)

export const getExpireDateInfo = (date) => {
    if (date) {
        const realDate = getProductDate(date)
        return {
            expired: isExpired(new Date(), realDate),
            expireInMonth: isExpireInMonth(new Date(), realDate),
            differenceInDays: getDifferenceInDays(new Date(), realDate),
        }
    }
    return {}
}

export const getNotification = (account) => {
    const {
        arrested,
        options,
        closeDate
    } = account

    const {
        expired = false,
        expireInMonth = false,
        differenceInDays
    } = getExpireDateInfo(closeDate)

    switch (true) {
        case arrested:
            return {
                ...getProductMessage('accounts.arrested', 'arrested'),
                notification: ARRESTED
            }
        case expireInMonth && options?.prolongationAllowed: {
            const expireMessage = differenceInDays > 0 ? 'accounts.will.prolong' : 'accounts.will.prolong.today'
            return {
                ...getProductMessage(expireMessage, null, { count: differenceInDays }),
                notification: WARNING,
            }
        }
        case expired && !options?.prolongationAllowed:
            return {
                ...getProductMessage('accounts.expired'),
                notification: BAD_ATTENTION
            }
        case expireInMonth && !options?.prolongationAllowed: {
            const expireMessage = differenceInDays > 0 ? 'accounts.will.expire' : 'accounts.will.expire.today'
            return {
                ...getProductMessage(expireMessage, null, { count: differenceInDays }),
                notification: WARNING,
            }
        }
        case isDateEqual(new Date(parseFakeISO(closeDate)), new Date(YEAR_FOR_TIMELESS_ACCOUNT, 0, 1)): {
            return getProductMessage('accounts.timeless', null)
        }

        default:
            return {
                ...getProductMessage()
            }
    }
}
