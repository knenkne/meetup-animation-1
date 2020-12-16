import { c as _inherits, d as _createSuper, h as _createClass, f as _defineProperty, e as _classCallCheck, g as _assertThisInitialized, _ as _extends } from '../../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { getDisplayName } from '../../utils/get-display-name.js';
import 'bignumber.js';
import 'text-mask-core/dist/textMaskCore';
import 'text-mask-addons/dist/createNumberMask';
import { setHeight, setWidth } from '../utils.js';

var autoSizeFactory = function autoSizeFactory(_ref) {
  var minHeight = _ref.minHeight,
      minWidth = _ref.minWidth,
      maxHeight = _ref.maxHeight,
      maxWidth = _ref.maxWidth;
  return function (Component) {
    var _class, _temp;

    return _temp = _class = /*#__PURE__*/function (_React$PureComponent) {
      _inherits(AutoSize, _React$PureComponent);

      var _super = _createSuper(AutoSize);

      function AutoSize() {
        var _this;

        _classCallCheck(this, AutoSize);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _super.call.apply(_super, [this].concat(args));

        _defineProperty(_assertThisInitialized(_this), "setRef", function (component) {
          _this.props.refWrapper(component);

          _this.refWrapper = component;
        });

        return _this;
      }

      _createClass(AutoSize, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          setHeight(this.refWrapper, minHeight, maxHeight);
          setWidth(this.refWrapper, minWidth, maxWidth);
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          setHeight(this.refWrapper, minHeight, maxHeight);
          setWidth(this.refWrapper, minWidth, maxWidth);
        }
      }, {
        key: "render",
        value: function render() {
          return /*#__PURE__*/React.createElement(Component, _extends({}, this.props, {
            refWrapper: this.setRef
          }));
        }
      }]);

      return AutoSize;
    }(React.PureComponent), _defineProperty(_class, "displayName", getDisplayName(Component, 'AutoSizedComponent')), _defineProperty(_class, "propTypes", {
      refWrapper: PropTypes.func
    }), _defineProperty(_class, "defaultProps", {
      refWrapper: _.noop
    }), _defineProperty(_class, "WrappedComponent", Component), _temp;
  };
};

export { autoSizeFactory };
//# sourceMappingURL=auto-size.js.map
