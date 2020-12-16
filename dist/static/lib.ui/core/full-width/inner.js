import { _ as _extends } from '../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import theme from './style.css';

var Inner = function Inner(props) {
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: classnames(theme.inner, props.className)
  }));
};
Inner.propTypes = {
  className: PropTypes.string
};
Inner.defaultProps = {
  className: void ''
};
Inner.displayName = 'FullWidth.Inner';

export { Inner };
//# sourceMappingURL=inner.js.map
