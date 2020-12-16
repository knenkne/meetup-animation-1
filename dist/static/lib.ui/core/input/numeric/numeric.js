import { c as _inherits, d as _createSuper, e as _classCallCheck, f as _defineProperty, g as _assertThisInitialized, h as _createClass, _ as _extends } from '../../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import 'classnames';
import '../../utils/get-display-name.js';
import '../../utils/hoc/style.css';
import '../../utils/hoc/deprecate.js';
import '../../utils/hoc/experimental.js';
import '../../utils/hoc/error-adapter.js';
import '../../utils/hoc/omittere.js';
import '../../utils/hoc/accessibility-relocation.js';
import '../../utils/handlers.js';
import '../../utils/pluralize.js';
import '../../utils/scroll-to.js';
import '../../utils/format-phone-number.js';
import '../../utils/memoize-func-with-args.js';
import '../../utils/auto-top-check-by-window.js';
import '../../utils/merge-theme.js';
import '../../utils/styles/media.config.css';
import '../../utils/adaptive.js';
import '../../utils/pseudo/pseudo-button.js';
import '../../utils/get-card-icon.js';
import '../../utils/get-ivestments-icon.js';
import '../../utils/get-metal-icon.js';
import '../../utils/get-target-icon.js';
import '../../icon/style.css';
import '../../icon/icon.js';
import '../../index-85b17782.js';
import '../../external-969f6c5f.js';
import '../../icon/index.js';
import '../../utils/set-project-id.js';
import '../../utils/make-direction.js';
import '../../utils/show-error.js';
import 'bignumber.js';
import 'text-mask-core/dist/textMaskCore';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { getInputDiff, unmaskNumberValue, safeClamp, maskNumberValue } from '../utils.js';
import defaultTheme from '../input.css';
import '../input.js';
import '../masked/masked-format.js';
import { Masked } from '../masked/masked.js';

var propsForMask = ['allowDecimal', 'allowNegative', 'decimalLimit', 'decimalSymbol', 'prefix', 'suffix', 'includeThousandsSeparator', 'thousandsSeparatorSymbol'];
var propsForOmitDesktop = ['prefix', 'suffix', 'includeThousandsSeparator', 'thousandsSeparatorSymbol', 'allowDecimal', 'decimalSymbol', 'decimalLimit', 'allowNegative', 'allowEmpty', 'min', 'max'];
var DOT = '.';
var EMPTY_STRING = '';
/* eslint-disable valid-jsdoc, comment: некорректный парсинг jsdoc */

