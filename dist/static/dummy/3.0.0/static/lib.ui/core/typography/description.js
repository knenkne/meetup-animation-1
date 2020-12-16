import { j as _objectWithoutProperties, _ as _extends } from '../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import defaultTheme from './style.css';

/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d?seid=5ca73031b14aee19ff3f343a)
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var Description = function Description(_ref) {
  var theme = _ref.theme,
      children = _ref.children,
      colorScheme = _ref.colorScheme,
      props = _objectWithoutProperties(_ref, ["theme", "children", "colorScheme"]);

  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: classnames(theme.description, theme[colorScheme])
  }), children);
};
Description.propTypes = {
  children: PropTypes.node,
  colorScheme: PropTypes.oneOf(['black', 'dark-gray', 'gray', 'green', 'orange', 'white']),
  theme: PropTypes.object
};
Description.defaultProps = {
  children: void 0,
  colorScheme: void 0,
  theme: defaultTheme
};
Description.displayName = 'Typography.Description';

export { Description };
//# sourceMappingURL=description.js.map
