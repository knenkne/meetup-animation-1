import { c as _inherits, d as _createSuper, e as _classCallCheck, f as _defineProperty, g as _assertThisInitialized, h as _createClass } from '../../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';
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
import 'text-mask-addons/dist/createNumberMask';
import '../utils.js';
import defaultTheme from '../input.css';
import '../input.js';
import { autoSizeFactory } from '../hoc/auto-size.js';
import '../masked/masked-format.js';
import '../masked/masked.js';
import { Numeric } from '../numeric/numeric.js';
import defaultTheme$1 from './counter.css';
import { CounterControl } from './counter-control.js';

var TOP_ARROW = 38;
var BOTTOM_ARROW = 40;
var HOME = 36;
var END = 35;
var PAGE_UP = 33;
var PAGE_DOWN = 34;
var MULTIPLICITY = 10;
var AdaptiveNumeric = autoSizeFactory({
  minWidth: 36
})(Numeric);

var inputTheme = _.extend({}, defaultTheme, {
  input: classnames(defaultTheme.input, defaultTheme$1.input)
});
/* eslint-disable valid-jsdoc, comment: некорректный парсинг jsdoc */

/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d/screen/5cadc53a40aa3004f12e5f7e)
 * Аналог input type="number" с role="spinbutton"
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */


