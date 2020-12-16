import { c as _inherits, d as _createSuper, e as _classCallCheck, f as _defineProperty, g as _assertThisInitialized, h as _createClass, _ as _extends } from '../../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import 'classnames';
import '../../utils/get-display-name.js';
import '../../utils/hoc/style.css';
import '../../utils/hoc/deprecate.js';
import '../../utils/hoc/experimental.js';
import '../../utils/hoc/error-adapter.js';
import '../../utils/hoc/omittere.js';
import '../../utils/hoc/accessibility-relocation.js';
import '../../utils/handlers.js';
import '../../utils/pluralize.js';
import '../../utils/scroll-to.js';
import '../../utils/format-phone-number.js';
import '../../utils/memoize-func-with-args.js';
import '../../utils/auto-top-check-by-window.js';
import '../../utils/merge-theme.js';
import '../../utils/styles/media.config.css';
import '../../utils/adaptive.js';
import '../../utils/pseudo/pseudo-button.js';
import '../../utils/get-card-icon.js';
import '../../utils/get-ivestments-icon.js';
import '../../utils/get-metal-icon.js';
import '../../utils/get-target-icon.js';
import '../../icon/style.css';
import '../../icon/icon.js';
import '../../index-85b17782.js';
import '../../external-969f6c5f.js';
import '../../icon/index.js';
import '../../utils/set-project-id.js';
import '../../utils/make-direction.js';
import '../../utils/show-error.js';
import '../../button/command/style.css';
import '../../button/command/index.js';
import '../../loader/loader.css';
import '../../loader/loader-themes/pulse-loader.css';
import '../../loader/loader-themes/jump-loader.css';
import '../../loader/loader-themes/swap-loader.css';
import { Loader } from '../../loader/loader.js';
import '../../loader/icon-loader.css';
import '../../loader/icon-loader.js';
import '../../loader/button-loader.css';
import '../../loader/utils.js';
import '../../loader/button-loader.js';
import '../../loader/index.js';
import '../../button/icon/style.css';
import '../../button/icon/index.js';
import '../../tooltip/style.css';
import '../../tooltip/tip.js';
import '../../tooltip/tooltip.js';
import '../../tooltip/hover-tooltip.js';
import 'react-onclickoutside';
import '../../perimeter/perimeter.js';
import '../../perimeter/index.js';
import '../../tooltip/click-tooltip.js';
import '../../tooltip/index.js';
import '../../button/info/style.css';
import '../../button/info/index.js';
import '../../button/radio-segmented/style.css';
import '../../button/radio-segmented/index.js';
import '../../button/style.css';
import '../../button/index.js';
import '../input.css';
import '../input.js';
import '../../dropdown/style.css';
import '../../dropdown/target-button.js';
import '../../dropdown/utils.js';
import '../../dropdown/contents.js';
import '../../dropdown/group.js';
import '../../dropdown/select/select.css';
import '../../dropdown/option.js';
import '../../link/link.css';
import '../../link/components/simple-external-link.js';
import '../../link/link.js';
import '../../dropdown/link.js';
import '../../dropdown/dropdown.js';
import '../../dropdown/select/item.js';
import '../../dropdown/select/select.js';
import { Dropdown } from '../../dropdown/index.js';
import '../../marked-text/style.css';
import '../../marked-text/marked-text.js';
import style from './style.css';
import { optionThemeWithIcon, optionTheme, dropdownTheme, inputTheme, contentsTheme, loaderTheme } from './themes.js';
import { TargetInput } from './target-input.js';
import { Long } from './long.js';
import { NoMatches } from './no-matches.js';
import { Error } from './error.js';
import { Option } from './option.js';

/* eslint-disable valid-jsdoc, comment: некорректный парсинг jsdoc */

