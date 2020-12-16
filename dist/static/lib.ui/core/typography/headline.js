import { j as _objectWithoutProperties, _ as _extends } from '../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import defaultTheme from './style.css';

/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d?seid=5ca73031b14aee19ff3f343a)
 * Заголовок приложения
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var Headline = function Headline(props) {
  var mode = props.mode,
      children = props.children,
      colorScheme = props.colorScheme,
      theme = props.theme,
      rest = _objectWithoutProperties(props, ["mode", "children", "colorScheme", "theme"]);

  var Component = mode === 'banner' ? 'h5' : mode;
  return /*#__PURE__*/React.createElement(Component, _extends({}, rest, {
    className: classnames(theme.headline, theme[colorScheme], theme[mode]),
    "data-unit": "headline"
  }), children);
};
Headline.propTypes = {
  children: PropTypes.node,
  mode: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'banner']),
  colorScheme: PropTypes.oneOf(['black', 'dark-gray', 'gray', 'green', 'orange', 'white', 'red']),
  theme: PropTypes.object
};
Headline.defaultProps = {
  children: void 0,
  mode: 'h1',
  colorScheme: 'black',
  theme: defaultTheme
};
Headline.displayName = 'Typography.Headline';

export { Headline };
//# sourceMappingURL=headline.js.map
