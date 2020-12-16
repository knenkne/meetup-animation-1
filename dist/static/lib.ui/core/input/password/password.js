import { i as _objectSpread2, c as _inherits, d as _createSuper, e as _classCallCheck, f as _defineProperty, g as _assertThisInitialized, h as _createClass, j as _objectWithoutProperties, _ as _extends } from '../../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';
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
import '../input.css';
import WrappedInput from '../input.js';
import './eye-style.css';
import { Eye } from './eye.js';
import style from './input-style.css';

var defaultTheme = _objectSpread2(_objectSpread2(_objectSpread2({}, WrappedInput.theme), style), {}, {
  input: classnames(WrappedInput.theme.input, style.input)
});
/* eslint-disable valid-jsdoc, comment: некорректный парсинг jsdoc */

/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d/screen/5c8a5f5f9663d725192e86cf)
 * Поле ввода пароля
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */


var Password = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Password, _React$PureComponent);

  var _super = _createSuper(Password);

  function Password() {
    var _this;

    _classCallCheck(this, Password);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      showPassword: false
    });

    _defineProperty(_assertThisInitialized(_this), "getInputRef", function (element) {
      _this.props.refInput(element);

      _this.input = element;
    });

    _defineProperty(_assertThisInitialized(_this), "handleOpenEye", function () {
      _this.setState({
        showPassword: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCloseEye", function () {
      if (_this.input) {
        _this.input.focus();
      }

      _this.setState({
        showPassword: false
      });
    });

    return _this;
  }

  _createClass(Password, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          mode = _this$props.mode,
          theme = _this$props.theme,
          passedProps = _objectWithoutProperties(_this$props, ["mode", "theme"]);

      var showEye = !this.props.disabled && (mode !== 'hideOnEmpty' || this.props.value) && mode !== 'noEye';
      return /*#__PURE__*/React.createElement("div", {
        className: classnames(theme.passwordBlock, !this.state.showPassword ? theme.showPassword : '')
      }, /*#__PURE__*/React.createElement(WrappedInput, _extends({}, _.omit(passedProps, 'refInput'), {
        type: this.state.showPassword ? 'text' : 'password',
        refWrapper: this.getInputRef,
        theme: theme
      })), showEye && /*#__PURE__*/React.createElement("div", {
        className: theme.eye
      }, /*#__PURE__*/React.createElement(Eye, {
        onOpen: this.handleOpenEye,
        onClose: this.handleCloseEye,
        isOpen: this.state.showPassword
      })));
    }
  }]);

  return Password;
}(React.PureComponent);
Password.propTypes = {
  refInput: PropTypes.func,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  mode: PropTypes.oneOf(['hideOnEmpty', 'noEye', 'showOnEmpty']),
  direction: PropTypes.string,
  translations: PropTypes.shape({
    showPassword: PropTypes.string
  }),
  theme: PropTypes.shape({
    input: PropTypes.string,
    passwordBlock: PropTypes.string,
    eye: PropTypes.string,
    block: PropTypes.string,
    disabled: PropTypes.string,
    error: PropTypes.string,
    icon: PropTypes.string,
    inputIcon: PropTypes.string,
    showPassword: PropTypes.string
  })
};
Password.defaultProps = {
  refInput: _.noop,
  disabled: false,
  value: void 0,
  direction: 'topLeft',
  mode: 'hideOnEmpty',
  translations: {
    showPassword: void 0
  },
  theme: defaultTheme
};
Password.theme = defaultTheme;
Password.displayName = 'Input.Password';

export { Password };
//# sourceMappingURL=password.js.map
