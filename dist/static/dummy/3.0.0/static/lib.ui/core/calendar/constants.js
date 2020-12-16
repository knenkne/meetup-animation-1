import ru from 'date-fns/esm/locale/ru';

/* eslint-disable @sbol/common/no-cyrillic-outside-cms */
var LOCALE = {
  locale: ru
};
var VALUE_MODE = 'VALUE_MODE';
var EMPTY_MODE = 'EMPTY_MODE';
var EMPTY_STRING = '';
var RU_DATE_REGEXP = /([\d•]{4})-([\d•]{2})-([\d•]{2})/;
var TIME_MASK = [/[0-2]/, /\d/, ':', /[0-5]/, /\d/];
var MASK_YEAR = [/[12]/, /\d/, /\d/, /\d/];
var MASK_MONTH = [/[01]/, /\d/, '.'].concat(MASK_YEAR);
var MASK_DATE = [/[0-3]/, /\d/, '.', /[01]/, /\d/, '.'].concat(MASK_YEAR);
var MASK_YEAR_INVALID = [/\d/, /\d/, /\d/, /\d/];
var MASK_MONTH_INVALID = [/\d/, /\d/, '.'].concat(MASK_YEAR_INVALID);
var MASK_DATE_INVALID = [/\d/, /\d/, '.'].concat(MASK_MONTH_INVALID);
var MASK_QUARTER = [/[1-4]/, '-', 'й', ' ', 'к', 'в', 'а', 'р', 'т', 'а', 'л', ' '].concat(MASK_YEAR);
var QUARTER_PLACEHOLDER = '_-й квартал ____';
var MONTH_AND_YEAR_PLACEHOLDER = '__.____';
var TIME_PLACEHOLDER = '__:__';
var PLACEHOLDER = '__.__.____';
var RANGE_DIVIDER = ' - ';
var DATE_TIME_FORMAT = 'HH:mm';
var FULL_ISO_FORMAT = 'YYYY-MM-DDTHH:mm:ss.SSSZ';
var YEAR_FORMAT = 'YYYY';
var MONTH_FORMAT = 'MM.YYYY';
var none = 'none';
var regExpSpace = /\s/;
var regExpNumbers = /\d/;
var underScoreWidthSpace = "\u2007";
var underScoreWidthSpaceRegExp = new RegExp(underScoreWidthSpace);
var COUNT_MONTHS = 12;
var QUARTER_LENGTH = 3;
var WEEK_LENGTH = 7;
var DEFAULT_DAY_OF_WEEK = 6;
var MAX_CELL_COUNT_PER_MONTH = 42;
var underScoreWidthSpaceRegExpGlobal = new RegExp(underScoreWidthSpace, 'g');
var MULTIPLE_OF_TEN = 10;
var DELIMITER = 3;
var TABLE_SIZE = 12;
var DEFAULT_TIME_HOUR = 11;
var DEFAULT_TIME_MINUTE = 50;
var CALENDAR_MODES = {
  YEARS: 'years',
  QUARTERS: 'quarters',
  MONTHS: 'months',
  DEFAULT: 'default'
};
var RANGE_MODES = {
  MONTH: 'Month',
  MONTHS: 'Months',
  YEARS: 'Years'
};
var LAST_YEAR = 9999;
var DEFAULT_DATE = {
  MINUTES: 50,
  HOURS: 11
};
var constants = {
  MASK_YEAR: MASK_YEAR,
  MASK_MONTH: MASK_MONTH,
  MASK_DATE: MASK_DATE,
  PLACEHOLDER: PLACEHOLDER,
  RANGE_DIVIDER: RANGE_DIVIDER,
  DATE_TIME_FORMAT: DATE_TIME_FORMAT,
  FULL_ISO_FORMAT: FULL_ISO_FORMAT,
  YEAR_FORMAT: YEAR_FORMAT,
  MONTH_FORMAT: MONTH_FORMAT,
  regExpSpace: regExpSpace,
  regExpNumbers: regExpNumbers,
  underScoreWidthSpace: underScoreWidthSpace,
  underScoreWidthSpaceRegExp: underScoreWidthSpaceRegExp
};

export { CALENDAR_MODES, COUNT_MONTHS, DATE_TIME_FORMAT, DEFAULT_DATE, DEFAULT_DAY_OF_WEEK, DEFAULT_TIME_HOUR, DEFAULT_TIME_MINUTE, DELIMITER, EMPTY_MODE, EMPTY_STRING, FULL_ISO_FORMAT, LAST_YEAR, LOCALE, MASK_DATE, MASK_DATE_INVALID, MASK_MONTH, MASK_MONTH_INVALID, MASK_QUARTER, MASK_YEAR, MASK_YEAR_INVALID, MAX_CELL_COUNT_PER_MONTH, MONTH_AND_YEAR_PLACEHOLDER, MONTH_FORMAT, MULTIPLE_OF_TEN, PLACEHOLDER, QUARTER_LENGTH, QUARTER_PLACEHOLDER, RANGE_DIVIDER, RANGE_MODES, RU_DATE_REGEXP, TABLE_SIZE, TIME_MASK, TIME_PLACEHOLDER, VALUE_MODE, WEEK_LENGTH, YEAR_FORMAT, constants, none, regExpNumbers, regExpSpace, underScoreWidthSpace, underScoreWidthSpaceRegExp, underScoreWidthSpaceRegExpGlobal };
//# sourceMappingURL=constants.js.map
