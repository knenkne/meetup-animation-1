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
import '../styles/semantic-palette.config.style.js';
import '../styles/media.config.style.js';
import '../indent-wrapper/indent-wrapper.style.js';
import '../utils/make-direction.js';
import '../styles/shadows.config.style.js';
import { TooltipWrapperStyled, TooltipStyled } from './tooltip.style.js';
import { Tip } from './tip.js';

/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d/screen/5ca729c2bad60f05a5910b1c)
 * Компонент программного вывода всплывающей подсказки
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var Tooltip = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Tooltip, _React$PureComponent);

  var _super = _createSuper(Tooltip);

  function Tooltip() {
    var _this;

    _classCallCheck(this, Tooltip);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "tooltipId", _.uniqueId('tooltip-'));

    return _this;
  }

  _createClass(Tooltip, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          forceOpened = _this$props.forceOpened,
          onClick = _this$props.onClick;
      var parsedChildren = React.Children.map(children, function (child) {
        if (!child) {
          return child;
        } else if (_.get(child, 'type.displayName') === Tip.displayName) {
          return /*#__PURE__*/React.cloneElement(child, _.extend({}, child.props, {
            id: _this2.tooltipId,
            forceOpened: forceOpened
          }));
        }

        if (child.props) {
          var passedChild = /*#__PURE__*/React.cloneElement(child, _.extend({}, child.props, {
            'aria-controls': _this2.tooltipId,
            'aria-describedby': _this2.tooltipId
          }));
          return /*#__PURE__*/React.createElement(TooltipWrapperStyled, {
            onClickCapture: onClick
          }, passedChild);
        }

        return /*#__PURE__*/React.createElement(TooltipWrapperStyled, {
          onClickCapture: onClick,
          "aria-controls": _this2.tooltipId,
          "aria-describedby": _this2.tooltipId
        }, child);
      });

      var passedProps = _(this.props).omit(['children', 'forceOpened', 'onClick', 'id']).value();

      return /*#__PURE__*/React.createElement(TooltipStyled, passedProps, parsedChildren);
    }
  }]);

  return Tooltip;
}(React.PureComponent);
Tooltip.propTypes = {
  children: PropTypes.node,
  forceOpened: PropTypes.bool,
  onClick: PropTypes.func,
  mode: PropTypes.oneOf(['fullWidth', void 0])
};
Tooltip.defaultProps = {
  children: void 0,
  forceOpened: false,
  onClick: _.noop,
  mode: void 0
};
Tooltip.displayName = 'Tooltip';

export default Tooltip;
export { Tooltip };
//# sourceMappingURL=tooltip.js.map
