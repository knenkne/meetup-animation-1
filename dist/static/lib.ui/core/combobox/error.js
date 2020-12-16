import '../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import 'lodash';
import 'classnames';
import '../utils/get-display-name.js';
import '../utils/hoc/style.css';
import '../utils/hoc/deprecate.js';
import '../utils/hoc/experimental.js';
import '../utils/hoc/error-adapter.js';
import '../utils/hoc/omittere.js';
import '../utils/hoc/accessibility-relocation.js';
import '../utils/handlers.js';
import '../utils/pluralize.js';
import '../utils/scroll-to.js';
import '../utils/format-phone-number.js';
import '../utils/memoize-func-with-args.js';
import '../utils/auto-top-check-by-window.js';
import '../utils/merge-theme.js';
import '../utils/styles/media.config.css';
import '../utils/adaptive.js';
import '../utils/pseudo/pseudo-button.js';
import '../utils/get-card-icon.js';
import '../utils/get-ivestments-icon.js';
import '../utils/get-metal-icon.js';
import '../utils/get-target-icon.js';
import '../icon/style.css';
import '../icon/icon.js';
import '../index-85b17782.js';
import '../external-969f6c5f.js';
import '../icon/index.js';
import '../utils/set-project-id.js';
import '../utils/make-direction.js';
import '../utils/show-error.js';
import '../button/command/style.css';
import '../button/command/index.js';
import '../loader/loader.css';
import '../loader/loader-themes/pulse-loader.css';
import '../loader/loader-themes/jump-loader.css';
import '../loader/loader-themes/swap-loader.css';
import '../loader/loader.js';
import '../loader/icon-loader.css';
import '../loader/icon-loader.js';
import '../loader/button-loader.css';
import '../loader/utils.js';
import '../loader/button-loader.js';
import '../loader/index.js';
import '../button/icon/style.css';
import '../button/icon/index.js';
import '../tooltip/style.css';
import '../tooltip/tip.js';
import '../tooltip/tooltip.js';
import '../tooltip/hover-tooltip.js';
import 'react-onclickoutside';
import '../perimeter/perimeter.js';
import '../perimeter/index.js';
import '../tooltip/click-tooltip.js';
import '../tooltip/index.js';
import '../button/info/style.css';
import '../button/info/index.js';
import '../button/radio-segmented/style.css';
import '../button/radio-segmented/index.js';
import '../button/style.css';
import { Button } from '../button/index.js';

var Error = function Error(props) {
  var onClick = props.onClick,
      title = props.title,
      children = props.children,
      className = props.className;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: className
  }, children), /*#__PURE__*/React.createElement(Button, {
    title: title,
    onClick: onClick,
    type: "button"
  }));
};
Error.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};
Error.defaultProps = {
  className: void 0
};
Error.displayName = 'Combobox.Error';

export { Error };
//# sourceMappingURL=error.js.map
