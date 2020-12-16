import { c as _inherits, d as _createSuper, e as _classCallCheck, f as _defineProperty, g as _assertThisInitialized, h as _createClass } from '../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';
import '../icon/style.css';
import { Icon } from '../icon/icon.js';
import '../index-85b17782.js';
import '../external-969f6c5f.js';
import '../icon/index.js';
import defaultTheme from './style.css';
import { Actions } from './actions.js';
import { Description } from './description.js';

var iconMap = {
  success: 'icon:core/common/system-alert-success',
  info: 'icon:core/common/system-alert-info',
  error: 'icon:core/common/system-alert-error'
};
var iconTheme = {
  self: classnames(Icon.theme.self, defaultTheme.icon)
};
/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d?seid=5ca761ce7afbd0be3d4613c0)
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var SystemAlert = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(SystemAlert, _React$PureComponent);

  var _super = _createSuper(SystemAlert);

  function SystemAlert() {
    var _this;

    _classCallCheck(this, SystemAlert);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "titleId", _.uniqueId('alert-process-title-'));

    _defineProperty(_assertThisInitialized(_this), "descriptionId", _.uniqueId('alert-process-description-'));

    return _this;
  }

  _createClass(SystemAlert, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          title = _this$props.title,
          mode = _this$props.mode,
          children = _this$props.children,
          a11y = _this$props.a11y;
      var extend = {
        className: classnames(defaultTheme.alert, defaultTheme[mode], !children && defaultTheme.onlyTitle),
        'data-unit': "process:alert:".concat(mode),
        role: 'alert',
        'aria-describedby': this.descriptionId
      };

      if (title) {
        extend['aria-labelledby'] = this.titleId;
      } else {
        extend['aria-label'] = a11y.title;
      }

      var passedProps = _(this.props).omit(this.props, ['title', 'mode', 'children', 'a11y', 'size']).extend(extend).value();

      return /*#__PURE__*/React.createElement("div", passedProps, /*#__PURE__*/React.createElement(Icon, {
        theme: iconTheme,
        name: iconMap[mode],
        size: "self"
      }), title && /*#__PURE__*/React.createElement("h3", {
        "data-unit": "process:alert:title",
        className: defaultTheme.title,
        id: this.titleId
      }, title), React.Children.map(children, function (child) {
        if (_.get(child, 'type.displayName') === Description.displayName) {
          return /*#__PURE__*/React.cloneElement(child, _.extend({}, child.props, {
            id: _this2.descriptionId
          }));
        }

        return child;
      }));
    }
  }]);

  return SystemAlert;
}(React.PureComponent);
SystemAlert.propTypes = {
  mode: PropTypes.oneOf(['success', 'info', 'error']).isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
  a11y: PropTypes.shape({
    /**
     * Текст, который должен описывать Alert.System на тот случай, если title у компонента отсутствует. Не передавать, если props.title есть
     */
    title: PropTypes.string
  }).isRequired
};
SystemAlert.defaultProps = {
  title: void 0,
  children: void 0
};
SystemAlert.theme = defaultTheme;
SystemAlert.Description = Description;
SystemAlert.Actions = Actions;
SystemAlert.displayName = 'Alert.System';

export { SystemAlert };
//# sourceMappingURL=system-alert.js.map
