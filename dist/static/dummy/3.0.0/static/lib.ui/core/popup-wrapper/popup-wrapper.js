import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

var PopupWrapper = function PopupWrapper(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    className: style.popup
  }, children);
};

PopupWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
};
PopupWrapper.defaultProps = {
  children: null
};

export default PopupWrapper;
//# sourceMappingURL=popup-wrapper.js.map
