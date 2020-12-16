import '../_rollupPluginBabelHelpers-687385f0.js';
import 'react';
import 'prop-types';
import _ from 'lodash';
import 'classnames';
import '../utils/get-display-name.js';
import '../utils/hoc/style.css';
import '../utils/hoc/deprecate.js';
import '../utils/hoc/experimental.js';
import '../utils/hoc/error-adapter.js';
import '../utils/hoc/omittere.js';
import '../utils/hoc/accessibility-relocation.js';
import '../utils/handlers.js';
import '../utils/pluralize.js';
import '../utils/scroll-to.js';
import '../utils/format-phone-number.js';
import '../utils/memoize-func-with-args.js';
import '../utils/auto-top-check-by-window.js';
import '../utils/merge-theme.js';
import '../utils/styles/media.config.css';
import '../utils/adaptive.js';
import '../utils/pseudo/pseudo-button.js';
import '../utils/get-card-icon.js';
import '../utils/get-ivestments-icon.js';
import '../utils/get-metal-icon.js';
import '../utils/get-target-icon.js';
import '../icon/style.css';
import '../icon/icon.js';
import '../index-85b17782.js';
import '../external-969f6c5f.js';
import '../icon/index.js';
import '../utils/set-project-id.js';
import '../utils/make-direction.js';
import '../utils/show-error.js';
import '../typography/style.css';
import '../typography/headline.js';
import '../typography/title.js';
import '../typography/subheader.js';
import '../typography/caption.js';
import '../typography/uppercase.js';
import '../typography/description.js';
import '../typography/index.js';
import '../currency/locales.js';
import '../currency/options.js';
import '../currency/style.css';
import '../currency/currency.js';
import 'bignumber.js';
import 'text-mask-core/dist/textMaskCore';
import 'text-mask-addons/dist/createNumberMask';
import '../input/utils.js';
import '../button/command/style.css';
import '../button/command/index.js';
import '../loader/loader.css';
import '../loader/loader-themes/pulse-loader.css';
import '../loader/loader-themes/jump-loader.css';
import '../loader/loader-themes/swap-loader.css';
import '../loader/loader.js';
import '../loader/icon-loader.css';
import '../loader/icon-loader.js';
import '../loader/button-loader.css';
import '../loader/utils.js';
import '../loader/button-loader.js';
import '../loader/index.js';
import '../button/icon/style.css';
import '../button/icon/index.js';
import '../tooltip/style.css';
import '../tooltip/tip.js';
import '../tooltip/tooltip.js';
import '../tooltip/hover-tooltip.js';
import 'react-onclickoutside';
import '../perimeter/perimeter.js';
import '../perimeter/index.js';
import '../tooltip/click-tooltip.js';
import '../tooltip/index.js';
import '../button/info/style.css';
import '../button/info/index.js';
import '../button/radio-segmented/style.css';
import '../button/radio-segmented/index.js';
import '../button/style.css';
import '../button/index.js';
import 'date-fns/esm/locale/ru';
import { underScoreWidthSpaceRegExp, LOCALE, EMPTY_STRING, FULL_ISO_FORMAT, DATE_TIME_FORMAT, regExpNumbers, RU_DATE_REGEXP, MASK_DATE, DEFAULT_DATE, LAST_YEAR, MONTH_FORMAT, regExpSpace, COUNT_MONTHS, MASK_QUARTER, QUARTER_LENGTH, DEFAULT_DAY_OF_WEEK, MAX_CELL_COUNT_PER_MONTH, WEEK_LENGTH, TABLE_SIZE, DELIMITER, MULTIPLE_OF_TEN, RANGE_DIVIDER, VALUE_MODE } from './constants.js';
import { isValid, format, toDate, setHours, setMinutes, startOfMinute, parse, setYear, setMonth, getMonth, getYear, addMonths, startOfYear, startOfMonth, endOfMonth, isWithinInterval, getDay, eachDayOfInterval, lastDayOfMonth } from 'date-fns';
import '../input/input.css';
import '../input/input.js';
import '../input/hoc/auto-size.js';
import '../input/masked/masked-format.js';
import '../input/masked/masked.js';
import '../input/numeric/numeric.js';
import '../input/counter/counter.css';
import '../input/counter/counter-control.js';
import '../input/counter/counter.js';
import '../input/text/text.css';
import '../input/text/text.js';
import '../input/currency/currency.js';
import '../input/money/money.js';
import '../input/password/eye-style.css';
import '../input/password/eye.js';
import '../input/password/input-style.css';
import '../input/password/password.js';
import '../input/currency-select/currency-select.js';
import '../input/currency-select/currency-select.css';
import '../input/currency-select/currency-select-option.js';
import '../dropdown/style.css';
import '../dropdown/target-button.js';
import '../dropdown/utils.js';
import '../dropdown/contents.js';
import '../dropdown/group.js';
import '../dropdown/select/select.css';
import '../dropdown/option.js';
import '../link/link.css';
import '../link/components/simple-external-link.js';
import '../link/link.js';
import '../dropdown/link.js';
import '../dropdown/dropdown.js';
import '../dropdown/select/item.js';
import '../dropdown/select/select.js';
import '../dropdown/index.js';
import '../marked-text/style.css';
import '../marked-text/marked-text.js';
import '../input/suggest/style.css';
import '../input/suggest/themes.js';
import '../input/suggest/target-input.js';
import '../input/suggest/long.js';
import '../input/suggest/no-matches.js';
import '../input/suggest/error.js';
import '../input/suggest/option.js';
import '../input/suggest/suggest.js';
import '../input/suggest/utils.js';
import '../input/suggest/suggest-dynamic.js';
import '../input/suggest/index.js';
import '../input/hoc/typeahead.css';
import '../input/hoc/typeahead.js';
import '../input/phone/phone-mask.js';
import '../input/phone/local-phone.js';
import '../input/hoc/keep-char-positions-typeahead.js';
import '../input/hoc/tooltiped.js';
import 'remarkable';
import 'remarkable/lib/common/utils';
import '../markdown/utils.js';
import '../markdown/style.css';
import '../markdown/full.js';
import '../markdown/short.js';
import '../markdown/index.js';
import '../labeled/labeled.css';
import '../labeled/index.js';
import '../input/hoc/labeled.js';
import { Input } from '../input/index.js';

