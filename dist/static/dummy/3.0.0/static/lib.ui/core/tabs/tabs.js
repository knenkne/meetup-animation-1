import { i as _objectSpread2, f as _defineProperty, a as _slicedToArray } from '../_rollupPluginBabelHelpers-687385f0.js';
import React, { useMemo, useState, useCallback } from 'react';
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
import '../full-width/style.css';
import '../full-width/inner.js';
import '../full-width/index.js';
import '../horizontal-scroll/utils.js';
import '../horizontal-scroll/style.css';
import '../horizontal-scroll/horizontal-scroll.js';
import defaultTheme from './style.css';
import { getFirstChildTitle, useUpdateEffect } from './tab-utils.js';
import { Header } from './header.js';
import { Tab } from './tab.js';

var KEYS = {
  35: 'end',
  36: 'home',
  37: 'left',
  39: 'right'
};
var DIRECTIONS = {
  37: -1,
  39: 1
};
/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d/screen/5cab79d394299816a9a8595d)
 * Компонент параллельного отображения блоков верстки
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var Tabs = function Tabs(_ref) {
  var children = _ref.children,
      initialValue = _ref.initialValue,
      onChange = _ref.onChange,
      mode = _ref.mode,
      colorScheme = _ref.colorScheme,
      size = _ref.size,
      selectedItem = _ref.selectedItem,
      onSelect = _ref.onSelect,
      theme = _ref.theme;
  var parentId = useMemo(function () {
    return _.uniqueId('tab-wrapper-');
  }, []);
  var tabsId = useMemo(function () {
    return _.uniqueId('tabs-');
  }, []);
  var childrenArray = useMemo(function () {
    return React.Children.toArray(children);
  });
  var refs = useMemo(function () {
    return childrenArray.reduce(function (acc, child) {
      var _child$props;

      return _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty({}, (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.title, /*#__PURE__*/React.createRef()));
    }, {});
  }, [children]);

  var _React$useRef = React.useRef(Boolean(selectedItem)),
      isControlled = _React$useRef.current;

  var _useState = useState(isControlled ? selectedItem : initialValue || getFirstChildTitle(children)),
      _useState2 = _slicedToArray(_useState, 2),
      selectedTitle = _useState2[0],
      setSelectedTitle = _useState2[1];

  var selectedTabTitle = isControlled ? selectedItem : selectedTitle;
  var selectedTabChild = useMemo(function () {
    var properChild = childrenArray.find(function (child) {
      var _child$props2;

      return ((_child$props2 = child.props) === null || _child$props2 === void 0 ? void 0 : _child$props2.title) === selectedTabTitle;
    });
    return properChild === null || properChild === void 0 ? void 0 : properChild.props.children;
  });
  var handleChange = useCallback(function (value) {
    return isControlled ? onSelect(value) : setSelectedTitle(value);
  }, [selectedTitle, selectedItem]);

  var focusTab = function focusTab(title) {
    refs[title].current.focus();
    handleChange(title);
  }; // Either focus the next, previous, first, or last tab depening on key pressed


  var handleKeyDown = function handleKeyDown(event) {
    var pressed = KEYS[event.keyCode];
    var direction = DIRECTIONS[event.keyCode];

    if (pressed) {
      var _childrenArray, _childrenArray$props;

      event.preventDefault();

      if (pressed === 'end') {
        focusTab(_.last(Object.keys(refs)));
        return;
      }

      if (pressed === 'home') {
        focusTab(_.first(Object.keys(refs)));
        return;
      }

      var currentTabIndex = childrenArray.findIndex(function (child) {
        var _child$props3;

        return ((_child$props3 = child.props) === null || _child$props3 === void 0 ? void 0 : _child$props3.title) === selectedTabTitle;
      });
      var nextTitle = (_childrenArray = childrenArray[currentTabIndex + direction]) === null || _childrenArray === void 0 ? void 0 : (_childrenArray$props = _childrenArray.props) === null || _childrenArray$props === void 0 ? void 0 : _childrenArray$props.title;

      if (nextTitle) {
        focusTab(nextTitle);
      } else if (pressed === 'left') {
        focusTab(_.last(Object.keys(refs)));
      } else {
        focusTab(_.first(Object.keys(refs)));
      }
    }
  };

  useUpdateEffect(function () {
    onChange(selectedTitle);
  }, [selectedTitle, selectedItem]);

  var mapChildren = function mapChildren() {
    return childrenArray.map(function (child) {
      var _child$props4;

      return /*#__PURE__*/React.cloneElement(child, {
        colorScheme: colorScheme,
        forceOpened: ((_child$props4 = child.props) === null || _child$props4 === void 0 ? void 0 : _child$props4.title) === selectedTabTitle,
        id: tabsId,
        onChange: handleChange,
        onKeyDown: handleKeyDown,
        parentId: parentId,
        size: size,
        ref: refs[child.props.title]
      });
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    "data-unit": "tabs",
    "aria-live": "polite",
    className: theme.tabs
  }, /*#__PURE__*/React.createElement(Header, {
    parentId: parentId,
    mode: mode,
    theme: theme
  }, /*#__PURE__*/React.createElement("div", {
    "data-unit": "tabs:navigation",
    role: "tablist"
  }, mapChildren())), !!selectedTabChild && /*#__PURE__*/React.createElement("section", {
    id: "panel-".concat(tabsId),
    role: "tabpanel",
    className: theme.tabsContent,
    "aria-labelledby": "tab-".concat(tabsId),
    key: selectedTitle,
    tabIndex: "0"
  }, selectedTabChild));
};
Tabs.propTypes = {
  onChange: PropTypes.func,
  selectedItem: PropTypes.string,
  onSelect: PropTypes.func,

  /**
   * Общая цветовая схема
   */
  colorScheme: PropTypes.oneOf(['base', 'purple', 'blue', 'green', 'black', 'skyblue', 'aqua', 'gold']),
  initialValue: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['sm', 'lg']),

  /**
   * Если нужны табы с длинной линией по всей ширине контентой части для продуктовой страницы
   */
  mode: PropTypes.oneOfType([PropTypes.oneOf(['sticky', 'fullwidth', 'borderless']), PropTypes.arrayOf(PropTypes.oneOf(['sticky', 'fullwidth']))]),
  theme: PropTypes.object
};
Tabs.defaultProps = {
  onChange: _.noop,
  selectedItem: void 0,
  onSelect: _.noop,
  colorScheme: 'base',
  initialValue: void 0,
  children: void 0,
  size: 'lg',
  mode: void 0,
  theme: defaultTheme
};
Tabs.theme = defaultTheme;
Tabs.Tab = Tab;
Tabs.displayName = 'Tabs';

export { Tabs };
//# sourceMappingURL=tabs.js.map
