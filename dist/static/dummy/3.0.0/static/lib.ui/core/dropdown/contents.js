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
import { stopPropagationHandler } from '../utils/handlers.js';
import '../utils/pluralize.js';
import '../utils/scroll-to.js';
import '../utils/format-phone-number.js';
import '../utils/memoize-func-with-args.js';
import '../utils/auto-top-check-by-window.js';
import '../utils/merge-theme.js';
import '../utils/styles/media.config.css';
import '../utils/adaptive.js';
import '../utils/pseudo/pseudo-button.js';
import '../utils/get-card-icon.js';
import '../utils/get-ivestments-icon.js';
import '../utils/get-metal-icon.js';
import '../utils/get-target-icon.js';
import '../icon/style.css';
import '../icon/icon.js';
import '../index-85b17782.js';
import '../external-969f6c5f.js';
import '../icon/index.js';
import '../utils/set-project-id.js';
import '../utils/make-direction.js';
import '../utils/show-error.js';
import defaultTheme from './style.css';
import { autoScroll, autoLeftCheckByParent, autoTopCheckByWindow } from './utils.js';

var safeCall = function safeCall(func) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return _.isFunction(func) ? func.apply(void 0, args) : func;
};

var omitProps = ['theme', 'verticalAlign', 'align', 'onSwitch', 'children', 'target', 'mode', 'nodeTarget', 'forceOpened', 'nodeSelectedOption', 'refContents', 'id', 'name'];
/* eslint-disable valid-jsdoc, comment: некорректный парсинг jsdoc */

/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=dropdown)
 * Технический компонент, указатель на непосредственно выпадающий список
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var Contents = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Contents, _React$PureComponent);

  var _super = _createSuper(Contents);

  function Contents() {
    var _this;

    _classCallCheck(this, Contents);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "setRefContents", function (component) {
      _this.contents = component;
    });

    _defineProperty(_assertThisInitialized(_this), "setRefContentsView", function (component) {
      _this.contentsView = component;

      _this.props.refContents(component);
    });

    _defineProperty(_assertThisInitialized(_this), "setDisplay", function (value) {
      if (_this.contents) {
        _this.contents.parentNode.style.display = value;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "verticalAlign", 'bottom');

    _defineProperty(_assertThisInitialized(_this), "align", 'left');

    return _this;
  }

  _createClass(Contents, [{
    key: "UNSAFE_componentWillReceiveProps",
    // eslint-disable-next-line babel/camelcase, comment: React UNSAFE method
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (!this.props.forceOpened && nextProps.forceOpened) {
        var savedDisplay = _.get(this.contents, 'parentNode.style.display');

        this.setDisplay('block');
        this.verticalAlign = safeCall(nextProps.verticalAlign, this.contents, nextProps.nodeTarget);
        this.align = safeCall(nextProps.align, this.contents, nextProps.nodeTarget);
        this.setDisplay(savedDisplay);
      }

      if (nextProps.nodeSelectedOption && this.props.nodeSelectedOption !== nextProps.nodeSelectedOption) {
        autoScroll(nextProps.nodeSelectedOption, this.contentsView);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          children = _this$props.children,
          onClick = _this$props.onClick,
          forceOpened = _this$props.forceOpened,
          mode = _this$props.mode;

      var passedProps = _(this.props).omit(omitProps).extend({
        className: classnames(theme.contents, theme[this.verticalAlign], theme[this.align], forceOpened && theme.opened),
        'data-unit': 'dropdown:bubble',
        onClick: stopPropagationHandler(onClick),
        role: mode ? 'listbox' : void 0
      }).value();

      return /*#__PURE__*/React.createElement("div", passedProps, /*#__PURE__*/React.createElement("div", {
        className: theme.contentsWrapper,
        ref: this.setRefContents,
        "data-unit": "dropdown:contents"
      }, /*#__PURE__*/React.createElement("div", {
        ref: this.setRefContentsView,
        className: theme.contentsView
      }, children)));
    }
  }]);

  return Contents;
}(React.PureComponent);

_defineProperty(Contents, "propTypes", {
  children: PropTypes.node,
  theme: PropTypes.object,

  /**
   * Горизонтальное выравнивание Contents относительно Target
   */
  align: PropTypes.oneOfType([// eslint-disable-line react/no-unused-prop-types, comment: вообще используется как newProps
  PropTypes.func, PropTypes.oneOf(['left', 'right'])]),

  /**
   * Вертикальное выравнивание Contents относительно Target
   */
  verticalAlign: PropTypes.oneOfType([// eslint-disable-line react/no-unused-prop-types, comment: вообще используется как newProps
  PropTypes.func, PropTypes.oneOf(['top', 'bottom'])]),
  onClick: PropTypes.func,
  mode: PropTypes.oneOf(['focus', 'click', 'none']),

  /**
   * Dropdown передает самостоятельно
   */
  nodeTarget: PropTypes.object,
  // eslint-disable-line react/no-unused-prop-types, comment: вообще используется как newProps

  /**
   * Dropdown передает самостоятельно
   */
  nodeSelectedOption: PropTypes.object,
  forceOpened: PropTypes.bool,
  refContents: PropTypes.func,

  /**
   * Параметры для native dropdown
   */
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
});

_defineProperty(Contents, "defaultProps", {
  children: void 0,
  theme: defaultTheme,
  align: autoLeftCheckByParent,
  verticalAlign: autoTopCheckByWindow,
  onClick: _.noop,
  mode: 'click',
  nodeTarget: void 0,
  nodeSelectedOption: void 0,
  forceOpened: false,
  refContents: _.noop,
  id: void 0,
  name: void 0,
  onChange: _.noop,
  value: void 0
});

Contents.displayName = 'Dropdown.Contents';

export { Contents };
//# sourceMappingURL=contents.js.map