var dateStringValidation = function dateStringValidation(date) {
  var mask = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : MASK_DATE;
  return isValid(date) && !underScoreWidthSpaceRegExp.test(date) && (date.length >= mask.length || date instanceof Date);
};

var getStringOrEmpty = function getStringOrEmpty(date) {
  return typeof date === 'string' ? date : EMPTY_STRING;
};

var formatDate = function formatDate(date) {
  var dateFormat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'L';
  var mask = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : MASK_DATE;
  return dateStringValidation(date, mask) ? format(toDate(date), dateFormat, LOCALE) : getStringOrEmpty(date);
};
var fullISOFormat = function fullISOFormat(date) {
  return isValid(date) ? format(date, FULL_ISO_FORMAT, LOCALE) : date;
};
var makeISOdate = function makeISOdate(date, hours, minutes) {
  return fullISOFormat(setHours(setMinutes(startOfMinute(date), minutes), hours));
};
var makeFullISOFromTime = function makeFullISOFromTime(time, date) {
  var timeSplit = time.split(':');

  if (time.length < DATE_TIME_FORMAT.length || underScoreWidthSpaceRegExp.test(time)) {
    return time;
  }

  return makeISOdate(isValid(date) ? date : new Date(), timeSplit[0], timeSplit[1]);
};
var noNumbersNoString = function noNumbersNoString(date) {
  return regExpNumbers.test(date) ? formatDate(date) : EMPTY_STRING;
};
var getStringFromDateStartEnd = function getStringFromDateStartEnd(_ref) {
  var start = _ref.start,
      end = _ref.end,
      _ref$rangeDivider = _ref.rangeDivider,
      rangeDivider = _ref$rangeDivider === void 0 ? RANGE_DIVIDER : _ref$rangeDivider;
  return "".concat(formatDate(start)).concat(getStringOrEmpty(end).length > 0 || isValid(end) ? rangeDivider : EMPTY_STRING).concat(formatDate(end));
};
var transformDateValue = function transformDateValue(value) {
  if (Input.Masked.utils.isMaskedValue(value)) {
    return value.replace(RU_DATE_REGEXP, '$3.$2.$1');
  } else if (value.length > MASK_DATE.length && isValid(value) && !underScoreWidthSpaceRegExp.test(value)) {
    return format(toDate(value), 'L', LOCALE);
  }

  return value;
};
var isofyingDateString = function isofyingDateString(_ref2) {
  var value = _ref2.value,
      _ref2$mode = _ref2.mode,
      mode = _ref2$mode === void 0 ? VALUE_MODE : _ref2$mode,
      _ref2$mask = _ref2.mask,
      mask = _ref2$mask === void 0 ? MASK_DATE : _ref2$mask,
      _ref2$parseFormat = _ref2.parseFormat,
      parseFormat = _ref2$parseFormat === void 0 ? 'L' : _ref2$parseFormat;
  var outValue = mode === VALUE_MODE ? value : EMPTY_STRING;
  var today = new Date();

  if (value && value.length === mask.length && !underScoreWidthSpaceRegExp.test(value)) {
    var parsedDate = setHours(setMinutes(parse(value, parseFormat, today, LOCALE), DEFAULT_DATE.MINUTES), DEFAULT_DATE.HOURS);

    if (parsedDate.getFullYear() > LAST_YEAR) {
      return '9999-12-31T11:50:00.000+02:30';
    }

    if (parsedDate.getFullYear() < 0) {
      return '0000-01-01T11:50:00.000+02:30';
    }

    outValue = isValid(parsedDate) ? fullISOFormat(parsedDate) : outValue;
  }

  return outValue || EMPTY_STRING;
};
var mask = function mask(value) {
  if (_.isObject(value)) {
    return getStringFromDateStartEnd({
      start: value.startDate,
      end: value.endDate
    });
  }

  return "".concat(value);
};

