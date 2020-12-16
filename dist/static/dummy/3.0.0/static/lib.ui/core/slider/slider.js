import { j as _objectWithoutProperties, _ as _extends } from '../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';
import '../utils/get-display-name.js';
import '../utils/hoc/style.css';
import '../utils/hoc/deprecate.js';
import '../utils/hoc/experimental.js';
import '../utils/hoc/error-adapter.js';
import { omittere } from '../utils/hoc/omittere.js';
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
import '../typography/style.css';
import '../typography/headline.js';
import '../typography/title.js';
import '../typography/subheader.js';
import '../typography/caption.js';
import '../typography/uppercase.js';
import '../typography/description.js';
import '../typography/index.js';
import '../currency/locales.js';
import '../currency/options.js';
import '../currency/style.css';
import '../currency/currency.js';
import 'bignumber.js';
import 'text-mask-core/dist/textMaskCore';
import 'text-mask-addons/dist/createNumberMask';
import '../input/utils.js';
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
import '../button/index.js';
import '../input/input.css';
import '../input/input.js';
import '../input/hoc/auto-size.js';
import '../input/masked/masked-format.js';
import '../input/masked/masked.js';
import '../input/numeric/numeric.js';
import '../input/counter/counter.css';
import '../input/counter/counter-control.js';
import '../input/counter/counter.js';
import '../input/text/text.css';
import '../input/text/text.js';
import '../input/currency/currency.js';
import '../input/money/money.js';
import '../input/password/eye-style.css';
import '../input/password/eye.js';
import '../input/password/input-style.css';
import '../input/password/password.js';
import '../input/currency-select/currency-select.js';
import '../input/currency-select/currency-select.css';
import '../input/currency-select/currency-select-option.js';
import '../dropdown/style.css';
import '../dropdown/target-button.js';
import '../dropdown/utils.js';
import '../dropdown/contents.js';
import '../dropdown/group.js';
import '../dropdown/select/select.css';
import '../dropdown/option.js';
import '../link/link.css';
import '../link/components/simple-external-link.js';
import '../link/link.js';
import '../dropdown/link.js';
import '../dropdown/dropdown.js';
import '../dropdown/select/item.js';
import '../dropdown/select/select.js';
import '../dropdown/index.js';
import '../marked-text/style.css';
import '../marked-text/marked-text.js';
import '../input/suggest/style.css';
import '../input/suggest/themes.js';
import '../input/suggest/target-input.js';
import '../input/suggest/long.js';
import '../input/suggest/no-matches.js';
import '../input/suggest/error.js';
import '../input/suggest/option.js';
import '../input/suggest/suggest.js';
import '../input/suggest/utils.js';
import '../input/suggest/suggest-dynamic.js';
import '../input/suggest/index.js';
import '../input/hoc/typeahead.css';
import '../input/hoc/typeahead.js';
import '../input/phone/phone-mask.js';
import '../input/phone/local-phone.js';
import '../input/hoc/keep-char-positions-typeahead.js';
import '../input/hoc/tooltiped.js';
import 'remarkable';
import 'remarkable/lib/common/utils';
import '../markdown/utils.js';
import '../markdown/style.css';
import '../markdown/full.js';
import '../markdown/short.js';
import '../markdown/index.js';
import '../labeled/labeled.css';
import '../labeled/index.js';
import '../input/hoc/labeled.js';
import { Input } from '../input/index.js';
import '../listbox/utils.js';
import '../listbox/selected-option.js';
import '../listbox/multi-selected-options.js';
import '../listbox/style.css';
import { Listbox } from '../listbox/listbox.js';
import './utils.js';
import defaultTheme from './style.css';
import './segments.js';
import { BaseSlider } from './base-slider.js';
import { Boundaries } from './boundaries.js';

/* eslint-disable valid-jsdoc, comment: некорректный парсинг jsdoc */

/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=Blocks%20Slider)
 * Выбор значения с ползунком и полем ввода
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
// eslint-disable-next-line complexity, comment: TODO - decrease complexity

