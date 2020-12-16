import _ from 'lodash';

var prevIndex = function prevIndex(options, value) {
  var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'value';
  return _.findIndex(options, function (o) {
    return _.get(o, key) === value;
  }) - 1;
};
var nextIndex = function nextIndex(options, value) {
  var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'value';
  return _.findIndex(options, function (o) {
    return _.get(o, key) === value;
  }) + 1;
};
var cyclicPrevIndex = function cyclicPrevIndex(options, value, key) {
  return (prevIndex(options, value, key) + options.length) % options.length;
};
var cyclicNextIndex = function cyclicNextIndex(options, value, key) {
  return nextIndex(options, value, key) % options.length;
};
var prevItem = function prevItem(options, value, key) {
  return options[prevIndex(options, value, key)];
};
var nextItem = function nextItem(options, value, key) {
  return options[nextIndex(options, value, key)];
};
var cyclicPrevItem = function cyclicPrevItem(options, value, key) {
  return options[cyclicPrevIndex(options, value, key)];
};
var cyclicNextItem = function cyclicNextItem(options, value, key) {
  return options[cyclicNextIndex(options, value, key)];
};
var keyCodes = {
  KEY_TAB: 9,
  KEY_ENTER: 13,
  KEY_ESCAPE: 27,
  KEY_SPACE: 32,
  KEY_ARROW_UP: 38,
  KEY_ARROW_DOWN: 40,
  KEY_END: 35,
  KEY_HOME: 36,
  KEY_A: 65
};

export { cyclicNextIndex, cyclicNextItem, cyclicPrevIndex, cyclicPrevItem, keyCodes, nextIndex, nextItem, prevIndex, prevItem };
//# sourceMappingURL=utils.js.map
