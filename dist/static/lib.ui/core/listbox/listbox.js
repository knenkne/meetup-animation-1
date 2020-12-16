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
import '../utils/handlers.js';
import '../utils/pluralize.js';
import '../utils/scroll-to.js';
import '../utils/format-phone-number.js';
import { memoizeFuncWithArgs } from '../utils/memoize-func-with-args.js';
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
import { Icon } from '../icon/icon.js';
import '../index-85b17782.js';
import '../external-969f6c5f.js';
import '../icon/index.js';
import '../utils/set-project-id.js';
import '../utils/make-direction.js';
import '../utils/show-error.js';
import 'react-onclickoutside';
import '../perimeter/perimeter.js';
import { Perimeter } from '../perimeter/index.js';
import { autoScroll } from '../dropdown/utils.js';
import { keyCodes, prevItem, nextItem } from './utils.js';
import { SelectedOption } from './selected-option.js';
import { MultiSelectedOptions } from './multi-selected-options.js';
import defaultTheme from './style.css';

/* eslint-disable valid-jsdoc, comment: некорректный парсинг jsdoc */

/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d/screen/5c8a5f62ed2b7b0dcbf560d1)
 * Простой и доступный (a11y) компонент для выпадающих списков.
 *
 // eslint-disable-next-line valid-jsdoc
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var Listbox = /*#__PURE__*/function (_Component) {
  _inherits(Listbox, _Component);

  var _super = _createSuper(Listbox);

  function Listbox(props) {
    var _this;

    _classCallCheck(this, Listbox);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "setRefTarget", function (component) {
      _this.target = component;
    });

    _defineProperty(_assertThisInitialized(_this), "setRefContents", function (component) {
      _this.contents = component;
    });

    _defineProperty(_assertThisInitialized(_this), "setRefPerimeter", function (component) {
      _this.perimeter = component;
    });

    _defineProperty(_assertThisInitialized(_this), "getOptionValue", function () {
      var _this$props$options$i;

      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return (_this$props$options$i = _this.props.options[index]) === null || _this$props$options$i === void 0 ? void 0 : _this$props$options$i.value;
    });

    _defineProperty(_assertThisInitialized(_this), "getSelectedItem", function () {
      if (_this.isMultiSelect() && _.isArray(_this.props.options)) {
        var selectedOptions = _this.props.options.filter(function (option) {
          return _.includes(_this.props.value, option.value);
        });

        if (!_.isEmpty(selectedOptions)) {
          return /*#__PURE__*/React.createElement(MultiSelectedOptions, {
            items: selectedOptions,
            theme: _this.props.theme,
            onChange: _this.props.onChange
          });
        }
      }

      var selectedOption = _.find(_this.props.options, {
        value: _this.props.value
      });

      if (selectedOption) {
        return _this.props.as ? _this.props.as(selectedOption) : /*#__PURE__*/React.createElement(SelectedOption, _extends({}, selectedOption, {
          theme: _this.props.theme
        }));
      }

      return /*#__PURE__*/React.createElement("span", {
        className: _this.props.theme.itemNotChosen
      }, _this.props.translations.itemNotChosenText);
    });

    _defineProperty(_assertThisInitialized(_this), "handleTargetClick", function () {
      if (_this.state.open) {
        _this.handleClose();
      } else {
        _this.handleOpen();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOpen", function () {
      _this.setState({
        open: true
      }, function () {
        _this.contents.focus();

        _this.perimeter.enableOnClickOutside();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {
      if (_this.state.open) {
        _this.setState({
          open: false
        }, function () {
          _this.target.focus();

          _this.perimeter.disableOnClickOutside();
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (event) {
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function () {
      if (_this.props.onBlur) {
        _this.props.onBlur(_this.props.value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOptionFocus", function (option) {
      _this.setState({
        activeDescendant: option.value
      }, function () {
        return autoScroll(document.getElementById("".concat(_this.id, "-option-").concat(option.value)), document.getElementById("".concat(_this.id, "-contents")));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleOptionChoose", function (option) {
      var newSelected;

      if (_this.isMultiSelect()) {
        newSelected = _this.props.value || [];

        if (_.includes(_this.props.value, option.value)) {
          newSelected = _.reject(newSelected, function (value) {
            return value === option.value;
          });
        } else {
          newSelected = newSelected.concat([option.value]);
        }
      } else {
        newSelected = option.value;
      }

      _this.setState({
        activeDescendant: option.value
      });

      _this.props.onChange(newSelected);
    });

    _defineProperty(_assertThisInitialized(_this), "handleOptionSetChoose", function (options) {
      if (options.length === _this.props.value.length) {
        _this.setState({
          activeDescendant: _this.props.options[0].value
        });

        _this.props.onChange([]);
      } else {
        _this.setState({
          activeDescendant: _.last(options).value
        });

        var mappedOptions = _.map(options, function (option) {
          return option.value;
        });

        var nextOptions = _.uniq(_.isEmpty(_this.props.value) ? mappedOptions : mappedOptions.concat(_this.props.value));

        _this.props.onChange(nextOptions);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDownContents", function (event) {
      switch (event.keyCode) {
        case keyCodes.KEY_TAB:
          {
            _this.handleClose();

            break;
          }

        case keyCodes.KEY_ENTER:
        case keyCodes.KEY_SPACE:
          {
            event.preventDefault();

            _this.handleOptionChoose(_.find(_this.props.options, {
              value: _this.state.activeDescendant
            }));

            if (!_this.isMultiSelect()) {
              _this.handleClose();
            }

            break;
          }

        case keyCodes.KEY_ESCAPE:
          {
            event.preventDefault();

            _this.handleClose();

            break;
          }

        case keyCodes.KEY_ARROW_DOWN:
          {
            event.preventDefault();
            var nextOption = nextItem(_this.props.options, _this.state.activeDescendant);

            if (nextOption) {
              if (_this.isMultiSelect() && event.shiftKey) {
                _this.handleOptionChoose(nextOption);
              }

              _this.handleSelectKey(nextOption);
            }

            break;
          }

        case keyCodes.KEY_ARROW_UP:
          {
            event.preventDefault();

            var _nextOption = prevItem(_this.props.options, _this.state.activeDescendant);

            if (_nextOption) {
              if (_this.isMultiSelect() && event.shiftKey) {
                _this.handleOptionChoose(_nextOption);
              }

              _this.handleSelectKey(_nextOption);
            }

            break;
          }

        case keyCodes.KEY_HOME:
          {
            event.preventDefault();

            if (_this.isMultiSelect() && event.shiftKey && event.ctrlKey) {
              var currentIndex = _.findIndex(_this.props.options, {
                value: _this.state.activeDescendant
              });

              _this.handleOptionSetChoose(_this.props.options.slice(0, currentIndex + 1));
            }

            var _nextOption2 = _.first(_this.props.options);

            _this.handleSelectKey(_nextOption2);

            break;
          }

        case keyCodes.KEY_END:
          {
            event.preventDefault();

            if (_this.isMultiSelect() && event.shiftKey && event.ctrlKey) {
              var _currentIndex = _.findIndex(_this.props.options, {
                value: _this.state.activeDescendant
              });

              _this.handleOptionSetChoose(_this.props.options.slice(_currentIndex));
            }

            var _nextOption3 = _.last(_this.props.options);

            _this.handleSelectKey(_nextOption3);

            break;
          }

        case keyCodes.KEY_A:
          {
            if (_this.isMultiSelect() && event.ctrlKey) {
              event.preventDefault();

              _this.handleOptionSetChoose(_this.props.options);
            }

            break;
          }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelectKey", function (option) {
      _this.handleOptionFocus(option);

      if (_this.isAutoSelect()) {
        _this.handleOptionChoose(option);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "isSelected", function (option) {
      if (_this.isMultiSelect()) {
        return _.includes(_this.props.value, option.value);
      }

      return _this.props.value === option.value;
    });

    _defineProperty(_assertThisInitialized(_this), "isActiveDescendant", function (option) {
      return _this.state.activeDescendant === option.value;
    });

    _defineProperty(_assertThisInitialized(_this), "isMultiSelect", function () {
      return _this.props.mode === 'multiselect';
    });

    _defineProperty(_assertThisInitialized(_this), "isAutoSelect", function () {
      return _this.props.mode === 'autoselect';
    });

    _defineProperty(_assertThisInitialized(_this), "renderTarget", function () {
      var _this$props$options, _this$props$options2;

      return /*#__PURE__*/React.createElement("button", {
        type: "button",
        className: classnames(_this.props.theme.target, _this.state.open && _this.props.theme.targetOpened, _this.props.error && _this.props.theme.error, (_this.props.disabled || !((_this$props$options = _this.props.options) === null || _this$props$options === void 0 ? void 0 : _this$props$options.length)) && _this.props.theme.disabled, (_this.props.readOnly || _this.props.readonly) && _this.props.theme.readonly),
        id: _this.id,
        ref: _this.setRefTarget,
        onClick: _this.handleTargetClick,
        onFocus: _this.handleFocus,
        onBlur: _this.handleBlur,
        "aria-haspopup": "listbox",
        "aria-expanded": _this.state.open ? true : void 0 // listbox должен связать себя с назначением
        ,
        "aria-labelledby": classnames(_this.props['aria-labelledby'], _this.id),
        "aria-label": _this.props['aria-label'],
        disabled: _this.props.disabled || _this.props.readOnly || _this.props.readonly || !((_this$props$options2 = _this.props.options) === null || _this$props$options2 === void 0 ? void 0 : _this$props$options2.length)
      }, /*#__PURE__*/React.createElement("div", {
        className: classnames(_this.props.theme.item, _this.props.theme.first)
      }, _this.getSelectedItem()), /*#__PURE__*/React.createElement("div", {
        className: classnames(_this.props.theme.arrow, _this.state.open && _this.props.theme.arrowOpened)
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "icon:core/common/down-arrow"
      })));
    });

    _defineProperty(_assertThisInitialized(_this), "renderContents", function () {
      return /*#__PURE__*/React.createElement("div", {
        className: classnames(_this.props.theme.contents, _this.state.open && _this.props.theme.opened)
      }, /*#__PURE__*/React.createElement("ul", {
        id: "".concat(_this.id, "-contents"),
        className: _this.props.theme.contentsView,
        ref: _this.setRefContents,
        onKeyDown: _this.handleKeyDownContents,
        tabIndex: -1,
        role: "listbox",
        "aria-activedescendant": _this.state.open ? "".concat(_this.id, "-option-").concat(_this.state.activeDescendant) : void 0 // фишка мультиселекта в листбоксе
        ,
        "aria-multiselectable": _this.isMultiSelect() // listbox должен связать себя с назначением
        ,
        "aria-labelledby": _this.props['aria-labelledby'],
        "aria-label": _this.props['aria-label']
      }, _this.props.options.map(_this.renderOption)));
    });

    _defineProperty(_assertThisInitialized(_this), "renderOption", function (option) {
      var activeDescendant = _this.isActiveDescendant(option);

      var selected = _this.isSelected(option);

      return /*#__PURE__*/React.createElement("li", {
        key: option.value,
        id: "".concat(_this.id, "-option-").concat(option.value),
        className: classnames(_this.props.theme.item, activeDescendant && _this.props.theme.focused, selected && _this.props.theme.checked),
        onClick: memoizeFuncWithArgs(_this.handleOptionChoose, option),
        onMouseUp: _this.isMultiSelect() ? void 0 : _this.handleClose,
        role: "option",
        "aria-selected": selected
      }, _this.props.as ? _this.props.as(option) : /*#__PURE__*/React.createElement(SelectedOption, _extends({}, option, {
        theme: _this.props.theme
      })));
    });

    _this.state = {
      open: false,
      activeDescendant: _this.getOptionValue()
    };
    _this.id = _this.props.id || _.uniqueId('ui-listbox');

    if (_this.isAutoSelect() && !_this.props.value) {
      _this.props.onChange(_this.getOptionValue());
    }

    return _this;
  }

  _createClass(Listbox, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(Perimeter, {
        onClickOutside: this.handleClose,
        disableOnClickOutside: true,
        ref: this.setRefPerimeter
      }, /*#__PURE__*/React.createElement("div", {
        id: "".concat(this.id, "-wrapper"),
        className: this.props.theme.dropdown
      }, this.renderTarget(), this.renderContents()));
    }
  }]);

  return Listbox;
}(Component);

_defineProperty(Listbox, "propTypes", {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.string,
    additional: PropTypes.string,
    description: PropTypes.string,
    additionalDescription: PropTypes.string
  })),
  error: PropTypes.string,
  id: PropTypes.string,
  mode: PropTypes.oneOf(['select', 'autoselect', 'multiselect']),

  /**
   * если нужно прокинуть кастомную верстку
   **/
  as: PropTypes.func,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  readOnly: PropTypes.bool,
  theme: PropTypes.objectOf(PropTypes.string),
  translations: PropTypes.shape({
    itemNotChosenText: PropTypes.string
  }),
  'aria-labelledby': PropTypes.string,
  'aria-label': PropTypes.string
});

_defineProperty(Listbox, "defaultProps", {
  value: void 0,
  onChange: _.noop,
  onFocus: _.noop,
  onBlur: _.noop,
  options: [],
  error: void 0,
  id: void 0,
  mode: void 0,
  as: void 0,
  disabled: false,
  readonly: false,
  readOnly: false,
  theme: defaultTheme,
  translations: {
    // eslint-disable-next-line @sbol/common/no-cyrillic-outside-cms
    itemNotChosenText: 'Выберите из списка'
  },
  'aria-labelledby': '',
  'aria-label': ''
});

Listbox.theme = defaultTheme;

export default Listbox;
export { Listbox };
//# sourceMappingURL=listbox.js.map
