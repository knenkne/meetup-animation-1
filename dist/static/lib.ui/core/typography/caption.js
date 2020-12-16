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

var Caption = function Caption(props) {
  var colorScheme = props.colorScheme,
      mode = props.mode,
      theme = props.theme,
      rest = _objectWithoutProperties(props, ["colorScheme", "mode", "theme"]);

  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: classnames(theme.caption, theme[colorScheme], theme[mode]),
    "data-unit": "caption"
  }), props.children);
};
Caption.propTypes = {
  children: PropTypes.node,
  colorScheme: PropTypes.oneOf(['black', 'dark-gray', 'gray', 'green', 'orange', 'white', 'red']),
  mode: PropTypes.string,
  theme: PropTypes.object
};
Caption.defaultProps = {
  children: void 0,
  colorScheme: 'black',
  mode: 'caption',
  theme: defaultTheme
};
Caption.displayName = 'Typography.Caption';

export { Caption };
//# sourceMappingURL=caption.js.map
