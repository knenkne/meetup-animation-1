import { b as _inherits, c as _createSuper, f as _classCallCheck, e as _defineProperty, g as _assertThisInitialized, d as _createClass } from '../_rollupPluginBabelHelpers-3e859d87.js';
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import onClickOutside from 'react-onclickoutside';

/**
 * Технический компонент для полифилла children обработчиками клика снаружи
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var Perimeter = /*#__PURE__*/function (_React$Component) {
  _inherits(Perimeter, _React$Component);

  var _super = _createSuper(Perimeter);

  function Perimeter() {
    var _this;

    _classCallCheck(this, Perimeter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", _this.props.onClickOutside);

    return _this;
  }

  _createClass(Perimeter, [{
    key: "render",
    value: function render() {
      return React.Children.only(this.props.children);
    }
  }]);

  return Perimeter;
}(React.Component);

_defineProperty(Perimeter, "propTypes", {
  /**
   * callback для клика снаружи
   */
  onClickOutside: PropTypes.func,
  // eslint-disable-line react/no-unused-prop-types, comment: не используется тут, но HOC использует, указать в документацию надо

  /**
   * Первоначальная настройка обработчика клика снаружи
   */
  disableOnClickOutside: PropTypes.oneOfType([// eslint-disable-line react/no-unused-prop-types, comment: не используется тут, но HOC использует, указать в документацию надо
  PropTypes.func, PropTypes.bool]),
  children: PropTypes.element
});

_defineProperty(Perimeter, "defaultProps", {
  onClickOutside: _.noop,
  children: void 0,
  disableOnClickOutside: false
});

var PerimeterInHoc = onClickOutside(Perimeter);

export default PerimeterInHoc;
export { Perimeter };
//# sourceMappingURL=perimeter.js.map
