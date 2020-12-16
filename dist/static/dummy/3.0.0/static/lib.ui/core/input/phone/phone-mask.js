import _ from 'lodash';

var EMPTY_STRING = '';
var defaultCodeLength = 3;
var oneDigit = /\d/;
var maskDelimiter = '-';
var maskSpace = ' ';
var maskStart = ['+', '7', maskSpace, '(', oneDigit];
var maskEnd = [oneDigit, oneDigit, ')', maskSpace, oneDigit, oneDigit, oneDigit, maskDelimiter, oneDigit, oneDigit, maskDelimiter, oneDigit, oneDigit];
var safeCodeLength = 5;
var calculateMask = function calculateMask(codeLength) {
  return _.concat(maskStart, _.fill(new Array(codeLength - 1), oneDigit), ')', maskSpace, _.drop(maskEnd, codeLength + (codeLength > safeCodeLength ? 2 : 1)));
};
var recursiveCodeLength = function recursiveCodeLength(rawValue, suggest, codeLength) {
  var count = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  if (rawValue.length <= codeLength + count) {
    return codeLength;
  }

  if (_.indexOf(suggest, rawValue.slice(0, codeLength + count + 1)) !== -1) {
    return codeLength + count + 1;
  }

  return recursiveCodeLength(rawValue, suggest, codeLength, count + 1);
};
var unmaskedPhone = function unmaskedPhone(value) {
  return value.replace(/(^\+7\s|[\s()+_-]*)/g, EMPTY_STRING);
};
var trimPhoneRight = function trimPhoneRight(value) {
  return value.replace(/[\s()_-]*$/, EMPTY_STRING);
};
var phoneMask = function phoneMask(value, suggest) {
  return calculateMask(recursiveCodeLength(unmaskedPhone(value), suggest, defaultCodeLength));
};

export { calculateMask, phoneMask, recursiveCodeLength, trimPhoneRight, unmaskedPhone };
//# sourceMappingURL=phone-mask.js.map
