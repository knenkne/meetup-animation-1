import { _ as _extends } from '../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import theme from './style.css';
import { Inner } from './inner.js';

var FullWidth = function FullWidth(props) {
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: classnames(theme.outer, props.className)
  }));
};

FullWidth.propTypes = {
  className: PropTypes.string
};
FullWidth.defaultProps = {
  className: void ''
};
FullWidth.Inner = Inner;
FullWidth.theme = theme;

export { FullWidth };
//# sourceMappingURL=index.js.map
