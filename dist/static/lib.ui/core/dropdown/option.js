import { c as _inherits, d as _createSuper, e as _classCallCheck, f as _defineProperty, g as _assertThisInitialized, h as _createClass } from '../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';
import defaultTheme from './style.css';
import styles from './select/select.css';

/* eslint-disable valid-jsdoc, comment: некорректный парсинг jsdoc */

/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=dropdown)
 * Стандартизированная верская опции + коннект с Dropdown
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var Option = /*#__PURE__*/function (_React$Component) {
  _inherits(Option, _React$Component);

  var _super = _createSuper(Option);

  function Option() {
    var _this;

    _classCallCheck(this, Option);

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
          getSelectedValue = _this$context$dropdow.getSelectedValue,
          getOpened = _this$context$dropdow.getOpened;
      return _(_this.props).omit(['theme', 'children', 'title', 'translations', 'description', 'selected', 'altSymbol']).extend({
        disabled: !getOpened(),
        'data-unit': 'dropdown:option',
        className: classnames(theme.item, (_classnames = {}, _defineProperty(_classnames, theme.checked, value === getValue()), _defineProperty(_classnames, theme.selected, value === getSelectedValue()), _classnames)),
        onMouseDown: _this.handleClick,

        /* Для возможности закрыть dropdown по выбору с мышки */
        onClick: _this.handleClick,

        /* Для обработки touch-событий */
        role: 'option',
        'aria-checked': value === getValue(),
        'aria-selected': value === getSelectedValue(),
        ref: _this.setRefOption,
        title: translations.title
      }).value();
    });

    _defineProperty(_assertThisInitialized(_this), "setRefOption", function (component) {
      _this.option = component;
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      var _this$context$dropdow2 = _this.context.dropdown,
          onChange = _this$context$dropdow2.onChange,
          handleClose = _this$context$dropdow2.handleClose;
      var _this$props2 = _this.props,
          value = _this$props2.value,
          onClick = _this$props2.onClick;
      onChange(value);
      onClick(value);
      handleClose();
    });

    return _this;
  }

  _createClass(Option, [{
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
      var _this$props3 = this.props,
          theme = _this$props3.theme,
          children = _this$props3.children,
          title = _this$props3.title,
          description = _this$props3.description,
          additional = _this$props3.additional;
      return /*#__PURE__*/React.createElement("div", this.getPassedProps(), children && /*#__PURE__*/React.createElement("span", {
        className: theme.itemIcon
      }, children), /*#__PURE__*/React.createElement("span", {
        className: theme.itemTitle,
        "data-unit": "dropdown:option:title"
      }, title), description && /*#__PURE__*/React.createElement("span", {
        className: theme.itemDescription
      }, description), additional && /*#__PURE__*/React.createElement("span", {
        className: styles.itemAside
      }, additional));
    }
  }]);

  return Option;
}(React.Component);

_defineProperty(Option, "displayName", 'Dropdown.Option');

_defineProperty(Option, "propTypes", {
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
  altSymbol: PropTypes.string,
  additional: PropTypes.string
});

_defineProperty(Option, "contextTypes", {
  dropdown: PropTypes.object
});

_defineProperty(Option, "defaultProps", {
  theme: defaultTheme,
  onClick: _.noop,
  children: void 0,
  description: void 0,
  translations: {},
  altSymbol: void 0,
  additional: void 0
});

export { Option };
//# sourceMappingURL=option.js.map
