import { _ as _extends } from '../../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import 'lodash';
import 'classnames';
import '../../utils/get-display-name.js';
import '../../utils/hoc/style.css';
import '../../utils/hoc/deprecate.js';
import '../../utils/hoc/experimental.js';
import '../../utils/hoc/error-adapter.js';
import '../../utils/hoc/omittere.js';
import '../../utils/hoc/accessibility-relocation.js';
import '../../utils/handlers.js';
import '../../utils/pluralize.js';
import '../../utils/scroll-to.js';
import '../../utils/format-phone-number.js';
import '../../utils/memoize-func-with-args.js';
import '../../utils/auto-top-check-by-window.js';
import { mergeTheme } from '../../utils/merge-theme.js';
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
import '../../currency/locales.js';
import '../../currency/options.js';
import '../../currency/style.css';
import { Currency } from '../../currency/currency.js';
import '../../button/command/style.css';
import '../../button/command/index.js';
import '../../loader/loader.css';
import '../../loader/loader-themes/pulse-loader.css';
import '../../loader/loader-themes/jump-loader.css';
import '../../loader/loader-themes/swap-loader.css';
import '../../loader/loader.js';
import '../../loader/icon-loader.css';
import '../../loader/icon-loader.js';
import '../../loader/button-loader.css';
import '../../loader/utils.js';
import '../../loader/button-loader.js';
import '../../loader/index.js';
import '../../button/icon/style.css';
import '../../button/icon/index.js';
import '../../tooltip/style.css';
import '../../tooltip/tip.js';
import '../../tooltip/tooltip.js';
import '../../tooltip/hover-tooltip.js';
import 'react-onclickoutside';
import '../../perimeter/perimeter.js';
import '../../perimeter/index.js';
import '../../tooltip/click-tooltip.js';
import '../../tooltip/index.js';
import '../../button/info/style.css';
import '../../button/info/index.js';
import '../../button/radio-segmented/style.css';
import '../../button/radio-segmented/index.js';
import '../../button/style.css';
import { Button } from '../../button/index.js';
import style from './currency-select.css';

var theme = mergeTheme(Button.RadioSegmented.theme, style);
/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d/screen/5cadec9058ed0fbf55deeff4)
 * Технический компонент для указания опции в поле выбора валюты
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var CurrencySelectOption = function CurrencySelectOption(props) {
  var altSymbol = Currency.options.symbols[props.value.toLowerCase()];
  return /*#__PURE__*/React.createElement(Button.RadioSegmented, _extends({}, props, {
    title: props.value,
    translations: {
      title: props.title
    },
    a11y: {
      title: props.title
    },
    theme: theme
  }), altSymbol ? /*#__PURE__*/React.createElement(Currency, {
    mode: "symbol",
    title: props.value
  }) : /*#__PURE__*/React.createElement("span", null, props.value));
};
CurrencySelectOption.propTypes = {
  value: PropTypes.string.isRequired,
  title: PropTypes.string
};
CurrencySelectOption.defaultProps = {
  title: ''
};
CurrencySelectOption.displayName = 'Input.CurrencySelect.Option';

export { CurrencySelectOption };
//# sourceMappingURL=currency-select-option.js.map
