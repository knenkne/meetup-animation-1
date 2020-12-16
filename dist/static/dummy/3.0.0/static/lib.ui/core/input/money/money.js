import { j as _objectWithoutProperties, _ as _extends } from '../../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
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
import '../../currency/locales.js';
import '../../currency/options.js';
import '../../currency/style.css';
import { Currency as Currency$1 } from '../../currency/currency.js';
import 'bignumber.js';
import 'text-mask-core/dist/textMaskCore';
import 'text-mask-addons/dist/createNumberMask';
import '../utils.js';
import '../input.css';
import '../input.js';
import '../masked/masked-format.js';
import '../masked/masked.js';
import '../numeric/numeric.js';
import { Currency } from '../currency/currency.js';

/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=input%20general)
 * Технический компонент для ввода суммы
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var Money = function Money(_ref) {
  var currency = _ref.currency,
      props = _objectWithoutProperties(_ref, ["currency"]);

  return /*#__PURE__*/React.createElement(Currency, _extends({}, props, {
    suffix: " ".concat(Currency$1.getCurrencyValue(currency))
  }));
};
Money.displayName = 'Input.Money';
Money.propTypes = {
  // eslint-disable react/no-unused-prop-types, comment: сквозной проброс пропов
  disabled: PropTypes.bool,
  refWrapper: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  thousandsSeparatorSymbol: PropTypes.string,
  placeholder: PropTypes.string,
  decimalSymbol: PropTypes.string,
  includeThousandsSeparator: PropTypes.bool,
  allowDecimal: PropTypes.bool,
  allowNegative: PropTypes.bool,
  allowEmpty: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  currency: PropTypes.string // eslint-enable

};
Money.defaultProps = {
  disabled: false,
  refWrapper: _.noop,
  value: '',
  onChange: _.noop,
  onBlur: _.noop,
  prefix: '',
  suffix: '',
  thousandsSeparatorSymbol: ' ',
  decimalSymbol: ',',
  placeholder: void 0,
  includeThousandsSeparator: true,
  allowDecimal: false,
  allowNegative: false,
  allowEmpty: true,
  min: void 0,
  max: void 0,
  currency: void 0
};

export { Money };
//# sourceMappingURL=money.js.map
