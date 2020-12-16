import { f as _defineProperty, _ as _extends } from '../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';
import '../utils/get-display-name.js';
import '../utils/hoc/style.css';
import '../utils/hoc/deprecate.js';
import '../utils/hoc/experimental.js';
import '../utils/hoc/error-adapter.js';
import { metaOmitter } from '../utils/hoc/omittere.js';
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
import { Icon } from '../icon/icon.js';
import '../index-85b17782.js';
import '../external-969f6c5f.js';
import '../icon/index.js';
import '../utils/set-project-id.js';
import '../utils/make-direction.js';
import '../utils/show-error.js';
import defaultTheme from './input.css';

/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d/screen/5c8a5f5f9663d725192e86cf)
 * Обычное поле ввода
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var Input = function Input(props) {
  var _classnames;

  var passedProps = _(props).omit(['theme', 'refWrapper', 'error', 'formName', 'icon', 'disabled', 'forceDisabled', 'readOnly', 'readonly', 'onClick']).extend({
    // can be type="password"
    // type: 'text',
    ref: props.refWrapper,
    className: classnames(props.theme.input, (_classnames = {}, _defineProperty(_classnames, props.theme.error, !!props.error), _defineProperty(_classnames, props.theme.inputIcon, !!props.icon), _defineProperty(_classnames, props.theme.inputClickIcon, props.onClick), _defineProperty(_classnames, props.theme.readonly, props.readOnly || props.readonly), _classnames)),
    onChange: disableHandler(props.onChange, props.disabled),
    form: props.formName,
    disabled: props.disabled || props.readOnly || props.readonly,
    readOnly: props.readOnly || props.readonly
  }).value();

  var input = /*#__PURE__*/React.createElement("input", _extends({
    "data-unit": "input:textbox"
  }, passedProps));

  if (props.icon) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.theme.block
    }, input, /*#__PURE__*/React.createElement(Icon, {
      name: props.icon,
      theme: {
        icon: classnames(props.theme.icon, props.onClick && props.theme.clickIcon, (props.disabled || props.readOnly || props.readonly) && props.theme.readonlyIcon)
      },
      onClick: props.onClick
    }));
  }

  return input;
};
Input.propTypes = {
  disabled: PropTypes.bool,
  theme: PropTypes.shape({
    input: PropTypes.string,
    inputIcon: PropTypes.string,
    error: PropTypes.string,
    icon: PropTypes.string,
    clickIcon: PropTypes.string,
    block: PropTypes.string,
    readonly: PropTypes.string,
    readonlyIcon: PropTypes.string
  }),
  refWrapper: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  value: PropTypes.string,
  // eslint-disable-line react/no-unused-prop-types, comment: сквозной проброс пропов
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  error: PropTypes.string,
  formName: PropTypes.string,
  icon: PropTypes.string,
  autoComplete: PropTypes.string,
  readOnly: PropTypes.bool,

  /**
   * @ignore
   */
  readonly: PropTypes.bool
};
Input.defaultProps = {
  disabled: false,
  theme: defaultTheme,
  refWrapper: _.noop,
  value: void 0,
  onChange: _.noop,
  onClick: void 0,
  error: void 0,
  formName: void 0,
  icon: void 0,
  autoComplete: 'off',
  readOnly: false,
  readonly: false
};
Input.displayName = 'Input';
Input.theme = defaultTheme;
var WrappedInput = metaOmitter(Input);

export default WrappedInput;
export { Input };
//# sourceMappingURL=input.js.map
