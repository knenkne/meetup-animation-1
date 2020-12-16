import _ from 'lodash';

var getTopOffset = function getTopOffset(element, offset) {
  return element.getBoundingClientRect().top - offset + window.pageYOffset;
};

var scrollToElement = function scrollToElement(element) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var onFinishedCb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _.noop;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? 0 : _options$offset;
  var top = getTopOffset(element, offset);
  window.scroll({
    top: top,
    left: 0,
    behavior: 'smooth'
  });
  onFinishedCb();
};

export { scrollToElement };
//# sourceMappingURL=scroll-to.js.map
