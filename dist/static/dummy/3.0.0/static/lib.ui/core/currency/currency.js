import { f as _defineProperty } from '../_rollupPluginBabelHelpers-687385f0.js';
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
import { pluralize } from '../utils/pluralize.js';
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
import './locales.js';
import { options, setCurrencyDisplayName } from './options.js';
import defaultTheme from './style.css';

var hasFallback = function hasFallback(code) {
  return _.has(options.display, _.lowerCase(code));
};

var hasSymbol = function hasSymbol(code) {
  return _.has(options.symbols, _.lowerCase(code));
};

var isSymbol = function isSymbol(code, mode) {
  switch (mode) {
    case 'code':
    case 'word':
      return false;

    case 'symbol':
      return hasSymbol(code);

    default:
      return !hasFallback(code) && hasSymbol(code);
  }
};

var getCurrencyValue = function getCurrencyValue(code) {
  var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';
  var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (mode === 'code') {
    return code;
  } else if ((mode === 'word' || mode === 'auto') && hasFallback(code)) {
    return pluralize(options.display[_.lowerCase(code)], value);
  } else if ((mode === 'symbol' || mode === 'auto') && hasSymbol(code)) {
    return options.symbols[_.lowerCase(code)];
  }

  return code;
};
/**
 * Централизованный компонент для _вывода_ символа/текста валюты
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */


function Currency(props) {
  var passedProps = _(props).omit(['value', 'currencyCode', 'asSymbol', 'mode', 'theme', 'title']).extend({
    'data-unit': 'currency',
    className: classnames(props.theme.currency, _defineProperty({}, props.theme.symbol, isSymbol(props.title, props.mode)))
  }).value();

  return /*#__PURE__*/React.createElement("span", passedProps, getCurrencyValue(props.title, props.mode, props.value));
}
Currency.propTypes = {
  theme: PropTypes.object,

  /**
   * Только для mode="auto" или "word" с Currency.setCurrencyDisplayName
   */
  value: PropTypes.string,
  title: PropTypes.string,
  mode: PropTypes.oneOf(['auto', 'symbol', 'word', 'code'])
};
Currency.defaultProps = {
  theme: defaultTheme,
  value: '1',
  title: void 0,
  mode: 'auto'
};
Currency.theme = defaultTheme;
Currency.options = options;
Currency.setCurrencyDisplayName = setCurrencyDisplayName;
Currency.getCurrencyValue = getCurrencyValue;
Currency.displayName = 'Currency';

export default Currency;
export { Currency };
//# sourceMappingURL=currency.js.map
