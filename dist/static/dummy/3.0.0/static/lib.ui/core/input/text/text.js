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
import 'bignumber.js';
import 'text-mask-core/dist/textMaskCore';
import 'text-mask-addons/dist/createNumberMask';
import '../utils.js';
import { autoSizeFactory } from '../hoc/auto-size.js';
import defaultTheme from './text.css';

/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=blocks%20input%20text)
 * Поле многострочного ввода
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var Text = function Text(props) {
  var passedProps = _(props).omit(['theme', 'error', 'formName', 'refWrapper']).extend({
    type: 'text',
    ref: props.refWrapper,
    role: 'textbox',
    title: props.value,
    className: classnames(defaultTheme.text, props.error && defaultTheme.error, props.readOnly && defaultTheme.readonly),
    'data-unit': 'input:textarea',
    onChange: disableHandler(props.onChange, props.disabled),
    form: props.formName,
    disabled: props.disabled || props.readOnly
  }).value();

  return /*#__PURE__*/React.createElement("textarea", passedProps);
};
Text.propTypes = {
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  refWrapper: PropTypes.func,
  value: PropTypes.string,
  // eslint-disable-line react/no-unused-prop-types, comment: сквозной проброс пропов
  onChange: PropTypes.func,
  error: PropTypes.string,
  formName: PropTypes.string
};
Text.defaultProps = {
  disabled: false,
  readOnly: false,
  refWrapper: _.noop,
  value: '',
  onChange: _.noop,
  error: void 0,
  formName: void 0
};
Text.displayName = 'Input.Text';
Text.theme = defaultTheme;
var WrappedText = autoSizeFactory({
  minHeight: 56
})(metaOmitter(Text));

export default WrappedText;
export { Text };
//# sourceMappingURL=text.js.map
