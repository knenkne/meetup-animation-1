var leftCheck = function leftCheck(contents) {
  if (!contents) {
    return false;
  }

  return contents.scrollLeft > 0;
};
var rightCheck = function rightCheck(contents) {
  if (!contents) {
    return false;
  }

  return contents.scrollWidth - contents.scrollLeft - contents.clientWidth > 0;
};

export { leftCheck, rightCheck };
//# sourceMappingURL=utils.js.map