var validateDate = function validateDate(date) {
  return dateStringValidation(date) && fullISOFormat(date);
};
/**
 *
 * @param {String} dateString - Строка даты
 * @return {Boolean} Признак соответствия строки формату DD.MM.YYYY
 */


var isRuDate = function isRuDate(dateString) {
  // First check for the pattern
  if (!/^(?:\d{1,2}\.){2}\d{4}$/.test(dateString)) {
    return false;
  } // Parse the date parts to integers


  var parts = dateString.split('.');
  var day = parseInt(parts[0], 10);
  var month = parseInt(parts[1], 10);
  var year = parseInt(parts[2], 10); // Check the ranges of month and year

  if (year < 1000 || year > 3000 || month === 0 || month > 12) {
    return false;
  }

  var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // Adjust for leap years

  if (year % 400 === 0 || year % 100 !== 0 && year % 4 === 0) {
    monthLength[1] = 29;
  } // Check the range of the day


  return day > 0 && day <= monthLength[month - 1];
};
var parseRuDate = function parseRuDate(date) {
  return isRuDate(date) ? parse(date, 'DD.MM.YYYY', new Date()) : date;
};
var chooseValidDate = function chooseValidDate(firstDate, secondDate) {
  return validateDate(firstDate) || validateDate(secondDate) || fullISOFormat(new Date());
};
var isEndOfStringChanged = function isEndOfStringChanged(date1, date2, dateFormat, maskArray) {
  var dateToSearch = formatDate(date1, dateFormat, maskArray);
  var dateSearching = formatDate(date2, dateFormat, maskArray);
  return dateSearching.length >= dateToSearch.length || _.startsWith(dateToSearch, dateSearching);
};
var makeFullISOStringFromMonthYear = function makeFullISOStringFromMonthYear(monthYear, date) {
  var monthYearParse = parse(monthYear, MONTH_FORMAT, date, LOCALE);

  if (monthYear.length >= MONTH_FORMAT.length && isValid(monthYearParse) && !regExpSpace.test(monthYear)) {
    return fullISOFormat(setYear(setMonth(date, getMonth(monthYearParse)), getYear(monthYearParse)));
  }

  return monthYear;
};
var makeMonthsArray = function makeMonthsArray(date, chunk) {
  return _(new Array(COUNT_MONTHS)).map(function (v, key) {
    return fullISOFormat(addMonths(startOfYear(date), key));
  }).chunk(chunk).value();
};
var makeFixedRange = function makeFixedRange(date, monthLength) {
  return "".concat(fullISOFormat(startOfMonth(date)), "/").concat(fullISOFormat(endOfMonth(addMonths(date, monthLength))));
};
var getQuarterNumber = function getQuarterNumber(date) {
  var PART = 3;
  var validDate = toDate(date);
  var arrayDate = makeMonthsArray(validDate, PART);
  return _.find(_.map(arrayDate, function (part, quarter) {
    if (isWithinInterval(validDate, {
      start: _.first(part),
      end: endOfMonth(_.last(part))
    })) {
      return quarter + 1;
    }

    return void 0;
  }));
};
var quarterMask = function quarterMask(date) {
  if (Input.Masked.utils.isMaskedValue(date)) {
    var year = date.substring(0, 4); // eslint-disable-line no-magic-numbers, comment: вырезается ISO-год

    var month = date.substring(5, 7); // eslint-disable-line no-magic-numbers, comment: вырезается ISO-месяц

    var quarter = _.floor((month - 1) / 3) + 1; // eslint-disable-line no-magic-numbers, comment: определяется номер квартала

    return "".concat(_.isNaN(quarter) ? Input.Masked.utils.MASK_SYMBOL : quarter, "-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B ").concat(year);
  } else if (dateStringValidation(date, MASK_QUARTER)) {
    return "".concat(getQuarterNumber(date), "-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B ").concat(getYear(date));
  }

  return date;
};
var quarterUnmask = function quarterUnmask(quarterString) {
  var stringParts = quarterString.replace(/-й квартал/g, '').split(' ');

  if (_.last(stringParts) && quarterString.trim().length === MASK_QUARTER.length) {
    var arrayDate = makeMonthsArray(setYear(new Date(), _.last(stringParts)), QUARTER_LENGTH);
    return makeFixedRange(_.first(arrayDate[_.first(stringParts) - 1]), QUARTER_LENGTH);
  }

  return quarterString;
}; // Формирование дней месяца

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

