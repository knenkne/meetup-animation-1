import { c as _inherits, d as _createSuper, e as _classCallCheck, f as _defineProperty, g as _assertThisInitialized, h as _createClass } from '../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';
import '../utils/get-display-name.js';
import '../utils/hoc/style.css';
import { deprecate } from '../utils/hoc/deprecate.js';
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
import { Icon } from '../icon/icon.js';
import '../index-85b17782.js';
import '../external-969f6c5f.js';
import '../icon/index.js';
import '../utils/set-project-id.js';
import '../utils/make-direction.js';
import '../utils/show-error.js';
import ReactModal from 'react-modal';
import defaultTheme from './style.css';

ReactModal.setAppElement('body');

var getScrollWidth = _.memoize(function () {
  var div = document.createElement('div');
  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.visibility = 'hidden';
  document.body.appendChild(div);
  var scrollWidth = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);
  return scrollWidth;
});
/**
 * DEPRECATED. DO NOT USE
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */


var Popup = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Popup, _React$PureComponent);

  var _super = _createSuper(Popup);

  function Popup() {
    var _this;

    _classCallCheck(this, Popup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "contentLabel", _.uniqueId('popup-title-'));

    _defineProperty(_assertThisInitialized(_this), "contentDescription", _.uniqueId('popup-description-'));

    return _this;
  }

  _createClass(Popup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          forceOpened = _this$props.forceOpened,
          title = _this$props.title,
          size = _this$props.size,
          onClose = _this$props.onClose,
          children = _this$props.children,
          a11y = _this$props.a11y,
          dataNode = _this$props['data-node'];

      if (forceOpened && document.body.offsetHeight > document.documentElement.clientHeight) {
        document.body.style.paddingRight = "".concat(getScrollWidth(), "px");
      } else {
        document.body.style.paddingRight = '';
      }

      return /*#__PURE__*/React.createElement(ReactModal, {
        isOpen: forceOpened,
        className: defaultTheme.modal,
        onRequestClose: onClose,
        shouldCloseOnOverlayClick: !!onClose,
        overlayClassName: defaultTheme.overlay,
        ariaHideApp: a11y.ariaHideApp,
        contentLabel: title ? this.contentLabel : a11y.title
      }, /*#__PURE__*/React.createElement("aside", {
        role: "dialog",
        "aria-labelledby": this.contentLabel,
        "aria-describedby": this.contentDescription,
        className: classnames(defaultTheme.container, defaultTheme[size]),
        "data-node": dataNode,
        "data-unit": "modal"
      }, onClose && /*#__PURE__*/React.createElement("button", {
        className: defaultTheme.close,
        title: a11y.closeButtonTitle,
        onClick: onClose,
        "data-unit": "modal:close",
        "aria-label": a11y.closeButtonTitle,
        type: "button"
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "icon:core/common/close"
      })), /*#__PURE__*/React.createElement("legend", {
        className: defaultTheme.legend
      }, /*#__PURE__*/React.createElement("h2", {
        "data-unit": "modal:title",
        className: classnames(defaultTheme.title, _defineProperty({}, defaultTheme.titleEmpty, !title)),
        id: this.contentLabel
      }, title), /*#__PURE__*/React.createElement("div", {
        "data-unit": "modal:body",
        className: defaultTheme.body,
        id: this.contentDescription
      }, children))));
    }
  }]);

  return Popup;
}(React.PureComponent);
Popup.propTypes = {
  forceOpened: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
  title: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  'data-node': PropTypes.string,
  a11y: PropTypes.shape({
    /**
     * Сокрытие от screen reader всего контента кроме модального окна
     */
    ariaHideApp: PropTypes.bool,

    /**
     * Смысловой заголовок кнопки закрытия модального окна (если она есть)
     */
    closeButtonTitle: PropTypes.string,

    /**
     * Смысловой заголовок модалки (используется вместо title)
     */
    title: PropTypes.string
  }).isRequired
};
Popup.defaultProps = {
  forceOpened: false,
  children: null,
  onClose: void 0,
  title: void 0,
  size: 'md',
  'data-node': void 0,
  a11y: void 0
};
Popup.theme = defaultTheme;
Popup.displayName = 'Popup';
var popup = deprecate()(Popup);

export default popup;
export { Popup };
//# sourceMappingURL=popup.js.map
