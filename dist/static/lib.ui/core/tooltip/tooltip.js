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
import defaultTheme from './style.css';
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
          theme = _this$props.theme,
          onClick = _this$props.onClick,
          mode = _this$props.mode;
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
          return /*#__PURE__*/React.createElement("div", {
            className: theme.tool,
            "data-unit": "tooltip:title",
            onClickCapture: onClick
          }, passedChild);
        }

        return /*#__PURE__*/React.createElement("div", {
          className: theme.tool,
          "data-unit": "tooltip:title",
          onClickCapture: onClick,
          "aria-controls": _this2.tooltipId,
          "aria-describedby": _this2.tooltipId
        }, child);
      });

      var passedProps = _(this.props).omit(['children', 'forceOpened', 'theme', 'children', 'onClick', 'mode', 'id']).extend({
        className: classnames(theme.tooltip, mode === 'fullWidth' && theme.fullWidth)
      }).value();

      return /*#__PURE__*/React.createElement("div", passedProps, parsedChildren);
    }
  }]);

  return Tooltip;
}(React.PureComponent);
Tooltip.propTypes = {
  children: PropTypes.node,
  forceOpened: PropTypes.bool,
  theme: PropTypes.object,
  onClick: PropTypes.func,
  mode: PropTypes.oneOf(['fullWidth', void 0])
};
Tooltip.defaultProps = {
  children: void 0,
  forceOpened: false,
  theme: defaultTheme,
  onClick: _.noop,
  mode: void 0
};
Tooltip.theme = defaultTheme;
Tooltip.displayName = 'Tooltip';

export default Tooltip;
export { Tooltip };
//# sourceMappingURL=tooltip.js.map
