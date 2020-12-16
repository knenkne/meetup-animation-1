import { c as _inherits, d as _createSuper, e as _classCallCheck, f as _defineProperty, g as _assertThisInitialized, h as _createClass, _ as _extends, l as _asyncToGenerator } from '../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import 'classnames';
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
import '../loader/loader.js';
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
import '../perimeter/index.js';
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
import '../input/index.js';
import '../listbox/utils.js';
import { canBeRequestedByTyping, canBeRequestedByScrolling } from './utils.js';
import './combobox.css';
import './long.js';
import './error.js';
import './no-matches.js';
import { ComboboxView } from './combobox-view.js';

/**
 * Семантическое текстовое поле с выпадающим списком с локальным хранением данных и динамической работой по таймаутам
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var ComboboxWithRequest = /*#__PURE__*/function (_React$Component) {
  _inherits(ComboboxWithRequest, _React$Component);

  var _super = _createSuper(ComboboxWithRequest);

  function ComboboxWithRequest() {
    var _this$props$options$f;

    var _this;

    _classCallCheck(this, ComboboxWithRequest);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      query: _this.props.initialQuery || ((_this$props$options$f = _this.props.options.find(function (option) {
        return (option === null || option === void 0 ? void 0 : option.value) === _this.props.initialValue;
      })) === null || _this$props$options$f === void 0 ? void 0 : _this$props$options$f.title) || _this.props.initialValue || '',
      options: _this.props.options,
      isLoading: false,
      isLongRequest: false,
      isAlreadyRequested: false,
      isFetchError: false,
      isFullSuggestLoaded: false
    });

    _defineProperty(_assertThisInitialized(_this), "getCurrentOption", function (value) {
      return _.find(_this.state.options, {
        value: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChangeInput", function (query, event) {
      clearTimeout(_this.requestTimer);
      var _this$props = _this.props,
          value = _this$props.value,
          keyboardTimeout = _this$props.keyboardTimeout;

      _this.setState({
        query: query,
        options: [],
        isFullSuggestLoaded: false,
        isAlreadyRequested: false,
        isFetchError: false
      });

      _this.props.onChangeInput(query, event);

      if (canBeRequestedByTyping(query, value)) {
        _this.requestTimer = setTimeout(function () {
          _this.makeRequest(query);
        }, keyboardTimeout);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleScroll", function (event) {
      var _this$state = _this.state,
          query = _this$state.query,
          isFullSuggestLoaded = _this$state.isFullSuggestLoaded,
          isLoading = _this$state.isLoading;
      var _this$props2 = _this.props,
          value = _this$props2.value,
          withPagination = _this$props2.withPagination;

      if (canBeRequestedByScrolling(withPagination, event, isFullSuggestLoaded, isLoading) && canBeRequestedByTyping(query, value)) {
        _this.makeRequest(query, true);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleChangeOption", function (value) {
      var query = _this.getCurrentOption(value).title;

      _this.setState({
        query: query
      });

      _this.props.onChangeOption(value, query);
    });

    _defineProperty(_assertThisInitialized(_this), "handleRetry", function () {
      _this.makeRequest(_this.state.query);
    });

    return _this;
  }

  _createClass(ComboboxWithRequest, [{
    key: "makeRequest",
    value: function () {
      var _makeRequest = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(query, isAdding) {
        var _this2 = this;

        var requestParams, suggestions;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                clearTimeout(this.longRequestTimer);
                this.setState({
                  isLoading: true,
                  isLongRequest: false
                });
                requestParams = {
                  query: query
                };
                this.recentRequest = requestParams;

                if (this.props.requestTimeout) {
                  this.longRequestTimer = setTimeout(function () {
                    _this2.setState({
                      isLongRequest: true
                    });
                  }, this.props.requestTimeout);
                }

                _context.prev = 5;
                _context.next = 8;
                return this.props.onDataRequest(requestParams, isAdding);

              case 8:
                suggestions = _context.sent;

                if (!suggestions) {
                  this.setState({
                    isLoading: false,
                    isFetchError: false,
                    isFullSuggestLoaded: true,
                    isLongRequest: false,
                    isAlreadyRequested: true
                  });
                } else if (_.isEqual(this.recentRequest, requestParams)) {
                  this.setState({
                    isLoading: false,
                    options: isAdding ? _.concat(this.state.options, suggestions) : suggestions,
                    isFetchError: false,
                    isFullSuggestLoaded: _.isEmpty(suggestions),
                    isLongRequest: false,
                    isAlreadyRequested: true
                  });
                }

                _context.next = 16;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](5);

                if (_.isEqual(this.recentRequest, requestParams)) {
                  this.setState({
                    isLoading: false,
                    options: [],
                    isFetchError: true,
                    isFullSuggestLoaded: false,
                    isLongRequest: false,
                    isAlreadyRequested: true
                  });
                }

                throw new Error(_context.t0);

              case 16:
                _context.prev = 16;
                clearTimeout(this.longRequestTimer);
                return _context.finish(16);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[5, 12, 16, 19]]);
      }));

      function makeRequest(_x, _x2) {
        return _makeRequest.apply(this, arguments);
      }

      return makeRequest;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          query = _this$state2.query,
          options = _this$state2.options,
          isLoading = _this$state2.isLoading,
          isLongRequest = _this$state2.isLongRequest,
          isFetchError = _this$state2.isFetchError,
          isAlreadyRequested = _this$state2.isAlreadyRequested;
      var requestMode;

      if (isLongRequest) {
        requestMode = 'long';
      } else if (isFetchError) {
        requestMode = 'error';
      } else if (_.isEmpty(options) && query && isAlreadyRequested) {
        requestMode = 'noMatches';
      }

      return /*#__PURE__*/React.createElement(ComboboxView, _extends({}, this.props, {
        options: options,
        requestMode: requestMode,
        isLoading: isLoading,
        onChangeOption: this.handleChangeOption,
        onChangeInput: this.handleChangeInput,
        onRetry: this.handleRetry,
        onScroll: this.handleScroll
      }));
    }
  }]);

  return ComboboxWithRequest;
}(React.Component);

