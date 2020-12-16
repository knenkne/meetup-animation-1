import { b as _inherits, c as _createSuper, f as _classCallCheck, e as _defineProperty, g as _assertThisInitialized, d as _createClass, _ as _slicedToArray, h as _extends } from '../_rollupPluginBabelHelpers-3e859d87.js';
import '@emotion/styled';
import '@emotion/core';
import '../styles/semantic.config.style.js';
import '../styles/radius.config.style.js';
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/font-sizes.config.style.js';
import '../colors.config.style-69a09a5b.js';
import { TypographyStyled } from '../typography/typography.style.js';
import '../typography/typography.js';
import _ from 'lodash';
import '../styles/semantic-palette.config.style.js';
import '../styles/media.config.style.js';
import { IndentWrapper } from '../indent-wrapper/indent-wrapper.style.js';
import { parseDirection, makeDirection } from '../utils/make-direction.js';
import '../styles/shadows.config.style.js';
import { TipStyled, ActiveZoneStyled, ContentsStyled } from './tooltip.style.js';

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
          title = _this$props.title,
          description = _this$props.description,
          children = _this$props.children,
          forceOpened = _this$props.forceOpened;

      var _this$state$direction = _slicedToArray(this.state.direction, 2),
          verticalDirection = _this$state$direction[0],
          horizontalDirection = _this$state$direction[1];

      var passedProps = _(this.props).omit(['children', 'direction', 'forceOpened']).extend({
        'aria-live': 'assertive',
        role: 'tooltip'
      }).value();

      return /*#__PURE__*/React.createElement(TipStyled, _extends({}, passedProps, {
        vd: verticalDirection,
        hd: horizontalDirection,
        show: forceOpened,
        ref: this.refCallback
      }), /*#__PURE__*/React.createElement(ActiveZoneStyled, null, /*#__PURE__*/React.createElement(ContentsStyled, null, /*#__PURE__*/React.createElement(IndentWrapper, {
        size: "md",
        horizontal: "innerspace",
        vertical: "innerspace"
      }, !children ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TypographyStyled, {
        size: "md",
        indent: "zero",
        mode: "semibold"
      }, title), /*#__PURE__*/React.createElement(TypographyStyled, {
        size: "sm",
        indent: "nano",
        colorScheme: "gray70A",
        last: true
      }, description)) : children))));
    }
  }]);

  return Tip;
}(React.Component);
Tip.propTypes = {
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
  mode: 'info',
  direction: 'topLeft',
  forceOpened: false
};
Tip.displayName = 'Tooltip.Tip';

export { Tip };
//# sourceMappingURL=tip.js.map
