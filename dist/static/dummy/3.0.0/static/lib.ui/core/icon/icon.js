import { c as _inherits, d as _createSuper, e as _classCallCheck, f as _defineProperty, g as _assertThisInitialized, h as _createClass, j as _objectWithoutProperties, i as _objectSpread2 } from '../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';
import defaultTheme from './style.css';

var SLASH = '/';
var iconOmit = ['name', 'theme', 'mode', 'size'];
/* eslint-disable valid-jsdoc, comment: некорректный парсинг jsdoc */

/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=elements%20icons)
 * Компонент для вывода svg-иконок
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var Icon = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Icon, _React$PureComponent);

  var _super = _createSuper(Icon);

  function Icon() {
    var _this;

    _classCallCheck(this, Icon);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "getName", function (fullPath) {
      return _.camelCase(_.last(fullPath.split(SLASH)));
    });

    _defineProperty(_assertThisInitialized(_this), "getNamespace", function (fullPath) {
      return _.dropRight(fullPath.split(SLASH)).join(SLASH);
    });

    _defineProperty(_assertThisInitialized(_this), "loadIcons", function (props) {
      var namespace = _this.getNamespace(props.name);

      var onError = _this.props.onError;

      if (namespace && _.isFunction(Icon.namespaces[namespace])) {
        Icon.namespaces[namespace]().then(function () {
          if (!_this.unmount) {
            Icon.loadedList[namespace] = true;

            _this.forceUpdate();
          }
        }).catch(onError);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "addUniqueId", function (icon, namespace, name) {
      var formattedIcon = icon;
      var newIdBase = "".concat(Icon.iconProjectId, "::").concat(namespace, "/").concat(name, "::");
      var refIds = icon === null || icon === void 0 ? void 0 : icon.match(/(id="([^\s"])+")/g);

      if (refIds) {
        refIds.forEach(function (refId) {
          var refIdForm = refId.substring(4, refId.length - 1);

          var newId = newIdBase + _.uniqueId();

          formattedIcon = _.replace(formattedIcon, new RegExp("#".concat(refIdForm), 'g'), "#".concat(newId));
          formattedIcon = _.replace(formattedIcon, new RegExp("id=\"".concat(refIdForm, "\""), 'g'), "id=\"".concat(newId, "\""));
        });
      }

      return formattedIcon;
    });

    return _this;
  }

  _createClass(Icon, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadIcons(this.props);
    } // eslint-disable-next-line babel/camelcase, comment: React UNSAFE method

  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      this.loadIcons(nextProps);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unmount = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          fullPath = _this$props.name,
          theme = _this$props.theme,
          size = _this$props.size,
          onError = _this$props.onError;
      var namespace = this.getNamespace(fullPath);
      var name = this.getName(fullPath);

      if (!_.has(Icon.namespaces, [namespace, name])) {
        if (!Icon.namespaces[namespace] || Icon.loadedList[namespace]) {
          onError();
        }

        return null;
      }

      var icon = _.get(Icon.namespaces, [namespace, name]);

      var formattedIcon = this.addUniqueId(icon, namespace, name);

      var passedProps = _(this.props).omit(iconOmit).extend({
        'data-unit': 'icon',
        className: classnames(size === 'self' ? theme[size] : classnames(theme.icon, theme[size])),
        dangerouslySetInnerHTML: {
          __html: formattedIcon
        }
      }).value();

      return /*#__PURE__*/React.createElement("span", passedProps);
    }
  }]);

  return Icon;
}(React.PureComponent);

_defineProperty(Icon, "addIcons", function (namespace, promise) {
  if (Icon.namespaces[namespace]) {
    return;
  }

  if (typeof promise === 'function') {
    Icon.namespaces[namespace] = function () {
      return promise().then(function () {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$default = _ref.default,
            defaultExport = _ref$default === void 0 ? {} : _ref$default,
            namedExport = _objectWithoutProperties(_ref, ["default"]);

        var icons = _objectSpread2(_objectSpread2({}, namedExport), defaultExport);

        Icon.namespaces[namespace] = _.mapKeys(icons, function (value, key) {
          return _.camelCase(key);
        });
        return icons;
      });
    };
  } else {
    Icon.namespaces[namespace] = _.mapKeys(promise, function (value, key) {
      return _.camelCase(key);
    });
  }
});

_defineProperty(Icon, "displayName", 'Icon');

_defineProperty(Icon, "propTypes", {
  name: PropTypes.string.isRequired,
  theme: PropTypes.shape({
    icon: PropTypes.string
  }),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'self']),
  onError: PropTypes.func,
  onClick: PropTypes.func
});

_defineProperty(Icon, "defaultProps", {
  theme: defaultTheme,
  size: void 0,
  onError: _.noop,
  onClick: _.noop
});

_defineProperty(Icon, "setProject", function (projectId) {
  Icon.iconProjectId = projectId;
});

_defineProperty(Icon, "namespaces", {});

_defineProperty(Icon, "theme", defaultTheme);

_defineProperty(Icon, "iconProjectId", '');

_defineProperty(Icon, "loadedList", {});

export default Icon;
export { Icon };
//# sourceMappingURL=icon.js.map
