import _ from 'lodash';

/* from modernizr */

function isTouchDevice() {
  if ('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch) {
    return true;
  }

  return window.matchMedia('(touch-enabled),(-webkit-touch-enabled),(-moz-touch-enabled),(-o-touch-enabled),(-ms-touch-enabled),(heartz)').matches;
}
/* Touch | No touch */


var isTouchable = _.memoize(isTouchDevice);
var isNotTouchable = _.memoize(function () {
  return !isTouchable();
});
var applyForTouchable = function applyForTouchable(value, defaultValue) {
  return isTouchable() ? value : defaultValue;
};
/* Mobile | Desktop */

var mobileRegExp = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;

var isNormalMobile = function isNormalMobile() {
  return window.navigator && mobileRegExp.test(window.navigator.userAgent);
}; // https://stackoverflow.com/questions/58019463/how-to-detect-device-name-in-safari-on-ios-13-while-it-doesnt-show-the-correct


var isSpecialIOS = function isSpecialIOS() {
  return window.navigator && window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1;
};

var isMobilePlatform = _.memoize(function () {
  return isNormalMobile() || isSpecialIOS();
});
var isMobile = isMobilePlatform;
var isDesktopPlatform = _.memoize(function () {
  return !isMobilePlatform();
});

export { applyForTouchable, isDesktopPlatform, isMobile, isMobilePlatform, isNotTouchable, isTouchable };
//# sourceMappingURL=adaptive.js.map
