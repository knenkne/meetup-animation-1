import { c as _inherits, d as _createSuper, e as _classCallCheck, f as _defineProperty, g as _assertThisInitialized, h as _createClass, _ as _extends } from '../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import 'classnames';
import 'react-collapse';
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
import '../typography/style.css';
import '../typography/headline.js';
import '../typography/title.js';
import '../typography/subheader.js';
import '../typography/caption.js';
import '../typography/uppercase.js';
import '../typography/description.js';
import '../typography/index.js';
import defaultTheme from './style.css';
import { Item } from './item.js';

var omitProps = ['initialValue', 'a11y', 'collapsible', 'theme'];
var cyclicPrevItem = function cyclicPrevItem(list, item) {
  return (_.indexOf(list, item) - 1 + list.length) % list.length;
};
var cyclicNextItem = function cyclicNextItem(list, item) {
  return (_.indexOf(list, item) + 1) % list.length;
};
var KEY_ARROW_UP = 38;
var KEY_ARROW_DOWN = 40;
var KEY_END = 35;
var KEY_HOME = 36; // eslint-disable-next-line valid-jsdoc, comment: Zeplin link, args in proptypes

/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d/screen/5ca74b09e32f16b878d864a6)
 * Cписок с раскрывающимся содержимым.
 */

var Accordion = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Accordion, _React$PureComponent);

  var _super = _createSuper(Accordion);

  function Accordion() {
    var _this;

    _classCallCheck(this, Accordion);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      active: _this.props.initialValue
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (active, event) {
      var currentActive = _this.state.active === active ? void 0 : active;

      _this.setState({
        active: currentActive
      });

      _this.props.onChange(currentActive, event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (title, event) {
      var options = React.Children.map(_this.props.children, function (child) {
        return child.props.title;
      });

      switch (event.keyCode) {
        case KEY_ARROW_DOWN:
          {
            event.preventDefault();

            _this.focus(cyclicNextItem(options, title));

            break;
          }

        case KEY_ARROW_UP:
          {
            event.preventDefault();

            _this.focus(cyclicPrevItem(options, title));

            break;
          }

        case KEY_HOME:
          {
            event.preventDefault();

            _this.focus(0);

            break;
          }

        case KEY_END:
          {
            event.preventDefault();

            _this.focus(options.length - 1);

            break;
          }
      }

      _this.props.onKeyDown(event);
    });

    _defineProperty(_assertThisInitialized(_this), "renderChild", function (child, index) {
      var _this$props = _this.props,
          mode = _this$props.mode,
          collapsible = _this$props.collapsible;
      return /*#__PURE__*/React.cloneElement(child, _.extend({}, child.props, {
        forceOpened: _this.state.active === child.props.title,
        mode: mode,
        collapsible: collapsible,
        onChange: _this.handleChange,
        onKeyDown: _this.handleKeyDown,
        id: "".concat(_this.props.a11y.id, "-").concat(index)
      }));
    });

    return _this;
  }

  _createClass(Accordion, [{
    key: "focus",
    value: function focus(newIndex) {
      var newItem = document.getElementById("".concat(this.props.a11y.id, "-").concat(newIndex, "-title"));

      if (newItem) {
        newItem.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          mode = _this$props2.mode,
          theme = _this$props2.theme;
      return /*#__PURE__*/React.createElement("div", _extends({}, _.omit(this.props, omitProps), {
        className: theme["accordion-".concat(mode)],
        role: "presentation"
      }), React.Children.map(this.props.children, this.renderChild));
    }
  }]);

  return Accordion;
}(React.PureComponent);

_defineProperty(Accordion, "hasNoDescription", function (children) {
  return children.every(function (child) {
    return !child.props.description;
  });
});

Accordion.propTypes = {
  initialValue: PropTypes.string,
  children: PropTypes.node.isRequired,
  a11y: PropTypes.shape({
    id: PropTypes.string
  }).isRequired,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  mode: PropTypes.oneOf(['widget', 'info', 'description', 'classic']),

  /**
   * Если нужно держать открытыми несколько блоков
   */
  collapsible: PropTypes.bool,
  theme: PropTypes.object
};
Accordion.defaultProps = {
  initialValue: void 0,
  onChange: _.noop,
  onKeyDown: _.noop,
  collapsible: false,
  mode: 'classic',
  theme: defaultTheme
};
Accordion.displayName = 'Accordion';
Accordion.Item = Item;
Accordion.theme = defaultTheme;

export default Accordion;
export { Accordion, cyclicNextItem, cyclicPrevItem };
//# sourceMappingURL=accordion.js.map
