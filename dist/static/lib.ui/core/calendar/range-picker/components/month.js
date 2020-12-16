import { a as _slicedToArray } from '../../../_rollupPluginBabelHelpers-687385f0.js';
import React, { useCallback, useState } from 'react';
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
import 'date-fns/esm/locale/ru';
import { WEEK_LENGTH } from '../../constants.js';
import { isSameDay, isWithinInterval, startOfDay, endOfDay, isBefore, isAfter, setHours, setMinutes, getDate } from 'date-fns';
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
import { parseRuDate, getItemsDays, fullISOFormat } from '../../utils.js';
import 'date-fns/format';
import 'date-fns/startOfWeek';
import 'date-fns/addDays';
import style from '../../components/month/style.css';
import { HeaderMonth } from '../../components/month/header-month.js';
import circleButtonStyles from '../../components/common/circle-button.css';
import CircleButton from '../../components/common/circle-button.js';
import style$1 from './month.css';

var DAYS_ROW_LAST_INDEX = WEEK_LENGTH - 1;
var getItemState = function getItemState(date, rangeFrom, rangeTo, currentTo, index, lastIndex, isRangeMode, interval, restriction) {
  // Большая функция для расчета внешнего вида элементов рейнджа в зависимости от положения элемента в нем
  // Всего 12 состояний ( слава дизайнерам! \о/ )
  // З - зелёный, ТЗ - тёмно-зелёный
  // 1 - элемент прямоугольный
  // 2 - элемент З с прямоугольный с закругленными углами 4px
  // 3 - элемент З с закругленными углами с одной/другой стороны
  // 4 - элемент З скругленный (border-radius: 50%) с одной/другой стороны и прямоугольный с другой
  // 5 - элемент З скругленный (border-radius: 50%) с одной/другой стороны и сукругленный (4px) с другой
  // 6 - элемент ТЗ круглый
  // 7 - элемент ТЗ круглый, имеющий З подложку с прямыми углами с одной/другой стороны
  // 8 - элемент ТЗ круглый, имеющий З подложку со скругленными углами с одной/другой стороны
  // Пожалуйста, хватит! Остановитесь! \o/
  var value = date;
  var isFrom = isSameDay(value, rangeFrom);
  var isTo = isSameDay(value, rangeTo);
  var isSameDate = isSameDay(rangeFrom, rangeTo);
  var isCurrentTo = isSameDay(value, currentTo);
  var isFirstInLine = index === 0;
  var isLastInLine = index === lastIndex;
  var isWithinRange = interval && isWithinInterval(value, interval);
  var isDisabled = !restriction(value, value && {
    start: startOfDay(value),
    end: endOfDay(value)
  });
  var isToday = isSameDay(date, new Date());
  var isActive = isFrom || isTo;
  var isInRange = isWithinRange && !isFrom && !isTo;
  var isStartOfRangeLine = isWithinRange && !isTo && !isFrom && isFirstInLine;
  var isEndOfRangeLine = isWithinRange && !isTo && !isFrom && isLastInLine;
  var isFromIsEndOfLine = isFrom && !isRangeMode && isLastInLine;
  var isToIsStartOfLine = isTo && !isRangeMode && isFirstInLine;
  var isFromIsMiddleOfLine = isFrom && !isLastInLine && !isRangeMode;
  var isToIsMiddleOfLine = isTo && !isFirstInLine && !isRangeMode;
  var isCurrentToBeforeFrom = isCurrentTo && isBefore(currentTo, rangeFrom);
  var isCurrentToAfterFrom = isCurrentTo && isAfter(currentTo, rangeFrom);
  var isCurrentToIsStartOfLine = isCurrentToAfterFrom && isFirstInLine;
  var isCurrentToIsEndOfLine = isCurrentToBeforeFrom && isLastInLine;
  var isFromIsMiddleOfLineAndBeforeCurrentTo = isFrom && isBefore(rangeFrom, currentTo) && !isLastInLine;
  var isFromIsMiddleOfLineAndAfterCurrentTo = isFrom && isAfter(rangeFrom, currentTo) && !isFirstInLine;
  var isFromIsEndOfLineAndBeforeCurrentTo = isFrom && isBefore(rangeFrom, currentTo) && isLastInLine;
  var isFromIsStartOfLineAndAfterCurrentTo = isFrom && isAfter(rangeFrom, currentTo) && isFirstInLine;
  return {
    value: value,
    isToday: isToday,
    isActive: isActive,
    isInRange: isInRange,
    isDisabled: isDisabled,
    isSameDate: isSameDate,
    isCurrentTo: isCurrentTo,
    isCurrentToBeforeFrom: isCurrentToBeforeFrom,
    isCurrentToAfterFrom: isCurrentToAfterFrom,
    isCurrentToIsStartOfLine: isCurrentToIsStartOfLine,
    isCurrentToIsEndOfLine: isCurrentToIsEndOfLine,
    isStartOfRangeLine: isStartOfRangeLine,
    isEndOfRangeLine: isEndOfRangeLine,
    isFromIsEndOfLine: isFromIsEndOfLine,
    isFromIsMiddleOfLine: isFromIsMiddleOfLine,
    isToIsStartOfLine: isToIsStartOfLine,
    isToIsMiddleOfLine: isToIsMiddleOfLine,
    isFromIsMiddleOfLineAndBeforeCurrentTo: isFromIsMiddleOfLineAndBeforeCurrentTo,
    isFromIsMiddleOfLineAndAfterCurrentTo: isFromIsMiddleOfLineAndAfterCurrentTo,
    isFromIsEndOfLineAndBeforeCurrentTo: isFromIsEndOfLineAndBeforeCurrentTo,
    isFromIsStartOfLineAndAfterCurrentTo: isFromIsStartOfLineAndAfterCurrentTo
  };
};

