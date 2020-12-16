import { j as _objectWithoutProperties, _ as _extends } from '../../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';
import defaultTheme from './style.css';

/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d/screen/5ca62a6138ff487776c8bd47)
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var Command = function Command(_ref) {
  var colorScheme = _ref.colorScheme,
      title = _ref.title,
      theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ["colorScheme", "title", "theme"]);

  return /*#__PURE__*/React.createElement("button", _extends({}, props, {
    type: "button",
    className: classnames(theme.command, theme[colorScheme]),
    "data-unit": "button:command:link"
  }), /*#__PURE__*/React.createElement("span", {
    className: theme.title
  }, title));
};
Command.propTypes = {
  title: PropTypes.string.isRequired,
  theme: PropTypes.object,
  tabIndex: PropTypes.number,
  // eslint-disable-line react/no-unused-prop-types, comment: сквозной проброс пропов
  onClick: PropTypes.func,
  // eslint-disable-line react/no-unused-prop-types, comment: сквозной проброс пропов
  colorScheme: PropTypes.oneOf(['black', 'green'])
};
Command.defaultProps = {
  tabIndex: 0,
  onClick: _.noop,
  colorScheme: 'black',
  theme: defaultTheme
};
Command.displayName = 'Button.Command';
Command.theme = defaultTheme;

export { Command };
//# sourceMappingURL=index.js.map
