import { c as _inherits, d as _createSuper, e as _classCallCheck, f as _defineProperty, g as _assertThisInitialized, h as _createClass } from '../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';
import '../icon/style.css';
import '../icon/icon.js';
import '../index-85b17782.js';
import '../external-969f6c5f.js';
import '../icon/index.js';
import defaultTheme from './style.css';
import '../link/link.css';
import '../link/components/simple-external-link.js';
import { Link as Link$1 } from '../link/link.js';

var Link = /*#__PURE__*/function (_React$Component) {
  _inherits(Link, _React$Component);

  var _super = _createSuper(Link);

  function Link() {
    var _this;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "getPassedProps", function () {
      var _classnames;

      var _this$props = _this.props,
          theme = _this$props.theme,
          value = _this$props.value,
          translations = _this$props.translations;
      var _this$context$dropdow = _this.context.dropdown,
          getValue = _this$context$dropdow.getValue,
          getSelectedValue = _this$context$dropdow.getSelectedValue;
      var linkProps = {};

      if (_.isBoolean(_this.props.external)) {
        linkProps = {
          href: _this.props.value,
          external: _this.props.external
        };
      }

      return _(_this.props).omit(['theme', 'children', 'title', 'translations', 'description', 'selected', 'value']).extend({
        tabIndex: -1,
        'data-unit': 'dropdown:option',
        theme: {
          link: classnames(theme.item, Link$1.theme.link, (_classnames = {}, _defineProperty(_classnames, theme.checked, value === getValue()), _defineProperty(_classnames, theme.selected, value === getSelectedValue()), _classnames)),
          linkIconRight: theme.itemIconLink
        },
        onClick: _this.handleClick,
        role: 'option',
        'aria-checked': value === getValue(),
        'aria-selected': value === getSelectedValue(),
        title: translations.title,
        refWrapper: _this.setRefOption
      }, linkProps).value();
    });

    _defineProperty(_assertThisInitialized(_this), "setRefOption", function (component) {
      _this.option = component;
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (event) {
      if (event.type === 'keydown') {
        var a = document.createElement('a');
        a.href = _this.props.value;

        if (_this.props.external === true) {
          a.target = '_blank';
          a.rel = 'noopener noreferrer';
        }

        a.click();
      }
    });

    return _this;
  }

  _createClass(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.context.dropdown.registerOption(this);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.context.dropdown.unregisterOption(this.props.value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          theme = _this$props2.theme,
          children = _this$props2.children,
          title = _this$props2.title,
          description = _this$props2.description;
      return /*#__PURE__*/React.createElement(Link$1, this.getPassedProps(), children && /*#__PURE__*/React.createElement("span", {
        className: theme.itemIcon
      }, children), /*#__PURE__*/React.createElement("span", {
        className: theme.itemTitle
      }, title), !_.isUndefined(description) && /*#__PURE__*/React.createElement("span", {
        className: theme.itemDescription
      }, description));
    }
  }]);

  return Link;
}(React.Component);

_defineProperty(Link, "displayName", 'Dropdown.Link');

_defineProperty(Link, "propTypes", {
  theme: PropTypes.object,
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  onClick: PropTypes.func,
  value: PropTypes.string.isRequired,
  translations: PropTypes.shape({
    /**
     * Стандартный атрибут title. Необходим для выбора валюты. Также применим, если опция шире контента.
     */
    title: PropTypes.string
  }),
  external: PropTypes.bool
});

_defineProperty(Link, "contextTypes", {
  dropdown: PropTypes.object
});

_defineProperty(Link, "defaultProps", {
  theme: defaultTheme,
  onClick: _.noop,
  children: void 0,
  description: void 0,
  translations: {},
  external: false
});

export { Link };
//# sourceMappingURL=link.js.map
