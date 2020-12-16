import React from 'react';
import PropTypes from 'prop-types';
import defaultTheme from './style.css';

var Description = function Description(_ref) {
  var children = _ref.children,
      theme = _ref.theme;
  return /*#__PURE__*/React.createElement("div", {
    className: theme.description,
    "data-unit": "technical:error:description"
  }, children);
};
Description.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object
};
Description.defaultProps = {
  children: void 0,
  theme: defaultTheme
};
Description.displayName = 'TechnicalError.Description';

export { Description };
//# sourceMappingURL=description.js.map
