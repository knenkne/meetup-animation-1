import '../../../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import 'lodash';
import 'classnames';
import '../../../icon/style.css';
import { Icon } from '../../../icon/icon.js';
import '../../../index-85b17782.js';
import '../../../external-969f6c5f.js';
import '../../../icon/index.js';
import style from '../../style.css';

var IconBlock = function IconBlock(_ref) {
  var iconName = _ref.iconName,
      className = _ref.className;
  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, /*#__PURE__*/React.createElement(Icon, {
    name: iconName
  }));
};
IconBlock.propTypes = {
  iconName: PropTypes.string,
  className: PropTypes.string
};
IconBlock.defaultProps = {
  iconName: 'icon:core/common/calendar',
  className: style.iconPosition
};

export { IconBlock };
//# sourceMappingURL=icon-block.js.map
