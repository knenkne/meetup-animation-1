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
import { disableHandler, preventHandler } from '../utils/handlers.js';
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
import 'react-onclickoutside';
import '../perimeter/perimeter.js';
import { Perimeter } from '../perimeter/index.js';
import '../button/style.css';
import defaultTheme from './style.css';
import { TargetButton } from './target-button.js';
import { cyclicPrevItem, cyclicNextItem, autoLeftCheckByParent, autoLeftCheckByWindow, autoTopCheckByWindow } from './utils.js';
import { Contents } from './contents.js';
import { Group } from './group.js';
import './select/select.css';
import { Option } from './option.js';
import '../link/link.css';
import '../link/components/simple-external-link.js';
import '../link/link.js';
import { Link } from './link.js';

var KEY_ENTER = 13;
var KEY_ARROW_UP = 38;
var KEY_ARROW_DOWN = 40;
var KEY_END = 35;
var KEY_HOME = 36;
/* eslint-disable valid-jsdoc, comment: некорректный парсинг jsdoc */

/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=dropdown)
 * Технический компонент для сборки выпадающих списков
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var Dropdown = /*#__PURE__*/function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  var _super = _createSuper(Dropdown);

  function Dropdown() {
    var _this;

    _classCallCheck(this, Dropdown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpened: false,
      selected: null
    });

    _defineProperty(_assertThisInitialized(_this), "getChildContext", function () {
      return {
        dropdown: {
          getOpened: _this.getOpened,
          handleOpen: _this.handleOpen,
          handleClose: _this.handleClose,
          getValueItem: _this.getValueItem,
          getValue: _this.getValue,
          getSelectedItem: _this.getSelectedItem,
          getSelectedValue: _this.getSelectedValue,
          onChange: _this.props.onChange,
          registerOption: _this.registerOption,
          unregisterOption: _this.unregisterOption
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "setRefPerimeterElement", function (c) {
      _this.props.refWrapper(c);

      _this.perimeterElement = c;
    });

    _defineProperty(_assertThisInitialized(_this), "setRefPerimeter", function (c) {
      _this.perimeter = c;
    });

    _defineProperty(_assertThisInitialized(_this), "getSelectedItem", function () {
      return _this.state.selectedItem;
    });

    _defineProperty(_assertThisInitialized(_this), "getValueItem", function () {
      return _.find(_this.options, function (option) {
        return option.props.value === _this.getValue();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getValueItemByState", function () {
      return _.find(_this.options, function (option) {
        return option.props.value === _.get(_this.state.selectedItem, 'props.value');
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getSelectedValue", function () {
      return _.get(_this.getSelectedItem(), 'props.value');
    });

    _defineProperty(_assertThisInitialized(_this), "getValue", function () {
      return _this.props.value;
    });

    _defineProperty(_assertThisInitialized(_this), "getOpened", function () {
      return _this.props.mode === 'none' ? _this.props.forceOpened : _this.state.isOpened;
    });

    _defineProperty(_assertThisInitialized(_this), "getOption", function () {
      return _this.getValueItemByState() || _this.getValueItem() || _.first(_this.options);
    });

    _defineProperty(_assertThisInitialized(_this), "getEventHandlers", function (childProps) {
      var _this$props = _this.props,
          mode = _this$props.mode,
          disabled = _this$props.disabled;

      if (mode === 'click') {
        return {
          onClick: _.flow(_.compact([disableHandler(preventHandler(_this.handleToggle), disabled), _.get(childProps, 'onClick')])),
          onBlur: _.flow(_.compact([disableHandler(_this.handleBlur, disabled), _.get(childProps, 'onBlur')]))
        };
      } else if (mode === 'focus') {
        return {
          onFocus: _.flow(_.compact([disableHandler(_this.handleOpen, disabled), _.get(childProps, 'onFocus')])),
          onBlur: _.flow(_.compact([disableHandler(_this.handleBlur, disabled), _.get(childProps, 'onBlur')]))
        };
      }

      return {};
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      if (_this.getOpened() && !_.isEmpty(_this.options)) {
        switch (event.keyCode) {
          case KEY_ARROW_DOWN:
            {
              event.preventDefault();

              _this.updateSelected(cyclicNextItem(_this.options, _this.state.selectedItem));

              break;
            }

          case KEY_ARROW_UP:
            {
              event.preventDefault();

              _this.updateSelected(cyclicPrevItem(_this.options, _this.state.selectedItem));

              break;
            }

          case KEY_HOME:
            {
              event.preventDefault();

              _this.updateSelected(_.first(_this.options));

              break;
            }

          case KEY_END:
            {
              event.preventDefault();

              _this.updateSelected(_.last(_this.options));

              break;
            }

          case KEY_ENTER:
            {
              event.preventDefault();

              _this.state.selectedItem.handleClick(event);

              break;
            }
        }
      }

      _this.props.onKeyDown(event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleOpen", function () {
      var prevOpened = _this.state.isOpened;

      _this.setState({
        isOpened: true,
        selectedItem: _this.getOption()
      }, function () {
        return _this.onHandling(prevOpened, true);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleToggle", function () {
      var prevOpened = _this.state.isOpened;

      _this.setState({
        isOpened: !prevOpened,
        selectedItem: !prevOpened ? _this.getOption() : null
      }, function () {
        return _this.onHandling(prevOpened, !prevOpened);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {
      var prevOpened = _this.state.isOpened;

      _this.setState({
        isOpened: false,
        selectedItem: null
      }, function () {
        return _this.onHandling(prevOpened, false);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
      if (_this.isMouseDown) {
        return;
      }

      _this.handleClose(event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseDown", function () {
      _this.isMouseDown = true;
      document.addEventListener('mouseup', _this.handleMouseUp);
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseUp", function () {
      _this.isMouseDown = false;
      document.removeEventListener('mouseup', _this.handleMouseUp);
    });

    _defineProperty(_assertThisInitialized(_this), "updateSelected", function (selectedItem) {
      _this.setState({
        selectedItem: selectedItem
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onHandling", function (prevState, nextState) {
      if (!prevState && nextState) {
        if (_this.props.mode !== 'none') {
          _this.perimeter.enableOnClickOutside();
        }

        _this.props.onOpen();
      } else if (prevState && !nextState) {
        if (_this.props.mode !== 'none') {
          _this.perimeter.disableOnClickOutside();
        }

        _this.props.onClose();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "registerOption", function (option) {
      _this.options.push(option);
    });

    _defineProperty(_assertThisInitialized(_this), "unregisterOption", function (optionValue) {
      _this.options.splice(_.indexOf(_.map(_this.options, function (option) {
        return option.props.value;
      }), optionValue), 1);
    });

    _defineProperty(_assertThisInitialized(_this), "options", []);

    _defineProperty(_assertThisInitialized(_this), "renderChild", function (child) {
      return /*#__PURE__*/React.cloneElement(child, _.extend({
        forceOpened: _this.getOpened()
      }, _.get(child, 'type.displayName') === Contents.displayName ? {
        nodeTarget: _this.perimeterElement,
        // close only by clicking on outside, option, target|blur
        // onClick: this.handleClose,
        mode: _this.props.mode,
        nodeSelectedOption: _.get(_this.getSelectedItem(), 'option'),
        onMouseDown: _this.handleMouseDown,
        onMouseUp: _this.handleMouseUp,
        id: _this.props.id,
        name: _this.props.name
      } : _this.getEventHandlers(child.props)));
    });

    return _this;
  }

  _createClass(Dropdown, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mouseup', this.handleMouseUp);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          disabled = _this$props2.disabled,
          children = _this$props2.children,
          theme = _this$props2.theme,
          mode = _this$props2.mode,
          error = _this$props2.error;

      var passedProps = _(this.props).omit(['forceOpened', 'theme', 'onOpen', 'onClose', 'disabled', 'mode', 'onChange', 'onBlur', 'value', 'refWrapper', 'onClickOutside', 'translations', 'error', 'formName', 'active', 'asyncValidating', 'autofilled', 'dirty', 'dispatch', 'hasServerError', 'initialValue', 'invalid', 'pristine', 'submitFailed', 'submitting', 'touched', 'valid', 'visited', 'warning']).extend({
        'data-unit': 'dropdown',
        role: mode === 'focus' ? 'combobox' : 'listbox',
        'aria-disabled': disabled,
        'aria-expanded': this.getOpened(),
        onKeyDown: this.handleKeyDown,
        ref: this.setRefPerimeterElement,
        className: classnames(theme.dropdown, Boolean(error) && theme.error)
      }).value();

      return /*#__PURE__*/React.createElement("div", {
        className: defaultTheme.dropdownWrapper
      }, /*#__PURE__*/React.createElement(Perimeter, {
        disableOnClickOutside: true,
        ref: this.setRefPerimeter,
        onClickOutside: this.handleClose
      }, /*#__PURE__*/React.createElement("span", passedProps, React.Children.map(children, this.renderChild))));
    }
  }]);

  return Dropdown;
}(React.Component);

_defineProperty(Dropdown, "propTypes", {
  children: PropTypes.node,
  forceOpened: PropTypes.bool,
  disabled: PropTypes.bool,
  theme: PropTypes.object,
  refWrapper: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  mode: PropTypes.oneOf(['click', 'focus', 'none']),
  onKeyDown: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string
});

_defineProperty(Dropdown, "childContextTypes", {
  dropdown: PropTypes.shape({
    getOpened: PropTypes.func,
    handleClose: PropTypes.func,
    getValue: PropTypes.func,
    getValueItem: PropTypes.func,
    onChange: PropTypes.func,
    getSelectedItem: PropTypes.func,
    registerOption: PropTypes.func,
    unregisterOption: PropTypes.func
  })
});

_defineProperty(Dropdown, "defaultProps", {
  children: void 0,
  forceOpened: void 0,
  disabled: false,
  value: '',
  theme: defaultTheme,
  refWrapper: _.noop,
  onOpen: _.noop,
  onClose: _.noop,
  mode: 'click',
  onKeyDown: _.noop,
  onChange: _.noop,
  error: void 0,
  id: void 0,
  name: void 0
});

Dropdown.displayName = 'Dropdown';
Dropdown.TargetButton = TargetButton;
Dropdown.Contents = Contents;
Dropdown.Group = Group;
Dropdown.Option = Option;
Dropdown.Link = Link;
Dropdown.theme = defaultTheme;
Dropdown.utils = {
  autoLeftCheckByParent: autoLeftCheckByParent,
  autoLeftCheckByWindow: autoLeftCheckByWindow,
  autoTopCheckByWindow: autoTopCheckByWindow
};
Dropdown.displayName = 'Dropdown';

export default Dropdown;
export { Dropdown };
//# sourceMappingURL=dropdown.js.map