var Slider = function Slider(_ref) {
  var _listBoxRef$current, _listBoxRef$current$s;

  var value = _ref.value,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      disabled = _ref.disabled,
      error = _ref.error,
      mode = _ref.mode,
      colorScheme = _ref.colorScheme,
      min = _ref.min,
      max = _ref.max,
      step = _ref.step,
      digits = _ref.digits,
      grid = _ref.grid,
      options = _ref.options,
      transitionDuration = _ref.transitionDuration,
      tabIndex = _ref.tabIndex,
      id = _ref.id,
      placeholder = _ref.placeholder,
      active = _ref.active,
      formName = _ref.formName,
      prefix = _ref.prefix,
      suffix = _ref.suffix,
      decimalSymbol = _ref.decimalSymbol,
      includeThousandsSeparator = _ref.includeThousandsSeparator,
      thousandsSeparatorSymbol = _ref.thousandsSeparatorSymbol,
      allowDecimal = _ref.allowDecimal,
      allowNegative = _ref.allowNegative,
      decimalLimit = _ref.decimalLimit,
      props = _objectWithoutProperties(_ref, ["value", "onChange", "onFocus", "onBlur", "disabled", "error", "mode", "colorScheme", "min", "max", "step", "digits", "grid", "options", "transitionDuration", "tabIndex", "id", "placeholder", "active", "formName", "prefix", "suffix", "decimalSymbol", "includeThousandsSeparator", "thousandsSeparatorSymbol", "allowDecimal", "allowNegative", "decimalLimit"]);

  var sliderMode = mode === 'input:segmented' || mode === 'segmented' ? 'segmented' : void 0;
  var onChangeOption = React.useCallback(function (index, e) {
    onChange(options[index].value, e);
  }, [options]);
  var listBoxRef = React.useRef(null);
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: classnames(defaultTheme.slider, disabled && defaultTheme.disabled, options && (listBoxRef === null || listBoxRef === void 0 ? void 0 : (_listBoxRef$current = listBoxRef.current) === null || _listBoxRef$current === void 0 ? void 0 : (_listBoxRef$current$s = _listBoxRef$current.state) === null || _listBoxRef$current$s === void 0 ? void 0 : _listBoxRef$current$s.open) && defaultTheme.withOptions)
  }), options ? /*#__PURE__*/React.createElement(Listbox, {
    ref: listBoxRef,
    value: value,
    onChange: onChange,
    onFocus: onFocus,
    onBlur: onBlur,
    options: options,
    tabIndex: tabIndex,
    active: active,
    formName: formName,
    error: error,
    id: id,
    mode: "autoselect"
  }) : /*#__PURE__*/React.createElement(Input.Numeric, {
    value: value,
    onChange: onChange,
    onFocus: onFocus,
    onBlur: onBlur,
    decimalSymbol: decimalSymbol,
    includeThousandsSeparator: includeThousandsSeparator,
    thousandsSeparatorSymbol: thousandsSeparatorSymbol,
    allowDecimal: allowDecimal,
    allowNegative: allowNegative,
    decimalLimit: decimalLimit,
    disabled: disabled,
    tabIndex: tabIndex,
    placeholder: placeholder,
    active: active,
    formName: formName,
    prefix: prefix,
    suffix: suffix,
    error: error,
    id: id,
    min: _.first(grid) || min,
    max: _.last(grid) || max,
    allowEmpty: false
  }), /*#__PURE__*/React.createElement(BaseSlider, {
    value: options ? options.findIndex(function (item) {
      return item.value === value;
    }) : value,
    onChange: options ? onChangeOption : onChange,
    mode: sliderMode,
    colorScheme: colorScheme,
    min: min,
    max: max,
    step: step,
    digits: digits,
    error: error,
    disabled: disabled,
    transitionDuration: transitionDuration,
    grid: options ? options.map(function (item, index) {
      return index;
    }) : grid
  }), /*#__PURE__*/React.createElement(Boundaries, {
    decimalSymbol: decimalSymbol,
    includeThousandsSeparator: includeThousandsSeparator,
    thousandsSeparatorSymbol: thousandsSeparatorSymbol,
    allowDecimal: allowDecimal,
    allowNegative: allowNegative,
    decimalLimit: decimalLimit,
    options: options,
    grid: grid,
    min: min,
    max: max,
    prefix: prefix,
    suffix: suffix
  }));
};
Slider.propTypes = {
  colorScheme: PropTypes.oneOf(['base', 'purple', 'blue', 'green', 'skyblue', 'black', 'gold', 'aqua']).isRequired,

  /**
   * "segmented" for render delimiters
   */
  mode: PropTypes.oneOf(['segmented']),
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
  formName: PropTypes.string,
  active: PropTypes.bool,
  min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  step: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * Auto generation of step. props.step with this prop is wanted step size or below
   */
  digits: PropTypes.arrayOf(PropTypes.number),

  /**
   * Array of prepared grid values (for example 100, 200, 500, 1000, 10000, 100000)
   */
  grid: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),

  /**
   * Array of select options (title, value)
   */
  options: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  })),
  error: PropTypes.string,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  thousandsSeparatorSymbol: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  decimalSymbol: PropTypes.string,
  includeThousandsSeparator: PropTypes.bool,
  allowDecimal: PropTypes.bool,
  allowNegative: PropTypes.bool,
  decimalLimit: PropTypes.number,
  transitionDuration: PropTypes.number,
  tabIndex: PropTypes.number
};
Slider.defaultProps = {
  colorScheme: 'base',
  mode: void '',
  onChange: _.noop,
  onFocus: _.noop,
  onBlur: _.noop,
  tabIndex: 0,
  disabled: false,
  formName: void '',
  active: false,
  min: 0,
  max: 100,
  step: 1,
  digits: void 0,
  grid: void 0,
  options: void 0,
  error: void 0,
  prefix: '',
  suffix: '',
  thousandsSeparatorSymbol: ' ',
  decimalSymbol: ',',
  placeholder: void '',
  id: void '',
  includeThousandsSeparator: true,
  allowDecimal: false,
  allowNegative: false,
  decimalLimit: void 0,
  transitionDuration: 0
};
Slider.displayName = 'Slider';
Slider.theme = defaultTheme;
var formOmitProps = ['asyncValidating', 'autofilled', 'dirty', 'dispatch', 'hasServerError', 'initialValue', 'invalid', 'pristine', 'submitFailed', 'submitting', 'touched', 'valid', 'visited', 'warning'];
var slider = omittere(formOmitProps)(Slider);

export default slider;
export { Slider };
//# sourceMappingURL=slider.js.map
