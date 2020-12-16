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
import { preventHandler } from '../utils/handlers.js';
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
import 'react-onclickoutside';
import '../perimeter/perimeter.js';
import { Perimeter } from '../perimeter/index.js';

/* eslint-disable valid-jsdoc, comment: некорректный парсинг jsdoc */

/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=Tooltip)
 * Компонент вывода всплывающей подсказки по клику
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var ClickTooltip = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(ClickTooltip, _React$PureComponent);

  var _super = _createSuper(ClickTooltip);

  function ClickTooltip() {
    var _this;

    _classCallCheck(this, ClickTooltip);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpened: false
    });

    _defineProperty(_assertThisInitialized(_this), "setRefPerimeter", function (c) {
      _this.perimeter = c;
    });

    _defineProperty(_assertThisInitialized(_this), "handleTooltipClick", function (event) {
      _this.onHandling(_this.state.isOpened, !_this.state.isOpened, event);

      _this.setState({
        isOpened: !_this.state.isOpened
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function (event) {
      _this.onHandling(_this.state.isOpened, false, event);

      _this.setState({
        isOpened: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onHandling", function (prevState, nextState, event) {
      if (!prevState && nextState) {
        _this.perimeter.enableOnClickOutside();

        _this.props.onOpen(event);
      } else {
        _this.perimeter.disableOnClickOutside();

        _this.props.onClose(event);
      }
    });

    return _this;
  }

  _createClass(ClickTooltip, [{
    key: "render",
    value: function render() {
      var passedProps = _(this.props).omit(['target', 'onOpen', 'onClose']).extend({
        onClick: preventHandler(this.handleTooltipClick),
        forceOpened: this.state.isOpened
      }).value();

      return /*#__PURE__*/React.createElement(Perimeter, {
        disableOnClickOutside: true,
        ref: this.setRefPerimeter,
        onClickOutside: this.handleClose
      }, /*#__PURE__*/React.createElement(Tooltip, passedProps));
    }
  }]);

  return ClickTooltip;
}(React.PureComponent);

_defineProperty(ClickTooltip, "propTypes", {
  children: PropTypes.node,
  // eslint-disable-line react/no-unused-prop-types, comment: более краткая запись компонента, но в API указать надо
  onOpen: PropTypes.func,
  onClose: PropTypes.func
});

_defineProperty(ClickTooltip, "defaultProps", {
  children: void 0,
  onOpen: _.noop,
  onClose: _.noop
});

ClickTooltip.displayName = 'Tooltip.Click';

export { ClickTooltip };
//# sourceMappingURL=click-tooltip.js.map
