var easeInOutQuad = function easeInOutQuad(time, start, change, duration) {
  /* eslint-disable no-mixed-operators, comment: лучше не скомпоновалось */
  var half = 2;
  var halvedTime = time / (duration / half);

  if (halvedTime < 1) {
    return change / half * halvedTime * halvedTime + start;
  }

  halvedTime -= 1;
  return -change / half * (halvedTime * (halvedTime - half) - 1) + start;
};
var smoothScroll = function smoothScroll(element, change, duration) {
  var start = element.scrollLeft;
  var el = element;
  var currentTime = 0;
  var increment = 20;

  var animateScroll = function animateScroll() {
    currentTime += increment;
    el.scrollLeft = easeInOutQuad(currentTime, start, change, duration);

    if (currentTime < duration) {
      requestAnimationFrame(animateScroll);
    }
  };

  animateScroll();
};
var leftCheck = function leftCheck(contents) {
  if (!contents) {
    return false;
  }

  return contents.scrollLeft > 0;
};
var rightCheck = function rightCheck(contents) {
  if (!contents) {
    return false;
  } // В IE scrollWidth больше clientWidth на 1px, даже если нет скролла, поэтому  > 1, а не > 0.


  return Math.floor(contents.scrollWidth - contents.clientWidth - contents.scrollLeft) > 1;
};

export { easeInOutQuad, leftCheck, rightCheck, smoothScroll };
//# sourceMappingURL=utils.js.map
