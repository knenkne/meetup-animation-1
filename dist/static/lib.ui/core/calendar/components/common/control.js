import '../../../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import 'lodash';
import classnames from 'classnames';
import '../../../utils/get-display-name.js';
import '../../../utils/hoc/style.css';
import '../../../utils/hoc/deprecate.js';
import '../../../utils/hoc/experimental.js';
import '../../../utils/hoc/error-adapter.js';
import '../../../utils/hoc/omittere.js';
import '../../../utils/hoc/accessibility-relocation.js';
import '../../../utils/handlers.js';
import '../../../utils/pluralize.js';
import '../../../utils/scroll-to.js';
import '../../../utils/format-phone-number.js';
import '../../../utils/memoize-func-with-args.js';
import '../../../utils/auto-top-check-by-window.js';
import { mergeTheme } from '../../../utils/merge-theme.js';
import '../../../utils/styles/media.config.css';
import '../../../utils/adaptive.js';
import '../../../utils/pseudo/pseudo-button.js';
import '../../../utils/get-card-icon.js';
import '../../../utils/get-ivestments-icon.js';
import '../../../utils/get-metal-icon.js';
import '../../../utils/get-target-icon.js';
import '../../../icon/style.css';
import { Icon } from '../../../icon/icon.js';
import '../../../index-85b17782.js';
import '../../../external-969f6c5f.js';
import '../../../icon/index.js';
import '../../../utils/set-project-id.js';
import '../../../utils/make-direction.js';
import '../../../utils/show-error.js';
import '../../../typography/style.css';
import '../../../typography/headline.js';
import '../../../typography/title.js';
import '../../../typography/subheader.js';
import '../../../typography/caption.js';
import '../../../typography/uppercase.js';
import '../../../typography/description.js';
import { Typography } from '../../../typography/index.js';
import style from './control.css';

var Control = function Control(_ref) {
  var onClick = _ref.onClick,
      dataUnit = _ref.dataUnit,
      title = _ref.title,
      isActive = _ref.isActive,
      withIcon = _ref.withIcon,
      className = _ref.className;
  return /*#__PURE__*/React.createElement("button", {
    className: classnames(Typography.theme.body, Typography.theme.bodySemibold, style.button, className),
    onMouseDown: onClick,
    "data-unit": dataUnit,
    tabIndex: "-1",
    type: "button"
  }, /*#__PURE__*/React.createElement("span", null, title), withIcon && /*#__PURE__*/React.createElement("span", {
    className: style.arrowIconWrapper
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "icon:core/common/calendarArrowLeft",
    theme: mergeTheme(Icon.theme, {
      icon: isActive ? classnames(style.arrowIcon, style.arrowIconReverted) : style.arrowIcon
    })
  })));
};

Control.propTypes = {
  onClick: PropTypes.func.isRequired,
  dataUnit: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  withIcon: PropTypes.bool
};
Control.defaultProps = {
  withIcon: true,
  className: ''
};

export default Control;
//# sourceMappingURL=control.js.map
