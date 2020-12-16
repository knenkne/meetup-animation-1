import '../_rollupPluginBabelHelpers-3e859d87.js';
import '@emotion/styled';
import '@emotion/core';
import '../styles/semantic.config.style.js';
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/font-sizes.config.style.js';
import '../colors.config.style-69a09a5b.js';
import '../typography/typography.style.js';
import '../typography/typography.js';
import 'lodash';
import '../icon/icon.style.js';
import '../icon/icon.js';
import '../icon/icon-loader.js';
import '../icon/index.js';
import '../styles/semantic-palette.config.style.js';
import '../styles/media.config.style.js';
import { OuterStyled, InnerStyled } from '../full-width/full-width.style.js';
import '../icon/common/index.js';
import '../utils/adaptive.js';
import '../horizontal-scroll/utils.js';
import '../horizontal-scroll/horizontal-scroll.style.js';
import { HorizontalScroll } from '../horizontal-scroll/horizontal-scroll.js';
import { TabsHeaderStyled, TabsScrollStyled } from './tabs.style.js';

var Header = function Header(_ref) {
  var children = _ref.children,
      sticky = _ref.sticky,
      fullWidth = _ref.fullWidth,
      parentId = _ref.parentId;
  var TabsHeaderComponent = fullWidth ? TabsHeaderStyled.withComponent(OuterStyled) : TabsHeaderStyled;
  var TabsScrollComponent = fullWidth ? TabsScrollStyled.withComponent(InnerStyled) : TabsScrollStyled;
  return /*#__PURE__*/React.createElement(TabsHeaderComponent, {
    sticky: sticky
  }, /*#__PURE__*/React.createElement(TabsScrollComponent, null, /*#__PURE__*/React.createElement(HorizontalScroll, {
    parentId: parentId
  }, children)));
};
Header.propTypes = {
  parentId: PropTypes.string,
  children: PropTypes.node
};
Header.defaultProps = {
  mode: void 0,
  children: void 0,
  parentId: ''
};

export { Header };
//# sourceMappingURL=header.js.map
