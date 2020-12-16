import { j as _objectWithoutProperties, _ as _extends } from '../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import 'lodash';
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
import '../currency/locales.js';
import '../currency/options.js';
import '../currency/style.css';
import { Currency } from '../currency/currency.js';
import 'bignumber.js';
import 'text-mask-core/dist/textMaskCore';
import 'text-mask-addons/dist/createNumberMask';
import { formatNumberValue } from '../input/utils.js';
import style from './style.css';

var Amount = function Amount(_ref) {
  var value = _ref.value,
      code = _ref.code,
      a11y = _ref.a11y,
      props = _objectWithoutProperties(_ref, ["value", "code", "a11y"]);

  return /*#__PURE__*/React.createElement("span", _extends({}, props, {
    className: classnames(style.amount, props.className)
  }), formatNumberValue(value), "\xA0", (a11y === null || a11y === void 0 ? void 0 : a11y.codeText) && /*#__PURE__*/React.createElement("span", {
    className: style.hidden
  }, a11y.codeText), /*#__PURE__*/React.createElement("span", {
    className: style.code,
    "aria-hidden": a11y.codeText ? 'true' : 'false'
  }, /*#__PURE__*/React.createElement(Currency, {
    title: code
  })));
};
Amount.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  code: PropTypes.string,
  a11y: PropTypes.shape({
    codeText: PropTypes.string
  }).isRequired
};
Amount.defaultProps = {
  className: void '',
  code: 'RUB'
};

export default Amount;
export { Amount };
//# sourceMappingURL=index.js.map
