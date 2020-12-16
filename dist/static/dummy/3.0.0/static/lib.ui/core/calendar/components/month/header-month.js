import React from 'react';
import _ from 'lodash';
import classnames from 'classnames';
import 'date-fns/esm/locale/ru';
import { LOCALE, WEEK_LENGTH } from '../../constants.js';
import format from 'date-fns/format';
import startOfWeek from 'date-fns/startOfWeek';
import addDays from 'date-fns/addDays';
import style from './style.css';

var toDay = startOfWeek(new Date(), LOCALE);
var HeaderMonth = function HeaderMonth() {
  return /*#__PURE__*/React.createElement("thead", {
    className: classnames(style.row, style.rowHeader)
  }, /*#__PURE__*/React.createElement("tr", null, _.map(new Array(WEEK_LENGTH), function (value, index) {
    return /*#__PURE__*/React.createElement("td", {
      className: style.rowHeaderItem,
      key: index
    }, format(addDays(toDay, index), 'dd', LOCALE));
  })));
};

export { HeaderMonth };
//# sourceMappingURL=header-month.js.map
