import { f as _defineProperty, _ as _extends } from '../../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';
import '../../utils/get-display-name.js';
import '../../utils/hoc/style.css';
import '../../utils/hoc/deprecate.js';
import '../../utils/hoc/experimental.js';
import '../../utils/hoc/error-adapter.js';
import '../../utils/hoc/omittere.js';
import '../../utils/hoc/accessibility-relocation.js';
import { disableHandler, preventHandler } from '../../utils/handlers.js';
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
import defaultTheme from './counter.css';

var iconMap = {
  increase: 'plus',
  decrease: 'minus'
};
var iconTheme = {
  icon: classnames(Icon.theme.icon, defaultTheme.counterButtonIcon)
};
function CounterControl(props) {
  var _classnames;

  var passedProps = _(props).omit(['onClick', 'mode', 'hidden']).extend({
    className: classnames(defaultTheme.counterButton, (_classnames = {}, _defineProperty(_classnames, defaultTheme.counterLeft, props.mode === 'decrease'), _defineProperty(_classnames, defaultTheme.counterRight, props.mode === 'increase'), _classnames)),
    onClick: disableHandler(preventHandler(props.onClick), props.disabled),
    'data-unit': "input:counter:control:".concat(props.mode),
    type: 'button',
    tabIndex: -1
  }).value();

  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button"
  }, passedProps), /*#__PURE__*/React.createElement(Icon, {
    theme: iconTheme,
    name: "icon:core/common/".concat(iconMap[props.mode])
  }));
}
CounterControl.propTypes = {
  mode: PropTypes.oneOf(['increase', 'decrease']).isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};
CounterControl.defaultProps = {
  disabled: false,
  onClick: _.noop
};

export { CounterControl };
//# sourceMappingURL=counter-control.js.map
