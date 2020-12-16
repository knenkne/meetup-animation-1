import { c as _inherits, d as _createSuper, e as _classCallCheck, f as _defineProperty, g as _assertThisInitialized, h as _createClass, _ as _extends } from '../../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import _ from 'lodash';
import classnames from 'classnames';
import { getDisplayName } from '../../utils/get-display-name.js';
import 'bignumber.js';
import 'text-mask-core/dist/textMaskCore';
import 'text-mask-addons/dist/createNumberMask';
import { getExpectedWidth } from '../utils.js';
import style from './typeahead.css';

var omitFakeProps = ['id', 'name', 'icon', 'onBlur', 'onChange', 'onFocus'];
var extendFakeProps = {
  tabIndex: -1,
  disabled: true,
  'aria-hidden': true
};
var extendNoValueFakeProps = {
  value: '',
  placeholder: void 0
};

var moveSelection = function moveSelection(element, value) {
  // Фикс IE для сдвига курсора у фейкового поля (IE, игнорируя значения, оставляет курсор в нуле у полей, которые никогда не получали фокуса)
  if (element) {
    element.disabled = false; // eslint-disable-line no-param-reassign, comment: для IE при сдвиге курсора надо выключать disabled

    element.setSelectionRange(value.length, value.length);
    element.disabled = true; // eslint-disable-line no-param-reassign, comment: а потом снова включать его
  }
};

var isOverflow = function isOverflow(element) {
  return element && parseFloat(getExpectedWidth(element, 1)) > element.clientWidth;
};

var typeaheadFactory = function typeaheadFactory() {
  var propsMaker = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _.identity;
  var fakePropsMaker = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _.identity;
  return function (Component) {
    var Typeahead = /*#__PURE__*/function (_React$Component) {
      _inherits(Typeahead, _React$Component);

      var _super = _createSuper(Typeahead);

      function Typeahead() {
        var _this;

        _classCallCheck(this, Typeahead);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _super.call.apply(_super, [this].concat(args));

        _defineProperty(_assertThisInitialized(_this), "getWrapper", function (c) {
          _this.input = c;

          _this.props.refWrapper(c, _this.inputFake);
        });

        _defineProperty(_assertThisInitialized(_this), "getWrapperFake", function (c) {
          _this.inputFake = c;
          moveSelection(_this.inputFake, _this.props.value);
        });

        return _this;
      }

      _createClass(Typeahead, [{
        key: "render",
        value: function render() {
          var passedProps = propsMaker(this.props);

          var passedFakeProps = _(fakePropsMaker(this.props)).omit(omitFakeProps).extend(extendFakeProps, isOverflow(this.input) ? extendNoValueFakeProps : {}).value();

          return /*#__PURE__*/React.createElement("div", {
            className: classnames(style.wrapper, this.props.disabled && style.disabled, this.props.error && style.error, this.props.active && style.focus)
          }, /*#__PURE__*/React.createElement(Component, _extends({}, passedFakeProps, {
            refWrapper: this.getWrapperFake
          })), /*#__PURE__*/React.createElement(Component, _extends({}, passedProps, {
            refWrapper: this.getWrapper
          })));
        }
      }]);

      return Typeahead;
    }(React.Component);

    _defineProperty(Typeahead, "propTypes", Component.propTypes);

    _defineProperty(Typeahead, "defaultProps", Component.defaultProps);

    _defineProperty(Typeahead, "displayName", getDisplayName(Component, 'TypeaheadComponent'));

    _defineProperty(Typeahead, "WrappedComponent", Component);

    return Typeahead;
  };
};

export { typeaheadFactory };
//# sourceMappingURL=typeahead.js.map
