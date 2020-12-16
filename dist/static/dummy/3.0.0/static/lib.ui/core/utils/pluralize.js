import { a as _slicedToArray } from '../_rollupPluginBabelHelpers-687385f0.js';
import _ from 'lodash';

function pluralize(vars, quantity) {
  var _vars = _slicedToArray(vars, 3),
      many = _vars[0],
      one = _vars[1],
      some = _vars[2];

  if ((!many || !one || !some) && process.env.NODE_ENV !== 'production') {
    console.warn("Component Usage Warning: pluralize should has 3 options: [many = ".concat(many, ", one = ").concat(one, ", some = ").concat(some, "]")); // eslint-disable-line no-console, comment: защита от некорректного использования принципов pluralize
  }

  var roundQuantity = _.floor(quantity);

  if (roundQuantity % 10 === 1 && roundQuantity % 100 !== 11) {
    return one;
  } else if (roundQuantity % 10 >= 2 && roundQuantity % 10 <= 4 && (roundQuantity % 100 < 12 || roundQuantity % 100 > 14)) {
    return some;
  }

  return many;
}

export { pluralize };
//# sourceMappingURL=pluralize.js.map
