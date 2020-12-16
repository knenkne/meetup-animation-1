import {
    format,
    isValid,
    toDate,
    parse,
    setHours,
    setMinutes,
    startOfMinute,
    setYear,
    setMonth,
    getDay,
    getYear,
    getMonth,
    addMonths,
    startOfMonth,
    endOfMonth,
    startOfYear,
    isWithinInterval,
    eachDayOfInterval,
    lastDayOfMonth
} from 'date-fns'
import _ from 'lodash'

import { Input } from '../input'

import {
    EMPTY_STRING,
    MASK_DATE,
    RANGE_DIVIDER,
    VALUE_MODE,
    FULL_ISO_FORMAT,
    DATE_TIME_FORMAT,
    COUNT_MONTHS,
    MONTH_FORMAT,
    regExpSpace,
    underScoreWidthSpaceRegExp,
    regExpNumbers,
    MASK_QUARTER,
    QUARTER_LENGTH,
    LOCALE,
    MAX_CELL_COUNT_PER_MONTH,
    WEEK_LENGTH,
    DEFAULT_DAY_OF_WEEK,
    DELIMITER,
    TABLE_SIZE,
    DEFAULT_TIME_HOUR,
    DEFAULT_TIME_MINUTE,
    RU_DATE_REGEXP,
    MULTIPLE_OF_TEN,
    LAST_YEAR,
    DEFAULT_DATE
} from './constants'

export const dateStringValidation = (date, mask = MASK_DATE) => isValid(date) && !underScoreWidthSpaceRegExp.test(date) && (date.length >= mask.length || date instanceof Date)

const getStringOrEmpty = (date) => typeof date === 'string' ? date : EMPTY_STRING

export const formatDate = (date, dateFormat = 'L', mask = MASK_DATE) =>
    dateStringValidation(date, mask)
        ? format(toDate(date), dateFormat, LOCALE)
        : getStringOrEmpty(date)

export const fullISOFormat = (date) => isValid(date) ? format(date, FULL_ISO_FORMAT, LOCALE) : date

export const makeISOdate = (date, hours, minutes) => fullISOFormat(setHours(setMinutes(startOfMinute(date), minutes), hours))

export const makeFullISOFromTime = (time, date) => {
    const timeSplit = time.split(':')
    if (time.length < DATE_TIME_FORMAT.length || underScoreWidthSpaceRegExp.test(time)) {
        return time
    }
    return makeISOdate(
        isValid(date) ? date : new Date(), timeSplit[0],
        timeSplit[1])
}

export const noNumbersNoString = (date) => regExpNumbers.test(date) ? formatDate(date) : EMPTY_STRING

export const getStringFromDateStartEnd = ({ start, end, rangeDivider = RANGE_DIVIDER }) =>
    `${formatDate(start)
    }${getStringOrEmpty(end).length > 0 || isValid(end) ? rangeDivider : EMPTY_STRING
    }${formatDate(end)}`

export const transformDateValue = (value) => {
    if (Input.Masked.utils.isMaskedValue(value)) {
        return value.replace(RU_DATE_REGEXP, '$3.$2.$1')
    } else if ((value.length > MASK_DATE.length) && isValid(value) && !underScoreWidthSpaceRegExp.test(value)) {
        return format(toDate(value), 'L', LOCALE)
    }

    return value
}

export const isofyingDateString = ({ value, mode = VALUE_MODE, mask = MASK_DATE, parseFormat = 'L' }) => {
    let outValue = mode === VALUE_MODE ? value : EMPTY_STRING
    const today = new Date()
    if (value && value.length === mask.length && !underScoreWidthSpaceRegExp.test(value)) {
        const parsedDate = setHours(setMinutes(parse(value, parseFormat, today, LOCALE), DEFAULT_DATE.MINUTES), DEFAULT_DATE.HOURS)

        if (parsedDate.getFullYear() > LAST_YEAR) {
            return '9999-12-31T11:50:00.000+02:30'
        }

        if (parsedDate.getFullYear() < 0) {
            return '0000-01-01T11:50:00.000+02:30'
        }

        outValue = isValid(parsedDate) ? fullISOFormat(parsedDate) : outValue
    }

    return outValue || EMPTY_STRING
}

