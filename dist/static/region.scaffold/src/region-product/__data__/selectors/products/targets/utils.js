import _ from 'lodash'
import dateFns from 'date-fns'

import { parseFakeISO } from '../../../utils/parse-fake-iso'
import { formatDate } from '../../../utils/format-date'
import { convertStringToDecimalNumber } from '../../../utils/convert-string-to-decimal-number'
import { urlTargetDetail } from '../../../links'
import { TARGETS_COLOR } from '../../../../style-constants'

import {
    FINISH,
    LATE,
    SLOW,
    FINE_TEMPO,
    START,
    OUTDATED,
    GREAT,
    XXS,
    XS,
    S,
    M,
    L,
    XL,
    iconDictionary,
    progressDictionary
} from './dictionaries'

const MONTH = 4
const MONTH_AND_HALF = 6
const YEAR = 48
const HALF_YEAR = 24

const getMessage = (text, style, params = {}) => ({
    message: {
        ...text && { text },
        ...style && { style },
        ...params
    }
})

// Область действия совета определяется двумя уравнениями (Area) и ограничениями по осям x,y (Bound).
// Подробнее: https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=73725599

// Bound (Границы)
const isFineTempoBound = (x, y) => x < 1 && y > 0 && y < 1
const isLateBound = (x, y) => x < 1 && y < 1
const isSlowBound = (x, y) => x < 1 && y < 1
const isStartBound = (y) => y === 0
const isFinishBound = (y) => y >= 1
const isOutdatedBound = (x, y) => y < 1 && x >= 1
const isGreatBound = (x, y) => x < 1 && y > 0 && y < 1

const belowLineStrict = (y, line) => y < line
const aboveLineStrict = (y, line) => y > line

const belowLineUnstrict = (y, line) => y <= line

// Area (Зона):
const isInArea = (isBelow, isAbove) => isBelow && isAbove

// Размер цели
export const getTargetSize = (finishDate, startDate) => {
    const differenceInWeeks = dateFns.differenceInWeeks(finishDate, startDate)
    switch (true) {
        case differenceInWeeks < MONTH: {
            return XXS
        }
        case differenceInWeeks >= MONTH && differenceInWeeks < MONTH_AND_HALF:
            return XS
        case differenceInWeeks >= MONTH_AND_HALF && differenceInWeeks < HALF_YEAR:
            return S
        case differenceInWeeks >= HALF_YEAR && differenceInWeeks < YEAR:
            return M
        case differenceInWeeks >= YEAR && differenceInWeeks < YEAR + YEAR:
            return L
        default:
            return XL
    }
}

// Для XXS и XS отдельное правило определения границ
/*
 * Определяем статус
 * для целей XXS, XS
 * @param {Number} x - координата по оси Х (ось даты)
 * @param {Number} y - координата по оси Y (ось суммы)
 * @return {String}
 */
const getSmallStatus = (x, y) => {
    /* eslint-disable no-magic-numbers, comment: https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=73725599  */
    if (isStartBound(y) && y >= x - 0.5) {
        return START
    }

    if ((y <= x && y >= x - 0.5) && isFineTempoBound(x, y)) {
        return FINE_TEMPO
    }

    if ((y < x - 0.5 && y > x - 1) && isLateBound(x, y)) {
        return LATE
    }

    return false
}

// Для остальных все аналогично, меняются только уравнения границ
/*
 * Определяем статус
 * для целей S, M, L, XL
 * @param {Number} x - координата по оси Х (ось даты)
 * @param {Number} y - координата по оси Y (ось суммы)
 * @param {Array} points - сдвиги от идеального уравнения y = x
 * @return {String}
 */
const getMediumStatus = (x, y, points = [0, 0, 0]) => {
    /* eslint-disable no-magic-numbers, comment: https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=73725599  */
    const idealLine = x
    const firstLine = x + points[0]
    const secondLine = x + points[1]
    const thirdLine = x + points[2]

    const startArea = aboveLineStrict(y, firstLine)
    const fineTempoArea = isInArea(belowLineUnstrict(y, idealLine), startArea)
    const slowArea = isInArea(belowLineUnstrict(y, firstLine), aboveLineStrict(y, secondLine))
    const lateArea = isInArea(belowLineUnstrict(y, secondLine), aboveLineStrict(y, thirdLine))

    if (startArea && isStartBound(y)) {
        return START
    }

    if (fineTempoArea && isFineTempoBound(x, y)) {
        return FINE_TEMPO
    }

    if (slowArea && isSlowBound(x, y)) {
        return SLOW
    }

    if (lateArea && isLateBound(x, y)) {
        return LATE
    }

    return false

}

/**
 * Определяем состояние цели
 * по дате и накопленной сумме
 * @param {Object} target - данные по цели с сервера
 * @param {Date} currentDate - дата (по умолчанию - сегодня)
 * @return {String} - константа статуса для вывода состояния
 */
export const getProgress = (target, currentDate = new Date()) => {
    const date = parseFakeISO(_.get(target, '[date]'))
    const openDate = parseFakeISO(_.get(target, '[account][openDate]'))

    const sum = convertStringToDecimalNumber(_.get(target, '[amount][amount]'))
    const curSum = convertStringToDecimalNumber(_.get(target, '[account][value][amount]'))

    const targetSize = getTargetSize(date, openDate)
    const x = (currentDate - openDate) / (date - openDate)
    const y = curSum / sum

    if (isFinishBound(y)) {
        return FINISH
    }

    if (isOutdatedBound(x, y)) {
        return OUTDATED
    }

    if (isInArea(belowLineStrict(y, x + 1), aboveLineStrict(y, x)) && isGreatBound(x, y)) {
        return GREAT
    }

    if (targetSize === XXS || targetSize === XS) {
        return getSmallStatus(x, y)
    }

    if (targetSize === S || targetSize === M) {
        return getMediumStatus(x, y, [-1 / 6, -1 / 3, -1])
    }

    if (targetSize === L) {
        return getMediumStatus(x, y, [-1 / 12, -1 / 6, -1])
    }

    if (targetSize === XL) {
        return getMediumStatus(x, y, [-1 / 24, -1 / 12, -1])
    }

    return null
}

const getNotifications = (target) => {
    const progressStatus = getProgress(target)
    const progress = _.get(progressDictionary, [progressStatus], {})
    if (!_.isEmpty(progress)) {
        return {
            ...getMessage(progress.text),
            ...progress.status && { notification: progress.status },
            progressColor: progress.color,
            progressStatus
        }
    }
    return {}
}

export const getTargetInfo = (target) => {
    const {
        id,
        name = '',
        comment,
        type
    } = target

    const accountAmount = convertStringToDecimalNumber(_.get(target, '[account][value][amount]', 0))
    const targetAmount = convertStringToDecimalNumber(_.get(target, '[amount][amount]', 0))

    const progress = accountAmount / targetAmount

    const progressWidth = _.isFinite(progress) ? `${(accountAmount / targetAmount) * 100}%` : '0'

    return {
        id: parseInt(id, 10),
        name: comment || name,
        icon: iconDictionary[type].icon,
        href: urlTargetDetail(_.get(target, '[account][id]', 0)),
        colorScheme: TARGETS_COLOR,
        currency: {
            amount: targetAmount,
            currency: _.get(target, '[amount][currency][code]', '')
        },
        currentSum: {
            amount: accountAmount,
            currency: _.get(target, '[account][value][currency][code]', '')
        },
        endDate: formatDate(parseFakeISO(_.get(target, 'date', ''))),
        ...target?.account?.openDate ? { ...getNotifications(target) } : {},
        progressWidth,
    }
}
