import { c as _inherits, d as _createSuper, e as _classCallCheck, f as _defineProperty, g as _assertThisInitialized, h as _createClass, a as _slicedToArray, _ as _extends } from '../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
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
import { parseDirection, makeDirection } from '../utils/make-direction.js';
import '../utils/show-error.js';
import defaultTheme from './style.css';

/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=Tooltip)
 * Компонент всплывающей подсказки
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var Tip = /*#__PURE__*/function (_React$Component) {
  _inherits(Tip, _React$Component);

  var _super = _createSuper(Tip);

  function Tip(props) {
    var _this;

    _classCallCheck(this, Tip);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "refCallback", function (element) {
      _this.tipRef = element;
    });

    _this.state = {
      direction: parseDirection(_this.props.direction),
      startDirection: parseDirection(_this.props.direction)
    };
    _this.tipRef = null;
    return _this;
  }

  _createClass(Tip, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(previousProps) {
      var _this2 = this;

      if (this.tipRef && this.props.forceOpened && this.props.forceOpened !== previousProps.forceOpened) {
        // eslint-disable-next-line react/no-did-update-set-state, comment: меняем положение подсказки, если она выходит за границы окна
        this.setState(function (_ref) {
          var direction = _ref.direction,
              startDirection = _ref.startDirection;
          return {
            direction: makeDirection(_this2.tipRef, direction, startDirection)
          };
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          theme = _this$props.theme,
          mode = _this$props.mode,
          forceOpened = _this$props.forceOpened;

      var _this$state$direction = _slicedToArray(this.state.direction, 2),
          verticalDirection = _this$state$direction[0],
          horizontalDirection = _this$state$direction[1];

      if (!children) {
        return null;
      }

      var passedProps = _(this.props).omit(['children', 'direction', 'mode', 'forceOpened', 'theme']).extend({
        className: classnames(theme.tip, theme[verticalDirection], theme[horizontalDirection], theme[mode], forceOpened && theme.show),
        'aria-live': 'assertive',
        role: 'tooltip'
      }).value();

      return /*#__PURE__*/React.createElement("div", _extends({}, passedProps, {
        ref: this.refCallback
      }), /*#__PURE__*/React.createElement("div", {
        className: defaultTheme.activeZone
      }, /*#__PURE__*/React.createElement("div", {
        className: defaultTheme.contents
      }, children)));
    }
  }]);

  return Tip;
}(React.Component);
Tip.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.node,

  /**
   * Направление отображения подсказки относительно родителя
   */
  direction: PropTypes.oneOf(['topLeft', 'topRight', 'topCenter', 'bottomLeft', 'bottomRight', 'bottomCenter']),
  mode: PropTypes.oneOf(['error', 'info']),
  forceOpened: PropTypes.bool
};
Tip.defaultProps = {
  children: null,
  theme: defaultTheme,
  mode: 'info',
  direction: 'topLeft',
  forceOpened: false
};
Tip.displayName = 'Tooltip.Tip';

export { Tip };
//# sourceMappingURL=tip.js.map
