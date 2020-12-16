import '../_rollupPluginBabelHelpers-3e859d87.js';
import '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/media.config.style.js';
import { OuterStyled } from './full-width.style.js';
import { Inner } from './inner.js';

var FullWidth = function FullWidth(props) {
  return /*#__PURE__*/React.createElement(OuterStyled, props);
};

FullWidth.propTypes = {
  className: PropTypes.string
};
FullWidth.defaultProps = {
  className: void ''
};
FullWidth.Inner = Inner;

export { FullWidth };
//# sourceMappingURL=index.js.map
