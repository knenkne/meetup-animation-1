import { _ as _extends, f as _defineProperty } from '../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';
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
import { PseudoButton } from '../utils/pseudo/pseudo-button.js';
import '../utils/get-card-icon.js';
import '../utils/get-ivestments-icon.js';
import '../utils/get-metal-icon.js';
import '../utils/get-target-icon.js';
import '../icon/style.css';
import { Icon } from '../icon/icon.js';
import '../index-85b17782.js';
import '../external-969f6c5f.js';
import '../icon/index.js';
import '../utils/set-project-id.js';
import '../utils/make-direction.js';
import '../utils/show-error.js';
import defaultTheme from '../button/style.css';
import defaultTheme$1 from './style.css';

/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=dropdown)
 * Стандартизированная кликабельная цель выпадения списка для Dropdown.
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var TargetButton = function TargetButton(props) {
  var _classnames;

  var ariaLabel = '';

  if (!props.children) {
    ariaLabel = props.forceOpened ? props.a11y.closeLabel : props.a11y.openLabel;
  }

  return /*#__PURE__*/React.createElement(PseudoButton, _extends({
    "data-unit": "dropdown:target",
    "aria-disabled": props.disabled,
    className: classnames(props.theme.target, defaultTheme[props.colorScheme], (_classnames = {}, _defineProperty(_classnames, props.theme.disabled, props.disabled), _defineProperty(_classnames, props.theme.opened, props.forceOpened), _classnames)),
    "aria-label": ariaLabel || props['aria-label']
  }, _.omit(props, ['theme', 'forceOpened', 'children', 'a11y', 'colorScheme'])), props.children, props.mode === 'arrow' && /*#__PURE__*/React.createElement(Icon, {
    theme: {
      icon: classnames(Icon.theme.icon, props.theme.arrowElement)
    },
    name: "icon:core/common/down-arrow"
  }));
};
TargetButton.propTypes = {
  children: PropTypes.node,
  forceOpened: PropTypes.bool,
  disabled: PropTypes.bool,
  theme: PropTypes.object,
  mode: PropTypes.oneOf(['arrow', 'none']),
  'aria-label': PropTypes.string,
  a11y: PropTypes.shape({
    openLabel: PropTypes.string,
    closeLabel: PropTypes.string
  }),
  colorScheme: PropTypes.oneOf(['purple', 'blue', 'green', 'pink', 'black', 'base', ''])
};
TargetButton.defaultProps = {
  children: void 0,
  forceOpened: false,
  disabled: false,
  theme: defaultTheme$1,
  mode: 'arrow',
  'aria-label': '',
  a11y: void 0,
  colorScheme: 'base'
};
TargetButton.theme = defaultTheme$1;
TargetButton.displayName = 'Dropdown.TargetButton';

export { TargetButton };
//# sourceMappingURL=target-button.js.map
