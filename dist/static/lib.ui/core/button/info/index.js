import { i as _objectSpread2, j as _objectWithoutProperties, _ as _extends } from '../../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import 'lodash';
import classnames from 'classnames';
import '../../utils/get-display-name.js';
import '../../utils/hoc/style.css';
import '../../utils/hoc/deprecate.js';
import '../../utils/hoc/experimental.js';
import '../../utils/hoc/error-adapter.js';
import '../../utils/hoc/omittere.js';
import '../../utils/hoc/accessibility-relocation.js';
import { handlePreventDefault } from '../../utils/handlers.js';
import '../../utils/pluralize.js';
import '../../utils/scroll-to.js';
import '../../utils/format-phone-number.js';
import '../../utils/memoize-func-with-args.js';
import '../../utils/auto-top-check-by-window.js';
import '../../utils/merge-theme.js';
import '../../utils/styles/media.config.css';
import '../../utils/adaptive.js';
import '../../utils/pseudo/pseudo-button.js';
import '../../utils/get-card-icon.js';
import '../../utils/get-ivestments-icon.js';
import '../../utils/get-metal-icon.js';
import '../../utils/get-target-icon.js';
import '../../icon/style.css';
import { Icon } from '../../icon/icon.js';
import '../../index-85b17782.js';
import '../../external-969f6c5f.js';
import '../../icon/index.js';
import '../../utils/set-project-id.js';
import '../../utils/make-direction.js';
import '../../utils/show-error.js';
import '../../tooltip/style.css';
import '../../tooltip/tip.js';
import { Tooltip } from '../../tooltip/tooltip.js';
import '../../tooltip/hover-tooltip.js';
import 'react-onclickoutside';
import '../../perimeter/perimeter.js';
import '../../perimeter/index.js';
import '../../tooltip/click-tooltip.js';
import '../../tooltip/index.js';
import defaultTheme from './style.css';

var iconTheme = _objectSpread2(_objectSpread2({}, Icon.theme), {}, {
  icon: classnames(Icon.theme.icon, defaultTheme.icon)
});

var iconMap = {
  info: 'icon:core/common/button-info-info',
  warning: 'icon:core/common/button-info-warning'
};
/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=Button%20Info%20Link)
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var Info = function Info(_ref) {
  var size = _ref.size,
      children = _ref.children,
      mode = _ref.mode,
      direction = _ref.direction,
      title = _ref.title,
      icon = _ref.icon,
      onOpen = _ref.onOpen,
      onClose = _ref.onClose,
      passedProps = _objectWithoutProperties(_ref, ["size", "children", "mode", "direction", "title", "icon", "onOpen", "onClose"]);

  return /*#__PURE__*/React.createElement(Tooltip.Hover, {
    onOpen: onOpen,
    onClose: onClose
  }, /*#__PURE__*/React.createElement("button", _extends({}, passedProps, {
    type: "button",
    className: classnames(defaultTheme.info, defaultTheme[size], !icon && defaultTheme.underline, mode === 'error' && defaultTheme.error),
    "data-unit": "button:info:link",
    onClick: handlePreventDefault
  }), icon && /*#__PURE__*/React.createElement(Icon, {
    name: iconMap[icon],
    theme: iconTheme,
    size: "md"
  }), title && /*#__PURE__*/React.createElement("span", {
    className: defaultTheme.title
  }, title)), /*#__PURE__*/React.createElement(Tooltip.Tip, {
    mode: mode,
    direction: direction
  }, children));
};
Info.propTypes = {
  title: PropTypes.string,
  tabIndex: PropTypes.number,
  // eslint-disable-line react/no-unused-prop-types, comment: сквозной проброс пропов
  size: PropTypes.oneOf(['sm', 'lg']),
  children: PropTypes.node.isRequired,
  mode: PropTypes.oneOf(['info', 'error']),
  icon: PropTypes.oneOf(['info', 'warning']),

  /**
   * Направление отображения подсказки относительно родителя
   */
  direction: PropTypes.oneOf(['topLeft', 'topRight', 'topCenter', 'bottomLeft', 'bottomRight', 'bottomCenter']),
  onOpen: PropTypes.func,
  onClose: PropTypes.func
};
Info.defaultProps = {
  title: '',
  tabIndex: 0,
  size: 'lg',
  mode: 'info',
  icon: void 0,
  direction: 'topLeft',
  onOpen: void 0,
  onClose: void 0
};
Info.displayName = 'Button.Info';
Info.theme = defaultTheme;

export { Info };
//# sourceMappingURL=index.js.map
