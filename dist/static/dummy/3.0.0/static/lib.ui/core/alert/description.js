import { _ as _extends } from '../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import defaultTheme from './style.css';

var Description = function Description(props) {
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: defaultTheme.description,
    "data-unit": "alert:description"
  }), props.children);
};
Description.propTypes = {
  children: PropTypes.node
};
Description.defaultProps = {
  children: void 0
};
Description.displayName = 'Alert.Description';

export { Description };
//# sourceMappingURL=description.js.map
