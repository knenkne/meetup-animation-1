import { c as _inherits, d as _createSuper, e as _classCallCheck, f as _defineProperty, g as _assertThisInitialized, h as _createClass, j as _objectWithoutProperties } from '../../_rollupPluginBabelHelpers-687385f0.js';
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
import 'bignumber.js';
import { conformToMask } from 'text-mask-core/dist/textMaskCore';
import 'text-mask-addons/dist/createNumberMask';
import { getInputDiff } from '../utils.js';
import '../input.css';
import { Input } from '../input.js';
import '../masked/masked-format.js';
import { Masked } from '../masked/masked.js';
import '../hoc/typeahead.css';
import { typeaheadFactory } from '../hoc/typeahead.js';
import { unmaskedPhone, phoneMask, trimPhoneRight } from './phone-mask.js';

var EMPTY_STRING = '';
var PLUS = '+';
var COUNTRY_CODE = '7';
var COUNTRY_CODE_PREFIX = "".concat(PLUS).concat(COUNTRY_CODE, " (");
var PLACEHOLDER = "".concat(COUNTRY_CODE_PREFIX, "___) ___-__-__");
var START_OF_DELETING = COUNTRY_CODE_PREFIX.length;
var createMaskedTypeahead = typeaheadFactory(function (props) {
  return _.extend({}, props, {
    guide: false
  });
}, function (props) {
  return _.extend({}, props, {
    guide: true
  });
});
var MaskedTypeahead = createMaskedTypeahead(Masked);

var getConformedValue = function getConformedValue(value, arrayMask) {
  var maskedValue = _.get(conformToMask(COUNTRY_CODE_PREFIX + value, arrayMask), 'conformedValue', EMPTY_STRING);

  return trimPhoneRight(maskedValue);
};
/* eslint-disable valid-jsdoc, comment: некорректный парсинг jsdoc */

