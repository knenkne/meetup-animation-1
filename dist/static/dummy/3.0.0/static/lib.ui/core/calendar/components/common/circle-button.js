import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';
import circleButtonStyles from './circle-button.css';

var CircleButton = function CircleButton(_ref) {
  var onMouseDown = _ref.onMouseDown,
      value = _ref.value,
      className = _ref.className,
      children = _ref.children,
      disabled = _ref.disabled,
      dataUnit = _ref.dataUnit,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave;
  return /*#__PURE__*/React.createElement("button", {
    tabIndex: "-1",
    className: classnames(circleButtonStyles.item, className),
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    onMouseDown: onMouseDown,
    value: value,
    type: "button",
    "data-unit": dataUnit,
    disabled: disabled
  }, children);
};

CircleButton.propTypes = {
  onMouseDown: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  dataUnit: PropTypes.string,
  disabled: PropTypes.bool
};
CircleButton.defaultProps = {
  onMouseDown: _.noop,
  onMouseEnter: _.noop,
  onMouseLeave: _.noop,
  value: void 0,
  className: void 0,
  children: void 0,
  dataUnit: void 0,
  disabled: false
};

export default CircleButton;
//# sourceMappingURL=circle-button.js.map
