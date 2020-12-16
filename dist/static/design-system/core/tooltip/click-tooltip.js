import { b as _inherits, c as _createSuper, f as _classCallCheck, e as _defineProperty, g as _assertThisInitialized, d as _createClass } from '../_rollupPluginBabelHelpers-3e859d87.js';
import '@emotion/styled';
import '@emotion/core';
import '../styles/semantic.config.style.js';
import '../styles/radius.config.style.js';
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/font-sizes.config.style.js';
import '../colors.config.style-69a09a5b.js';
import '../typography/typography.style.js';
import '../typography/typography.js';
import _ from 'lodash';
import { preventHandler } from '../utils/handlers.js';
import '../styles/semantic-palette.config.style.js';
import '../styles/media.config.style.js';
import '../indent-wrapper/indent-wrapper.style.js';
import '../utils/make-direction.js';
import '../styles/shadows.config.style.js';
import './tooltip.style.js';
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
