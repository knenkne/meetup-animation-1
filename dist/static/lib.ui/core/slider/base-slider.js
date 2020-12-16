import { c as _inherits, d as _createSuper, e as _classCallCheck, f as _defineProperty, g as _assertThisInitialized, h as _createClass } from '../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';
import '../utils/get-display-name.js';
import '../utils/hoc/style.css';
import '../utils/hoc/deprecate.js';
import '../utils/hoc/experimental.js';
import '../utils/hoc/error-adapter.js';
import '../utils/hoc/omittere.js';
import '../utils/hoc/accessibility-relocation.js';
import { disableHandler, preventHandler } from '../utils/handlers.js';
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
import 'bignumber.js';
import { getValueByMouse, computeStepByDigits, getGridValue, getLinearValue, addSliderHandlers, removeSliderHandlers } from './utils.js';
import defaultTheme from './style.css';
import { Segments } from './segments.js';

var BaseSlider = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(BaseSlider, _React$PureComponent);

  var _super = _createSuper(BaseSlider);

  function BaseSlider() {
    var _this;

    _classCallCheck(this, BaseSlider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "setRefTrack", function (component) {
      _this.track = component;
    });

    _defineProperty(_assertThisInitialized(_this), "setClosestValue", function (event) {
      var _this$props = _this.props,
          min = _this$props.min,
          max = _this$props.max,
          step = _this$props.step,
          digits = _this$props.digits,
          value = _this$props.value,
          onChange = _this$props.onChange,
          disabled = _this$props.disabled,
          grid = _this$props.grid;
      var newValue = getValueByMouse(event, _this.track, pageXOffset, computeStepByDigits(min, max, step, digits), min, max, grid, value);

      if (newValue !== value) {
        disableHandler(onChange, disabled)(newValue, event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseDown", function (event) {
      if (!_this.props.disabled) {
        _this.setClosestValue(event);

        _this.props.addSliderHandlers(document, _this.handleMouseMove, _this.handleMouseUp);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseMove", preventHandler(_this.setClosestValue));

    _defineProperty(_assertThisInitialized(_this), "handleMouseUp", function (event) {
      _this.setClosestValue(event);

      _this.props.removeSliderHandlers(document, _this.handleMouseMove, _this.handleMouseUp);
    });

    return _this;
  }

  _createClass(BaseSlider, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.removeSliderHandlers(document, this.handleMouseMove, this.handleMouseUp);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          min = _this$props2.min,
          max = _this$props2.max,
          value = _this$props2.value,
          grid = _this$props2.grid,
          mode = _this$props2.mode,
          step = _this$props2.step,
          digits = _this$props2.digits,
          colorScheme = _this$props2.colorScheme,
          error = _this$props2.error,
          transitionDuration = _this$props2.transitionDuration;
      var leftOffset = grid ? "".concat(100 * getGridValue(value, grid), "%") : "".concat(100 * getLinearValue(value, min, max), "%");
      return /*#__PURE__*/React.createElement("div", {
        className: classnames(defaultTheme.basic, defaultTheme[colorScheme], error && defaultTheme.error)
      }, /*#__PURE__*/React.createElement("div", {
        ref: this.setRefTrack,
        className: defaultTheme.track,
        onMouseDown: this.handleMouseDown,
        onTouchStart: this.handleMouseDown
      }, /*#__PURE__*/React.createElement("div", {
        className: defaultTheme.progress,
        style: {
          width: leftOffset,
          transition: "background-color 0.17s ease-in-out, border-color 0.17s ease-in-out, width ".concat(transitionDuration, "s linear")
        }
      }), /*#__PURE__*/React.createElement("div", {
        className: defaultTheme.thumb,
        style: {
          left: leftOffset,
          transition: "background-color 0.17s ease-in-out, border-color 0.17s ease-in-out, left ".concat(transitionDuration, "s linear")
        }
      }), mode === 'segmented' && /*#__PURE__*/React.createElement(Segments, {
        min: min,
        max: max,
        step: computeStepByDigits(min, max, step, digits),
        grid: grid
      })));
    }
  }]);

  return BaseSlider;
}(React.PureComponent);

_defineProperty(BaseSlider, "propTypes", {
  colorScheme: PropTypes.oneOf(['base', 'purple', 'blue', 'green', 'skyblue', 'black', 'gold', 'aqua']).isRequired,
  mode: PropTypes.oneOf(['segmented']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  step: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  digits: PropTypes.arrayOf(PropTypes.number),
  grid: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  transitionDuration: PropTypes.number,

  /**
   * Thrown out functions for adding global handlers to the event listeners of the document. CAUTION: do not change, only for unit-tests
   */
  addSliderHandlers: PropTypes.func.isRequired,
  removeSliderHandlers: PropTypes.func.isRequired
});

_defineProperty(BaseSlider, "defaultProps", {
  colorScheme: 'base',
  mode: void 0,
  onChange: _.noop,
  disabled: false,
  error: void 0,
  prefix: '',
  suffix: '',
  min: 0,
  max: 100,
  step: 1,
  grid: void 0,
  digits: void 0,
  title: void 0,
  transitionDuration: 0,
  addSliderHandlers: addSliderHandlers,
  removeSliderHandlers: removeSliderHandlers
});

export { BaseSlider };
//# sourceMappingURL=base-slider.js.map
