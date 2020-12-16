import React from 'react';
import PropTypes from 'prop-types';
import defaultTheme from './style.css';

var Block = function Block(_ref) {
  var children = _ref.children;
  return children ? /*#__PURE__*/React.createElement("div", {
    className: defaultTheme.block
  }, children) : null;
};
Block.propTypes = {
  children: PropTypes.node
};
Block.defaultProps = {
  children: void 0
};
Block.displayName = 'Table.Block';

export { Block };
//# sourceMappingURL=block.js.map
