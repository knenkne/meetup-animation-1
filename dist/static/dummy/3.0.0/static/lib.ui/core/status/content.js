import { _ as _extends } from '../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import defaultTheme from './style.css';

var Content = function Content(props) {
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: defaultTheme.content,
    "data-unit": "status:content"
  }), props.children);
};
Content.propTypes = {
  children: PropTypes.node
};
Content.defaultProps = {
  children: void 0
};
Content.displayName = 'Status.Content';

export { Content };
//# sourceMappingURL=content.js.map
