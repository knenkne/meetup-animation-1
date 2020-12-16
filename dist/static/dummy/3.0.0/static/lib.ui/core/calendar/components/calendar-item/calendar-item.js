import { a as _slicedToArray } from '../../../_rollupPluginBabelHelpers-687385f0.js';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';
import '../../../utils/get-display-name.js';
import '../../../utils/hoc/style.css';
import '../../../utils/hoc/deprecate.js';
import '../../../utils/hoc/experimental.js';
import '../../../utils/hoc/error-adapter.js';
import '../../../utils/hoc/omittere.js';
import '../../../utils/hoc/accessibility-relocation.js';
import '../../../utils/handlers.js';
import '../../../utils/pluralize.js';
import '../../../utils/scroll-to.js';
import '../../../utils/format-phone-number.js';
import '../../../utils/memoize-func-with-args.js';
import '../../../utils/auto-top-check-by-window.js';
import '../../../utils/merge-theme.js';
import '../../../utils/styles/media.config.css';
import '../../../utils/adaptive.js';
import '../../../utils/pseudo/pseudo-button.js';
import '../../../utils/get-card-icon.js';
import '../../../utils/get-ivestments-icon.js';
import '../../../utils/get-metal-icon.js';
import '../../../utils/get-target-icon.js';
import '../../../icon/style.css';
import '../../../icon/icon.js';
import '../../../index-85b17782.js';
import '../../../external-969f6c5f.js';
import '../../../icon/index.js';
import '../../../utils/set-project-id.js';
import '../../../utils/make-direction.js';
import '../../../utils/show-error.js';
import '../../../typography/style.css';
import '../../../typography/headline.js';
import '../../../typography/title.js';
import '../../../typography/subheader.js';
import '../../../typography/caption.js';
import '../../../typography/uppercase.js';
import '../../../typography/description.js';
import '../../../typography/index.js';
import '../../../currency/locales.js';
import '../../../currency/options.js';
import '../../../currency/style.css';
import '../../../currency/currency.js';
import 'bignumber.js';
import 'text-mask-core/dist/textMaskCore';
import 'text-mask-addons/dist/createNumberMask';
import '../../../input/utils.js';
import '../../../button/command/style.css';
import '../../../button/command/index.js';
import '../../../loader/loader.css';
import '../../../loader/loader-themes/pulse-loader.css';
import '../../../loader/loader-themes/jump-loader.css';
import '../../../loader/loader-themes/swap-loader.css';
import '../../../loader/loader.js';
import '../../../loader/icon-loader.css';
import '../../../loader/icon-loader.js';
import '../../../loader/button-loader.css';
import '../../../loader/utils.js';
import '../../../loader/button-loader.js';
import '../../../loader/index.js';
import '../../../button/icon/style.css';
import '../../../button/icon/index.js';
import '../../../tooltip/style.css';
import '../../../tooltip/tip.js';
import '../../../tooltip/tooltip.js';
import '../../../tooltip/hover-tooltip.js';
import 'react-onclickoutside';
import '../../../perimeter/perimeter.js';
import '../../../perimeter/index.js';
import '../../../tooltip/click-tooltip.js';
import '../../../tooltip/index.js';
import '../../../button/info/style.css';
import '../../../button/info/index.js';
import '../../../button/radio-segmented/style.css';
import '../../../button/radio-segmented/index.js';
import '../../../button/style.css';
import '../../../button/index.js';
import toDate from 'date-fns/toDate';
import isValid from 'date-fns/isValid';
import 'date-fns/esm/locale/ru';
import { CALENDAR_MODES } from '../../constants.js';
import 'date-fns';
import '../../../input/input.css';
import '../../../input/input.js';
import '../../../input/hoc/auto-size.js';
import '../../../input/masked/masked-format.js';
import '../../../input/masked/masked.js';
import '../../../input/numeric/numeric.js';
import '../../../input/counter/counter.css';
import '../../../input/counter/counter-control.js';
import '../../../input/counter/counter.js';
import '../../../input/text/text.css';
import '../../../input/text/text.js';
import '../../../input/currency/currency.js';
import '../../../input/money/money.js';
import '../../../input/password/eye-style.css';
import '../../../input/password/eye.js';
import '../../../input/password/input-style.css';
import '../../../input/password/password.js';
import '../../../input/currency-select/currency-select.js';
import '../../../input/currency-select/currency-select.css';
import '../../../input/currency-select/currency-select-option.js';
import '../../../dropdown/style.css';
import '../../../dropdown/target-button.js';
import '../../../dropdown/utils.js';
import '../../../dropdown/contents.js';
import '../../../dropdown/group.js';
import '../../../dropdown/select/select.css';
import '../../../dropdown/option.js';
import '../../../link/link.css';
import '../../../link/components/simple-external-link.js';
import '../../../link/link.js';
import '../../../dropdown/link.js';
import '../../../dropdown/dropdown.js';
import '../../../dropdown/select/item.js';
import '../../../dropdown/select/select.js';
import '../../../dropdown/index.js';
import '../../../marked-text/style.css';
import '../../../marked-text/marked-text.js';
import '../../../input/suggest/style.css';
import '../../../input/suggest/themes.js';
import '../../../input/suggest/target-input.js';
import '../../../input/suggest/long.js';
import '../../../input/suggest/no-matches.js';
import '../../../input/suggest/error.js';
import '../../../input/suggest/option.js';
import '../../../input/suggest/suggest.js';
import '../../../input/suggest/utils.js';
import '../../../input/suggest/suggest-dynamic.js';
import '../../../input/suggest/index.js';
import '../../../input/hoc/typeahead.css';
import '../../../input/hoc/typeahead.js';
import '../../../input/phone/phone-mask.js';
import '../../../input/phone/local-phone.js';
import '../../../input/hoc/keep-char-positions-typeahead.js';
import '../../../input/hoc/tooltiped.js';
import 'remarkable';
import 'remarkable/lib/common/utils';
import '../../../markdown/utils.js';
import '../../../markdown/style.css';
import '../../../markdown/full.js';
import '../../../markdown/short.js';
import '../../../markdown/index.js';
import '../../../labeled/labeled.css';
import '../../../labeled/index.js';
import '../../../input/hoc/labeled.js';
import '../../../input/index.js';
import { chooseValidDate } from '../../utils.js';
import { CalendarContext } from '../../context.js';
import '../common/control.css';
import '../common/control.js';
import '../controls/style.css';
import { Controls } from '../controls/index.js';
import style from '../../style.css';
import '../common/table.css';
import '../common/square-button.css';
import '../common/square-button.js';
import '../months/cell.js';
import '../months/row.js';
import '../months/style.css';
import '../months/grid.js';
import 'date-fns/endOfMonth';
import 'date-fns/startOfQuarter';
import 'date-fns/endOfQuarter';
import 'date-fns/format';
import '../quarters/style.css';
import '../quarters/cell.js';
import '../quarters/row.js';
import '../quarters/quarters.js';
import 'date-fns/startOfWeek';
import 'date-fns/addDays';
import '../month/style.css';
import '../month/header-month.js';
import '../month/cell.js';
import '../month/row.js';
import '../month/grid.js';
import '../common/navigation.css';
import '../common/navigation.js';
import '../years/style.css';
import '../years/cell.js';
import '../years/row.js';
import '../years/grid.js';
import '../years/index.js';
import { ShowTable } from './show-table.js';

