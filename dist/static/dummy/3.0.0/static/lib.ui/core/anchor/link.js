import '../_rollupPluginBabelHelpers-687385f0.js';
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';
import classnames from 'classnames';
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
import '../tabs/style.css';
import '../tabs/tab-utils.js';
import '../tabs/header.js';
import '../tabs/tab.js';
import { Tabs } from '../tabs/tabs.js';

var Link = function Link(_ref) {
  var mode = _ref.mode,
      colorScheme = _ref.colorScheme,
      forceOpened = _ref.forceOpened,
      size = _ref.size,
      title = _ref.title,
      onChange = _ref.onChange,
      theme = _ref.theme;
  var onClick = useCallback(function () {
    onChange(title);
  }, [title]);
  return title ? /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    className: theme.tabButton,
    role: "link"
  }, /*#__PURE__*/React.createElement("span", {
    className: classnames(theme.tab, theme[mode], theme[colorScheme], theme.border, forceOpened && theme.selected, size === 'sm' && theme.tabSmall)
  }, title)) : null;
};
Link.propTypes = {
  title: PropTypes.string,
  forceOpened: PropTypes.bool,
  onChange: PropTypes.func,

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
Link.defaultProps = {
  title: void 0,
  forceOpened: false,
  onChange: noop,
  disabled: false,
  mode: 'default',
  colorScheme: 'base',
  size: 'lg',
  theme: Tabs.theme
};
Link.displayName = 'Anchor.Link';

export { Link };
//# sourceMappingURL=link.js.map
