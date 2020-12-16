import React, { useRef, useEffect } from 'react';
import _ from 'lodash';

var PADDING_ON_TOP_DEFAULT = 73;
var checkPositionForScroll = function checkPositionForScroll(wrapper, clickedItem) {
  if (!_.isNil(wrapper) && !_.isNil(clickedItem)) {
    var clickedItemDimensions = clickedItem.getBoundingClientRect();
    var wrapperDimensions = wrapper.getBoundingClientRect();

    if (clickedItemDimensions.x < wrapperDimensions.x) {
      wrapper.scrollTo({
        left: wrapper.scrollLeft - clickedItemDimensions.width,
        behavior: 'smooth'
      });
    }

    if (clickedItemDimensions.right > wrapperDimensions.right) {
      wrapper.scrollTo({
        left: wrapper.scrollLeft + clickedItemDimensions.width,
        behavior: 'smooth'
      });
    }
  }
};
var getFirstChildTitle = function getFirstChildTitle(childrenArgs) {
  var _React$Children$toArr;

  return (_React$Children$toArr = React.Children.toArray(childrenArgs)[0]) === null || _React$Children$toArr === void 0 ? void 0 : _React$Children$toArr.props.title;
};
var modePredicate = function modePredicate() {
  var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var value = arguments.length > 1 ? arguments[1] : undefined;
  return typeof mode === 'string' ? mode === value : mode.includes(value);
};
var useUpdateEffect = function useUpdateEffect(effect, inputs) {
  var isMounted = useRef(false);
  useEffect(function () {
    if (isMounted.current) {
      effect();
    }

    isMounted.current = true;
  }, inputs);
};
var getTopOffset = function getTopOffset(mode) {
  return modePredicate(mode, 'sticky') ? PADDING_ON_TOP_DEFAULT : 0;
};
var scrollToElement = function scrollToElement(element) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var onFinishedCb = arguments.length > 2 ? arguments[2] : undefined;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? 0 : _options$offset;
  var top = Math.round(element.getBoundingClientRect().top - offset + window.pageYOffset);

  if (onFinishedCb) {
    var onScroll = function onScroll() {
      if (window.pageYOffset === top) {
        window.removeEventListener('scroll', onScroll);
        onFinishedCb();
      }
    };

    window.addEventListener('scroll', onScroll);
  }

  window.scroll({
    top: top,
    left: 0,
    behavior: 'smooth'
  });
};

export { checkPositionForScroll, getFirstChildTitle, getTopOffset, modePredicate, scrollToElement, useUpdateEffect };
//# sourceMappingURL=tab-utils.js.map
