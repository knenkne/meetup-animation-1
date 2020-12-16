import '../_rollupPluginBabelHelpers-687385f0.js';
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';
import '../utils/get-display-name.js';
import '../utils/hoc/style.css';
import { deprecate } from '../utils/hoc/deprecate.js';
import '../utils/hoc/experimental.js';
import '../utils/hoc/error-adapter.js';
import '../utils/hoc/omittere.js';
import '../utils/hoc/accessibility-relocation.js';
import { disableHandler } from '../utils/handlers.js';
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
import './command/style.css';
import { Command } from './command/index.js';
import '../loader/loader.css';
import '../loader/loader-themes/pulse-loader.css';
import '../loader/loader-themes/jump-loader.css';
import '../loader/loader-themes/swap-loader.css';
import { Loader } from '../loader/loader.js';
import '../loader/icon-loader.css';
import '../loader/icon-loader.js';
import '../loader/button-loader.css';
import '../loader/utils.js';
import '../loader/button-loader.js';
import '../loader/index.js';
import './icon/style.css';
import { IconButton } from './icon/index.js';
import '../tooltip/style.css';
import '../tooltip/tip.js';
import '../tooltip/tooltip.js';
import '../tooltip/hover-tooltip.js';
import 'react-onclickoutside';
import '../perimeter/perimeter.js';
import '../perimeter/index.js';
import '../tooltip/click-tooltip.js';
import '../tooltip/index.js';
import './info/style.css';
import { Info } from './info/index.js';
import './radio-segmented/style.css';
import WrappedRadioSegmented from './radio-segmented/index.js';
import defaultTheme from './style.css';

/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d/screen/5c8a5f6261942d0ddc10efe1)
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var Button = function Button(props) {
  var isLoading = useMemo(function () {
    return props.mode === 'loading';
  }, [props.mode]);

  var passedProps = _(props).omit(['theme', 'mode', 'colorScheme', 'title']).extend({
    disabled: isLoading ? false : props.disabled,
    onClick: disableHandler(props.onClick, props.disabled || isLoading),
    className: classnames(props.theme.button, props.theme[props.colorScheme], props.mode === 'loading' && props.theme.loading),
    'aria-live': 'polite',
    'aria-busy': props.mode === 'loading'
  }).value();

  return /*#__PURE__*/React.createElement("button", passedProps, props.children || props.title, props.mode === 'loading' && /*#__PURE__*/React.createElement(Loader.Button, {
    colorScheme: props.colorScheme
  }));
};
Button.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  mode: PropTypes.oneOf(['loading', void 0]),
  colorScheme: PropTypes.oneOf(['base', 'secondary', 'link', 'purple', 'blue', 'green', 'skyblue', 'black', 'gold', 'aqua']),
  theme: PropTypes.shape({
    button: PropTypes.string,
    disabled: PropTypes.string,
    loader: PropTypes.string,
    loaderPoint: PropTypes.string,
    loading: PropTypes.string
  }),
  disabled: PropTypes.bool,
  tabIndex: PropTypes.number,
  // eslint-disable-line react/no-unused-prop-types, comment: сквозной проброс пропов
  onClick: PropTypes.func
};
Button.defaultProps = {
  title: void 0,
  children: void 0,
  theme: defaultTheme,
  disabled: false,
  tabIndex: 0,
  onClick: _.noop,
  mode: void 0,
  icon: void 0,
  colorScheme: 'base'
};
Button.displayName = 'Button';
Button.theme = defaultTheme;
Button.Info = Info;
Button.Icon = IconButton;
Button.Command = Command;
Button.RadioSegmented = WrappedRadioSegmented;
Button.General = deprecate('5.0.0', 'Button.General', 'Button')(function (props) {
  return /*#__PURE__*/React.createElement(Button, props);
});
Button.Secondary = deprecate('5.0.0', 'Button.Secondary', 'Button')(function (props) {
  return /*#__PURE__*/React.createElement(Button, props);
});
Button.Additional = deprecate('5.0.0', 'Button.Additional', 'Button')(function (props) {
  return /*#__PURE__*/React.createElement(Button, props);
});
Button.General.Dropdown = deprecate('5.0.0', 'Button.General.Dropdown', 'Menu')(function () {
  return /*#__PURE__*/React.createElement("span", null);
});
Button.Additional.Dropdown = deprecate('5.0.0', 'Button.Additional.Dropdown', 'Menu')(function () {
  return /*#__PURE__*/React.createElement("span", null);
});

export default Button;
export { Button };
//# sourceMappingURL=index.js.map
