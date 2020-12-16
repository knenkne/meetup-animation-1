import React from 'react';
import PropTypes from 'prop-types';
import 'date-fns/esm/locale/ru';
import { LOCALE } from '../../constants.js';
import format from 'date-fns/format';
import style from './style.css';

var Cell = function Cell(_ref) {
  var month = _ref.month;
  return /*#__PURE__*/React.createElement("span", {
    className: style.month
  }, format(month, 'MMMM', LOCALE));
};
Cell.propTypes = {
  month: PropTypes.string.isRequired
};

export { Cell };
//# sourceMappingURL=cell.js.map
