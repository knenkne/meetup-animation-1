import { b as _inherits, c as _createSuper, f as _classCallCheck, e as _defineProperty, g as _assertThisInitialized, d as _createClass } from '../_rollupPluginBabelHelpers-3e859d87.js';
import '@emotion/styled';
import '@emotion/core';
import React from 'react';
import PropTypes from 'prop-types';
import '../colors.config.style-69a09a5b.js';
import _ from 'lodash';
import '../icon/icon.style.js';
import { Icon } from '../icon/icon.js';
import '../icon/icon-loader.js';
import '../icon/index.js';
import '../styles/media.config.style.js';
import { OuterStyled, InnerStyled } from '../full-width/full-width.style.js';
import { ic24ArrowLeft } from '../icon/common/index.js';
import { isMobilePlatform } from '../utils/adaptive.js';
import { leftCheck, rightCheck } from './utils.js';
import { WrapperScrollStyled, WrapperInnerStyled, ScrollButtonLeftStyled, FadingStyled, ScrollButtonRightStyled } from './horizontal-scroll.style.js';

/* eslint-disable valid-jsdoc, comment: некорректный парсинг jsdoc */

/**
 * Технический компонент для управления горизонтальным скроллом (используется в Tabs)
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

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

var HorizontalScroll = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(HorizontalScroll, _React$PureComponent);

  var _super = _createSuper(HorizontalScroll);

  function HorizontalScroll() {
    var _this;

    _classCallCheck(this, HorizontalScroll);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "setContentsRef", function (component) {
      _this.contents = component;
    });

    _defineProperty(_assertThisInitialized(_this), "handleLeftClick", function () {
      smoothScroll(_this.contents, -300, 1000);

      _this.forceUpdate();
    });

    _defineProperty(_assertThisInitialized(_this), "handleRightClick", function () {
      smoothScroll(_this.contents, 300, 1000);

      _this.forceUpdate();
    });

    _defineProperty(_assertThisInitialized(_this), "handleScroll", function () {
      _this.forceUpdate();
    });

    return _this;
  }

  _createClass(HorizontalScroll, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          refWrapper = _this$props.refWrapper,
          parentId = _this$props.parentId;
      var left = leftCheck(this.contents);
      var right = rightCheck(this.contents);
      var isMobile = isMobilePlatform();
      var Wrapper = isMobile ? WrapperScrollStyled.withComponent(OuterStyled) : WrapperScrollStyled;
      var WrapperInner = isMobile ? WrapperInnerStyled.withComponent(InnerStyled) : WrapperInnerStyled;
      return /*#__PURE__*/React.createElement(Wrapper, {
        ref: refWrapper,
        isMobile: isMobile
      }, !isMobile && /*#__PURE__*/React.createElement(ScrollButtonLeftStyled, {
        onClick: this.handleLeftClick,
        disabled: !left,
        type: "button",
        "aria-label": "\u041B\u0438\u0441\u0442\u0430\u0442\u044C \u0432\u043B\u0435\u0432\u043E"
      }, /*#__PURE__*/React.createElement(Icon, {
        icon: ic24ArrowLeft
      })), /*#__PURE__*/React.createElement(WrapperInner, {
        ref: this.setContentsRef,
        onScroll: this.handleScroll,
        id: parentId
      }, children), !isMobile && /*#__PURE__*/React.createElement(FadingStyled, {
        left: left,
        right: right
      }), !isMobile && /*#__PURE__*/React.createElement(ScrollButtonRightStyled, {
        right: right,
        onClick: this.handleRightClick,
        disabled: !right,
        type: "button",
        "aria-label": "\u041B\u0438\u0441\u0442\u0430\u0442\u044C \u0432\u043F\u0440\u0430\u0432\u043E"
      }, /*#__PURE__*/React.createElement(Icon, {
        icon: ic24ArrowLeft
      })));
    }
  }]);

  return HorizontalScroll;
}(React.PureComponent);

_defineProperty(HorizontalScroll, "propTypes", {
  children: PropTypes.node,
  refWrapper: PropTypes.func
});

_defineProperty(HorizontalScroll, "defaultProps", {
  children: void 0,
  refWrapper: _.noop
});

export default HorizontalScroll;
export { HorizontalScroll };
//# sourceMappingURL=horizontal-scroll.js.map