var Counter = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Counter, _React$PureComponent);

  var _super = _createSuper(Counter);

  function Counter() {
    var _this;

    _classCallCheck(this, Counter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "getWarning", function () {
      var _this$props = _this.props,
          min = _this$props.min,
          max = _this$props.max,
          _this$props$translati = _this$props.translations,
          minWarning = _this$props$translati.minWarning,
          maxWarning = _this$props$translati.maxWarning,
          value = _this$props.value;

      if (value < min) {
        return minWarning;
      } else if (value > max) {
        return maxWarning;
      }

      return null;
    });

    _defineProperty(_assertThisInitialized(_this), "handleDecrease", function () {
      _this.handleDecreaseByTimes(1);
    });

    _defineProperty(_assertThisInitialized(_this), "handleIncrease", function () {
      _this.handleIncreaseByTimes(1);
    });

    _defineProperty(_assertThisInitialized(_this), "handleDecreaseByTimes", function (times) {
      var _this$props2 = _this.props,
          step = _this$props2.step,
          value = _this$props2.value,
          onChange = _this$props2.onChange,
          min = _this$props2.min,
          max = _this$props2.max;

      var newValue = _.toString(_.clamp(_.toInteger(value) - times * step, min, max));

      if (newValue !== value) {
        onChange(newValue);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleIncreaseByTimes", function (times) {
      var _this$props3 = _this.props,
          step = _this$props3.step,
          value = _this$props3.value,
          onChange = _this$props3.onChange,
          min = _this$props3.min,
          max = _this$props3.max;

      var newValue = _.toString(_.clamp(_.toInteger(value) + times * step, min, max));

      if (newValue !== value) {
        onChange(newValue);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      var _this$props4 = _this.props,
          onChange = _this$props4.onChange,
          min = _this$props4.min,
          max = _this$props4.max,
          onKeyDown = _this$props4.onKeyDown,
          disabled = _this$props4.disabled;
      /*
       * Важно понимать что выражение `event.preventDefault()` необходимо выполнять после изменения значения.
       * Такая необходимость происходит из-за того, что некоторые скринридеры (VoiceOver) меняют режим взаимодействия браузера и клавиатуры,
       * что, в свою очередь, отменяет возможность клавиатурным событиям менять значение и ломать a11y.
       * */

      if (!disabled) {
        switch (event.keyCode) {
          case BOTTOM_ARROW:
            {
              _this.handleDecreaseByTimes(1);

              event.preventDefault();
              break;
            }

          case TOP_ARROW:
            {
              _this.handleIncreaseByTimes(1);

              event.preventDefault();
              break;
            }

          case HOME:
            {
              onChange(_.toString(min));
              event.preventDefault();
              break;
            }

          case END:
            {
              onChange(_.toString(max));
              event.preventDefault();
              break;
            }

          case PAGE_DOWN:
            {
              _this.handleDecreaseByTimes(MULTIPLICITY);

              event.preventDefault();
              break;
            }

          case PAGE_UP:
            {
              _this.handleIncreaseByTimes(MULTIPLICITY);

              event.preventDefault();
              break;
            }
        }
      }

      onKeyDown(event);
    });

    return _this;
  }

  _createClass(Counter, [{
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          min = _this$props5.min,
          max = _this$props5.max,
          step = _this$props5.step,
          disabled = _this$props5.disabled,
          value = _this$props5.value,
          prefix = _this$props5.prefix,
          suffix = _this$props5.suffix,
          title = _this$props5.title,
          colorScheme = _this$props5.colorScheme,
          readonly = _this$props5.readonly,
          readOnly = _this$props5.readOnly,
          mode = _this$props5.mode;

      var inputProps = _(this.props).omit(['translations', 'step', 'colorScheme', 'mode']).extend({
        theme: inputTheme,
        onKeyDown: this.handleKeyDown,
        autoComplete: 'off',
        allowDecimal: false,
        allowEmpty: false,
        role: 'spinbutton',
        'aria-disabled': disabled,
        'aria-valuenow': value,
        'aria-valuemin': min,
        'aria-valuemax': max,
        'aria-valuetext': "".concat(prefix).concat(value).concat(suffix),
        'aria-label': title
      }).value();

      var parsedValue = _.toInteger(value);

      var canDecrease = parsedValue - step < min;
      var canIncrease = parsedValue + step > max;
      var InputComponent = mode === 'wide' ? Numeric : AdaptiveNumeric;
      return /*#__PURE__*/React.createElement("div", {
        className: classnames(defaultTheme$1.counter, defaultTheme$1[colorScheme], mode === 'wide' && defaultTheme$1.wide),
        "data-unit": "input:counter"
      }, /*#__PURE__*/React.createElement(InputComponent, inputProps), !readonly && !readOnly && !disabled && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CounterControl, {
        mode: "decrease",
        onClick: this.handleDecrease,
        disabled: canDecrease,
        "aria-hidden": "true"
      }), /*#__PURE__*/React.createElement(CounterControl, {
        mode: "increase",
        onClick: this.handleIncrease,
        disabled: canIncrease,
        "aria-hidden": "true"
      })));
    }
  }]);

  return Counter;
}(React.PureComponent);

_defineProperty(Counter, "propTypes", {
  value: PropTypes.string.isRequired,
  onKeyDown: PropTypes.func,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  translations: PropTypes.shape({
    minWarning: PropTypes.string,
    maxWarning: PropTypes.string
  }),
  prefix: PropTypes.string,
  suffix: PropTypes.string,

  /**
   * use this for a11y naming
   */
  title: PropTypes.string.isRequired,
  colorScheme: PropTypes.oneOf(['green', 'blue', 'violet', 'turquoise', 'sky-blue', 'aqua', 'gold', 'charcoal-grey']),
  readonly: PropTypes.bool,
  readOnly: PropTypes.bool,
  mode: PropTypes.oneOf(['wide', void 0])
});

_defineProperty(Counter, "defaultProps", {
  onChange: _.noop,
  onKeyDown: _.noop,
  min: 0,
  max: Infinity,
  translations: {
    minWarning: void 0,
    maxWarning: void 0
  },
  step: 1,
  disabled: false,
  prefix: '',
  suffix: '',
  colorScheme: 'green',
  readonly: false,
  readOnly: false,
  mode: void 0
});

Counter.theme = defaultTheme$1;
Counter.displayName = 'Input.Counter';

export { Counter };
//# sourceMappingURL=counter.js.map
