import { c as _inherits, d as _createSuper, e as _classCallCheck, f as _defineProperty, g as _assertThisInitialized, _ as _extends, h as _createClass } from '../_rollupPluginBabelHelpers-687385f0.js';
import React, { Component } from 'react';
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
import '../utils/styles/media.config.css';
import { isTouchable } from '../utils/adaptive.js';
import '../icon/style.css';
import { Icon } from '../icon/icon.js';
import '../index-85b17782.js';
import '../external-969f6c5f.js';
import '../icon/index.js';
import '../typography/style.css';
import '../typography/headline.js';
import '../typography/title.js';
import '../typography/subheader.js';
import '../typography/caption.js';
import '../typography/uppercase.js';
import '../typography/description.js';
import { Typography } from '../typography/index.js';
import 'react-onclickoutside';
import '../perimeter/perimeter.js';
import { Perimeter } from '../perimeter/index.js';
import '../link/link.css';
import '../link/components/simple-external-link.js';
import { Link } from '../link/link.js';
import { keyCodes, cyclicPrevItem, cyclicNextItem } from '../listbox/utils.js';
import defaultTheme from './style.css';

var TYPING_SYMBOLS = /[A-Za-zЁА-яё]/;
var Menu = /*#__PURE__*/function (_Component) {
  _inherits(Menu, _Component);

  var _super = _createSuper(Menu);

  function Menu(props) {
    var _this;

    _classCallCheck(this, Menu);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "setRefTarget", function (c) {
      _this.target = c;
    });

    _defineProperty(_assertThisInitialized(_this), "setRefContents", function (c) {
      _this.contents = c;
    });

    _defineProperty(_assertThisInitialized(_this), "getOptionValue", function () {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return _this.props.options[index].value;
    });

    _defineProperty(_assertThisInitialized(_this), "handleTargetClick", function (event) {
      if (_this.state.expanded) {
        _this.handleClose(event);
      } else {
        _this.handleOpen(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleTargetMouse", function (event) {
      if (!isTouchable()) {
        _this.handleOpen(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseLeave", function (event) {
      _this.handleClose(event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleOpen", function (event) {
      if (event.persist) {
        event.persist();
      }

      _this.setState({
        expanded: true
      }, function () {
        _this.contents.focus();

        _this.props.onOpen(event);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function (event) {
      if (_this.state.expanded) {
        if (event.persist) {
          event.persist();
        }

        _this.setState({
          expanded: false
        }, function () {
          _this.target.focus();

          _this.props.onClose(event);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOptionFocus", function (option) {
      return _this.setState({
        activeDescendant: option.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleOptionChoose", function (option, event) {
      if (option.type === 'option') {
        option.action(event);
      }

      _this.handleClose(event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDownTarget", function (event) {
      switch (event.keyCode) {
        case keyCodes.KEY_ENTER:
        case keyCodes.KEY_SPACE:
        case keyCodes.KEY_ARROW_DOWN:
          {
            event.preventDefault();

            _this.handleOpen(event);

            _this.handleOptionFocus(_this.props.options[0]);

            break;
          }

        case keyCodes.KEY_ARROW_UP:
          {
            event.preventDefault();

            _this.handleOpen(event);

            _this.handleOptionFocus(_this.props.options[_this.props.options.length - 1]);

            break;
          }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDownContents", function (event) {
      switch (event.keyCode) {
        case keyCodes.KEY_TAB:
          {
            _this.handleClose(event);

            break;
          }

        case keyCodes.KEY_ENTER:
        case keyCodes.KEY_SPACE:
          {
            event.preventDefault();

            _this.handleOptionChoose(_.find(_this.props.options, {
              value: _this.state.activeDescendant
            }), event);

            _this.handleClose(event);

            break;
          }

        case keyCodes.KEY_ESCAPE:
          {
            event.preventDefault();

            _this.handleClose(event);

            break;
          }

        case keyCodes.KEY_ARROW_DOWN:
          {
            event.preventDefault();

            _this.handleOptionFocus(cyclicNextItem(_this.props.options, _this.state.activeDescendant));

            break;
          }

        case keyCodes.KEY_ARROW_UP:
          {
            event.preventDefault();

            _this.handleOptionFocus(cyclicPrevItem(_this.props.options, _this.state.activeDescendant));

            break;
          }

        case keyCodes.KEY_HOME:
          {
            event.preventDefault();

            _this.handleOptionFocus(_this.props.options[0]);

            break;
          }

        case keyCodes.KEY_END:
          {
            event.preventDefault();

            _this.handleOptionFocus(_this.props.options[_this.props.options.length - 1]);

            break;
          }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyPressContents", function (event) {
      var char = String.fromCharCode(event.charCode);

      if (TYPING_SYMBOLS.test(char)) {
        event.preventDefault();

        var option = _.find(_this.props.options, function (o) {
          return _.startsWith(o.title.toLowerCase(), char.toLowerCase());
        }); // двигать дальше, если фокусированный уже был выбран через алфавит


        if (option) {
          _this.handleOptionFocus(option);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "isActiveDescendant", function (option) {
      return _this.state.activeDescendant === option.value;
    });

    _defineProperty(_assertThisInitialized(_this), "renderTarget", function () {
      var _this$props = _this.props,
          theme = _this$props.theme,
          title = _this$props.title,
          mode = _this$props.mode,
          icon = _this$props.icon,
          a11y = _this$props.a11y;
      var handlers = mode === 'hover' ? {
        onMouseEnter: _this.handleTargetMouse
      } : {};
      return /*#__PURE__*/React.createElement("button", _extends({
        type: "button",
        id: "".concat(_this.id, "-target"),
        ref: _this.setRefTarget,
        onClick: _this.handleTargetClick
      }, handlers, {
        className: theme.buttonControl // накрученное клавиатурное управление
        ,
        onKeyDown: _this.handleKeyDownTarget,
        title: a11y.title,
        "aria-haspopup": "true",
        "aria-expanded": _this.state.expanded ? true : void 0 // указатель на содержимое
        ,
        "aria-controls": "".concat(_this.id, "-contents")
      }), title && /*#__PURE__*/React.createElement("span", {
        className: classnames(Typography.theme.body, theme.title)
      }, title), icon && /*#__PURE__*/React.createElement(Icon, {
        name: "icon:core/common/".concat(icon),
        size: "self"
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderContents", function () {
      return /*#__PURE__*/React.createElement("ul", {
        id: "".concat(_this.id, "-contents"),
        className: _this.props.theme.popup,
        ref: _this.setRefContents,
        onKeyDown: _this.handleKeyDownContents // специальное поведение для быстрого поиска операции
        ,
        onKeyPress: _this.handleKeyPressContents,
        tabIndex: -1,
        role: "menu",
        "aria-activedescendant": _this.state.expanded ? "".concat(_this.id, "-option-").concat(_this.state.activeDescendant) : void 0 // легко может ссылаться на самого себя
        ,
        "aria-labelledby": "".concat(_this.id, "-target")
      }, _.map(_this.props.options, _this.renderOption));
    });

    _defineProperty(_assertThisInitialized(_this), "renderOption", function (option) {
      var activeDescendant = _this.isActiveDescendant(option);

      var type = option.type,
          title = option.title,
          value = option.value,
          as = option.as,
          action = option.action;
      var handleClick = action || _.noop;
      var content = void 0;

      if (type === 'option') {
        content = /*#__PURE__*/React.createElement("button", {
          type: "button",
          className: _this.props.theme.optionContent,
          tabIndex: -1,
          onClick: handleClick,
          onMouseUp: _this.handleClose,
          role: "menuitem"
        }, title);
      } else if (type === 'link' || type === 'linkout') {
        content = /*#__PURE__*/React.createElement(Link, {
          theme: _this.linkTheme,
          external: type === 'linkout',
          href: value,
          as: as,
          tabIndex: -1,
          onMouseUp: _this.handleClose,
          onClick: handleClick,
          role: "menuitem"
        }, title);
      }

      return /*#__PURE__*/React.createElement("li", {
        key: value,
        id: "".concat(_this.id, "-option-").concat(value),
        className: classnames(_this.props.theme.option, activeDescendant && _this.props.theme.focused),
        role: "none"
      }, content);
    });

    _this.state = {
      expanded: false,
      activeDescendant: _this.getOptionValue()
    };
    _this.id = _this.props.id || _.uniqueId('ui-menu');
    _this.linkTheme = {
      link: _this.props.theme.optionContent
    };
    return _this;
  }

  _createClass(Menu, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          theme = _this$props2.theme,
          title = _this$props2.title,
          mode = _this$props2.mode;
      var handlers = mode === 'hover' ? {
        onMouseLeave: this.handleMouseLeave
      } : {};
      return /*#__PURE__*/React.createElement(Perimeter, {
        onClickOutside: this.handleClose
      }, /*#__PURE__*/React.createElement("div", _extends({
        id: this.id,
        className: classnames(theme.menu, this.state.expanded && theme.expanded, !title && mode === 'click' && theme.iconMenu)
      }, handlers), this.renderTarget(), this.renderContents()));
    }
  }]);

  return Menu;
}(Component);

_defineProperty(Menu, "propTypes", {
  id: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    title: PropTypes.string,
    action: PropTypes.func,
    type: PropTypes.oneOf(['link', 'linkout', 'option']),
    as: PropTypes.func,
    onClick: PropTypes.func
  })),
  title: PropTypes.string,
  icon: PropTypes.string,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  mode: PropTypes.oneOf(['hover', 'click']),
  theme: PropTypes.object,
  a11y: PropTypes.shape({
    /**
     * заголовок кнопки меню
     */
    title: PropTypes.string
  })
});

_defineProperty(Menu, "defaultProps", {
  id: void 0,
  options: [],
  icon: 'threeDots',
  title: void 0,
  onOpen: _.noop,
  onClose: _.noop,
  mode: 'hover',
  theme: defaultTheme,
  a11y: {
    title: "Меню"
  }
});

Menu.theme = defaultTheme;

export default Menu;
export { Menu };
//# sourceMappingURL=menu.js.map
