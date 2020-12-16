import React from 'react';
import PropTypes from 'prop-types';

var NoMatches = function NoMatches(props) {
  var children = props.children,
      className = props.className;
  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, children);
};
NoMatches.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
NoMatches.defaultProps = {
  className: void 0
};
NoMatches.displayName = 'Combobox.NoMatches';

export { NoMatches };
//# sourceMappingURL=no-matches.js.map
