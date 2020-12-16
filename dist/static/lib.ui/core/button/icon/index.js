import { j as _objectWithoutProperties, _ as _extends } from '../../_rollupPluginBabelHelpers-687385f0.js';
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
import '../../utils/handlers.js';
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
import '../../loader/loader.css';
import '../../loader/loader-themes/pulse-loader.css';
import '../../loader/loader-themes/jump-loader.css';
import '../../loader/loader-themes/swap-loader.css';
import { Loader } from '../../loader/loader.js';
import '../../loader/icon-loader.css';
import '../../loader/icon-loader.js';
import '../../loader/button-loader.css';
import '../../loader/utils.js';
import '../../loader/button-loader.js';
import '../../loader/index.js';
import defaultTheme from './style.css';

/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d/screen/5c8a5f6261942d0ddc10efe1)
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var IconButton = function IconButton(_ref) {
  var title = _ref.title,
      colorScheme = _ref.colorScheme,
      size = _ref.size,
      theme = _ref.theme,
      icon = _ref.icon,
      mode = _ref.mode,
      disabled = _ref.disabled,
      props = _objectWithoutProperties(_ref, ["title", "colorScheme", "size", "theme", "icon", "mode", "disabled"]);

  return /*#__PURE__*/React.createElement("button", _extends({}, props, {
    type: "button",
    mode: mode,
    disabled: mode === 'loading' || disabled,
    className: classnames(theme.button, !title && theme.iconOnly),
    "aria-busy": mode === 'loading'
  }), mode ? /*#__PURE__*/React.createElement(Loader.Icon, null) : /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: "self",
    theme: {
      self: classnames(Icon.theme.self, theme.icon)
    }
  }), !!title && /*#__PURE__*/React.createElement("span", {
    className: classnames(theme.title, theme[colorScheme], theme[size])
  }, title));
};
IconButton.propTypes = {
  title: PropTypes.string,
  mode: PropTypes.oneOf(['loading', void 0]),
  colorScheme: PropTypes.oneOf(['black', 'green', 'purple', 'blue', 'goals', 'skyblue', 'aqua', 'gold', 'metal', 'orange']),
  size: PropTypes.oneOf(['sm', 'md']),
  icon: PropTypes.string,
  theme: PropTypes.object,
  disabled: PropTypes.bool
};
IconButton.defaultProps = {
  title: void 0,
  colorScheme: 'black',
  size: 'md',
  icon: void 0,
  theme: defaultTheme,
  mode: void 0,
  disabled: false
};
IconButton.displayName = 'Button.Icon';
IconButton.theme = defaultTheme;

export { IconButton };
//# sourceMappingURL=index.js.map