export const mask = (value) => {
    if (_.isObject(value)) {
        return getStringFromDateStartEnd({
            start: value.startDate,
            end: value.endDate,
        })
    }
    return `${value}`
}

const validateDate = (date) => dateStringValidation(date) && fullISOFormat(date)

/**
 *
 * @param {String} dateString - Строка даты
 * @return {Boolean} Признак соответствия строки формату DD.MM.YYYY
 */
export const isRuDate = (dateString) => {
    // First check for the pattern
    if (!/^(?:\d{1,2}\.){2}\d{4}$/.test(dateString)) {
        return false
    }

    // Parse the date parts to integers
    const parts = dateString.split('.')
    const day = parseInt(parts[0], 10)
    const month = parseInt(parts[1], 10)
    const year = parseInt(parts[2], 10)

    // Check the ranges of month and year
    if (year < 1000 || year > 3000 || month === 0 || month > 12) {
        return false
    }

    const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    // Adjust for leap years
    if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
        monthLength[1] = 29
    }

    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1]
}

export const parseRuDate = (date) => isRuDate(date) ? parse(date, 'DD.MM.YYYY', new Date()) : date

export const chooseValidDate = (firstDate, secondDate) =>
    validateDate(firstDate) || validateDate(secondDate) || fullISOFormat(new Date())

export const isEndOfStringChanged = (date1, date2, dateFormat, maskArray) => {
    const dateToSearch = formatDate(date1, dateFormat, maskArray)
    const dateSearching = formatDate(date2, dateFormat, maskArray)
    return dateSearching.length >= dateToSearch.length || _.startsWith(dateToSearch, dateSearching)
}

export const makeFullISOStringFromMonthYear = (monthYear, date) => {
    const monthYearParse = parse(monthYear, MONTH_FORMAT, date, LOCALE)
    if (monthYear.length >= MONTH_FORMAT.length && isValid(monthYearParse) && !regExpSpace.test(monthYear)) {
        return fullISOFormat(
            setYear(
                setMonth(
                    date,
                    getMonth(monthYearParse)
                ),
                getYear(monthYearParse)
            )
        )
    }
    return monthYear
}

export const makeMonthsArray = (date, chunk) =>
    _(new Array(COUNT_MONTHS))
        .map((v, key) =>
            fullISOFormat(
                addMonths(startOfYear(date), key)
            )
        )
        .chunk(chunk)
        .value()

export const makeFixedRange = (date, monthLength) => `${fullISOFormat(startOfMonth(date))}/${fullISOFormat(endOfMonth(addMonths(date, monthLength)))}`

export const getQuarterNumber = (date) => {
    const PART = 3
    const validDate = toDate(date)
    const arrayDate = makeMonthsArray(validDate, PART)

    return _.find(_.map(arrayDate, (part, quarter) => {
        if (isWithinInterval(validDate, {
            start: _.first(part),
            end: endOfMonth(_.last(part))
        })) {
            return quarter + 1
        }
        return void 0
    }))
}

export const quarterMask = (date) => {
    if (Input.Masked.utils.isMaskedValue(date)) {
        const year = date.substring(0, 4) // eslint-disable-line no-magic-numbers, comment: вырезается ISO-год
        const month = date.substring(5, 7) // eslint-disable-line no-magic-numbers, comment: вырезается ISO-месяц
        const quarter = _.floor((month - 1) / 3) + 1 // eslint-disable-line no-magic-numbers, comment: определяется номер квартала

        return `${_.isNaN(quarter) ? Input.Masked.utils.MASK_SYMBOL : quarter}-й квартал ${year}`
    } else if (dateStringValidation(date, MASK_QUARTER)) {
        return `${getQuarterNumber(date)}-й квартал ${getYear(date)}`
    }
    return date
}

