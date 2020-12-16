import _ from 'lodash';
import mediaConfig from './styles/media.config.css';

var mediaLg = mediaConfig.mediaLg,
    mediaMd = mediaConfig.mediaMd,
    mediaSm = mediaConfig.mediaSm;
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
/* Viewport: Desktop | Tablet | Phone (no memoize, cause viewport size is editable */

var isDesktopViewport = function isDesktopViewport() {
  return window.matchMedia(mediaLg).matches;
};
var isTabletViewport = function isTabletViewport() {
  return window.matchMedia(mediaMd).matches;
};
var isPhoneViewport = function isPhoneViewport() {
  return window.matchMedia(mediaSm).matches;
};
/* IE */

var isIE = navigator.appName === 'Microsoft Internet Explorer' || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/));

export { applyForTouchable, isDesktopPlatform, isDesktopViewport, isIE, isMobile, isMobilePlatform, isNotTouchable, isPhoneViewport, isTabletViewport, isTouchable };
//# sourceMappingURL=adaptive.js.map
