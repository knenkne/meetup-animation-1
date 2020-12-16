import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';
import commonStyles from './square-button.css';

var SquareButton = function SquareButton(_ref) {
  var onClick = _ref.onClick,
      value = _ref.value,
      className = _ref.className,
      children = _ref.children,
      disabled = _ref.disabled,
      dataUnit = _ref.dataUnit;
  return /*#__PURE__*/React.createElement("button", {
    tabIndex: "-1",
    className: classnames(commonStyles.item, className),
    onMouseDown: onClick,
    value: value,
    type: "button",
    "data-unit": dataUnit,
    disabled: disabled
  }, children);
};

SquareButton.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.string,
  dataUnit: PropTypes.string,
  disabled: PropTypes.bool
};
SquareButton.defaultProps = {
  onClick: _.noop,
  value: void 0,
  className: void 0,
  children: void 0,
  dataUnit: void 0,
  disabled: false
};

export default SquareButton;
//# sourceMappingURL=square-button.js.map
