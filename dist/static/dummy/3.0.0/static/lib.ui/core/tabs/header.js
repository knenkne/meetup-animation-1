import '../_rollupPluginBabelHelpers-687385f0.js';
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import 'lodash';
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
import { FullWidth } from '../full-width/index.js';
import '../horizontal-scroll/utils.js';
import '../horizontal-scroll/style.css';
import { HorizontalScroll } from '../horizontal-scroll/horizontal-scroll.js';
import defaultTheme from './style.css';
import { modePredicate } from './tab-utils.js';

var Header = function Header(_ref) {
  var children = _ref.children,
      mode = _ref.mode,
      parentId = _ref.parentId,
      theme = _ref.theme;
  var isSticky = useMemo(function () {
    return modePredicate(mode, 'sticky');
  }, [mode]);
  var isFullWidth = useMemo(function () {
    return modePredicate(mode, 'fullwidth');
  }, [mode]);
  var isBorderless = useMemo(function () {
    return modePredicate(mode, 'borderless');
  }, [mode]);
  return /*#__PURE__*/React.createElement("div", {
    className: classnames(isSticky && theme.tabsSticky, isFullWidth && FullWidth.theme.outer, theme.tabsHeader)
  }, /*#__PURE__*/React.createElement("div", {
    className: classnames(isBorderless && theme.tabsBorderless, isFullWidth && FullWidth.theme.inner, theme.tabsScroll)
  }, /*#__PURE__*/React.createElement(HorizontalScroll, {
    parentId: parentId
  }, children)));
};
Header.propTypes = {
  parentId: PropTypes.string,
  children: PropTypes.node,
  mode: PropTypes.oneOfType([PropTypes.oneOf(['sticky', 'fullwidth', 'borderless']), PropTypes.arrayOf(PropTypes.oneOf(['sticky', 'fullwidth']))]),
  theme: PropTypes.object
};
Header.defaultProps = {
  mode: void 0,
  children: void 0,
  parentId: '',
  theme: defaultTheme
};

export { Header };
//# sourceMappingURL=header.js.map
