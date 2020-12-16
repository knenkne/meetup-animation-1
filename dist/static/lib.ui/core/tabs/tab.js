import { _ as _extends } from '../_rollupPluginBabelHelpers-687385f0.js';
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';
import defaultTheme from './style.css';
import { checkPositionForScroll } from './tab-utils.js';

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
      mode = props.mode,
      onChange = props.onChange,
      colorScheme = props.colorScheme,
      size = props.size,
      parentId = props.parentId,
      theme = props.theme;
  var scrollItemsAndChange = useCallback(function (e) {
    var clickedItem = e.target;
    var wrapper = document.getElementById(parentId);
    checkPositionForScroll(wrapper, clickedItem);
    onChange(title);
  }, [forceOpened]);

  var passedProps = _(props).omit(['onChange', 'forceOpened', 'tabsId', 'mode', 'colorScheme', 'disabled', 'title', 'size', 'parentId', 'theme']).extend({
    id: forceOpened ? "tab-".concat(id) : void 0,
    tabIndex: forceOpened ? void 0 : -1,
    className: theme.tabButton,
    role: 'tab',
    'aria-selected': forceOpened,
    'aria-controls': forceOpened ? "panel-".concat(id) : void 0,
    'data-unit': 'tab',
    onClick: scrollItemsAndChange
  }).value();

  return /*#__PURE__*/React.createElement("button", _extends({}, passedProps, {
    type: "button",
    ref: ref
  }), /*#__PURE__*/React.createElement("span", {
    className: classnames(theme.tab, theme[mode], theme[colorScheme], forceOpened && theme.selected, size === 'sm' && theme.tabSmall)
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

  /**
   * Дополнительная индикация таба. Не взаимоисключается с colorScheme
   */
  mode: PropTypes.oneOf(['default', 'success', 'error']),

  /**
   * Передается из Tabs.
   */
  colorScheme: PropTypes.oneOf(['base', 'purple', 'blue', 'green', 'black', 'skyblue', 'aqua', 'gold']),
  size: PropTypes.oneOf(['sm', 'lg']),
  theme: PropTypes.object
};
Tab.defaultProps = {
  forceOpened: false,
  onChange: _.noop,
  disabled: false,
  id: void 0,
  mode: 'default',
  colorScheme: 'base',
  size: 'lg',
  theme: defaultTheme
};
Tab.displayName = 'Tabs.Tab';

export { Tab };
//# sourceMappingURL=tab.js.map
