/* eslint-disable @sbol/common/no-cyrillic-outside-cms */
import ru from 'date-fns/esm/locale/ru'

export const LOCALE = { locale: ru }
export const VALUE_MODE = 'VALUE_MODE'
export const EMPTY_MODE = 'EMPTY_MODE'
export const EMPTY_STRING = ''
export const RU_DATE_REGEXP = /([\d•]{4})-([\d•]{2})-([\d•]{2})/
export const TIME_MASK = [/[0-2]/, /\d/, ':', /[0-5]/, /\d/]
export const MASK_YEAR = [/[12]/, /\d/, /\d/, /\d/]
export const MASK_MONTH = [/[01]/, /\d/, '.'].concat(MASK_YEAR)
export const MASK_DATE = [/[0-3]/, /\d/, '.', /[01]/, /\d/, '.'].concat(MASK_YEAR)
export const MASK_YEAR_INVALID = [/\d/, /\d/, /\d/, /\d/]
export const MASK_MONTH_INVALID = [/\d/, /\d/, '.'].concat(MASK_YEAR_INVALID)
export const MASK_DATE_INVALID = [/\d/, /\d/, '.'].concat(MASK_MONTH_INVALID)
export const MASK_QUARTER = [/[1-4]/, '-', 'й', ' ', 'к', 'в', 'а', 'р', 'т', 'а', 'л', ' '].concat(MASK_YEAR)
export const QUARTER_PLACEHOLDER = '_-й квартал ____'
export const MONTH_AND_YEAR_PLACEHOLDER = '__.____'
export const TIME_PLACEHOLDER = '__:__'
export const PLACEHOLDER = '__.__.____'
export const RANGE_DIVIDER = ' - '
export const DATE_TIME_FORMAT = 'HH:mm'
export const FULL_ISO_FORMAT = 'YYYY-MM-DDTHH:mm:ss.SSSZ'
export const YEAR_FORMAT = 'YYYY'
export const MONTH_FORMAT = 'MM.YYYY'
export const none = 'none'
export const regExpSpace = /\s/
export const regExpNumbers = /\d/
export const underScoreWidthSpace = '\u2007'
export const underScoreWidthSpaceRegExp = new RegExp(underScoreWidthSpace)
export const COUNT_MONTHS = 12
export const QUARTER_LENGTH = 3
export const WEEK_LENGTH = 7
export const DEFAULT_DAY_OF_WEEK = 6
export const MAX_CELL_COUNT_PER_MONTH = 42
export const underScoreWidthSpaceRegExpGlobal = new RegExp(underScoreWidthSpace, 'g')
export const MULTIPLE_OF_TEN = 10
export const DELIMITER = 3
export const TABLE_SIZE = 12
export const DEFAULT_TIME_HOUR = 11
export const DEFAULT_TIME_MINUTE = 50
export const CALENDAR_MODES = {
    YEARS: 'years',
    QUARTERS: 'quarters',
    MONTHS: 'months',
    DEFAULT: 'default'
}
export const RANGE_MODES = {
    MONTH: 'Month',
    MONTHS: 'Months',
    YEARS: 'Years',
}
export const LAST_YEAR = 9999
export const DEFAULT_DATE = {
    MINUTES: 50,
    HOURS: 11
}

export const constants = {
    MASK_YEAR,
    MASK_MONTH,
    MASK_DATE,
    PLACEHOLDER,
    RANGE_DIVIDER,
    DATE_TIME_FORMAT,
    FULL_ISO_FORMAT,
    YEAR_FORMAT,
    MONTH_FORMAT,
    regExpSpace,
    regExpNumbers,
    underScoreWidthSpace,
    underScoreWidthSpaceRegExp
}
