import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import defaultTheme from './style.css';

var Hatching = function Hatching(_ref) {
  var mode = _ref.mode,
      direction = _ref.direction;
  return /*#__PURE__*/React.createElement("div", {
    className: classnames(defaultTheme.hatching, defaultTheme[direction], defaultTheme[mode]),
    "data-unit": "hatching:".concat(mode)
  });
};
Hatching.propTypes = {
  mode: PropTypes.oneOf(['draft', 'waiting', 'done', 'error']).isRequired,
  direction: PropTypes.oneOf(['vertical', 'horizontal'])
};
Hatching.defaultProps = {
  direction: 'vertical'
};
Hatching.displayName = 'Status.Hatching';

export { Hatching };
//# sourceMappingURL=hatching.js.map
