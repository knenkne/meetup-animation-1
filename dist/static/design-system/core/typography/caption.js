import { h as _extends } from '../_rollupPluginBabelHelpers-3e859d87.js';
import '@emotion/styled';
import '@emotion/core';
import React from 'react';
import 'prop-types';
import '../styles/font-sizes.config.style.js';
import '../colors.config.style-69a09a5b.js';
import { TypographyStyled } from './typography.style.js';
import { propTypes } from './typography.js';

var Caption = function Caption(props) {
  return /*#__PURE__*/React.createElement(TypographyStyled, _extends({
    size: "sm"
  }, props));
};
var defaultProps = {
  mode: 'regular',
  indent: 'openspace',
  colorScheme: 'primary'
};
Caption.propTypes = propTypes;
Caption.defaultProps = defaultProps;
Caption.displayName = 'Caption';

export { Caption };
//# sourceMappingURL=caption.js.map
