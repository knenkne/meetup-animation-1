import { c as _inherits, d as _createSuper, e as _classCallCheck, f as _defineProperty, g as _assertThisInitialized, h as _createClass, _ as _extends, l as _asyncToGenerator } from '../../_rollupPluginBabelHelpers-687385f0.js';
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
import '../../loader/loader.js';
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
import '../../dropdown/index.js';
import '../../marked-text/style.css';
import '../../marked-text/marked-text.js';
import './style.css';
import './themes.js';
import './target-input.js';
import './long.js';
import './no-matches.js';
import './error.js';
import './option.js';
import { Suggest } from './suggest.js';
import { canBeRequestedByTyping, canBeRequestedByScrolling } from './utils.js';

/* eslint-disable valid-jsdoc, comment: некорректный парсинг jsdoc */

/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=input%20suggest)
 * Текстовое поле с выпадающим списком с локальным хранением данных и динамической работой по таймаутам
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var SuggestDynamic = /*#__PURE__*/function (_React$Component) {
  _inherits(SuggestDynamic, _React$Component);

  var _super = _createSuper(SuggestDynamic);

  function SuggestDynamic() {
    var _this;

    _classCallCheck(this, SuggestDynamic);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      query: _this.props.initialQuery,
      masked: _this.props.masked,
      options: _this.props.initialOptions,
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

    _defineProperty(_assertThisInitialized(_this), "handleChangeInput", function (event) {
      clearTimeout(_this.requestTimer);
      var _this$props = _this.props,
          mode = _this$props.mode,
          value = _this$props.value,
          keyboardTimeout = _this$props.keyboardTimeout;

      var query = _.get(event, 'target.value', event);

      _this.setState({
        query: query,
        masked: false,
        options: [],
        isFullSuggestLoaded: false,
        isAlreadyRequested: false,
        isFetchError: false
      });

      _this.props.onChangeInput(query, event);

      _this.changeValue(query);

      if (canBeRequestedByTyping(query, _this.state.masked, mode, value)) {
        _this.requestTimer = setTimeout(function () {
          _this.makeRequest(query);
        }, keyboardTimeout);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleScroll", function (event) {
      var _this$state = _this.state,
          query = _this$state.query,
          masked = _this$state.masked,
          isFullSuggestLoaded = _this$state.isFullSuggestLoaded,
          isLoading = _this$state.isLoading;
      var _this$props2 = _this.props,
          mode = _this$props2.mode,
          value = _this$props2.value;

      if (canBeRequestedByScrolling(event, isFullSuggestLoaded, isLoading) && canBeRequestedByTyping(query, masked, mode, value)) {
        _this.makeRequest(query, true);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleChangeOption", function (value) {
      _this.setState({
        query: _this.getCurrentOption(value).title
      });

      _this.props.onChange(value);

      _this.props.onChangeOption(value);
    });

    _defineProperty(_assertThisInitialized(_this), "handleRetry", function () {
      _this.makeRequest(_this.state.query);
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
      _this.props.onBlur(_this.props.value, event);
    });

    _defineProperty(_assertThisInitialized(_this), "changeValue", function (query) {
      var _this$props3 = _this.props,
          mode = _this$props3.mode,
          onChange = _this$props3.onChange,
          value = _this$props3.value;

      if (_this.state.masked || mode === 'only' && value) {
        onChange('');
      } else if (mode === 'off' || mode === 'on') {
        onChange(query);
      }
    });

    return _this;
  }

  _createClass(SuggestDynamic, [{
    key: "UNSAFE_componentWillReceiveProps",
    // eslint-disable-next-line babel/camelcase, comment: React UNSAFE method
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var selectedOption = this.getCurrentOption(nextProps.value);

        if (selectedOption) {
          this.setState({
            query: selectedOption.title
          });
        } else {
          this.setState({
            query: '',
            options: []
          });
        }
      }
    }
  }, {
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
                  query: query,
                  offset: this.state.options.length
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
                return this.props.onDataRequest(query, this.state.options.length);

              case 8:
                suggestions = _context.sent;

                if (_.isEqual(this.recentRequest, requestParams)) {
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
      var mode;

      if (isLongRequest) {
        mode = 'long';
      } else if (isFetchError) {
        mode = 'error';
      } else if (_.isEmpty(options) && query && isAlreadyRequested) {
        mode = 'noMatches';
      }

      return /*#__PURE__*/React.createElement(Suggest, _extends({}, _.omit(this.props, ['onChange', 'query']), {
        options: options,
        mode: mode,
        query: query,
        isLoading: isLoading,
        onChangeOption: this.handleChangeOption,
        onChangeInput: this.handleChangeInput,
        onRetry: this.handleRetry,
        onBlur: this.handleBlur,
        onScroll: this.handleScroll
      }));
    }
  }]);

  return SuggestDynamic;
}(React.Component);

_defineProperty(SuggestDynamic, "displayName", 'Input.Suggest.Dynamic');

_defineProperty(SuggestDynamic, "propTypes", {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onChangeOption: PropTypes.func,
  onChangeInput: PropTypes.func,
  onBlur: PropTypes.func,

  /**
   * Первоначальный state.query
   */
  initialQuery: PropTypes.string,

  /**
   * Первоначальный state.options
   */
  initialOptions: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    value: PropTypes.string.isRequired,
    icon: PropTypes.string
  })),

  /**
   * Считается ли значение маскированным (надо ли его стирать по первому вводу)
   */
  masked: PropTypes.bool,

  /**
   * Обязательный timeout между последним вводом и возможностью вызова onDataRequest
   */
  keyboardTimeout: PropTypes.number,

  /**
   * Обязательный timeout между началом запроса и включением mode="long" у компонента Input.Suggest
   */
  requestTimeout: PropTypes.number,

  /**
   * Режим работы справочника: (only - выбор только из справочника, on - опциональный выбор из справочника, off - справочник не предоставляется)
   */
  mode: PropTypes.oneOf(['only', 'off', 'on']),

  /**
   * Запрос данных; получает на вход query - введенную строку, offset - при скролле
   */
  onDataRequest: PropTypes.func
});

_defineProperty(SuggestDynamic, "defaultProps", {
  value: void 0,
  onChange: _.noop,
  onChangeOption: _.noop,
  onChangeInput: _.noop,
  onBlur: _.noop,
  initialQuery: void 0,
  initialOptions: [],
  masked: false,
  keyboardTimeout: 0,
  requestTimeout: void 0,
  mode: 'off',
  onDataRequest: _.noop
});

export { SuggestDynamic };
//# sourceMappingURL=suggest-dynamic.js.map
