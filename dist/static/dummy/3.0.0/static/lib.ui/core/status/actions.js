import { _ as _extends } from '../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import defaultTheme from './style.css';

var Actions = function Actions(props) {
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: defaultTheme.actions,
    "data-unit": "status:actions"
  }), props.children);
};
Actions.propTypes = {
  children: PropTypes.node
};
Actions.defaultProps = {
  children: void 0
};
Actions.displayName = 'Status.Actions';

export { Actions };
//# sourceMappingURL=actions.js.map
