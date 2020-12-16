import { h as _extends } from '../_rollupPluginBabelHelpers-3e859d87.js';
import '@emotion/styled';
import '@emotion/core';
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/font-sizes.config.style.js';
import '../colors.config.style-69a09a5b.js';
import { TypographyStyled } from './typography.style.js';
import './typography.js';

var Body1 = function Body1(props) {
  return /*#__PURE__*/React.createElement(TypographyStyled, _extends({
    size: "lg",
    indent: "openspace"
  }, props));
};
var Body2 = function Body2(props) {
  return /*#__PURE__*/React.createElement(TypographyStyled, _extends({
    size: "md",
    indent: "openspace"
  }, props));
};
var defaultProps = {
  mode: 'regular',
  colorScheme: 'primary'
};
var propTypes = {
  children: PropTypes.node.isRequired,
  mode: PropTypes.oneOf(['semibold', 'regular']),
  colorScheme: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'brand', 'success', 'info', 'warning', 'whitePrimary', 'whiteSecondary', 'whiteTertiary'])
};
Body1.propTypes = propTypes;
Body1.defaultProps = defaultProps;
Body1.displayName = 'Body';
Body2.propTypes = propTypes;
Body2.defaultProps = defaultProps;

export { Body1, Body2 };
//# sourceMappingURL=body.js.map
