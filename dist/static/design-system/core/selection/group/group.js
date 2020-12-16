import { i as _objectWithoutProperties, h as _extends } from '../../_rollupPluginBabelHelpers-3e859d87.js';
import '@emotion/styled';
import '@emotion/core';
import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/font-sizes.config.style.js';
import '../../colors.config.style-69a09a5b.js';
import '../../typography/typography.style.js';
import '../../typography/typography.js';
import '../../typography/headline.style.js';
import '../../typography/headline.js';
import '../../typography/body.js';
import { Caption } from '../../typography/caption.js';
import { GroupFieldsetStyled, ContentStyled } from './group.style.js';

/**
 * Компонент для группировки и выравнивания checkbox и radio
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var SelectionGroup = function SelectionGroup(_ref) {
  var title = _ref.title,
      mode = _ref.mode,
      size = _ref.size,
      children = _ref.children,
      label = _ref.a11y.label,
      passedProps = _objectWithoutProperties(_ref, ["title", "mode", "size", "children", "a11y"]);

  return /*#__PURE__*/React.createElement(GroupFieldsetStyled, _extends({}, passedProps, {
    role: "group",
    "aria-label": label
  }), title && /*#__PURE__*/React.createElement(Caption, null, title), /*#__PURE__*/React.createElement(ContentStyled, {
    mode: mode,
    size: size
  }, children));
};
SelectionGroup.propTypes = {
  mode: PropTypes.oneOf(['column', 'row']),
  size: PropTypes.oneOf(['sm', 'md']),
  children: PropTypes.node,
  title: PropTypes.string,
  a11y: PropTypes.shape({
    label: PropTypes.string
  })
};
SelectionGroup.defaultProps = {
  mode: 'column',
  size: void 0,
  children: void 0,
  title: void 0,
  a11y: {
    label: 'radio group'
  }
};

export { SelectionGroup };
//# sourceMappingURL=group.js.map
