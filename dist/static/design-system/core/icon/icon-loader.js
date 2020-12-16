import { b as _inherits, c as _createSuper, d as _createClass, e as _defineProperty, f as _classCallCheck, g as _assertThisInitialized, h as _extends, i as _objectWithoutProperties, j as _objectSpread2 } from '../_rollupPluginBabelHelpers-3e859d87.js';
import '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import '../colors.config.style-69a09a5b.js';
import _ from 'lodash';
import './icon.style.js';
import { Icon } from './icon.js';

var SLASH = '/';
/* eslint-disable valid-jsdoc, comment: некорректный парсинг jsdoc */

/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=elements%20icons)
 * Компонент для вывода svg-иконок
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var IconLoader = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(IconLoader, _React$PureComponent);

  var _super = _createSuper(IconLoader);

  function IconLoader() {
    var _this;

    _classCallCheck(this, IconLoader);

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

      if (namespace && _.isFunction(IconLoader.namespaces[namespace])) {
        IconLoader.namespaces[namespace]().then(function () {
          if (!_this.unmount) {
            _this.iconsLoaded = true;

            _this.forceUpdate();
          }
        }).catch(onError);
      } else {
        onError();
      }
    });

    return _this;
  }

  _createClass(IconLoader, [{
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
          onError = _this$props.onError;
      var namespace = this.getNamespace(fullPath);
      var name = this.getName(fullPath);

      if (!_.has(IconLoader.namespaces, [namespace, name])) {
        if (this.iconsLoaded) {
          onError();
        }

        return null;
      }

      var icon = _.get(IconLoader.namespaces, [namespace, name]);

      return /*#__PURE__*/React.createElement(Icon, _extends({}, this.props, {
        icon: icon,
        name: name,
        namespace: namespace
      }));
    }
  }]);

  return IconLoader;
}(React.PureComponent);

_defineProperty(IconLoader, "addIcons", function (namespace, promise) {
  if (typeof promise === 'function') {
    IconLoader.namespaces[namespace] = function () {
      return promise().then(function () {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$default = _ref.default,
            defaultExport = _ref$default === void 0 ? {} : _ref$default,
            namedExport = _objectWithoutProperties(_ref, ["default"]);

        var icons = _objectSpread2(_objectSpread2({}, namedExport), defaultExport);

        IconLoader.namespaces[namespace] = _.mapKeys(icons, function (value, key) {
          return _.camelCase(key);
        });
        return icons;
      });
    };
  } else {
    IconLoader.namespaces[namespace] = _.mapKeys(promise, function (value, key) {
      return _.camelCase(key);
    });
  }
});

_defineProperty(IconLoader, "propTypes", {
  name: PropTypes.string.isRequired,
  onError: PropTypes.func,
  onClick: PropTypes.func
});

_defineProperty(IconLoader, "defaultProps", {
  size: void 0,
  onError: _.noop,
  onClick: _.noop
});

_defineProperty(IconLoader, "namespaces", {});

export default IconLoader;
export { IconLoader };
//# sourceMappingURL=icon-loader.js.map