var getItemsDays = function getItemsDays(date) {
  var parsedDate = isRuDate(date) ? parse(date, 'DD.MM.YYYY', new Date()) : date;
  var startMonth = startOfMonth(parsedDate, LOCALE);
  var dayOfWeek = getDay(startMonth) ? getDay(startMonth) - LOCALE.locale.options.weekStartsOn : DEFAULT_DAY_OF_WEEK;
  var startDays = new Array(dayOfWeek).concat(eachDayOfInterval({
    start: startMonth,
    end: lastDayOfMonth(parsedDate)
  }));
  var emptyDaysCount = MAX_CELL_COUNT_PER_MONTH - startDays.length;
  var endEmptyDays = new Array( // Добавляем пустые ячейки в конец списка так, чтобы не было пустой недели в конце
  emptyDaysCount >= WEEK_LENGTH ? emptyDaysCount - WEEK_LENGTH : emptyDaysCount);
  return _.chunk(startDays.concat(endEmptyDays), WEEK_LENGTH);
}; // Конец блока "Формирование дней месяца"

var getItemsYears = function getItemsYears(date) {
  // Находим начало десятилетия и пушим его даты
  var decade = Math.floor(getYear(date) / 10) * 10;
  return _(new Array(TABLE_SIZE)).map(function (v, key) {
    var decadeDate = parse("01/01/".concat(decade), 'MM/DD/YYYY', new Date());
    decade += 1;
    return decadeDate;
  }).chunk(DELIMITER).value();
}; // Конец блока "Формирование годов"
// Валидация даты

var isDateValid = function isDateValid(date) {
  return date && date.length >= MASK_DATE.length && isValid(date);
};
/**
 *
 * @param {Array} years - массив, включающий даты, разбитые на 4 массива по 3 элемента
 * @return {String} Строка в формате "2000-е" с указанием десятилетия, с которого начинается ряд календаря
 */

var getYearsTitle = function getYearsTitle(years) {
  var minYear = _.get(years, ['0', '0'], null);

  var parsedYear = getYear(minYear);
  return minYear ? "".concat(parsedYear - parsedYear % MULTIPLE_OF_TEN, "-\u0435") : null;
};
var utils = {
  chooseValidDate: chooseValidDate,
  dateStringValidation: dateStringValidation,
  formatDate: formatDate,
  fullISOFormat: fullISOFormat,
  makeISOdate: makeISOdate,
  makeFullISOFromTime: makeFullISOFromTime,
  makeFullISOStringFromMonthYear: makeFullISOStringFromMonthYear,
  makeFixedRange: makeFixedRange,
  getQuarterNumber: getQuarterNumber,
  quarterMask: quarterMask,
  quarterUnmask: quarterUnmask
};

export { chooseValidDate, dateStringValidation, formatDate, fullISOFormat, getItemsDays, getItemsYears, getQuarterNumber, getStringFromDateStartEnd, getYearsTitle, isDateValid, isEndOfStringChanged, isRuDate, isofyingDateString, makeFixedRange, makeFullISOFromTime, makeFullISOStringFromMonthYear, makeISOdate, makeMonthsArray, mask, noNumbersNoString, parseRuDate, quarterMask, quarterUnmask, transformDateValue, utils };
//# sourceMappingURL=utils.js.map