/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=input%20suggest)
 * Текстовое поле с выпадающим списком
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var Suggest = /*#__PURE__*/function (_React$Component) {
  _inherits(Suggest, _React$Component);

  var _super = _createSuper(Suggest);

  function Suggest() {
    var _this;

    _classCallCheck(this, Suggest);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "getModeRender", function () {
      var _this$props = _this.props,
          options = _this$props.options,
          value = _this$props.value,
          query = _this$props.query,
          onRetry = _this$props.onRetry,
          mode = _this$props.mode,
          iconFromCode = _this$props.iconFromCode,
          _this$props$translati = _this$props.translations,
          requestTimeout = _this$props$translati.requestTimeout,
          repeat = _this$props$translati.repeat,
          noMatches = _this$props$translati.noMatches,
          requestError = _this$props$translati.requestError;

      switch (mode) {
        case 'long':
          return requestTimeout && /*#__PURE__*/React.createElement(Long, {
            onClick: onRetry,
            title: repeat
          }, requestTimeout);

        case 'error':
          return requestError && /*#__PURE__*/React.createElement(Error, {
            onClick: onRetry,
            title: repeat
          }, requestError);

        case 'noMatches':
          return noMatches && /*#__PURE__*/React.createElement(NoMatches, null, noMatches);

        default:
          return _.map(options, function (_ref) {
            var optionValue = _ref.value,
                title = _ref.title,
                description = _ref.description,
                icon = _ref.icon;
            return /*#__PURE__*/React.createElement(Option, {
              key: optionValue,
              value: optionValue,
              title: title,
              description: description,
              theme: icon ? optionThemeWithIcon : optionTheme,
              searchString: query || value,
              icon: icon,
              iconFromCode: iconFromCode
            });
          });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (event) {
      _this.props.onFocus(_this.props.value, event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleChangeOption", function (value) {
      _this.props.onChangeOption(value);

      _this.props.onChange(value);
    });

    _defineProperty(_assertThisInitialized(_this), "handleChangeInput", function (event) {
      if (_.isObject(event)) {
        _this.props.onChangeInput(event.target.value, event);

        _this.props.onChange(event.target.value, event);
      } else {
        _this.props.onChangeInput(event);

        _this.props.onChange(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
      _this.props.onBlur(_this.props.value, event);
    });

    return _this;
  }

  _createClass(Suggest, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          options = _this$props2.options,
          disabled = _this$props2.disabled,
          value = _this$props2.value,
          query = _this$props2.query,
          onScroll = _this$props2.onScroll,
          mode = _this$props2.mode,
          isLoading = _this$props2.isLoading,
          isSearch = _this$props2.isSearch;

      var selectedOption = _.find(options, {
        value: value
      });

      var icon = _.get(selectedOption, 'icon');

      var title = _.get(selectedOption, 'title');

      return /*#__PURE__*/React.createElement(Dropdown, {
        mode: "focus",
        onChange: this.handleChangeOption,
        disabled: disabled,
        theme: dropdownTheme,
        value: value
      }, /*#__PURE__*/React.createElement(TargetInput, _extends({}, this.props, {
        value: title || query || value,
        onChange: this.handleChangeInput,
        icon: icon,
        mode: isSearch ? 'search' : void 0,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        theme: inputTheme,
        withOptions: !mode && !!options.length
      })), /*#__PURE__*/React.createElement(Dropdown.Contents, {
        theme: contentsTheme,
        align: Dropdown.utils.autoLeftCheckByWindow,
        onScroll: onScroll
      }, this.getModeRender(), isLoading && !mode && /*#__PURE__*/React.createElement("div", {
        className: style.additionalInfo
      }, /*#__PURE__*/React.createElement(Loader.Button, {
        theme: loaderTheme
      }))));
    }
  }]);

  return Suggest;
}(React.Component);

_defineProperty(Suggest, "displayName", 'Input.Suggest');

_defineProperty(Suggest, "TargetInput", TargetInput);

_defineProperty(Suggest, "Long", Long);

_defineProperty(Suggest, "NoMatches", NoMatches);

_defineProperty(Suggest, "Error", Error);

_defineProperty(Suggest, "theme", style);

_defineProperty(Suggest, "propTypes", {
  value: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  mode: PropTypes.oneOf(['error', 'noMatches', 'long', void 0]),
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  translations: PropTypes.shape({
    requestTimeout: PropTypes.string,
    noMatches: PropTypes.string,
    repeat: PropTypes.string,
    requestError: PropTypes.string
  }),

  /**
   * Компонент, который будет формировать ввод в Dropdown.TargetInput
   */
  inputComponent: PropTypes.func,

  /**
   * Строка ввода (не путать с value)
   */
  query: PropTypes.string,

  /**
   * Опции
   */
  options: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    value: PropTypes.string.isRequired,
    icon: PropTypes.string
  })),

  /**
   * Поле ввода под поиск
   */
  isSearch: PropTypes.bool,

  /**
   * Иконка должна быть взята из Icon (при false - из img)
   */
  iconFromCode: PropTypes.bool,

  /**
   * При смене опции
   */
  onChangeOption: PropTypes.func,

  /**
   * При смене ввода
   */
  onChangeInput: PropTypes.func,

  /**
   * При нажатии "Повторить"
   */
  onRetry: PropTypes.func,

  /**
   * При смене опции или ввода
   */
  onChange: PropTypes.func,

  /**
   * При скролле плашки опций
   */
  onScroll: PropTypes.func
});

_defineProperty(Suggest, "defaultProps", {
  inputComponent: void 0,
  onChangeOption: _.noop,
  onChangeInput: _.noop,
  onRetry: _.noop,
  onFocus: _.noop,
  onChange: _.noop,
  onBlur: _.noop,
  onScroll: _.noop,
  value: void 0,
  query: void 0,
  mode: void 0,
  disabled: false,
  isLoading: false,
  error: void 0,
  options: [],
  iconFromCode: true,
  isSearch: false,
  translations: {
    requestTimeout: void 0,
    noMatches: void 0,
    repeat: void 0,
    requestError: void 0
  },
  placeholder: void 0
});

_defineProperty(Suggest, "Option", Option);

export default Suggest;
export { Suggest };
//# sourceMappingURL=suggest.js.map