/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=input%20general)
 * Числовое поле ввода
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var Numeric = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Numeric, _React$PureComponent);

  var _super = _createSuper(Numeric);

  function Numeric() {
    var _this;

    _classCallCheck(this, Numeric);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      _this.prevSelectionStart = event.target.selectionStart;

      _this.props.onKeyDown(event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleContextMenu", function (event) {
      _this.prevSelectionStart = event.target.selectionStart;

      _this.props.onContextMenu(event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      var _this$props = _this.props,
          decimalSymbol = _this$props.decimalSymbol,
          onChange = _this$props.onChange;

      if (Masked.utils.isMaskedValue(_this.props.value)) {
        onChange(getInputDiff(event.target.value, _this.prevSelectionStart, event.target.selectionStart), event);
      } else {
        var dirtyValue = event.target.value;
        var unmaskedValue = unmaskNumberValue(dirtyValue, {
          decimalSymbol: decimalSymbol
        });
        onChange(unmaskedValue, event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleBeforeChange", function (_ref) {
      var target = _ref.target;

      /* eslint-disable no-param-reassign, comment: предварительная обработка события */
      var prevSelectionStart = target.selectionStart;
      var prevSelectionEnd = target.selectionEnd;
      var prevValue = target.value; // Замена . на установленный разделитель

      var correctedValue = prevValue.replace(DOT, _this.props.decimalSymbol);

      if (correctedValue !== target.value) {
        target.value = correctedValue;
        target.selectionStart = prevSelectionStart;
        target.selectionEnd = prevSelectionEnd;
      } // Запрет ввода второго разделителя


      var firstDecimalPosition = target.value.indexOf(_this.props.decimalSymbol);
      var lastDecimalPosition = target.value.lastIndexOf(_this.props.decimalSymbol);

      if (lastDecimalPosition > -1 && firstDecimalPosition !== lastDecimalPosition && lastDecimalPosition < prevSelectionStart) {
        target.value = target.value.substring(0, lastDecimalPosition) + target.value.substring(lastDecimalPosition + 1);
        target.selectionStart = prevSelectionStart - 1;
        target.selectionEnd = prevSelectionEnd - 1;
      }
      /* eslint-enable no-param-reassign */

    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
      if (!_this.props.disabled && !Masked.utils.isMaskedValue(_this.props.value)) {
        var _this$props2 = _this.props,
            min = _this$props2.min,
            max = _this$props2.max,
            decimalSymbol = _this$props2.decimalSymbol,
            allowEmpty = _this$props2.allowEmpty,
            onChange = _this$props2.onChange,
            onBlur = _this$props2.onBlur,
            allowDecimal = _this$props2.allowDecimal,
            decimalLimit = _this$props2.decimalLimit;
        var dirtyValue = event.target.value;
        var unmaskedValue = unmaskNumberValue(dirtyValue, {
          decimalSymbol: decimalSymbol,
          allowEmpty: allowEmpty,
          allowDecimal: allowDecimal,
          blur: true
        });
        var clampedValue = safeClamp(unmaskedValue, min, max);
        var moneyDecimalLimit = 3;

        if (unmaskedValue !== clampedValue && !allowDecimal) {
          onChange(clampedValue, event);
        }

        if (allowDecimal && decimalLimit < moneyDecimalLimit) {
          if (clampedValue.includes(DOT)) {
            if (clampedValue.replace(/^-?\d*\.?|$/g, '').length === 1) {
              onBlur("".concat(clampedValue, "0"));
            } else {
              onBlur(clampedValue);
            }
          } else {
            onBlur(clampedValue ? "".concat(clampedValue, ".00") : '');
          }
        } else {
          onBlur(clampedValue);
        }
      } else {
        _this.props.onBlur(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "mask", function (value) {
      var maskProperties = _.pick(_this.props, propsForMask);

      maskProperties.allowLeadingZeroes = true;

      if (_.includes(_this.clampAnyFix(value), DOT)) {
        maskProperties.decimalSymbol = DOT;
      } // Сторонняя функция форматирования вырежет символ маски


      var pseudoNumberValue = value.replace(/•/g, '1');
      return Masked.utils.maskedFormat(createNumberMask(maskProperties)(pseudoNumberValue), value);
    });

    _defineProperty(_assertThisInitialized(_this), "clampAnyFix", function (v) {
      return v.replace(_this.props.prefix, EMPTY_STRING).replace(_this.props.suffix, EMPTY_STRING);
    });

    return _this;
  }

  _createClass(Numeric, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          prefix = _this$props3.prefix,
          suffix = _this$props3.suffix,
          allowDecimal = _this$props3.allowDecimal,
          decimalSymbol = _this$props3.decimalSymbol,
          value = _this$props3.value,
          onFocus = _this$props3.onFocus;
      var maskedValue = maskNumberValue(value, {
        allowDecimal: allowDecimal,
        decimalSymbol: decimalSymbol,
        mask: this.mask,
        prefix: prefix,
        suffix: suffix
      });

      var props = _(this.props).omit(propsForOmitDesktop).extend({
        mask: this.mask,
        onFocus: onFocus,
        value: maskedValue,
        onChange: this.handleChange,
        onBeforeChange: this.handleBeforeChange,
        onBlur: this.handleBlur,
        onKeyDown: this.handleKeyDown,
        onContextMenu: this.handleContextMenu,
        placeholderChar: '_',
        guide: true,
        keepCharPositions: false
      }).value();

      return /*#__PURE__*/React.createElement(Masked, _extends({
        inputMode: allowDecimal ? 'decimal' : 'numeric'
      }, props));
    }
  }]);

  return Numeric;
}(React.PureComponent);
Numeric.propTypes = {
  // eslint-disable react/no-unused-prop-types, comment: сквозной проброс пропов
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  theme: PropTypes.shape({
    input: PropTypes.string,
    error: PropTypes.string,
    disabled: PropTypes.string
  }),
  refWrapper: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  onContextMenu: PropTypes.func,

  /**
   * Символ для обозначения валюты или иных символов, которые должны быть слева от вводимого числа
   */
  prefix: PropTypes.string,

  /**
   * Символ для обозначения валюты или иных символов, которые должны быть справа от вводимого числа
   */
  suffix: PropTypes.string,

  /**
   * Символ для разделения тысяч
   */
  thousandsSeparatorSymbol: PropTypes.string,
  decimalSymbol: PropTypes.string,
  includeThousandsSeparator: PropTypes.bool,
  allowDecimal: PropTypes.bool,
  allowNegative: PropTypes.bool,

  /**
   * Поле, для которого разрешено пустое значение, не будет приведено к min|max
   */
  allowEmpty: PropTypes.bool,
  decimalLimit: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number // eslint-enable

};
Numeric.defaultProps = {
  active: false,
  disabled: false,
  refWrapper: _.noop,
  theme: defaultTheme,
  value: '',
  onChange: _.noop,
  onBlur: _.noop,
  onFocus: _.noop,
  onKeyDown: _.noop,
  onContextMenu: _.noop,
  prefix: '',
  suffix: '',
  thousandsSeparatorSymbol: ' ',
  decimalSymbol: '.',
  includeThousandsSeparator: true,
  allowDecimal: false,
  allowNegative: false,
  allowEmpty: false,
  decimalLimit: void 0,
  min: void 0,
  max: void 0
};
Numeric.displayName = 'Input.Numeric';

export { Numeric };
//# sourceMappingURL=numeric.js.map
