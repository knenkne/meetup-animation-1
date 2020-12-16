import React from 'react';
import PropTypes from 'prop-types';
import defaultTheme from './style.css';

var Actions = function Actions(_ref) {
  var children = _ref.children,
      theme = _ref.theme;
  return /*#__PURE__*/React.createElement("div", {
    className: theme.actions,
    "data-unit": "technical:error:actions"
  }, children);
};
Actions.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object
};
Actions.defaultProps = {
  children: void 0,
  theme: defaultTheme
};
Actions.displayName = 'TechnicalError.Actions';

export { Actions };
//# sourceMappingURL=actions.js.map