export const quarterUnmask = (quarterString) => {
    const stringParts = quarterString.replace(/-й квартал/g, '').split(' ')
    if (_.last(stringParts) && quarterString.trim().length === MASK_QUARTER.length) {
        const arrayDate = makeMonthsArray(setYear(new Date(), _.last(stringParts)), QUARTER_LENGTH)
        return makeFixedRange(_.first(arrayDate[_.first(stringParts) - 1]), QUARTER_LENGTH)
    }
    return quarterString
}

// Формирование дней месяца

/**
 * [getItemsDays] Возвращет массив недель, деленные на массив дней
 *
 * @param  {[Date]} date []
 * @return {[Array]}  return [[ , , , , ,d,d]],
 *                           [[d,d,d,d,d,d,d]],
 *                           [[d,d,d,d,d,d,d]],
 *                           [[d,d,d,d,d,d,d]],
 *                           [[d,d,d,d,d,d,d]],
 *                           [[d, , , , , , ]]
 */
export const getItemsDays = (date) => {
    const parsedDate = isRuDate(date) ? parse(date, 'DD.MM.YYYY', new Date()) : date
    const startMonth = startOfMonth(parsedDate, LOCALE)
    const dayOfWeek = getDay(startMonth) ? getDay(startMonth) - LOCALE.locale.options.weekStartsOn : DEFAULT_DAY_OF_WEEK
    const startDays = new Array(dayOfWeek).concat(eachDayOfInterval({
        start: startMonth,
        end: lastDayOfMonth(parsedDate)
    }))
    const emptyDaysCount = MAX_CELL_COUNT_PER_MONTH - startDays.length
    const endEmptyDays = new Array(
        // Добавляем пустые ячейки в конец списка так, чтобы не было пустой недели в конце
        emptyDaysCount >= WEEK_LENGTH ? emptyDaysCount - WEEK_LENGTH : emptyDaysCount
    )
    return _.chunk(startDays.concat(endEmptyDays), WEEK_LENGTH)
}

// Конец блока "Формирование дней месяца"

// Формирование годов

const setDefaultTime = (date) => setMinutes(setHours(date, DEFAULT_TIME_HOUR), DEFAULT_TIME_MINUTE)
const getStartOfYearWithTime = (date) => setDefaultTime(startOfYear(date))

export const getItemsYears = (date) => {
    // Находим начало десятилетия и пушим его даты
    let decade = Math.floor(getYear(date) / 10) * 10
    return _(new Array(TABLE_SIZE))
        .map((v, key) => {
            const decadeDate = parse(
                `01/01/${decade}`,
                'MM/DD/YYYY',
                new Date()
            )
            decade += 1
            return decadeDate
        })
        .chunk(DELIMITER)
        .value()
}

// Конец блока "Формирование годов"

// Валидация даты

export const isDateValid = (date) => date && date.length >= MASK_DATE.length && isValid(date)

/**
 *
 * @param {Array} years - массив, включающий даты, разбитые на 4 массива по 3 элемента
 * @return {String} Строка в формате "2000-е" с указанием десятилетия, с которого начинается ряд календаря
 */
export const getYearsTitle = (years) => {
    const minYear = _.get(years, ['0', '0'], null)
    const parsedYear = getYear(minYear)
    return minYear ? `${parsedYear - (parsedYear % MULTIPLE_OF_TEN)}-е` : null
}

export const utils = {
    chooseValidDate,
    dateStringValidation,
    formatDate,
    fullISOFormat,
    makeISOdate,
    makeFullISOFromTime,
    makeFullISOStringFromMonthYear,
    makeFixedRange,
    getQuarterNumber,
    quarterMask,
    quarterUnmask
}
