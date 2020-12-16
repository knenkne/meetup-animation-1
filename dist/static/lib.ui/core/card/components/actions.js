import { j as _objectWithoutProperties, _ as _extends } from '../../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import defaultTheme from '../style.css';

var Actions = function Actions(_ref) {
  var children = _ref.children,
      theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ["children", "theme"]);

  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: theme.actions
  }), children);
};
Actions.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object
};
Actions.defaultProps = {
  children: void 0,
  theme: defaultTheme
};
Actions.displayName = 'Card.Actions';

export { Actions };
//# sourceMappingURL=actions.js.map
