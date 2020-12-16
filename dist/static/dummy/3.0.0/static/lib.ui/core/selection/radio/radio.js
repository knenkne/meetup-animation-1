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
import '../../icon/icon.js';
import '../../index-85b17782.js';
import '../../external-969f6c5f.js';
import '../../icon/index.js';
import '../../utils/set-project-id.js';
import '../../utils/make-direction.js';
import '../../utils/show-error.js';
import defaultTheme from './radio.css';

/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=Selection%20Radio)
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var Radio = function Radio(props) {
  var inputProps = _(props).omit(['children', 'theme', 'error', 'formName', 'colorScheme', 'size']).extend({
    type: 'radio',
    'data-unit': 'input:radio',
    disabled: props.disabled,
    className: classnames(props.theme.input, props.theme[props.colorScheme]),
    name: props.name,
    value: props.value,
    onChange: disableHandler(props.onChange, props.disabled),
    form: props.formName
  }).value();

  return /*#__PURE__*/React.createElement("label", {
    className: classnames(props.theme.radio, props.theme[props.colorScheme], props.error && props.theme.error),
    "data-unit": "input:radio:wrapper"
  }, /*#__PURE__*/React.createElement("input", inputProps), /*#__PURE__*/React.createElement("div", {
    className: classnames(props.theme.button, props.theme[props.size])
  }), /*#__PURE__*/React.createElement("div", {
    className: props.theme.children
  }, props.children));
};
Radio.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  formName: PropTypes.string,
  colorScheme: PropTypes.oneOf(['purple', 'blue', 'green', 'pink', 'sky-blue', 'aqua', 'gold', 'metal']),
  theme: PropTypes.object,
  size: PropTypes.oneOf(['sm', 'md'])
};
Radio.defaultProps = {
  name: void 0,
  children: void 0,
  disabled: false,
  onChange: _.noop,
  value: void 0,
  error: void 0,
  formName: void 0,
  colorScheme: void 0,
  theme: defaultTheme,
  size: 'md'
};
Radio.displayName = 'Selection.Radio';
Radio.theme = defaultTheme;
var WrappedRadio = metaOmitter(Radio);

export default WrappedRadio;
export { Radio };
//# sourceMappingURL=radio.js.map
