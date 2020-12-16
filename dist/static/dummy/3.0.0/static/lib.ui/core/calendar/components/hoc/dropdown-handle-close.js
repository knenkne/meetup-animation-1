import { c as _inherits, d as _createSuper, e as _classCallCheck, f as _defineProperty, g as _assertThisInitialized, h as _createClass } from '../../../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

var dropdownHandleClose = function dropdownHandleClose(Component) {
  var Wrapped = /*#__PURE__*/function (_React$PureComponent) {
    _inherits(Wrapped, _React$PureComponent);

    var _super = _createSuper(Wrapped);

    function Wrapped() {
      var _this;

      _classCallCheck(this, Wrapped);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "handleChange", function (date, e) {
        _.attempt(_this.context.dropdown.handleClose);

        _this.props.onChange(date, e);
      });

      return _this;
    }

    _createClass(Wrapped, [{
      key: "render",
      value: function render() {
        var passedProps = _.assign(_.omit(this.props, ['onChange']), {
          onChange: this.handleChange
        });

        return /*#__PURE__*/React.createElement(Component, passedProps);
      }
    }]);

    return Wrapped;
  }(React.PureComponent);

  Wrapped.contextTypes = {
    dropdown: PropTypes.object
  };
  Wrapped.propTypes = Component.propTypes;
  Wrapped.displayName = 'HandleCloseHOC';
  return Wrapped;
};

export { dropdownHandleClose };
//# sourceMappingURL=dropdown-handle-close.js.map
