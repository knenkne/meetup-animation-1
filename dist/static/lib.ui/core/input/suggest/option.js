import { c as _inherits, d as _createSuper, e as _classCallCheck, h as _createClass, f as _defineProperty, i as _objectSpread2 } from '../../_rollupPluginBabelHelpers-687385f0.js';
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
import { MarkedText } from '../../marked-text/marked-text.js';
import './style.css';
import { iconTheme, markedTextTheme } from './themes.js';

var omitFromOption = ['searchString', 'iconFromCode', 'fallbackIcon'];
var Option = /*#__PURE__*/function (_Dropdown$Option) {
  _inherits(Option, _Dropdown$Option);

  var _super = _createSuper(Option);

  function Option() {
    _classCallCheck(this, Option);

    return _super.apply(this, arguments);
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          title = _this$props.title,
          description = _this$props.description,
          value = _this$props.value,
          searchString = _this$props.searchString,
          icon = _this$props.icon,
          iconFromCode = _this$props.iconFromCode,
          fallbackIcon = _this$props.fallbackIcon;
      return /*#__PURE__*/React.createElement("div", _.omit(this.getPassedProps(), omitFromOption), icon && /*#__PURE__*/React.createElement("span", {
        className: classnames(theme.itemIcon, _defineProperty({}, theme.itemIconFallback, fallbackIcon))
      }, iconFromCode ? /*#__PURE__*/React.createElement(Icon, {
        name: icon,
        theme: iconTheme,
        "data-text": fallbackIcon,
        mode: fallbackIcon ? 'fallback' : void 0
      }) : /*#__PURE__*/React.createElement("img", {
        className: theme.img,
        alt: value,
        src: icon
      })), /*#__PURE__*/React.createElement("span", {
        className: theme.itemTitle
      }, /*#__PURE__*/React.createElement(MarkedText, {
        title: title,
        value: searchString,
        theme: markedTextTheme
      })), !_.isUndefined(description) && /*#__PURE__*/React.createElement("span", {
        className: theme.itemDescription
      }, /*#__PURE__*/React.createElement(MarkedText, {
        title: description,
        value: searchString,
        theme: markedTextTheme
      })));
    }
  }]);

  return Option;
}(Dropdown.Option);

_defineProperty(Option, "displayName", 'Input.Suggest.Option');

Option.propTypes = _objectSpread2(_objectSpread2({}, Dropdown.Option.propTypes), {}, {
  searchString: PropTypes.string,
  icon: PropTypes.string,
  iconFromCode: PropTypes.bool,
  fallbackIcon: PropTypes.string
});
Option.defaultProps = _objectSpread2(_objectSpread2({}, Dropdown.Option.defaultProps), {}, {
  searchString: void 0,
  icon: void 0,
  iconFromCode: false,
  fallbackIcon: void 0
});

export { Option };
//# sourceMappingURL=option.js.map
