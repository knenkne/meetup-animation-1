var prefixRegExp = /\D*/;
var numberRegExp = /([\d•]{3})*?([\d•]{2})([\d•]{2})$/;
var dashStartRegExp = /^-/; // deprecated

function formatPhoneNumber(phone) {
  if (!phone || !phone.prefix || !phone.code || !phone.number) {
    return '';
  }

  var prefix = phone.prefix.replace(prefixRegExp, '');
  var number = phone.number.replace(numberRegExp, '$1-$2-$3').replace(dashStartRegExp, '').replace(/•-/g, '• ');
  return "+".concat(prefix, " (").concat(phone.code, ") ").concat(number);
}

export { formatPhoneNumber };
//# sourceMappingURL=format-phone-number.js.map
