import React from 'react';
import PropTypes from 'prop-types';
import defaultTheme from './style.css';

var Header = function Header(_ref) {
  var children = _ref.children;
  return children ? /*#__PURE__*/React.createElement("div", {
    className: defaultTheme.header
  }, children) : null;
};
Header.propTypes = {
  children: PropTypes.node
};
Header.defaultProps = {
  children: void 0
};
Header.displayName = 'Table.Header';

export { Header };
//# sourceMappingURL=header.js.map
