import { c as _inherits, d as _createSuper, e as _classCallCheck, f as _defineProperty, g as _assertThisInitialized, h as _createClass } from '../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
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
import './style.css';
import './tip.js';
import { Tooltip } from './tooltip.js';

/* eslint-disable valid-jsdoc, comment: некорректный парсинг jsdoc */

/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=Tooltip)
 * Компонент вывода всплывающей подсказки по наведению
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var HoverTooltip = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(HoverTooltip, _React$PureComponent);

  var _super = _createSuper(HoverTooltip);

  function HoverTooltip() {
    var _this;

    _classCallCheck(this, HoverTooltip);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpened: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleTooltipFocus", function (event) {
      if (!_this.state.isOpened) {
        _this.setState({
          isOpened: true
        }, function () {
          var _this$props$onOpen, _this$props;

          return (_this$props$onOpen = (_this$props = _this.props).onOpen) === null || _this$props$onOpen === void 0 ? void 0 : _this$props$onOpen.call(_this$props, event);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleTooltipBlur", function (event) {
      if (_this.state.isOpened) {
        _this.setState({
          isOpened: false
        }, function () {
          var _this$props$onClose, _this$props2;

          return (_this$props$onClose = (_this$props2 = _this.props).onClose) === null || _this$props$onClose === void 0 ? void 0 : _this$props$onClose.call(_this$props2, event);
        });
      }
    });

    return _this;
  }

  _createClass(HoverTooltip, [{
    key: "render",
    value: function render() {
      var passedProps = _(this.props).omit(['onOpen', 'onClose', 'forceOpened']).extend({
        onFocus: this.handleTooltipFocus,
        onBlur: this.handleTooltipBlur,
        onMouseOver: this.handleTooltipFocus,
        onMouseLeave: this.handleTooltipBlur,
        forceOpened: this.props.forceOpened || this.state.isOpened
      }).value();

      return /*#__PURE__*/React.createElement(Tooltip, passedProps);
    }
  }]);

  return HoverTooltip;
}(React.PureComponent);

_defineProperty(HoverTooltip, "propTypes", {
  children: PropTypes.node,
  // eslint-disable-line react/no-unused-prop-types, comment: более краткая запись компонента, но в API указать надо
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  forceOpened: PropTypes.bool
});

_defineProperty(HoverTooltip, "defaultProps", {
  children: void 0,
  onOpen: _.noop,
  onClose: _.noop,
  forceOpened: void 0
});

HoverTooltip.displayName = 'Tooltip.Hover';

export { HoverTooltip };
//# sourceMappingURL=hover-tooltip.js.map
