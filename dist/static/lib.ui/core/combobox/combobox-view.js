import { c as _inherits, d as _createSuper, e as _classCallCheck, f as _defineProperty, g as _assertThisInitialized, h as _createClass } from '../_rollupPluginBabelHelpers-687385f0.js';
import React, { Fragment, Component } from 'react';
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
import { autoTopCheckByWindow } from '../utils/auto-top-check-by-window.js';
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
import '../typography/style.css';
import '../typography/headline.js';
import '../typography/title.js';
import '../typography/subheader.js';
import '../typography/caption.js';
import '../typography/uppercase.js';
import '../typography/description.js';
import '../typography/index.js';
import '../currency/locales.js';
import '../currency/options.js';
import '../currency/style.css';
import '../currency/currency.js';
import 'bignumber.js';
import 'text-mask-core/dist/textMaskCore';
import 'text-mask-addons/dist/createNumberMask';
import '../input/utils.js';
import '../button/command/style.css';
import '../button/command/index.js';
import '../loader/loader.css';
import '../loader/loader-themes/pulse-loader.css';
import '../loader/loader-themes/jump-loader.css';
import '../loader/loader-themes/swap-loader.css';
import { Loader } from '../loader/loader.js';
import '../loader/icon-loader.css';
import '../loader/icon-loader.js';
import '../loader/button-loader.css';
import '../loader/utils.js';
import '../loader/button-loader.js';
import '../loader/index.js';
import '../button/icon/style.css';
import '../button/icon/index.js';
import '../tooltip/style.css';
import '../tooltip/tip.js';
import '../tooltip/tooltip.js';
import '../tooltip/hover-tooltip.js';
import 'react-onclickoutside';
import '../perimeter/perimeter.js';
import { Perimeter } from '../perimeter/index.js';
import '../tooltip/click-tooltip.js';
import '../tooltip/index.js';
import '../button/info/style.css';
import '../button/info/index.js';
import '../button/radio-segmented/style.css';
import '../button/radio-segmented/index.js';
import '../button/style.css';
import '../button/index.js';
import '../input/input.css';
import '../input/input.js';
import '../input/hoc/auto-size.js';
import '../input/masked/masked-format.js';
import '../input/masked/masked.js';
import '../input/numeric/numeric.js';
import '../input/counter/counter.css';
import '../input/counter/counter-control.js';
import '../input/counter/counter.js';
import '../input/text/text.css';
import '../input/text/text.js';
import '../input/currency/currency.js';
import '../input/money/money.js';
import '../input/password/eye-style.css';
import '../input/password/eye.js';
import '../input/password/input-style.css';
import '../input/password/password.js';
import '../input/currency-select/currency-select.js';
import '../input/currency-select/currency-select.css';
import '../input/currency-select/currency-select-option.js';
import '../dropdown/style.css';
import '../dropdown/target-button.js';
import '../dropdown/utils.js';
import '../dropdown/contents.js';
import '../dropdown/group.js';
import '../dropdown/select/select.css';
import '../dropdown/option.js';
import '../link/link.css';
import '../link/components/simple-external-link.js';
import '../link/link.js';
import '../dropdown/link.js';
import '../dropdown/dropdown.js';
import '../dropdown/select/item.js';
import '../dropdown/select/select.js';
import '../dropdown/index.js';
import '../marked-text/style.css';
import '../marked-text/marked-text.js';
import '../input/suggest/style.css';
import '../input/suggest/themes.js';
import '../input/suggest/target-input.js';
import '../input/suggest/long.js';
import '../input/suggest/no-matches.js';
import '../input/suggest/error.js';
import '../input/suggest/option.js';
import '../input/suggest/suggest.js';
import '../input/suggest/utils.js';
import '../input/suggest/suggest-dynamic.js';
import '../input/suggest/index.js';
import '../input/hoc/typeahead.css';
import '../input/hoc/typeahead.js';
import '../input/phone/phone-mask.js';
import '../input/phone/local-phone.js';
import '../input/hoc/keep-char-positions-typeahead.js';
import '../input/hoc/tooltiped.js';
import 'remarkable';
import 'remarkable/lib/common/utils';
import '../markdown/utils.js';
import '../markdown/style.css';
import '../markdown/full.js';
import '../markdown/short.js';
import '../markdown/index.js';
import '../labeled/labeled.css';
import '../labeled/index.js';
import '../input/hoc/labeled.js';
import { Input } from '../input/index.js';
import { keyCodes, prevItem, nextItem } from '../listbox/utils.js';
import { autoScroll } from './utils.js';
import theme from './combobox.css';
import { Long } from './long.js';
import { Error } from './error.js';
import { NoMatches } from './no-matches.js';

