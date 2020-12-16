import { k as _typeof } from '../../_rollupPluginBabelHelpers-687385f0.js';
import _ from 'lodash';

var MASK_SYMBOL = '•';

var mapFormat = function mapFormat(char) {
  if (_typeof(char) === 'object') {
    return new RegExp("[".concat(char.source.replace(/[[\]]/g, '')).concat(MASK_SYMBOL, "]"));
  }

  return char;
};

var isMaskedValue = function isMaskedValue(value) {
  return _.includes(value, MASK_SYMBOL);
};
var maskedFormat = function maskedFormat(format, value) {
  if (isMaskedValue(value)) {
    if (_.isFunction(format)) {
      return function (v) {
        return format(v).map(mapFormat);
      };
    }

    return format.map(mapFormat);
  }

  return format;
};

export { MASK_SYMBOL, isMaskedValue, maskedFormat };
//# sourceMappingURL=masked-format.js.map
