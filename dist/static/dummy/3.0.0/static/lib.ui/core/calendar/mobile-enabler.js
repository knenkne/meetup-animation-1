var mobileEnabled = false;
var enableMobile = function enableMobile() {
  mobileEnabled = true;
}; // eslint-disable-next-line no-warning-comments, comment: not forget
// TODO: test purpose only

var isMobileEnabled = function isMobileEnabled() {
  return mobileEnabled;
};

export { enableMobile, isMobileEnabled };
//# sourceMappingURL=mobile-enabler.js.map