/**
 * Семантическое текстовое поле с выпадающим списком
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var ComboboxView = /*#__PURE__*/function (_Component) {
  _inherits(ComboboxView, _Component);

  var _super = _createSuper(ComboboxView);

  function ComboboxView(props) {
    var _$find;

    var _this;

    _classCallCheck(this, ComboboxView);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "setWrapperRef", function (node) {
      _this.perimeter = node;
    });

    _defineProperty(_assertThisInitialized(_this), "setContentRef", function (node) {
      var verticalAlign = _this.props.verticalAlign;
      _this.content = node;

      _this.setState({
        verticalAlign: verticalAlign === null || verticalAlign === void 0 ? void 0 : verticalAlign(_this.content, _this.target)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setTargetRef", function (node) {
      _this.target = node;
    });

    _defineProperty(_assertThisInitialized(_this), "getActive", function (options) {
      return (options === null || options === void 0 ? void 0 : options.length) ? options[0].value : void 0;
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDownTarget", function (event) {
      switch (event.keyCode) {
        case keyCodes.KEY_ESCAPE:
          {
            event.preventDefault();

            _this.handleClear();

            break;
          }

        case keyCodes.KEY_ENTER:
          {
            event.preventDefault();

            var option = _.find(_this.props.options, {
              value: _this.state.activeDescendant
            });

            if (option) {
              _this.handleOptionChoose(option);
            }

            break;
          }

        case keyCodes.KEY_ARROW_DOWN:
          {
            event.preventDefault();
            var nextOption = nextItem(_this.props.options, _this.state.activeDescendant);

            if (nextOption) {
              _this.handleOptionFocus(nextOption);
            }

            break;
          }

        case keyCodes.KEY_ARROW_UP:
          {
            event.preventDefault();

            var _nextOption = prevItem(_this.props.options, _this.state.activeDescendant);

            if (_nextOption) {
              _this.handleOptionFocus(_nextOption);
            }

            break;
          }

        case keyCodes.KEY_HOME:
          {
            event.preventDefault();

            _this.handleOptionFocus(_.first(_this.props.options));

            break;
          }

        case keyCodes.KEY_END:
          {
            event.preventDefault();

            _this.handleOptionFocus(_.last(_this.props.options));

            break;
          }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOpen", function (e) {
      var prevExpanded = _this.state.expanded;

      _this.setState({
        expanded: true
      }, function () {
        return _this.onHandling(prevExpanded, true);
      });

      if (_this.props.onFocus) {
        _this.props.onFocus(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (e) {
      if (_this.props.onBlur) {
        _this.props.onBlur(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {
      var prevExpanded = _this.state.expanded;

      _this.setState({
        expanded: false
      }, function () {
        return _this.onHandling(prevExpanded, false);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleOptionFocus", function (option) {
      _this.setState({
        activeDescendant: option.value
      }, function () {
        return autoScroll(document.getElementById("".concat(_this.id, "-option-").concat(_this.state.activeDescendant)), _this.content);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleOptionChoose", function (option) {
      _this.props.onChangeOption(option.value, option.title);

      _this.props.onChange(option.value);

      _this.setState({
        query: option.title,
        activeDescendant: option.value,
        expanded: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleInput", function (e) {
      _this.props.onChangeInput(e.target.value, e);

      _this.props.onChange(e.target.value, e);

      _this.setState({
        query: e.target.value,
        expanded: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClear", function () {
      _this.props.onChangeInput('');

      _this.props.onChange('');

      _this.setState({
        query: ''
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onHandling", function (prevState, nextState) {
      var _this$props = _this.props,
          onOpen = _this$props.onOpen,
          onClose = _this$props.onClose;

      if (!prevState && nextState) {
        _this.perimeter.enableOnClickOutside();

        onOpen();
      } else if (prevState && !nextState) {
        _this.perimeter.disableOnClickOutside();

        onClose();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "isExpanded", function () {
      return !_.isEmpty(_this.props.options) && _this.state.expanded;
    });

    _defineProperty(_assertThisInitialized(_this), "isActiveDescendant", function (option) {
      return _this.state.activeDescendant === (option === null || option === void 0 ? void 0 : option.value);
    });

    _defineProperty(_assertThisInitialized(_this), "renderTarget", function () {
      return /*#__PURE__*/React.createElement("div", {
        role: "combobox",
        ref: _this.setTargetRef,
        "aria-haspopup": "listbox",
        "aria-expanded": _this.isExpanded(),
        "aria-owns": "".concat(_this.id, "-contents")
      }, /*#__PURE__*/React.createElement(Input, {
        id: _this.id,
        type: "text",
        value: _this.state.query,
        className: classnames(_this.theme.input, _this.isExpanded() && _this.theme.inputExpanded),
        disabled: _this.props.disabled,
        placeholder: _this.props.placeholder,
        onChange: _this.handleInput,
        onFocus: _this.handleOpen,
        onBlur: _this.handleBlur,
        onKeyDown: _this.handleKeyDownTarget,
        error: _this.props.error,
        "aria-activedescendant": "".concat(_this.id, "-option-").concat(_this.state.activeDescendant),
        "aria-autocomplete": "list"
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderContents", function () {
      var _this$props2 = _this.props,
          isLoading = _this$props2.isLoading,
          onRetry = _this$props2.onRetry,
          requestMode = _this$props2.requestMode,
          options = _this$props2.options,
          a11y = _this$props2.a11y,
          _this$props2$translat = _this$props2.translations,
          requestTimeout = _this$props2$translat.requestTimeout,
          repeat = _this$props2$translat.repeat,
          noMatches = _this$props2$translat.noMatches,
          requestError = _this$props2$translat.requestError;
      var expanded = _this.state.expanded;
      return /*#__PURE__*/React.createElement("div", null, _this.isExpanded() && /*#__PURE__*/React.createElement("ul", {
        id: "".concat(_this.id, "-contents"),
        className: _this.theme.list,
        role: "listbox",
        tabIndex: -1,
        "aria-label": a11y === null || a11y === void 0 ? void 0 : a11y.optionsLabel
      }, _.map(options, _this.renderOption)), requestMode !== 'long' && isLoading && /*#__PURE__*/React.createElement("div", {
        className: _this.theme.loading
      }, /*#__PURE__*/React.createElement(Loader.Button, {
        size: "sm",
        colorScheme: "dark"
      })), requestMode === 'long' && expanded && requestTimeout && /*#__PURE__*/React.createElement(Long, {
        className: _this.theme.additionalInfo,
        onClick: onRetry,
        title: repeat,
        "aria-label": requestTimeout
      }, requestTimeout), requestMode === 'error' && expanded && requestError && /*#__PURE__*/React.createElement(Error, {
        className: _this.theme.additionalInfo,
        onClick: onRetry,
        title: repeat,
        "aria-label": requestError
      }, requestError), requestMode === 'noMatches' && expanded && noMatches && /*#__PURE__*/React.createElement(NoMatches, {
        className: _this.theme.additionalInfo,
        "aria-label": noMatches
      }, noMatches));
    });

    _defineProperty(_assertThisInitialized(_this), "renderOption", function (option) {
      var activeDescendant = _this.isActiveDescendant(option);

      return /*#__PURE__*/React.createElement("li", {
        key: option.value,
        id: "".concat(_this.id, "-option-").concat(option.value),
        className: classnames(_this.theme.option, activeDescendant && _this.theme.focused),
        onClick: memoizeFuncWithArgs(_this.handleOptionChoose, option),
        role: "option",
        "aria-selected": activeDescendant
      }, option.icon && (option.fromCode ? /*#__PURE__*/React.createElement(Icon, {
        name: option.icon,
        theme: {
          icon: classnames(Icon.theme.icon, _this.theme.optionIcon)
        }
      }) : /*#__PURE__*/React.createElement("img", {
        alt: option.value,
        src: option.icon,
        className: _this.theme.optionIcon
      })), option.children && /*#__PURE__*/React.createElement("span", {
        className: _this.theme.optionIcon
      }, option.children), /*#__PURE__*/React.createElement("span", {
        className: _this.theme.optionTitle
      }, option.title), option.description && /*#__PURE__*/React.createElement("span", {
        className: _this.theme.optionDescription
      }, option.description), option.additional && /*#__PURE__*/React.createElement("span", {
        className: _this.theme.optionAside
      }, option.additional));
    });

    var query = props.initialQuery || ((_$find = _.find(props.options, function (option) {
      return (option === null || option === void 0 ? void 0 : option.value) === props.initialValue;
    })) === null || _$find === void 0 ? void 0 : _$find.title) || props.initialValue || '';
    _this.state = {
      expanded: false,
      activeDescendant: props.initialValue,
      query: query,
      verticalAlign: 'bottom'
    };
    _this.id = props.id || _.uniqueId('ui-combobox');
    _this.theme = theme;
    return _this;
  } // eslint-disable-next-line babel/camelcase, comment: React UNSAFE method


  _createClass(ComboboxView, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(_ref) {
      var _this2 = this;

      var options = _ref.options,
          value = _ref.value;

      if (!_.find(options, function (option) {
        return option.value === _this2.state.activeDescendant;
      })) {
        this.setState({
          activeDescendant: this.getActive(options)
        });
      }

      if (this.props.value !== value) {
        var _$find2;

        var title = (_$find2 = _.find(options, function (option) {
          return option.value === value;
        })) === null || _$find2 === void 0 ? void 0 : _$find2.title;
        this.setState({
          activeDescendant: value,
          query: title || value
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _prevProps$verticalAl;

      var newAlign = (_prevProps$verticalAl = prevProps.verticalAlign) === null || _prevProps$verticalAl === void 0 ? void 0 : _prevProps$verticalAl.call(prevProps, this.content, this.target);

      if (newAlign !== prevState.verticalAlign) {
        this.setState({
          verticalAlign: newAlign
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          label = _this$props3.label,
          limit = _this$props3.limit,
          onScroll = _this$props3.onScroll;
      var verticalAlign = this.state.verticalAlign;
      var target = this.renderTarget();
      var contents = this.renderContents();
      return /*#__PURE__*/React.createElement(Fragment, null, label && /*#__PURE__*/React.createElement("label", {
        htmlFor: this.id,
        className: this.theme.label
      }, label), /*#__PURE__*/React.createElement(Perimeter, {
        disableOnClickOutside: true,
        ref: this.setWrapperRef,
        onClickOutside: this.handleClose
      }, /*#__PURE__*/React.createElement("div", {
        id: "".concat(this.id, ":combobox"),
        className: this.theme.combobox
      }, target, contents && /*#__PURE__*/React.createElement("div", {
        className: classnames(this.theme.popup, this.theme[verticalAlign]),
        style: {
          maxHeight: "".concat(limit * 48, "px"),
          overflowY: this.isExpanded() ? 'scroll' : 'hidden'
        },
        ref: this.setContentRef,
        onScroll: onScroll
      }, contents))));
    }
  }]);

  return ComboboxView;
}(Component);

_defineProperty(ComboboxView, "propTypes", {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  isLoading: PropTypes.bool,
  onChange: PropTypes.func,
  onChangeInput: PropTypes.func,
  onChangeOption: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  onRetry: PropTypes.func,
  onScroll: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  disabled: PropTypes.bool,
  initialValue: PropTypes.string,

  /**
   * Первоначальный state.query
   */
  initialQuery: PropTypes.string,

  /**
   * Справочник подстановки
   */
  options: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    value: PropTypes.string.isRequired,
    icon: PropTypes.string
  })),

  /**
   * Вертикальное выравнивание Content относительно Target
   */
  verticalAlign: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf(['top', 'bottom'])]),

  /**
   * Статус загрузки данных (noMatches - нет совпадений, error - ошибка загрузки, long - долгая загрузка, off - справочник не предоставляется)
   */
  requestMode: PropTypes.oneOf(['noMatches', 'error', 'long']),

  /**
   * Тект для обработки случаев: не найдено совпадений, долгая загрузка, ошибка загрузки, повторить загрузку
   */
  translations: PropTypes.shape({
    requestTimeout: PropTypes.string,
    noMatches: PropTypes.string,
    repeat: PropTypes.string,
    requestError: PropTypes.string
  }),
  a11y: PropTypes.shape({
    optionsLabel: PropTypes.string.isRequired
  }).isRequired,
  error: PropTypes.string
});

_defineProperty(ComboboxView, "defaultProps", {
  initialQuery: void 0,
  initialValue: void 0,
  onChange: _.noop,
  onChangeInput: _.noop,
  onChangeOption: _.noop,
  id: void 0,
  options: [],
  onOpen: _.noop,
  onClose: _.noop,
  onScroll: _.noop,
  onBlur: _.noop,
  onFocus: _.noop,
  verticalAlign: autoTopCheckByWindow,
  mode: 'on',
  requestMode: void 0,
  placeholder: void 0,
  isLoading: false,
  onRetry: _.noop,
  translations: {
    requestTimeout: void 0,
    noMatches: void 0,
    repeat: void 0,
    requestError: void 0
  },
  error: '',
  disabled: false
});

ComboboxView.displayName = 'Combobox.View';

export default ComboboxView;
export { ComboboxView };
//# sourceMappingURL=combobox-view.js.map
