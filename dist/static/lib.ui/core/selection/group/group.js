import { j as _objectWithoutProperties, _ as _extends } from '../../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import defaultTheme from './group.css';

/**
 * Компонент для группировки и выравнивания checkbox и radio
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var Group = function Group(_ref) {
  var title = _ref.title,
      mode = _ref.mode,
      size = _ref.size,
      children = _ref.children,
      theme = _ref.theme,
      value = _ref.value,
      passedProps = _objectWithoutProperties(_ref, ["title", "mode", "size", "children", "theme", "value"]);

  return /*#__PURE__*/React.createElement("fieldset", _extends({
    className: theme.group
  }, passedProps), title && /*#__PURE__*/React.createElement("legend", {
    className: classnames(theme.legend, value && theme.filled)
  }, title), /*#__PURE__*/React.createElement("div", {
    className: classnames(theme.content, theme[mode], theme[size])
  }, children));
};
Group.propTypes = {
  mode: PropTypes.oneOf(['column', 'row']),
  size: PropTypes.oneOf(['sm', 'md']),
  children: PropTypes.node,
  title: PropTypes.string,
  value: PropTypes.string,
  theme: PropTypes.object
};
Group.defaultProps = {
  mode: 'column',
  size: void 0,
  children: void 0,
  title: void 0,
  value: void 0,
  theme: defaultTheme
};
Group.theme = defaultTheme;
Group.displayName = 'Selection.Group';

export { Group };
//# sourceMappingURL=group.js.map
