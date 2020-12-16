import { i as _objectWithoutProperties, j as _objectSpread2, e as _defineProperty, _ as _slicedToArray, h as _extends } from '../_rollupPluginBabelHelpers-3e859d87.js';
import '@emotion/styled';
import '@emotion/core';
import '../styles/semantic.config.style.js';
import React, { useMemo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import '../styles/font-sizes.config.style.js';
import '../colors.config.style-69a09a5b.js';
import '../typography/typography.style.js';
import '../typography/typography.js';
import _ from 'lodash';
import '../icon/icon.style.js';
import '../icon/icon.js';
import '../icon/icon-loader.js';
import '../icon/index.js';
import '../styles/semantic-palette.config.style.js';
import '../styles/media.config.style.js';
import '../full-width/full-width.style.js';
import '../icon/common/index.js';
import '../utils/adaptive.js';
import '../horizontal-scroll/utils.js';
import '../horizontal-scroll/horizontal-scroll.style.js';
import '../horizontal-scroll/horizontal-scroll.js';
import { getFirstChildTitle, useUpdateEffect } from './tab-utils.js';
import { TabsStyled, TabsContentSectionStyled } from './tabs.style.js';
import { Tab } from './tab.js';
import { Header } from './header.js';

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
      size = _ref.size,
      selectedItem = _ref.selectedItem,
      onSelect = _ref.onSelect,
      rest = _objectWithoutProperties(_ref, ["children", "initialValue", "onChange", "size", "selectedItem", "onSelect"]);

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

  return /*#__PURE__*/React.createElement(TabsStyled, {
    "aria-live": "polite"
  }, /*#__PURE__*/React.createElement(Header, _extends({
    parentId: parentId
  }, rest), /*#__PURE__*/React.createElement("div", {
    role: "tablist"
  }, mapChildren())), !!selectedTabChild && /*#__PURE__*/React.createElement(TabsContentSectionStyled, {
    id: "panel-".concat(tabsId),
    role: "tabpanel",
    "aria-labelledby": "tab-".concat(tabsId),
    key: selectedTitle,
    tabIndex: "0"
  }, selectedTabChild));
};
Tabs.propTypes = {
  onChange: PropTypes.func,
  selectedItem: PropTypes.string,
  onSelect: PropTypes.func,
  initialValue: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  sticky: PropTypes.bool,
  fullWidth: PropTypes.bool,
  borderless: PropTypes.bool
};
Tabs.defaultProps = {
  onChange: _.noop,
  selectedItem: void 0,
  onSelect: _.noop,
  initialValue: void 0,
  children: void 0,
  size: 'md',
  sticky: false,
  fullWidth: false,
  borderless: false
};
Tabs.Tab = Tab;
Tabs.displayName = 'Tabs';

export { Tabs };
//# sourceMappingURL=tabs.js.map
