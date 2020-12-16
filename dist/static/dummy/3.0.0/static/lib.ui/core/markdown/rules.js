import _ from 'lodash';
import { symbols } from '../currency/locales.js';
import BigNumber from 'bignumber.js';

var configRuLocale = {
  prefix: '',
  decimalSeparator: ',',
  groupSeparator: ' ',
  groupSize: 3,
  secondaryGroupSize: 0,
  fractionGroupSeparator: ' ',
  fractionGroupSize: 0,
  suffix: ''
};
var Currency = BigNumber;
var DECIMAL_FORMAT = 2;
Currency.config({
  FORMAT: configRuLocale
});
var numberFormatter = function numberFormatter(content) {
  if (!_.isFinite(parseFloat(content))) {
    return '';
  }

  return new Currency(parseFloat(content)).toFormat(DECIMAL_FORMAT);
};
var currencySymbol = function currencySymbol(x) {
  if (_.isNil(x)) {
    return '';
  }

  var lowerCaseX = x.toLowerCase();

  if (_.isNil(symbols[lowerCaseX])) {
    return x;
  }

  return "<span>".concat(symbols[lowerCaseX], "</span>");
};

export { currencySymbol, numberFormatter };
//# sourceMappingURL=rules.js.map
