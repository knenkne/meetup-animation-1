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

var Title = function Title(props) {
  return /*#__PURE__*/React.createElement("h6", {
    className: classnames(defaultTheme.title, defaultTheme[props.colorScheme]),
    "data-unit": "title"
  }, props.children);
};
Title.propTypes = {
  children: PropTypes.node,

  /** Цветовые схемы 'black-opaque', 'red', 'dark-blue' будут выведены из обращения
   **/
  colorScheme: PropTypes.oneOf(['black', 'dark-gray', 'gray', 'green', 'orange', 'white', 'black-opaque', 'red', 'dark-blue'])
};
Title.defaultProps = {
  children: void 0,
  colorScheme: 'black'
};
Title.displayName = 'Typography.Title';

export { Title };
//# sourceMappingURL=title.js.map
