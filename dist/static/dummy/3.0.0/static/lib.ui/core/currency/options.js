import _ from 'lodash';
import { symbols } from './locales.js';

var options = {
  symbols: symbols,
  display: {}
};
function setCurrencyDisplayName(currencyCode, currencyNames) {
  var names = currencyNames;

  if (_.isString(currencyNames)) {
    // sonarQube, c'mon
    names = [currencyNames, currencyNames, currencyNames];
  }

  options.display[_.lowerCase(currencyCode)] = names;
}

export { options, setCurrencyDisplayName };
//# sourceMappingURL=options.js.map
