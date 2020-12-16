import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import style from './style.css';

var NoMatches = function NoMatches(props) {
  var children = props.children;
  return /*#__PURE__*/React.createElement("div", {
    className: classnames(style.additionalInfo, style.attention)
  }, children);
};
NoMatches.propTypes = {
  children: PropTypes.node.isRequired
};
NoMatches.displayName = 'Input.Suggest.NoMatches';

export { NoMatches };
//# sourceMappingURL=no-matches.js.map