var Month = function Month(props) {
  var viewDate = props.viewDate,
      restriction = props.restriction,
      handleChangeRangeFrom = props.handleChangeRangeFrom,
      handleChangeRangeTo = props.handleChangeRangeTo,
      rangeFrom = props.rangeFrom,
      rangeTo = props.rangeTo,
      isRangeMode = props.isRangeMode,
      isFromError = props.isFromError,
      isToError = props.isToError;
  var isDateAllowed = useCallback(function (date) {
    var parsedDate = parseRuDate(date);
    return restriction(parsedDate, parsedDate && {
      start: startOfDay(parsedDate),
      end: endOfDay(parsedDate)
    });
  }, []);

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      currentTo = _useState2[0],
      setCurrentTo = _useState2[1];

  var handleResetCurrentTo = useCallback(function () {
    return setCurrentTo(null);
  }, []);
  var isError = rangeFrom && rangeTo && (!isBefore(rangeFrom, rangeTo) || !isDateAllowed(rangeFrom) || !isDateAllowed(rangeTo));

  var handleChangeCurrentTo = function handleChangeCurrentTo(date) {
    var value = _.get(date, 'target.value', date);

    setCurrentTo(value);
  };

  var handleChangeRange = useCallback(function (date) {
    var value = _.get(date, 'target.value', date);

    if (rangeFrom && !rangeTo) {
      handleChangeRangeTo(value);
    } else {
      handleChangeRangeFrom(value);
    }
  }, [rangeFrom, rangeTo]);
  var days = getItemsDays(viewDate); // Смотрим в каком мы режиме и меняем значения местами, если пользователь выбрал rangeTo меньший, чем rangeFrom

  var interval = null;

  if (!isRangeMode && rangeFrom && rangeTo) {
    interval = isBefore(rangeFrom, rangeTo) ? {
      start: rangeFrom,
      end: rangeTo
    } : {
      start: rangeTo,
      end: rangeFrom
    };
  } else if (isRangeMode && rangeFrom && currentTo) {
    interval = isBefore(rangeFrom, currentTo) ? {
      start: rangeFrom,
      end: currentTo
    } : {
      start: currentTo,
      end: rangeFrom
    };
  }

  return /*#__PURE__*/React.createElement("table", {
    "data-unit": "range:month",
    className: classnames(style.daysTable, style$1.daysTable)
  }, /*#__PURE__*/React.createElement(HeaderMonth, null), /*#__PURE__*/React.createElement("tbody", {
    className: style.tbodyMonth,
    "data-unit": "range:days"
  }, _.map(days, function (week, i) {
    return /*#__PURE__*/React.createElement("tr", {
      className: style.row,
      key: i
    }, _.map(week, function (date, index) {
      if (!date) {
        return /*#__PURE__*/React.createElement("td", {
          key: index,
          className: style.noPadding
        }, /*#__PURE__*/React.createElement("div", {
          className: circleButtonStyles.itemEmpty
        }));
      }

      var dayState = getItemState(date, rangeFrom, rangeTo, currentTo, index, DAYS_ROW_LAST_INDEX, isRangeMode, interval, restriction);
      var isFromErrorDay = fullISOFormat(setHours(setMinutes(dayState.value, 50), 11)) === rangeFrom && isFromError;
      var isToErrorDay = fullISOFormat(setHours(setMinutes(dayState.value, 50), 11)) === rangeTo && isToError;
      var wrapperClassName = null;
      var buttonClassName;

      if (isBefore(currentTo, rangeFrom)) {
        buttonClassName = classnames(circleButtonStyles.item, circleButtonStyles.itemNoTransition, circleButtonStyles.itemBordered, dayState.isActive && !isFromErrorDay && !isToErrorDay && circleButtonStyles.itemActive);
      } else {
        wrapperClassName = dayState.isSameDate ? classnames(!dayState.isDisabled && style.pointer) : classnames(dayState.isInRange && !dayState.isCurrentTo && !isError && style.noPadding, !dayState.isDisabled && style.pointer, dayState.isToIsStartOfLine && !isError && style$1.rangeToIsStartOfLine, dayState.isFromIsEndOfLine && !isError && style$1.rangeFromIsEndOfLine, dayState.isFromIsMiddleOfLine && !isError && rangeTo && style$1.rangeFromMiddleOfRange, dayState.isToIsMiddleOfLine && !isError && style$1.rangeToMiddleOfRange, dayState.isCurrentToBeforeFrom && style$1.rangeCurrentToBeforeFrom, dayState.isCurrentToAfterFrom && style$1.rangeCurrentToAfterFrom, dayState.isCurrentToIsStartOfLine && !isError && style$1.rangeCurrentToIsStartOfLine, dayState.isCurrentToIsEndOfLine && !isError && style$1.rangeCurrentToIsEndOfLine, dayState.isFromIsMiddleOfLineAndBeforeCurrentTo && style$1.rangeFromMiddleOfRangeAndBeforeCurrentTo, dayState.isFromIsMiddleOfLineAndAfterCurrentTo && style$1.rangeFromMiddleOfRangeAndAfterCurrentTo, dayState.isFromIsEndOfLineAndBeforeCurrentTo && !isError && style$1.rangeFromIsEndOfLine, dayState.isFromIsStartOfLineAndAfterCurrentTo && !isError && style$1.rangeToIsStartOfLine);
        buttonClassName = classnames(circleButtonStyles.item, circleButtonStyles.itemNoTransition, circleButtonStyles.itemBordered, dayState.isActive && !isFromErrorDay && !isToErrorDay && circleButtonStyles.itemActive, dayState.isInRange && !dayState.isCurrentTo && !isError && style$1.rangeMiddle, dayState.isStartOfRangeLine && style$1.rangeStartOfLine, dayState.isEndOfRangeLine && style$1.rangeEndOfLine, isFromErrorDay && circleButtonStyles.itemError, isToErrorDay && circleButtonStyles.itemError, isError && style$1.rangeError);
      }

      wrapperClassName = classnames(wrapperClassName, dayState.isToday && style.itemNow);
      return /*#__PURE__*/React.createElement("td", {
        key: index,
        className: wrapperClassName
      }, /*#__PURE__*/React.createElement(CircleButton, {
        onMouseDown: handleChangeRange,
        onMouseEnter: isRangeMode && !dayState.isDisabled ? handleChangeCurrentTo : _.noop,
        onMouseLeave: handleResetCurrentTo,
        className: buttonClassName,
        disabled: dayState.isDisabled,
        value: dayState.value,
        dataUnit: "range:day"
      }, getDate(dayState.value)));
    }));
  })));
};

Month.propTypes = {
  restriction: PropTypes.func,
  rangeFrom: PropTypes.string,
  handleChangeRangeFrom: PropTypes.func,
  rangeTo: PropTypes.string,
  handleChangeRangeTo: PropTypes.func,
  viewDate: PropTypes.string.isRequired,
  isRangeMode: PropTypes.bool
};
Month.defaultProps = {
  restriction: _.stubTrue,
  rangeFrom: void 0,
  handleChangeRangeFrom: _.noop,
  rangeTo: void 0,
  handleChangeRangeTo: _.noop,
  isRangeMode: _.false,
  focusedInput: null
};

export default Month;
export { getItemState };
//# sourceMappingURL=month.js.map
