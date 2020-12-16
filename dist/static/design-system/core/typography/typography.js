import '../_rollupPluginBabelHelpers-3e859d87.js';
import '@emotion/styled';
import '@emotion/core';
import 'react';
import PropTypes from 'prop-types';
import '../styles/font-sizes.config.style.js';
import '../colors.config.style-69a09a5b.js';
import { TypographyStyled } from './typography.style.js';
export { TypographyStyled as Typography } from './typography.style.js';

var propTypes = {
  children: PropTypes.node.isRequired,
  mode: PropTypes.oneOf(['semibold', 'regular', 'bold']),
  indent: PropTypes.oneOf(['openspace', 'innerspace', 'micro', 'nano', 'zero']),
  colorScheme: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'brand', 'success', 'info', 'warning', 'whitePrimary', 'whiteSecondary', 'whiteTertiary'])
};
var defaultProps = {
  mode: 'regular',
  indent: 'openspace',
  colorScheme: 'primary'
};
TypographyStyled.propTypes = propTypes;
TypographyStyled.defaultProps = defaultProps;

export { propTypes };
//# sourceMappingURL=typography.js.map
