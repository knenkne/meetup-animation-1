import { c as _inherits, d as _createSuper, e as _classCallCheck, f as _defineProperty, g as _assertThisInitialized, h as _createClass, j as _objectWithoutProperties, _ as _extends } from '../../_rollupPluginBabelHelpers-687385f0.js';
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
import '../../typography/style.css';
import '../../typography/headline.js';
import '../../typography/title.js';
import '../../typography/subheader.js';
import '../../typography/caption.js';
import '../../typography/uppercase.js';
import '../../typography/description.js';
import '../../typography/index.js';
import '../../currency/locales.js';
import '../../currency/options.js';
import '../../currency/style.css';
import '../../currency/currency.js';
import 'bignumber.js';
import 'text-mask-core/dist/textMaskCore';
import 'text-mask-addons/dist/createNumberMask';
import '../../input/utils.js';
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
import 'date-fns/esm/locale/ru';
import { YEAR_FORMAT, underScoreWidthSpaceRegExp, MASK_YEAR, MASK_YEAR_INVALID, EMPTY_STRING, LOCALE } from '../constants.js';
import { setYear, isValid, format, toDate } from 'date-fns';
import '../../input/input.css';
import '../../input/input.js';
import '../../input/hoc/auto-size.js';
import '../../input/masked/masked-format.js';
import '../../input/masked/masked.js';
import '../../input/numeric/numeric.js';
import '../../input/counter/counter.css';
import '../../input/counter/counter-control.js';
import '../../input/counter/counter.js';
import '../../input/text/text.css';
import '../../input/text/text.js';
import '../../input/currency/currency.js';
import '../../input/money/money.js';
import '../../input/password/eye-style.css';
import '../../input/password/eye.js';
import '../../input/password/input-style.css';
import '../../input/password/password.js';
import '../../input/currency-select/currency-select.js';
import '../../input/currency-select/currency-select.css';
import '../../input/currency-select/currency-select-option.js';
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
import '../../input/suggest/style.css';
import '../../input/suggest/themes.js';
import '../../input/suggest/target-input.js';
import '../../input/suggest/long.js';
import '../../input/suggest/no-matches.js';
import '../../input/suggest/error.js';
import '../../input/suggest/option.js';
import '../../input/suggest/suggest.js';
import '../../input/suggest/utils.js';
import '../../input/suggest/suggest-dynamic.js';
import '../../input/suggest/index.js';
import '../../input/hoc/typeahead.css';
import '../../input/hoc/typeahead.js';
import '../../input/phone/phone-mask.js';
import '../../input/phone/local-phone.js';
import '../../input/hoc/keep-char-positions-typeahead.js';
import '../../input/hoc/tooltiped.js';
import 'remarkable';
import 'remarkable/lib/common/utils';
import '../../markdown/utils.js';
import '../../markdown/style.css';
import '../../markdown/full.js';
import '../../markdown/short.js';
import '../../markdown/index.js';
import '../../labeled/labeled.css';
import '../../labeled/index.js';
import '../../input/hoc/labeled.js';
import { Input } from '../../input/index.js';
import { fullISOFormat, dateStringValidation } from '../utils.js';
import '../style.css';
import style from '../calendar-input.css';
import { IconBlock } from '../components/icon-block/icon-block.js';

var defaultTheme = _.merge({}, Input.theme, style);

var makeFullISOString = function makeFullISOString(year, date) {
  return year.length < YEAR_FORMAT.length || underScoreWidthSpaceRegExp.test(year) ? year : fullISOFormat(setYear(isValid(date) ? date : new Date(), year));
};

var valueFormatting = function valueFormatting(value) {
  if (Input.Masked.utils.isMaskedValue(value)) {
    return value;
  } else if (value.length > MASK_YEAR.length && isValid(value) && !underScoreWidthSpaceRegExp.test(value)) {
    return format(toDate(value), YEAR_FORMAT, LOCALE);
  }

  return value;
};

var YearInput = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(YearInput, _React$PureComponent);

  var _super = _createSuper(YearInput);

  function YearInput() {
    var _this;

    _classCallCheck(this, YearInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      baseDate: _this.props.value
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      if (Input.Masked.utils.isMaskedValue(_this.props.value)) {
        _this.props.onChange(Input.getInputDiff(event.target.value, _this.prevSelectionStart, event.target.selectionStart), event);
      } else {
        _this.props.onChange(makeFullISOString(event.target.value, _this.state.baseDate), event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (event) {
      _this.props.onFocus(makeFullISOString(event.target.value, _this.state.baseDate), event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
      _this.props.onBlur(makeFullISOString(event.target.value, _this.state.baseDate), event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      _this.prevSelectionStart = event.target.selectionStart;

      _this.props.onKeyDown(event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleContextMenu", function (event) {
      _this.prevSelectionStart = event.target.selectionStart;

      _this.props.onContextMenu(event);
    });

    return _this;
  }

  _createClass(YearInput, [{
    key: "UNSAFE_componentWillReceiveProps",
    // eslint-disable-next-line babel/camelcase, comment: React UNSAFE method
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        if (dateStringValidation(nextProps.value)) {
          this.setState({
            baseDate: nextProps.value
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          value = _this$props.value,
          disabled = _this$props.disabled,
          theme = _this$props.theme,
          passedProps = _objectWithoutProperties(_this$props, ["value", "disabled", "theme"]);

      var passingValue = valueFormatting(value);
      return /*#__PURE__*/React.createElement("div", {
        className: theme.calendarMonthYearBlock
      }, /*#__PURE__*/React.createElement(Input.Masked.Typeahead, _extends({
        inputMode: "decimal"
      }, passedProps, {
        value: passingValue,
        mask: Input.Masked.utils.maskedFormat(value.length === MASK_YEAR.length ? MASK_YEAR : MASK_YEAR_INVALID, value),
        guide: false,
        placeholderChar: "_",
        placeholder: disabled ? EMPTY_STRING : '____',
        autoComplete: "off",
        onChange: this.handleChange,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onKeyDown: this.handleKeyDown,
        onContextMenu: this.handleContextMenu,
        disabled: disabled,
        theme: theme
      })), !disabled && /*#__PURE__*/React.createElement(IconBlock, {
        className: theme.iconPosition
      }));
    }
  }]);

  return YearInput;
}(React.PureComponent);
YearInput.propTypes = {
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyDown: PropTypes.func,
  onContextMenu: PropTypes.func,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  theme: PropTypes.shape({
    input: PropTypes.string,
    calendarMonthYearBlock: PropTypes.string,
    iconPosition: PropTypes.string,
    block: PropTypes.string,
    disabled: PropTypes.string,
    error: PropTypes.string,
    icon: PropTypes.string,
    inputIcon: PropTypes.string
  })
};
YearInput.defaultProps = {
  value: '',
  error: void 0,
  onChange: _.noop,
  onFocus: _.noop,
  onBlur: _.noop,
  onKeyDown: _.noop,
  onContextMenu: _.noop,
  name: EMPTY_STRING,
  disabled: false,
  theme: defaultTheme
};
YearInput.theme = defaultTheme;

export { YearInput };
//# sourceMappingURL=year-input.js.map