_defineProperty(ComboboxWithRequest, "propTypes", {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onChangeOption: PropTypes.func,
  onChangeInput: PropTypes.func,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  initialValue: PropTypes.string,

  /**
   * Первоначальный state.query
   */
  initialQuery: PropTypes.string,

  /**
   * Первоначальный state.options
   */
  options: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    value: PropTypes.string.isRequired,
    icon: PropTypes.string
  })),

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

  /**
   * Обязательный timeout между последним вводом и возможностью вызова onDataRequest
   */
  keyboardTimeout: PropTypes.number,

  /**
   * Обязательный timeout между началом запроса и включением mode="long"
   */
  requestTimeout: PropTypes.number,

  /**
   * Запрос данных; получает на вход query - введенную строку
   */
  onDataRequest: PropTypes.func,

  /**
   * Включение пагинации на скролл
   */
  withPagination: PropTypes.bool
});

_defineProperty(ComboboxWithRequest, "defaultProps", {
  value: void 0,
  onChange: _.noop,
  onChangeOption: _.noop,
  onChangeInput: _.noop,
  onBlur: _.noop,
  initialQuery: void 0,
  initialValue: void 0,
  options: [],
  keyboardTimeout: 0,
  requestTimeout: void 0,
  onDataRequest: _.noop,
  placeholder: void 0,
  translations: {
    requestTimeout: void 0,
    noMatches: void 0,
    repeat: void 0,
    requestError: void 0
  },
  withPagination: false
});

ComboboxWithRequest.displayName = 'Combobox.WithRequest';

export default ComboboxWithRequest;
export { ComboboxWithRequest };
//# sourceMappingURL=combobox-with-request.js.map
