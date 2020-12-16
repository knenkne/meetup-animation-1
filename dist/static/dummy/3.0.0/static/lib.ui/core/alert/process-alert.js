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
import './style.css';
import { Actions } from './actions.js';
import { Description } from './description.js';
import defaultTheme from './process-style.css';

var iconMap = {
  success: 'icon:core/common/alert-success',
  info: 'icon:core/common/alert-info',
  error: 'icon:core/common/alert-error',
  draft: 'icon:core/common/alert-draft',
  warning: 'icon:core/common/alert-draft'
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

var ProcessAlert = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(ProcessAlert, _React$PureComponent);

  var _super = _createSuper(ProcessAlert);

  function ProcessAlert() {
    var _this;

    _classCallCheck(this, ProcessAlert);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "titleId", _.uniqueId('alert-process-title-'));

    _defineProperty(_assertThisInitialized(_this), "descriptionId", _.uniqueId('alert-process-description-'));

    return _this;
  }

  _createClass(ProcessAlert, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          title = _this$props.title,
          mode = _this$props.mode,
          children = _this$props.children,
          a11y = _this$props.a11y;
      var hasChildren = React.Children.toArray(children).some(Boolean);
      var extend = {
        className: classnames(defaultTheme.alert, defaultTheme[mode]),
        'data-unit': "process:alert:".concat(mode),
        role: _.get(a11y, 'role', 'alert'),
        'aria-describedby': this.descriptionId
      };

      if (title) {
        extend['aria-labelledby'] = this.titleId;
      } else {
        extend['aria-label'] = a11y.title;
      }

      var passedProps = _(this.props).omit(this.props, ['title', 'mode', 'children', 'a11y', 'size']).extend(extend).value();

      return /*#__PURE__*/React.createElement("div", {
        className: defaultTheme.wrapper
      }, /*#__PURE__*/React.createElement("div", passedProps, /*#__PURE__*/React.createElement(Icon, {
        theme: iconTheme,
        name: iconMap[mode],
        size: "self"
      }), title && /*#__PURE__*/React.createElement("h3", {
        "data-unit": "process:alert:title",
        className: classnames(defaultTheme.title, !hasChildren && defaultTheme.offset),
        id: this.titleId
      }, title), React.Children.map(children, function (child) {
        if (_.get(child, 'type.displayName') === Description.displayName) {
          return /*#__PURE__*/React.cloneElement(child, _.extend({}, child.props, {
            id: _this2.descriptionId
          }));
        }

        return child;
      })));
    }
  }]);

  return ProcessAlert;
}(React.PureComponent);
ProcessAlert.propTypes = {
  mode: PropTypes.oneOf(['success', 'info', 'error', 'draft', 'warning']).isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
  a11y: PropTypes.shape({
    /**
     * Текст, который должен описывать Alert.Process на тот случай, если title у компонента отсутствует. Не передавать, если props.title есть
     */
    title: PropTypes.string,

    /**
     * Роль алерта под замену
     */
    role: PropTypes.string
  }).isRequired
};
ProcessAlert.defaultProps = {
  title: void 0,
  children: void 0
};
ProcessAlert.theme = defaultTheme;
ProcessAlert.Description = Description;
ProcessAlert.Actions = Actions;
ProcessAlert.displayName = 'Alert.Process';

export { ProcessAlert };
//# sourceMappingURL=process-alert.js.map
