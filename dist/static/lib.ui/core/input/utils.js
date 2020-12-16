import _ from 'lodash';
import BigNumber from 'bignumber.js';
import { conformToMask } from 'text-mask-core/dist/textMaskCore';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

var GLOBAL = 'g';
var EMPTY_STRING = '';
var DOT = '.';
var MINUS = '-';
var ZERO = '0';
var TRIM_REGEXP = /^(-)?0*([^.])/;
var UNDERSCORE = '_';
var CARET_TRAP = '[]';
var REPLACE_STRING = '$1$2';

var trimStartNumber = function trimStartNumber(value) {
  return value.replace(TRIM_REGEXP, REPLACE_STRING);
};

var safeClamp = function safeClamp(value, min, max) {
  if (value === EMPTY_STRING || value === MINUS || !_.isNumber(min) && !_.isNumber(max)) {
    return trimStartNumber(value);
  }

  var current = new BigNumber(value);
  var clamped = BigNumber.min(BigNumber.max(new BigNumber(_.isNumber(min) ? min : -Infinity), current), new BigNumber(_.isNumber(max) ? max : Infinity)).toPrecision();
  return current === clamped ? trimStartNumber(value) : clamped;
};

var getNumberRegexp = function getNumberRegexp(decimalSymbol) {
  return new RegExp("[^\\-\\d\\".concat(decimalSymbol, "]"), GLOBAL);
};

var unmaskNumberValue = function unmaskNumberValue(value, _ref) {
  var decimalSymbol = _ref.decimalSymbol,
      allowEmpty = _ref.allowEmpty,
      blur = _ref.blur;

  var unmaskedValue = _.toString(value).replace(getNumberRegexp(decimalSymbol), EMPTY_STRING).replace(decimalSymbol, DOT);

  var fastNumber = _.toNumber(unmaskedValue);

  if (blur && !allowEmpty && !fastNumber) {
    unmaskedValue = ZERO;
  } else if (blur && fastNumber !== 0 && !fastNumber) {
    unmaskedValue = EMPTY_STRING;
  } else if (blur && _.last(unmaskedValue) === DOT) {
    unmaskedValue = _.replace(unmaskedValue, DOT, '');
  }

  return unmaskedValue;
};
var prepareToMaskNumberValue = function prepareToMaskNumberValue(value, _ref2) {
  var _ref2$allowDecimal = _ref2.allowDecimal,
      allowDecimal = _ref2$allowDecimal === void 0 ? false : _ref2$allowDecimal,
      decimalSymbol = _ref2.decimalSymbol;

  if (allowDecimal) {
    return _.toString(value).replace(DOT, decimalSymbol);
  }

  return _.first(_.toString(value).split(DOT));
};

var clearTraps = function clearTraps(arrayMask) {
  return _.reject(arrayMask, function (item) {
    return item === CARET_TRAP;
  });
};

var getConformedValue = function getConformedValue(value, arrayMask) {
  return _.get(conformToMask(value, arrayMask), 'conformedValue', EMPTY_STRING);
};

var maskNumberValue = function maskNumberValue(value, _ref3) {
  var allowDecimal = _ref3.allowDecimal,
      decimalSymbol = _ref3.decimalSymbol,
      mask = _ref3.mask,
      _ref3$prefix = _ref3.prefix,
      prefix = _ref3$prefix === void 0 ? EMPTY_STRING : _ref3$prefix,
      _ref3$suffix = _ref3.suffix,
      suffix = _ref3$suffix === void 0 ? EMPTY_STRING : _ref3$suffix;
  var preparedValue = prepareToMaskNumberValue(value, {
    allowDecimal: allowDecimal,
    decimalSymbol: decimalSymbol
  });
  var dirtyMask = mask(preparedValue);
  var clearMask = clearTraps(dirtyMask);
  var conformedValue = getConformedValue(value, clearMask);
  return conformedValue.replace("".concat(prefix).concat(UNDERSCORE).concat(suffix), EMPTY_STRING).replace(UNDERSCORE, EMPTY_STRING);
};
var formatNumberValue = function formatNumberValue(value) {
  var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref4$allowDecimal = _ref4.allowDecimal,
      allowDecimal = _ref4$allowDecimal === void 0 ? true : _ref4$allowDecimal,
      _ref4$decimalSymbol = _ref4.decimalSymbol,
      decimalSymbol = _ref4$decimalSymbol === void 0 ? ',' : _ref4$decimalSymbol,
      _ref4$prefix = _ref4.prefix,
      prefix = _ref4$prefix === void 0 ? EMPTY_STRING : _ref4$prefix,
      _ref4$suffix = _ref4.suffix,
      suffix = _ref4$suffix === void 0 ? EMPTY_STRING : _ref4$suffix,
      _ref4$includeThousand = _ref4.includeThousandsSeparator,
      includeThousandsSeparator = _ref4$includeThousand === void 0 ? true : _ref4$includeThousand,
      _ref4$thousandsSepara = _ref4.thousandsSeparatorSymbol,
      thousandsSeparatorSymbol = _ref4$thousandsSepara === void 0 ? ' ' : _ref4$thousandsSepara,
      _ref4$decimalLimit = _ref4.decimalLimit,
      decimalLimit = _ref4$decimalLimit === void 0 ? null : _ref4$decimalLimit,
      _ref4$integerLimit = _ref4.integerLimit,
      integerLimit = _ref4$integerLimit === void 0 ? null : _ref4$integerLimit,
      _ref4$requireDecimal = _ref4.requireDecimal,
      requireDecimal = _ref4$requireDecimal === void 0 ? false : _ref4$requireDecimal,
      _ref4$allowNegative = _ref4.allowNegative,
      allowNegative = _ref4$allowNegative === void 0 ? true : _ref4$allowNegative,
      _ref4$allowLeadingZer = _ref4.allowLeadingZeroes,
      allowLeadingZeroes = _ref4$allowLeadingZer === void 0 ? false : _ref4$allowLeadingZer;

  var mask = createNumberMask({
    prefix: prefix,
    suffix: suffix,
    allowDecimal: allowDecimal,
    decimalSymbol: decimalSymbol,
    includeThousandsSeparator: includeThousandsSeparator,
    thousandsSeparatorSymbol: thousandsSeparatorSymbol,
    decimalLimit: decimalLimit,
    integerLimit: integerLimit,
    requireDecimal: requireDecimal,
    allowNegative: allowNegative,
    allowLeadingZeroes: allowLeadingZeroes
  });
  return maskNumberValue(value, {
    allowDecimal: allowDecimal,
    decimalSymbol: decimalSymbol,
    mask: mask,
    prefix: prefix,
    suffix: suffix
  });
};
var ZERO_PX = '0px';
var NO_DIGITS = /^\D+$/; // eslint-disable no-param-reassign, comment: работа с размерами в realtime