/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=phone)
 * Поле ввода российского номера телефона
 * Справочник для автономной работы предоставляется сайтом [На Связи](https://na-svyazi.ru/russia_code.htm)
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */


var LocalPhone = /*#__PURE__*/function (_React$Component) {
  _inherits(LocalPhone, _React$Component);

  var _super = _createSuper(LocalPhone);

  function LocalPhone(props) {
    var _this;

    _classCallCheck(this, LocalPhone);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      var _event$target = event.target,
          selectionStart = _event$target.selectionStart,
          selectionEnd = _event$target.selectionEnd;
      _this.prevSelectionStart = selectionStart < START_OF_DELETING && selectionStart === selectionEnd ? event.target.setSelectionRange(START_OF_DELETING, START_OF_DELETING) : selectionStart;

      _this.props.onKeyDown(event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseUp", function (event) {
      var _event$target2 = event.target,
          selectionStart = _event$target2.selectionStart,
          selectionEnd = _event$target2.selectionEnd;
      _this.prevSelectionStart = selectionStart < START_OF_DELETING && selectionStart === selectionEnd ? event.target.setSelectionRange(START_OF_DELETING, START_OF_DELETING) : selectionStart;

      _this.props.onMouseUp(event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleContextMenu", function (event) {
      _this.prevSelectionStart = event.target.selectionStart;

      _this.props.onContextMenu(event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnChange", function (e) {
      if (Masked.utils.isMaskedValue(_this.props.value)) {
        _this.cache = EMPTY_STRING;

        _this.props.onChange(getInputDiff(e.target.value, _this.prevSelectionStart, e.target.selectionStart), e);
      } else {
        _this.cache = e.target.value;

        _this.props.onChange(unmaskedPhone(e.target.value), e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnBlur", function (e) {
      var _this$props = _this.props,
          initialValue = _this$props.initialValue,
          onBlur = _this$props.onBlur;
      var fieldValue = e.target.value;

      if (unmaskedPhone(initialValue) !== unmaskedPhone(fieldValue)) {
        onBlur(unmaskedPhone(fieldValue), e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "makePhoneMask", function (value) {
      return Masked.utils.maskedFormat(phoneMask(value, _this.state.suggest), value);
    });

    _this.state = {
      suggest: props.suggest
    };
    _this.cache = EMPTY_STRING;

    if (_.isEmpty(props.suggest)) {
      import('../../phone-codes-8864f32d.js').then(function (_ref) {
        var suggest = _ref.default;

        if (!_this.unmount) {
          _this.setState({
            suggest: suggest
          });
        }
      });
    }

    return _this;
  }

  _createClass(LocalPhone, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unmount = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          value = _this$props2.value,
          theme = _this$props2.theme,
          props = _objectWithoutProperties(_this$props2, ["value", "theme"]);

      var rawValue = unmaskedPhone(value);
      var calculatedMask = this.makePhoneMask(rawValue);
      var maskedValue = rawValue ? getConformedValue(value, calculatedMask) : COUNTRY_CODE_PREFIX;
      var newValue = maskedValue === trimPhoneRight(this.cache) ? this.cache : maskedValue;

      var passedProps = _(props).omit('suggest').extend({
        placeholder: PLACEHOLDER,
        theme: theme,
        value: newValue,
        mask: this.makePhoneMask,
        onChange: this.handleOnChange,
        onBlur: this.handleOnBlur,
        onKeyDown: this.handleKeyDown,
        onMouseUp: this.handleMouseUp,
        onContextMenu: this.handleContextMenu,
        placeholderChar: '_',
        type: 'tel'
      }).value();

      return /*#__PURE__*/React.createElement(MaskedTypeahead, passedProps);
    }
  }]);

  return LocalPhone;
}(React.Component);

_defineProperty(LocalPhone, "normalize", function (event) {
  var target = event.target;
  var selectionStart = target.selectionStart;
  var normalizedValue = target.value;
  var firstChar = normalizedValue.charAt(0);

  if (firstChar === COUNTRY_CODE && selectionStart === 0) {
    normalizedValue = normalizedValue.substring(START_OF_DELETING);
  } else if (firstChar !== PLUS && normalizedValue.length > 1) {
    if (normalizedValue.charAt(1) === PLUS && selectionStart === 1) {
      normalizedValue = normalizedValue.substring(1) + firstChar;
    } else {
      normalizedValue = COUNTRY_CODE_PREFIX + normalizedValue;
    }
  }

  if (target.value !== normalizedValue) {
    target.value = normalizedValue;
    target.setSelectionRange(selectionStart, selectionStart);
  }
});

_defineProperty(LocalPhone, "displayName", 'Input.LocalPhone');

_defineProperty(LocalPhone, "getFormattedValue", function () {
  var _conformToMask;

  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return (_conformToMask = conformToMask(value, Masked.utils.maskedFormat(phoneMask(value), value))) === null || _conformToMask === void 0 ? void 0 : _conformToMask.conformedValue;
});

LocalPhone.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  suggest: PropTypes.array,
  onKeyDown: PropTypes.func,
  onMouseUp: PropTypes.func,
  onContextMenu: PropTypes.func,
  initialValue: PropTypes.string,
  theme: PropTypes.shape({
    input: PropTypes.string,
    phoneBlock: PropTypes.string,
    block: PropTypes.string,
    disabled: PropTypes.string,
    error: PropTypes.string,
    icon: PropTypes.string,
    inputIcon: PropTypes.string
  })
};
LocalPhone.defaultProps = {
  value: '',
  onChange: _.noop,
  onFocus: _.noop,
  onBlur: _.noop,
  onKeyDown: _.noop,
  onMouseUp: _.noop,
  onContextMenu: _.noop,
  suggest: [],
  initialValue: '',
  theme: Input.theme
};

export { LocalPhone };
//# sourceMappingURL=local-phone.js.map