var CalendarItem = function CalendarItem(props) {
  var mode = props.mode,
      restriction = props.restriction,
      value = props.value,
      to = props.to,
      initialValue = props.initialValue,
      startingYear = props.startingYear,
      onChange = props.onChange,
      isOpened = props.isOpened;
  var initialDate = chooseValidDate(to, value);

  var _useState = useState(initialDate),
      _useState2 = _slicedToArray(_useState, 2),
      currentDate = _useState2[0],
      setCurrentDate = _useState2[1];

  var _useState3 = useState(initialDate),
      _useState4 = _slicedToArray(_useState3, 2),
      showDate = _useState4[0],
      setShowDate = _useState4[1];

  var _useState5 = useState(mode || CALENDAR_MODES.DEFAULT),
      _useState6 = _slicedToArray(_useState5, 2),
      showComponent = _useState6[0],
      setShowComponent = _useState6[1];

  var setMode = function setMode(currentComponent) {
    return setShowComponent(showComponent !== currentComponent ? currentComponent : mode);
  };

  var handleClick = function handleClick(date, e) {
    if (toDate(date) !== toDate(currentDate)) {
      setShowDate(toDate(date));
      setCurrentDate(date);
      return showComponent === mode ? onChange(date, e) : setMode(mode);
    }

    return void 0;
  };

  var state = {
    currentDate: currentDate,
    showComponent: showComponent,
    showDate: showDate,
    handleClick: handleClick,
    setMode: setMode,
    startingYear: startingYear,
    initialValue: initialValue,
    restriction: restriction,
    mode: mode
  };
  useEffect(function () {
    if (isValid(to)) {
      setShowDate(toDate(to));
      setCurrentDate(to);
    } else if (isValid(value)) {
      setShowDate(toDate(value));
      setCurrentDate(toDate(value));
    }
  }, [value, to]);
  useEffect(function () {
    if (!isOpened) {
      setShowDate(initialDate);
      setCurrentDate(initialDate);
    }
  }, [isOpened]);
  return /*#__PURE__*/React.createElement(CalendarContext.Provider, {
    value: state
  }, /*#__PURE__*/React.createElement("div", {
    className: classnames(style.datePicker, mode === CALENDAR_MODES.YEARS && style.datePickerYears, showComponent !== CALENDAR_MODES.DEFAULT && style.yearsOrMonths),
    "data-node": "calendar:item",
    "aria-hidden": "true"
  }, mode !== CALENDAR_MODES.YEARS && /*#__PURE__*/React.createElement(Controls, null), /*#__PURE__*/React.createElement(ShowTable, {
    showComponent: showComponent
  })));
};
CalendarItem.propTypes = {
  /**
   * Полная ISO строка даты или дапазон ISO дат, разделенных "/"
   */
  value: PropTypes.string,

  /**
   * Полная ISO строка даты
   */
  initialValue: PropTypes.string,

  /**
   * Год, с которого начинается таблица выбора годов. ISO строка года
   */
  startingYear: PropTypes.string,

  /**
   *  Режимы отображения одного календаря:<br>
   * <b>'default'</b> - выбор дня, месяца и года<br>
   * <b>'years'</b> - выбор года<br>
   * <b>'months'</b> - выбор месяца и года<br>
   * <b>'quarters'</b> - выбор квартала и года
   */
  mode: PropTypes.oneOf(['default', 'years', 'months', 'quarters']),

  /**
   * Функция, запрещающая выбор даты. Принимает в качестве аргумента дату в формате объекта Date, возвращает логическое значение
   * (instanceof(Date)) => boolean
   */
  restriction: PropTypes.func,

  /**
   * Полная ISO строка даты
   */
  to: PropTypes.string,
  onChange: PropTypes.func,

  /**
   * Показывает активен ли календарь, если он привязан к какому-либо компоненту
   */
  isOpened: PropTypes.bool
};
CalendarItem.defaultProps = {
  value: '',
  initialValue: '',
  startingYear: void 0,
  mode: 'default',
  restriction: _.stubTrue,
  to: '',
  onChange: _.noop,
  isOpened: _.false,
  translations: void 0
};

export { CalendarItem };
//# sourceMappingURL=calendar-item.js.map
