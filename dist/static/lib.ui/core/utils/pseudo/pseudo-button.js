import { c as _inherits, d as _createSuper, e as _classCallCheck, f as _defineProperty, g as _assertThisInitialized, h as _createClass, i as _objectSpread2 } from '../../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

var PseudoButton = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(PseudoButton, _React$PureComponent);

  var _super = _createSuper(PseudoButton);

  function PseudoButton() {
    var _this;

    _classCallCheck(this, PseudoButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleKeyPress", function (event) {
      if (event.key === ' ' || event.key === 'Enter') {
        event.preventDefault(); // при управлении с клавиатуры данное событие не всплывает как клик

        _this.props.onClick(event);
      }

      _this.props.onKeyPress(event);
    });

    return _this;
  }

  _createClass(PseudoButton, [{
    key: "render",
    value: function render() {
      var props = _objectSpread2(_objectSpread2({
        role: 'button'
      }, this.props), {}, {
        onKeyPress: this.handleKeyPress
      });

      if (this.props.disabled) {
        delete props.tabIndex;
        delete props.onKeyPress;
      }

      return /*#__PURE__*/React.createElement("span", props);
    }
  }]);

  return PseudoButton;
}(React.PureComponent);

_defineProperty(PseudoButton, "displayName", 'PseudoButton');

_defineProperty(PseudoButton, "propTypes", {
  onClick: PropTypes.func,
  onKeyPress: PropTypes.func,
  tabIndex: PropTypes.number,
  disabled: PropTypes.bool
});

_defineProperty(PseudoButton, "defaultProps", {
  onClick: _.noop,
  onKeyPress: _.noop,
  tabIndex: 0,
  disabled: false
});

export { PseudoButton };
//# sourceMappingURL=pseudo-button.js.map
