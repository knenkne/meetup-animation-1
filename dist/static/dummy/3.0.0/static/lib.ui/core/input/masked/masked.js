import { c as _inherits, d as _createSuper, e as _classCallCheck, f as _defineProperty, g as _assertThisInitialized, h as _createClass } from '../../_rollupPluginBabelHelpers-687385f0.js';
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
import { createTextMaskInputElement } from 'text-mask-core/dist/textMaskCore';
import defaultTheme from '../input.css';
import WrappedInput from '../input.js';
import { maskedFormat, isMaskedValue, MASK_SYMBOL } from './masked-format.js';

/* eslint-disable valid-jsdoc, comment: некорректный парсинг jsdoc */

/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=input%20general)
 * Поле ввода по маске
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var Masked = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Masked, _React$PureComponent);

  var _super = _createSuper(Masked);

  function Masked() {
    var _this;

    _classCallCheck(this, Masked);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "setTextBoxRef", function (node) {
      _this.textBox = node;

      _this.props.refWrapper(node);
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      _this.props.onBeforeChange(event);

      _this.textMaskInputElement.update();

      _this.props.onChange(event);
    });

    return _this;
  }

  _createClass(Masked, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.textMaskInputElement = createTextMaskInputElement({
        inputElement: this.textBox,
        mask: this.props.mask,
        pipe: this.props.pipe,
        guide: this.props.guide,
        placeholderChar: this.props.placeholderChar,
        keepCharPositions: this.props.keepCharPositions
      });
      this.textMaskInputElement.update(this.props.value);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.textMaskInputElement.update(this.props.value);
    }
  }, {
    key: "render",
    value: function render() {
      var omittedProps = _(this.props).omit(['mask', 'pipe', 'guide', 'placeholderChar', 'keepCharPositions', 'onBeforeChange']).extend({
        onChange: this.handleChange,
        refWrapper: this.setTextBoxRef
      }).value();

      return /*#__PURE__*/React.createElement(WrappedInput, omittedProps);
    }
  }]);

  return Masked;
}(React.PureComponent);

_defineProperty(Masked, "propTypes", {
  // eslint-disable react/no-unused-prop-types, comment: сквозной проброс пропов
  disabled: PropTypes.bool,
  theme: PropTypes.shape({
    input: PropTypes.string,
    error: PropTypes.string,
    readonly: PropTypes.string,
    disabled: PropTypes.string
  }),
  refWrapper: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func,

  /**
   * Mask of Input. For details see: text-mask-core package
   */
  mask: PropTypes.oneOfType([PropTypes.array, PropTypes.func]).isRequired,

  /**
   * Pipe of Input. For details see: text-mask-core package
   */
  pipe: PropTypes.func,

  /**
   * Проп для постоянного отображения маски ввода, а не по мере заполнения
   */
  guide: PropTypes.bool,

  /**
   * Проп для сохранения позиции у символов, которые идут после удаляемых символов
   */
  keepCharPositions: PropTypes.bool,

  /**
   * Указатель заполняемых символов
   */
  placeholderChar: PropTypes.string,

  /**
   * Функция, которая должна обработать элемент ввода (значение, курсор) перед тем,
   * как отправить значение в mask (подмена символов, корректировка курсора, дополнительный запрет символов)
   */
  onBeforeChange: PropTypes.func // eslint-enable

});

_defineProperty(Masked, "defaultProps", {
  disabled: false,
  refWrapper: _.noop,
  theme: defaultTheme,
  value: '',
  onChange: _.noop,
  pipe: void 0,
  guide: false,
  keepCharPositions: false,
  placeholderChar: '_',
  onBeforeChange: _.noop
});

Masked.displayName = 'Input.Masked';
Masked.utils = {
  maskedFormat: maskedFormat,
  isMaskedValue: isMaskedValue,
  MASK_SYMBOL: MASK_SYMBOL
};

export { Masked };
//# sourceMappingURL=masked.js.map