var getExpectedDimensionFactory = function getExpectedDimensionFactory(dimension) {
  var capitalizeDimension = _.capitalize(dimension);

  var scroll = "scroll".concat(capitalizeDimension);
  var offset = "offset".concat(capitalizeDimension);
  var client = "client".concat(capitalizeDimension);
  var paddingStart = dimension === 'height' ? 'paddingTop' : 'paddingLeft';
  var paddingEnd = dimension === 'height' ? 'paddingBottom' : 'paddingRight';
  return function (element, min) {
    var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;

    if (element && min) {
      if (element[scroll] === 0) {
        return void 0;
      }
      /**
       * IE-инпуты имеют неправильный scrollWidth
       * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11325194/
       * Для них необходимо проверять через div ширину контента и подставлять его значение
       */


      var responsiveElement = document.createElement('div');
      responsiveElement.innerHTML = element.value.replace(/\n/g, '<br />');
      responsiveElement.className = element.className;
      var styles = getComputedStyle(element);

      _.forEach(styles, function (value, key) {
        // фикс для FF (он генерирует стили в разных форматах + массивом)
        if (NO_DIGITS.test(key)) {
          responsiveElement.style[key] = value;
        }
      });

      element.parentNode.appendChild(responsiveElement);

      if (element.tagName === 'INPUT') {
        responsiveElement.style.whiteSpace = 'nowrap';
      }

      var reservedPaddingStart = responsiveElement.style[paddingStart];
      var reservedPaddingEnd = responsiveElement.style[paddingEnd];
      responsiveElement.style[dimension] = ZERO_PX;
      responsiveElement.style[paddingStart] = ZERO_PX;
      responsiveElement.style[paddingEnd] = ZERO_PX;
      var mainSize = responsiveElement[scroll] + responsiveElement[offset] - responsiveElement[client];
      responsiveElement.style[paddingStart] = reservedPaddingStart;
      responsiveElement.style[paddingEnd] = reservedPaddingEnd;

      var newValue = _.clamp(mainSize + parseFloat(styles[paddingStart]) + parseFloat(styles[paddingEnd]), min, max);

      responsiveElement.style[dimension] = "".concat(newValue, "px");
      var expectedDimension = responsiveElement.style[dimension];
      element.parentNode.removeChild(responsiveElement);
      return expectedDimension;
    }

    return void 0;
  };
}; // eslint-enable


var setDimensionFactory = function setDimensionFactory(dimension) {
  var capitalizeDimension = _.capitalize(dimension);

  var scroll = "scroll".concat(capitalizeDimension);
  var getExpectedDimension = getExpectedDimensionFactory(dimension);
  return function (element, min) {
    var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;

    if (element && min) {
      if (element[scroll] === 0) {
        return;
      }

      var expectedDimension = getExpectedDimension(element, min, max);

      if (expectedDimension) {
        element.style[dimension] = expectedDimension; // eslint-disable-line no-param-reassign, comment: работа с размерами в realtime
      }
    }
  };
};

var getExpectedHeight = getExpectedDimensionFactory('height');
var getExpectedWidth = getExpectedDimensionFactory('width');
var setHeight = setDimensionFactory('height');
var setWidth = setDimensionFactory('width');
/**
 * Функция определения изменений в поле ввода
 *
 * @param {String} nextValue - новое значение в поле ввода
 * @param {Number} prevSelectionStart - начало каретки до ввода
 * @param {Number} nextSelection - начало или конец каретки после ввода
 * @return {String} - произведенное изменение
 */

var getInputDiff = function getInputDiff(nextValue, prevSelectionStart, nextSelection) {
  return nextValue.substring(prevSelectionStart, nextSelection);
};

export { formatNumberValue, getExpectedHeight, getExpectedWidth, getInputDiff, maskNumberValue, prepareToMaskNumberValue, safeClamp, setHeight, setWidth, unmaskNumberValue };
//# sourceMappingURL=utils.js.map
