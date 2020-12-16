import '../../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';
import '../../utils/get-display-name.js';
import '../../utils/hoc/style.css';
import '../../utils/hoc/deprecate.js';
import '../../utils/hoc/experimental.js';
import '../../utils/hoc/error-adapter.js';
import { metaOmitter } from '../../utils/hoc/omittere.js';
import '../../utils/hoc/accessibility-relocation.js';
import { disableHandler } from '../../utils/handlers.js';
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
import defaultTheme from './style.css';

/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=Checkbox)
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var Checkbox = function Checkbox(props) {
  var inputProps = _(props).omit(['children', 'theme', 'error', 'formName', 'mode', 'colorScheme', 'size']).extend({
    value: props.value,
    checked: _.isUndefined(props.checked) ? props.value : props.checked,
    type: 'checkbox',
    'data-unit': 'input:checkbox',
    className: classnames(props.theme.input, props.theme[props.colorScheme], props.theme[props.size]),
    disabled: props.disabled,
    onChange: disableHandler(props.onChange, props.disabled),
    form: props.formName
  }).value();

  var iconTheme = {
    icon: classnames(Icon.theme.icon, props.theme.icon)
  };
  return /*#__PURE__*/React.createElement("label", {
    className: classnames(props.theme.checkbox, props.theme[props.colorScheme], props.error && props.theme.error),
    "data-unit": "input:checkbox:wrapper"
  }, /*#__PURE__*/React.createElement("input", inputProps), props.mode === 'switch' ? /*#__PURE__*/React.createElement("div", {
    className: props.theme.switch
  }) : /*#__PURE__*/React.createElement("div", {
    className: props.theme.button
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "icon:core/common/check-mark",
    theme: iconTheme
  })), /*#__PURE__*/React.createElement("div", {
    className: props.theme.children
  }, props.children));
};
Checkbox.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  value: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  error: PropTypes.string,
  formName: PropTypes.string,
  mode: PropTypes.oneOf(['switch', 'checkbox']),
  theme: PropTypes.shape({
    button: PropTypes.string,
    checkbox: PropTypes.string,
    children: PropTypes.string,
    error: PropTypes.string,
    icon: PropTypes.string,
    input: PropTypes.string,
    switch: PropTypes.string
  }),
  colorScheme: PropTypes.oneOf(['purple', 'blue', 'green', 'sky-blue', 'aqua', 'yellow', 'metal']),
  size: PropTypes.oneOf(['sm', 'md'])
};
Checkbox.defaultProps = {
  children: void 0,
  disabled: false,
  onChange: _.noop,
  value: false,
  checked: void 0,
  error: void 0,
  formName: void 0,
  mode: 'checkbox',
  theme: defaultTheme,
  colorScheme: void 0,
  size: 'md'
};
Checkbox.displayName = 'Selection.Checkbox';
Checkbox.theme = defaultTheme;
var WrappedCheckbox = metaOmitter(Checkbox);

export default WrappedCheckbox;
export { Checkbox };
//# sourceMappingURL=checkbox.js.map
