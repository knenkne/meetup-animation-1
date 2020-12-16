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
import defaultTheme from './style.css';

/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d/screen/5cab587b78e0b72a43cd7eb1)
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var RadioSegmented = function RadioSegmented(props) {
  var inputProps = _(props).omit(['children', 'theme', 'formName', 'a11y', 'title', 'error', 'theme', 'colorScheme']).extend({
    type: 'radio',
    'data-unit': 'button:radio:segmented',
    className: props.theme.input,
    name: props.name,
    value: props.value,
    onChange: disableHandler(props.onChange, props.disabled),
    form: props.formName
  }).value();

  return /*#__PURE__*/React.createElement("label", {
    className: classnames(props.theme.radio, props.theme[props.colorScheme], props.theme[props.size]),
    title: props.a11y.title
  }, /*#__PURE__*/React.createElement("input", inputProps), /*#__PURE__*/React.createElement("span", {
    className: props.theme.children
  }, props.children));
};
RadioSegmented.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,

  /**
   * mode="last" должен быть проставлен последнему элементу в списке RadioSegmented
   */
  mode: PropTypes.oneOf(['last', void 0]),
  a11y: PropTypes.shape({
    /**
     * заголовок кнопки, если отображение не представлено текстом
     */
    title: PropTypes.string
  }).isRequired,
  formName: PropTypes.string,
  theme: PropTypes.object,
  colorScheme: PropTypes.oneOf(['purple', 'blue', 'green', 'pink', 'sky-blue', 'aqua', 'gold', 'metal', 'base']),
  size: PropTypes.oneOf(['sm', 'lg'])
};
RadioSegmented.defaultProps = {
  onChange: _.noop,
  disabled: false,
  mode: void 0,
  formName: void 0,
  theme: defaultTheme,
  colorScheme: 'base',
  size: 'sm'
};
RadioSegmented.theme = defaultTheme;
RadioSegmented.displayName = 'Button.RadioSegmented';
var WrappedRadioSegmented = metaOmitter(RadioSegmented);

export default WrappedRadioSegmented;
export { RadioSegmented };
//# sourceMappingURL=index.js.map
