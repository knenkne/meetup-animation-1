import { h as _extends } from '../_rollupPluginBabelHelpers-3e859d87.js';
import '@emotion/styled';
import '@emotion/core';
import '../styles/semantic.config.style.js';
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import '../styles/font-sizes.config.style.js';
import '../colors.config.style-69a09a5b.js';
import '../typography/typography.style.js';
import '../typography/typography.js';
import _ from 'lodash';
import '../styles/semantic-palette.config.style.js';
import { checkPositionForScroll } from './tab-utils.js';
import { TabButtonStyled, TypographyStyled } from './tabs.style.js';

/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=Blocks%20Tabs)
 * Якорь блока верстки для отображения в параллели Tabs
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var Tab = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var forceOpened = props.forceOpened,
      title = props.title,
      id = props.id,
      onChange = props.onChange,
      size = props.size,
      parentId = props.parentId;
  var scrollItemsAndChange = useCallback(function (e) {
    var clickedItem = e.target;
    var wrapper = document.getElementById(parentId);
    checkPositionForScroll(wrapper, clickedItem);
    onChange(title);
  }, [forceOpened]);

  var passedProps = _(props).omit(['onChange', 'forceOpened', 'tabsId', 'mode', 'colorScheme', 'disabled', 'title', 'parentId']).extend({
    id: forceOpened ? "tab-".concat(id) : void 0,
    tabIndex: forceOpened ? void 0 : -1,
    role: 'tab',
    'aria-selected': forceOpened,
    'aria-controls': forceOpened ? "panel-".concat(id) : void 0,
    onClick: scrollItemsAndChange
  }).value();

  return /*#__PURE__*/React.createElement(TabButtonStyled, _extends({}, passedProps, {
    type: "button",
    ref: ref,
    selected: forceOpened
  }), /*#__PURE__*/React.createElement(TypographyStyled, {
    indent: "innerspace",
    size: size,
    colorScheme: "gray9",
    mode: size !== 'sm' && 'semibold'
  }, title));
});
Tab.propTypes = {
  title: PropTypes.string.isRequired,
  forceOpened: PropTypes.bool,
  onChange: PropTypes.func,

  /**
   * Передается из Tabs. Необходимо для a11y связки
   */
  id: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg'])
};
Tab.defaultProps = {
  forceOpened: false,
  onChange: _.noop,
  disabled: false,
  id: void 0,
  size: 'lg'
};

export { Tab };
//# sourceMappingURL=tab.js.map
