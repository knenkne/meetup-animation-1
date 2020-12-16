import { c as _inherits, d as _createSuper, e as _classCallCheck, f as _defineProperty, g as _assertThisInitialized, h as _createClass, j as _objectWithoutProperties, _ as _extends } from '../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import { PropTypes } from 'prop-types';
import classnames from 'classnames';
import '../full-width/style.css';
import '../full-width/inner.js';
import { FullWidth } from '../full-width/index.js';
import ReactDOM from 'react-dom';
import style from './style.css';

var Background = /*#__PURE__*/function (_React$Component) {
  _inherits(Background, _React$Component);

  var _super = _createSuper(Background);

  function Background() {
    var _this;

    _classCallCheck(this, Background);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "gradientRegion", document.getElementById('gradient-region'));

    _defineProperty(_assertThisInitialized(_this), "colorScheme", _this.props.colorScheme);

    return _this;
  }

  _createClass(Background, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.gradientRegion && this.gradientRegion.parentNode) {
        this.gradientRegion.parentNode.classList.add(this.props.theme[this.colorScheme]);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.gradientRegion && this.gradientRegion.parentNode) {
        this.gradientRegion.parentNode.classList.remove(this.props.theme[this.colorScheme]);
        this.colorScheme = this.props.colorScheme;
        this.gradientRegion.parentNode.classList.add(this.props.theme[this.colorScheme]);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.gradientRegion && this.gradientRegion.parentNode) {
        this.gradientRegion.parentNode.classList.remove(this.props.theme[this.colorScheme]);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          theme = _this$props.theme,
          mode = _this$props.mode,
          colorScheme = _this$props.colorScheme,
          props = _objectWithoutProperties(_this$props, ["children", "theme", "mode", "colorScheme"]);

      if (!this.gradientRegion) {
        return /*#__PURE__*/React.createElement(FullWidth, _extends({}, props, {
          className: classnames(theme.background, theme[colorScheme])
        }), /*#__PURE__*/React.createElement("div", {
          id: "important-gradient-background",
          className: classnames(theme.wrapper, mode && theme.container)
        }, /*#__PURE__*/React.createElement(FullWidth.Inner, {
          className: theme.inner
        }, children)));
      }

      return /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement(FullWidth, props, /*#__PURE__*/React.createElement("div", {
        id: "important-gradient-background",
        className: classnames(theme.wrapper, mode && theme.container)
      }, /*#__PURE__*/React.createElement(FullWidth.Inner, {
        className: theme.inner
      }, children))), this.gradientRegion);
    }
  }]);

  return Background;
}(React.Component);

_defineProperty(Background, "propTypes", {
  colorScheme: PropTypes.oneOf(['gradient-basic', 'gradient-basic-wrapper', 'gradient-head', 'gradient-head-wrapper', 'gradient-narnia', 'gradient-narnia-wrapper', 'gradient-waiting', 'gradient-waiting-wrapper', 'gradient-success', 'gradient-success-wrapper', 'gradient-error', 'gradient-error-wrapper', 'gradient-info', 'gradient-info-wrapper', 'gradient-cards', 'gradient-cards-wrapper', 'gradient-deposits', 'gradient-deposits-wrapper', 'gradient-insurance', 'gradient-insurance-wrapper', 'gradient-investments', 'gradient-investments-wrapper', 'gradient-credits', 'gradient-credits-wrapper', 'gradient-gold', 'gradient-gold-wrapper', 'gradient-silver', 'gradient-silver-wrapper']),
  mode: PropTypes.oneOf([void 0, 'done', 'error', 'waiting', 'info']),
  children: PropTypes.node.isRequired,
  theme: PropTypes.object
});

_defineProperty(Background, "defaultProps", {
  colorScheme: 'gradient-basic',
  theme: style,
  mode: void 0
});

_defineProperty(Background, "defaultTheme", style);

Background.theme = style;

export { Background };
//# sourceMappingURL=index.js.map
