import { c as _inherits, d as _createSuper, e as _classCallCheck, f as _defineProperty, g as _assertThisInitialized, h as _createClass } from '../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';
import '../utils/get-display-name.js';
import '../utils/hoc/style.css';
import '../utils/hoc/deprecate.js';
import '../utils/hoc/experimental.js';
import '../utils/hoc/error-adapter.js';
import '../utils/hoc/omittere.js';
import '../utils/hoc/accessibility-relocation.js';
import '../utils/handlers.js';
import '../utils/pluralize.js';
import '../utils/scroll-to.js';
import '../utils/format-phone-number.js';
import '../utils/memoize-func-with-args.js';
import '../utils/auto-top-check-by-window.js';
import '../utils/merge-theme.js';
import '../utils/styles/media.config.css';
import { isMobilePlatform } from '../utils/adaptive.js';
import '../utils/pseudo/pseudo-button.js';
import '../utils/get-card-icon.js';
import '../utils/get-ivestments-icon.js';
import '../utils/get-metal-icon.js';
import '../utils/get-target-icon.js';
import '../icon/style.css';
import { Icon } from '../icon/icon.js';
import '../index-85b17782.js';
import '../external-969f6c5f.js';
import '../icon/index.js';
import '../utils/set-project-id.js';
import '../utils/make-direction.js';
import '../utils/show-error.js';
import '../full-width/style.css';
import '../full-width/inner.js';
import { FullWidth } from '../full-width/index.js';
import { smoothScroll, leftCheck, rightCheck } from './utils.js';
import defaultTheme from './style.css';

var SCROLL_WIDTH = 300;
var SCROLL_TIME = 1000;
/* eslint-disable valid-jsdoc, comment: некорректный парсинг jsdoc */

/**
 * Технический компонент для управления горизонтальным скроллом (используется в Tabs)
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

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
      smoothScroll(_this.contents, -_this.props.scrollWidth, SCROLL_TIME);

      _this.forceUpdate();
    });

    _defineProperty(_assertThisInitialized(_this), "handleRightClick", function () {
      smoothScroll(_this.contents, _this.props.scrollWidth, SCROLL_TIME);

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
          theme = _this$props.theme,
          refWrapper = _this$props.refWrapper,
          a11y = _this$props.a11y,
          parentId = _this$props.parentId;
      var left = leftCheck(this.contents);
      var right = rightCheck(this.contents);
      var isMobile = isMobilePlatform();
      var Wrapper = isMobile ? FullWidth : 'div';
      var WrapperInner = isMobile ? FullWidth.Inner : 'div';
      return /*#__PURE__*/React.createElement(Wrapper, {
        ref: refWrapper,
        className: theme.scroll
      }, !isMobile && /*#__PURE__*/React.createElement("button", {
        className: classnames(theme.button, theme.buttonLeft, left && theme.buttonOpened),
        onClick: this.handleLeftClick,
        disabled: !left,
        type: "button",
        title: a11y.titleBackward
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "icon:core/common/arrow-right",
        size: "md"
      })), /*#__PURE__*/React.createElement(WrapperInner, {
        className: classnames(theme.contents, isMobile && theme.mobile),
        ref: this.setContentsRef,
        onScroll: this.handleScroll,
        id: parentId
      }, children), !isMobile && /*#__PURE__*/React.createElement("div", {
        className: classnames(theme.fading, left && theme.fadingLeft, right && theme.fadingRight)
      }), !isMobile && /*#__PURE__*/React.createElement("button", {
        className: classnames(theme.button, right && theme.buttonOpened),
        onClick: this.handleRightClick,
        disabled: !right,
        type: "button",
        title: a11y.titleForward
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "icon:core/common/arrow-right",
        size: "md"
      })));
    }
  }]);

  return HorizontalScroll;
}(React.PureComponent);

_defineProperty(HorizontalScroll, "propTypes", {
  children: PropTypes.node,
  theme: PropTypes.shape({
    scroll: PropTypes.string,
    button: PropTypes.string,
    buttonLeft: PropTypes.string,
    buttonRight: PropTypes.string,
    buttonOpened: PropTypes.string,
    fading: PropTypes.string,
    fadingLeft: PropTypes.string,
    fadingRight: PropTypes.string,
    contents: PropTypes.string,
    mobile: PropTypes.string,
    desktop: PropTypes.string
  }),
  refWrapper: PropTypes.func,
  a11y: PropTypes.shape({
    titleBackward: PropTypes.string,
    titleForward: PropTypes.string
  }),
  scrollWidth: PropTypes.number
});

_defineProperty(HorizontalScroll, "defaultProps", {
  children: void 0,
  theme: defaultTheme,
  refWrapper: _.noop,
  a11y: {
    titleBackward: 'Листать назад',
    titleForward: 'Листать вперед'
  },
  scrollWidth: SCROLL_WIDTH
});

HorizontalScroll.theme = defaultTheme;
HorizontalScroll.displayName = 'HorizontalScroll';

export default HorizontalScroll;
export { HorizontalScroll };
//# sourceMappingURL=horizontal-scroll.js.map
