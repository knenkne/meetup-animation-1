import _ from 'lodash';
import classnames from 'classnames';

var mergeRule = function mergeRule(objValue, srcValue) {
  return classnames(objValue, srcValue);
};

var mergeTheme = function mergeTheme() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return _.mergeWith.apply(_, [{}].concat(args, [mergeRule]));
};

export { mergeTheme };
//# sourceMappingURL=merge-theme.js.map
