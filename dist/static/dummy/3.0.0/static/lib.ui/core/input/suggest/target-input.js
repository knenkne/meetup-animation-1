import { c as _inherits, d as _createSuper, e as _classCallCheck, f as _defineProperty, g as _assertThisInitialized, h as _createClass, _ as _extends } from '../../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';
import '../../utils/get-display-name.js';
import '../../utils/hoc/style.css';
import '../../utils/hoc/deprecate.js';
import '../../utils/hoc/experimental.js';
import '../../utils/hoc/error-adapter.js';
import { omittere } from '../../utils/hoc/omittere.js';
import '../../utils/hoc/accessibility-relocation.js';
import { handleStopPropagation } from '../../utils/handlers.js';
import '../../utils/pluralize.js';
import '../../utils/scroll-to.js';
import '../../utils/format-phone-number.js';
import { memoizeFuncWithArgs } from '../../utils/memoize-func-with-args.js';
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
import { Icon } from '../../icon/icon.js';
import '../../index-85b17782.js';
import '../../external-969f6c5f.js';
import '../../icon/index.js';
import '../../utils/set-project-id.js';
import '../../utils/make-direction.js';
import '../../utils/show-error.js';
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
import 'react-onclickoutside';
import '../../perimeter/perimeter.js';
import '../../perimeter/index.js';
import '../../button/style.css';
import '../input.css';
import { Input } from '../input.js';
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
import style from './style.css';
import { inputTheme, iconTheme } from './themes.js';

var omitSuggestInput = ['active', 'asyncValidating', 'autofilled', 'dirty', 'dispatch', 'fallbackIcon', 'forceOpened', 'hasServerError', 'icon', 'iconFromCode', 'initialOptions', 'initialQuery', 'initialValue', 'inputComponent', 'invalid', 'isLoading', 'isSearch', 'keyboardTimeout', 'masked', 'mode', 'onChangeInput', 'onChangeOption', 'onDataRequest', 'onRetry', 'options', 'pristine', 'query', 'requestTimeout', 'submitFailed', 'submitting', 'touched', 'translations', 'valid', 'visited', 'warning', 'withOptions'];

var getIconName = function getIconName(mode, iconName) {
  return mode ? "icon:core/common/".concat(mode) : iconName;
};

var TargetInput = /*#__PURE__*/function (_React$Component) {
  _inherits(TargetInput, _React$Component);

  var _super = _createSuper(TargetInput);

  function TargetInput() {
    var _this;

    _classCallCheck(this, TargetInput);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(_args));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function () {
      var _this$props;

      (_this$props = _this.props).onChange.apply(_this$props, arguments);

      if (_this.context.dropdown) {
        _this.context.dropdown.handleOpen();
      }
    });

    return _this;
  }

  _createClass(TargetInput, [{
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props2 = this.props,
          icon = _this$props2.icon,
          fallbackIcon = _this$props2.fallbackIcon,
          value = _this$props2.value,
          disabled = _this$props2.disabled,
          onChange = _this$props2.onChange,
          forceOpened = _this$props2.forceOpened,
          mode = _this$props2.mode,
          withOptions = _this$props2.withOptions,
          Component = _this$props2.inputComponent;
      var iconName = mode || icon;
      return /*#__PURE__*/React.createElement("div", {
        className: classnames(style.input, style[mode], (_classnames = {}, _defineProperty(_classnames, style.inputWithIcon, iconName), _defineProperty(_classnames, style.opened, forceOpened && withOptions), _classnames))
      }, iconName && /*#__PURE__*/React.createElement("span", {
        className: classnames(style.inputIcon, _defineProperty({}, style.itemIconFallback, fallbackIcon))
      }, this.renderIcon(iconName)), /*#__PURE__*/React.createElement(Component, _extends({
        autoComplete: "none"
      }, this.props, {
        theme: inputTheme,
        onChange: this.handleChange
      })), value && !disabled && /*#__PURE__*/React.createElement("button", {
        className: style.close,
        type: "button",
        onClick: memoizeFuncWithArgs(onChange, ''),
        "aria-hidden": true,
        tabIndex: -1,
        onFocus: handleStopPropagation
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "icon:core/common/close"
      })));
    }
  }, {
    key: "renderIcon",
    value: function renderIcon(iconName) {
      var _this$props3 = this.props,
          icon = _this$props3.icon,
          iconFromCode = _this$props3.iconFromCode,
          fallbackIcon = _this$props3.fallbackIcon,
          mode = _this$props3.mode;

      if (mode || icon && iconFromCode) {
        return /*#__PURE__*/React.createElement(Icon, {
          name: getIconName(mode, iconName),
          theme: iconTheme,
          "data-text": fallbackIcon,
          mode: fallbackIcon ? 'fallback' : void 0
        });
      } else if (icon) {
        return /*#__PURE__*/React.createElement("img", {
          className: style.img,
          alt: fallbackIcon || '',
          src: icon
        });
      }

      return void 0;
    }
  }]);

  return TargetInput;
}(React.Component);
TargetInput.propTypes = {
  icon: PropTypes.string,
  fallbackIcon: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  iconFromCode: PropTypes.bool,
  disabled: PropTypes.bool,
  forceOpened: PropTypes.bool,
  mode: PropTypes.oneOf(['search', void 0]),
  inputComponent: PropTypes.func,
  withOptions: PropTypes.bool
};
TargetInput.contextTypes = {
  dropdown: PropTypes.shape({
    onOpen: PropTypes.func
  })
};
TargetInput.defaultProps = {
  icon: void 0,
  fallbackIcon: void 0,
  value: '',
  onChange: _.noop,
  iconFromCode: false,
  disabled: false,
  forceOpened: false,
  mode: void 0,
  inputComponent: omittere(omitSuggestInput)(Input),
  withOptions: false
};
TargetInput.displayName = 'Input.Suggest.TargetInput';

export { TargetInput };
//# sourceMappingURL=target-input.js.map
