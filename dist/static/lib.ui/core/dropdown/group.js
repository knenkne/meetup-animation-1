import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import defaultTheme from './style.css';

/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=dropdown)
 * Компонент группировки опций в выпадающем списке
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var Group = function Group(props) {
  var title = props.title,
      children = props.children;
  return /*#__PURE__*/React.createElement("section", {
    className: classnames(defaultTheme.group),
    "data-unit": "dropdown:group"
  }, title && /*#__PURE__*/React.createElement("p", {
    className: defaultTheme.groupLabel
  }, title), children);
};
Group.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};
Group.defaultProps = {
  title: void 0,
  children: void 0
};
Group.displayName = 'Dropdown.Group';

export { Group };
//# sourceMappingURL=group.js.map
