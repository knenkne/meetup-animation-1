import { a as _slicedToArray, _ as _extends } from '../../_rollupPluginBabelHelpers-687385f0.js';
import React, { useState, useCallback, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';
import '../../utils/get-display-name.js';
import '../../utils/hoc/style.css';
import '../../utils/hoc/deprecate.js';
import '../../utils/hoc/experimental.js';
import '../../utils/hoc/error-adapter.js';
import '../../utils/hoc/omittere.js';
import '../../utils/hoc/accessibility-relocation.js';
import '../../utils/handlers.js';
import '../../utils/pluralize.js';
import '../../utils/scroll-to.js';
import '../../utils/format-phone-number.js';
import '../../utils/memoize-func-with-args.js';
import '../../utils/auto-top-check-by-window.js';
import { mergeTheme } from '../../utils/merge-theme.js';
import '../../utils/styles/media.config.css';
import '../../utils/adaptive.js';
import '../../utils/pseudo/pseudo-button.js';
import '../../utils/get-card-icon.js';
import '../../utils/get-ivestments-icon.js';
import '../../utils/get-metal-icon.js';
import '../../utils/get-target-icon.js';
import '../../icon/style.css';
import '../../icon/icon.js';
import '../../index-85b17782.js';
import '../../external-969f6c5f.js';
import '../../icon/index.js';
import '../../utils/set-project-id.js';
import '../../utils/make-direction.js';
import '../../utils/show-error.js';
import '../../typography/style.css';
import '../../typography/headline.js';
import '../../typography/title.js';
import '../../typography/subheader.js';
import '../../typography/caption.js';
import '../../typography/uppercase.js';
import '../../typography/description.js';
import '../../typography/index.js';
import '../../currency/locales.js';
import '../../currency/options.js';
import '../../currency/style.css';
import '../../currency/currency.js';
import 'bignumber.js';
import 'text-mask-core/dist/textMaskCore';
import 'text-mask-addons/dist/createNumberMask';
import '../../input/utils.js';
import '../../button/command/style.css';
import '../../button/command/index.js';
import '../../loader/loader.css';
import '../../loader/loader-themes/pulse-loader.css';
import '../../loader/loader-themes/jump-loader.css';
import '../../loader/loader-themes/swap-loader.css';
import '../../loader/loader.js';
import '../../loader/icon-loader.css';
import '../../loader/icon-loader.js';
import '../../loader/button-loader.css';
import '../../loader/utils.js';
import '../../loader/button-loader.js';
import '../../loader/index.js';
import '../../button/icon/style.css';
import '../../button/icon/index.js';
import '../../tooltip/style.css';
import '../../tooltip/tip.js';
import '../../tooltip/tooltip.js';
import '../../tooltip/hover-tooltip.js';
import 'react-onclickoutside';
import '../../perimeter/perimeter.js';
import '../../perimeter/index.js';
import '../../tooltip/click-tooltip.js';
import '../../tooltip/index.js';
import '../../button/info/style.css';
import '../../button/info/index.js';
import '../../button/radio-segmented/style.css';
import '../../button/radio-segmented/index.js';
import '../../button/style.css';
import '../../button/index.js';
import 'date-fns/esm/locale/ru';
import { RANGE_MODES, MASK_DATE, LOCALE } from '../constants.js';
import { isValid, startOfDay, endOfDay, isBefore, isSameDay, subMonths, addMonths, subYears, addYears, format } from 'date-fns';
import '../../input/input.css';
import '../../input/input.js';
import '../../input/hoc/auto-size.js';
import '../../input/masked/masked-format.js';
import '../../input/masked/masked.js';
import '../../input/numeric/numeric.js';
import '../../input/counter/counter.css';
import '../../input/counter/counter-control.js';
import '../../input/counter/counter.js';
import '../../input/text/text.css';
import '../../input/text/text.js';
import '../../input/currency/currency.js';
import '../../input/money/money.js';
import '../../input/password/eye-style.css';
import '../../input/password/eye.js';
import '../../input/password/input-style.css';
import '../../input/password/password.js';
import '../../input/currency-select/currency-select.js';
import '../../input/currency-select/currency-select.css';
import '../../input/currency-select/currency-select-option.js';
import '../../dropdown/style.css';
import '../../dropdown/target-button.js';
import '../../dropdown/utils.js';
import '../../dropdown/contents.js';
import '../../dropdown/group.js';
import '../../dropdown/select/select.css';
import '../../dropdown/option.js';
import '../../link/link.css';
import '../../link/components/simple-external-link.js';
import '../../link/link.js';
import '../../dropdown/link.js';
import '../../dropdown/dropdown.js';
import '../../dropdown/select/item.js';
import '../../dropdown/select/select.js';
import '../../dropdown/index.js';
import '../../marked-text/style.css';
import '../../marked-text/marked-text.js';
import '../../input/suggest/style.css';
import '../../input/suggest/themes.js';
import '../../input/suggest/target-input.js';
import '../../input/suggest/long.js';
import '../../input/suggest/no-matches.js';
import '../../input/suggest/error.js';
import '../../input/suggest/option.js';
import '../../input/suggest/suggest.js';
import '../../input/suggest/utils.js';
import '../../input/suggest/suggest-dynamic.js';
import '../../input/suggest/index.js';
import '../../input/hoc/typeahead.css';
import '../../input/hoc/typeahead.js';
import '../../input/phone/phone-mask.js';
import '../../input/phone/local-phone.js';
import '../../input/hoc/keep-char-positions-typeahead.js';
import '../../input/hoc/tooltiped.js';
import 'remarkable';
import 'remarkable/lib/common/utils';
import '../../markdown/utils.js';
import '../../markdown/style.css';
import '../../markdown/full.js';
import '../../markdown/short.js';
import '../../markdown/index.js';
import '../../labeled/labeled.css';
import '../../labeled/index.js';
import '../../input/hoc/labeled.js';
import { Input } from '../../input/index.js';
import { fullISOFormat, parseRuDate, isDateValid } from '../utils.js';
import '../components/common/control.css';
import '../components/common/control.js';
import '../components/common/table.css';
import '../components/common/square-button.css';
import '../components/common/square-button.js';
import 'date-fns/format';
import 'date-fns/startOfWeek';
import 'date-fns/addDays';
import '../components/month/style.css';
import '../components/month/header-month.js';
import '../components/common/navigation.css';
import '../components/common/navigation.js';
import '../components/common/circle-button.css';
import '../components/common/circle-button.js';
import '../components/common/submit-button.css';
import { SubmitButton } from '../components/common/submit-button.js';
import '../calendar-input.css';
import '../../popup-wrapper/style.css';
import PopupWrapper from '../../popup-wrapper/popup-wrapper.js';
import style from './style.css';
import RangeInput from './components/range-input.js';
import './components/month.css';
import Month from './components/month.js';
import './components/common.css';
import './components/months.css';
import Months from './components/months.js';
import './components/years.css';
import Years from './components/years.js';
import './components/range-control.css';
import RangeControl from './components/range-control.js';

var inputTheme = mergeTheme(Input.theme, {
  input: style.input
});
var emptyArray = [];
var emptyString = ''; // Для подсвечивания поля с ошибкой без текста ошибки

var notEmptyString = ' '; // eslint-disable-next-line no-warning-comments, comment: Чтобы не забыть
// TODO Убрать, когда будет внедрятся локализация lib.ui

var localization = {
  accept: 'Применить',
  reset: 'Сбросить',
  error: 'Вы ввели недопустимую дату'
}; // eslint-disable-next-line complexity, comment: complexity of 19

var RangePicker = function RangePicker(props) {
  var initialFrom = props.from,
      initialTo = props.to,
      naked = props.naked,
      names = props.names,
      disabled = props.disabled,
      onChange = props.onChange,
      restriction = props.restriction,
      initialViewDate = props.initialViewDate,
      description = props.description;

  var fromFieldName = _.get(names, '0', 'range-picker:from');

  var fromFieldProps = _.get(props, [fromFieldName, 'input'], {
    value: emptyString
  });

  var fromFieldMeta = _.get(props, [fromFieldName, 'meta']);

  var toFieldName = _.get(names, '1', 'range-picker:to');

  var toFieldProps = _.get(props, [toFieldName, 'input'], {
    value: emptyString
  });

  var toFieldMeta = _.get(props, [toFieldName, 'meta']);

  var initialDate = isValid(initialViewDate) ? fullISOFormat(initialViewDate) : fullISOFormat(new Date());

  var _useState = useState(emptyString),
      _useState2 = _slicedToArray(_useState, 2),
      toInputRef = _useState2[0],
      setToInputRef = _useState2[1];

  var _useState3 = useState(emptyString),
      _useState4 = _slicedToArray(_useState3, 2),
      fromInputRef = _useState4[0],
      setFromInputRef = _useState4[1];

  var _useState5 = useState(RANGE_MODES.MONTH),
      _useState6 = _slicedToArray(_useState5, 2),
      mode = _useState6[0],
      setMode = _useState6[1];

  var _useState7 = useState(fromFieldProps.value),
      _useState8 = _slicedToArray(_useState7, 2),
      rangeFrom = _useState8[0],
      setRangeFrom = _useState8[1];

  var _useState9 = useState(toFieldProps.value),
      _useState10 = _slicedToArray(_useState9, 2),
      rangeTo = _useState10[0],
      setRangeTo = _useState10[1];

  var _useState11 = useState(fromFieldProps.value),
      _useState12 = _slicedToArray(_useState11, 2),
      rangeInputFrom = _useState12[0],
      setRangeInputFrom = _useState12[1];

  var _useState13 = useState(toFieldProps.value),
      _useState14 = _slicedToArray(_useState13, 2),
      rangeInputTo = _useState14[0],
      setRangeInputTo = _useState14[1];

  var focusedInput = _.findKey(props, 'meta.active') || null;

  var _useState15 = useState(false),
      _useState16 = _slicedToArray(_useState15, 2),
      isRangeMode = _useState16[0],
      setIsRangeMode = _useState16[1];

  var _useState17 = useState(initialDate),
      _useState18 = _slicedToArray(_useState17, 2),
      viewDate = _useState18[0],
      setViewDate = _useState18[1];

  var _useState19 = useState(emptyString),
      _useState20 = _slicedToArray(_useState19, 2),
      isFromError = _useState20[0],
      setIsFromError = _useState20[1];

  var _useState21 = useState(emptyString),
      _useState22 = _slicedToArray(_useState21, 2),
      isToError = _useState22[0],
      setIsToError = _useState22[1];

  var _useState23 = useState(false),
      _useState24 = _slicedToArray(_useState23, 2),
      isErrorShown = _useState24[0],
      setIsErrorShown = _useState24[1];

  var setFocusBack = useCallback(function () {
    switch (focusedInput) {
      case toFieldName:
        {
          toInputRef.focus();
          break;
        }

      case fromFieldName:
        {
          fromInputRef.focus();
          break;
        }
    }
  }, emptyArray);
  var setMonthMode = useCallback(function (e) {
    e.preventDefault();
    setFocusBack();
    setMode(RANGE_MODES.MONTH);
  }, [toInputRef, fromInputRef]);
  var setMonthsMode = useCallback(function (e) {
    e.preventDefault();
    setFocusBack();
    setMode(RANGE_MODES.MONTHS);
  }, [toInputRef, fromInputRef]);
  var setYearsMode = useCallback(function (e) {
    e.preventDefault();
    setFocusBack();
    setMode(RANGE_MODES.YEARS);
  }, [toInputRef, fromInputRef]);
  var isDateAllowed = useCallback(function (date) {
    var parsedDate = parseRuDate(date);
    return restriction(parsedDate, parsedDate && {
      start: startOfDay(parsedDate),
      end: endOfDay(parsedDate)
    });
  }, emptyArray);
  var getToInputRef = useCallback(function (element) {
    return setToInputRef(element);
  }, []);
  var getFromInputRef = useCallback(function (element) {
    return setFromInputRef(element);
  }, []);
  var fillRangeInitial = useCallback(function () {
    if (isValid(initialFrom) && isValid(initialTo)) {
      var formattedFrom = fullISOFormat(initialFrom);
      var formattedTo = fullISOFormat(initialTo);

      if (fromFieldProps === null || fromFieldProps === void 0 ? void 0 : fromFieldProps.onChange) {
        fromFieldProps.onChange(formattedFrom);
      }

      if (toFieldProps === null || toFieldProps === void 0 ? void 0 : toFieldProps.onChange) {
        toFieldProps.onChange(formattedTo);
      }

      setRangeInputFrom(formattedFrom);
      setRangeInputTo(formattedTo);
      setRangeFrom(formattedFrom);
      setRangeTo(formattedTo);
      setViewDate(formattedFrom);
    }
  }, emptyArray);
  var handleSubmit = useCallback(function () {
    var isEmptyDates = rangeTo === emptyString && rangeFrom === emptyString;
    var isRangeFromValid = isEmptyDates || rangeFrom && rangeFrom.length >= MASK_DATE.length && isValid(rangeFrom) && isDateAllowed(rangeFrom) && !isFromError;
    var isRangeToValid = isEmptyDates || rangeTo && rangeTo.length >= MASK_DATE.length && isValid(rangeTo) && isDateAllowed(rangeTo) && !isToError;

    if (!isRangeFromValid) {
      setIsFromError(notEmptyString);
    }

    if (!isRangeToValid) {
      setIsToError(notEmptyString);
    }

    if (!isRangeFromValid || !isRangeToValid) {
      setIsErrorShown(true);
      return;
    }

    onChange({
      from: rangeFrom,
      to: rangeTo
    });
  }, [rangeFrom, rangeTo, isFromError, isToError]);
  var handleReset = useCallback(function () {
    var isViewDate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    setIsRangeMode(false);
    setRangeFrom(emptyString);
    setRangeTo(emptyString);
    setRangeInputFrom(emptyString);
    setRangeInputTo(emptyString);

    if (fromFieldProps === null || fromFieldProps === void 0 ? void 0 : fromFieldProps.onChange) {
      fromFieldProps.onChange(emptyString);
    }

    if (toFieldProps === null || toFieldProps === void 0 ? void 0 : toFieldProps.onChange) {
      toFieldProps.onChange(emptyString);
    }

    setIsFromError(emptyString);
    setIsToError(emptyString);
    setIsErrorShown(false);

    if (isViewDate) {
      setViewDate(initialViewDate);
    }
  }, emptyArray);
  var handleChangeInputFrom = useCallback(function (date) {
    if (fromFieldProps === null || fromFieldProps === void 0 ? void 0 : fromFieldProps.onChange) {
      fromFieldProps.onChange(date);
    }

    setRangeInputFrom(date);

    if (isDateValid(date)) {
      var parsedDate = parseRuDate(date);
      setRangeInputFrom(parsedDate);
      setViewDate(parsedDate);
      setRangeFrom(parsedDate);

      if (isDateAllowed(date)) {
        setIsFromError(emptyString);

        if (isValid(rangeInputTo) && isDateAllowed(rangeInputTo)) {
          if (isBefore(parsedDate, rangeInputTo) || isSameDay(parsedDate, rangeInputTo)) {
            setIsFromError(emptyString);
            setIsErrorShown(false);
          } else {
            setIsFromError(notEmptyString);
          }
        } else if (toInputRef) {
          toInputRef.focus();
        }
      } else {
        setIsFromError(notEmptyString);
      }
    }
  }, [rangeInputFrom, isRangeMode, isFromError, isErrorShown]);
  var handleChangeInputTo = useCallback(function (date) {
    if (toFieldProps === null || toFieldProps === void 0 ? void 0 : toFieldProps.onChange) {
      toFieldProps.onChange(date);
    }

    setRangeInputTo(date);

    if (isDateValid(date)) {
      var parsedDate = parseRuDate(date);
      setRangeTo(parsedDate);
      setRangeInputTo(parsedDate);
      setViewDate(parsedDate);

      if (isDateAllowed(date)) {
        setIsToError(emptyString);

        if (isValid(rangeInputFrom) && isDateAllowed(rangeInputFrom)) {
          if (isBefore(rangeInputFrom, parsedDate) || isSameDay(rangeInputFrom, parsedDate)) {
            setIsToError(emptyString);
            setIsErrorShown(false);
          } else {
            setIsToError(notEmptyString);
          }
        } else if (fromInputRef) {
          fromInputRef.focus();
        }
      } else {
        setIsToError(notEmptyString);
      }
    }
  }, [rangeInputTo, isRangeMode, isFromError, isErrorShown]);
  var handleChangeRangeFrom = useCallback(function (date) {
    if (rangeFrom && rangeTo || isBefore(rangeTo, date)) {
      handleReset(false);
    }

    var value = fullISOFormat(_.get(date, 'target.value', date));

    if (fromFieldProps === null || fromFieldProps === void 0 ? void 0 : fromFieldProps.onChange) {
      fromFieldProps.onChange(value);
    }

    setRangeInputFrom(value);
    setRangeFrom(value);
    setIsFromError(emptyString);
    setIsErrorShown(false);
  }, [rangeFrom, rangeTo]);
  var handleChangeRangeTo = useCallback(function (date) {
    var value = fullISOFormat(_.get(date, 'target.value', date));

    if (isBefore(value, rangeFrom)) {
      handleChangeRangeFrom(value);
      return;
    }

    if (toFieldProps === null || toFieldProps === void 0 ? void 0 : toFieldProps.onChange) {
      toFieldProps.onChange(value);
    }

    setRangeInputTo(value);
    setRangeTo(value);
    setIsToError(emptyString);
    setIsErrorShown(false);
  }, [rangeFrom, rangeTo]);
  var handleChangePrevMonth = useCallback(function (e) {
    e.preventDefault();
    setFocusBack();
    var resultValue = fullISOFormat(subMonths(e.currentTarget.value, 1));
    setViewDate(resultValue);
  }, [toInputRef, fromInputRef]);
  var handleChangeNextMonth = useCallback(function (e) {
    e.preventDefault();
    setFocusBack();
    var resultValue = fullISOFormat(addMonths(e.currentTarget.value, 1));
    setViewDate(resultValue);
  }, [toInputRef, fromInputRef]);
  var handleChangePrevYear = useCallback(function (e) {
    e.preventDefault();
    setFocusBack();
    var resultValue = fullISOFormat(subYears(e.currentTarget.value, 1));
    setViewDate(resultValue);
  }, [toInputRef, fromInputRef]);
  var handleChangeNextYear = useCallback(function (e) {
    e.preventDefault();
    setFocusBack();
    var resultValue = fullISOFormat(addYears(e.currentTarget.value, 1));
    setViewDate(resultValue);
  }, [toInputRef, fromInputRef]);
  var isMonthMode = mode === RANGE_MODES.MONTH;
  var isMonthsMode = mode === RANGE_MODES.MONTHS;
  var isYearsMode = mode === RANGE_MODES.YEARS;
  var isError = (isToError || isFromError) && isErrorShown;
  var isResetButtonVisible = rangeFrom || rangeTo;
  var Wrapper = naked ? Fragment : PopupWrapper;
  useEffect(fillRangeInitial, emptyArray);
  useEffect(function () {
    if (rangeTo || rangeFrom) {
      setIsRangeMode(true);
    }

    if (rangeTo && rangeFrom) {
      setIsRangeMode(false);
    }

    if (isBefore(rangeFrom, rangeTo) && isDateAllowed(rangeFrom) && isDateAllowed(rangeTo)) {
      setIsErrorShown(emptyString);
      setIsFromError(emptyString);
      setIsToError(emptyString);
    }
  }, [rangeFrom, rangeTo]);
  return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement("div", {
    className: style.rangeWrapper
  }, /*#__PURE__*/React.createElement("div", {
    className: classnames(style.inputsWrapper, isError && style.inputsWrapperError)
  }, /*#__PURE__*/React.createElement(RangeInput, _extends({}, fromFieldProps, fromFieldMeta, {
    value: rangeInputFrom,
    error: isFromError,
    theme: inputTheme,
    disabled: disabled,
    id: fromFieldName,
    refWrapper: getFromInputRef,
    onChange: handleChangeInputFrom
  })), /*#__PURE__*/React.createElement("div", {
    className: style.inputsDivider
  }), /*#__PURE__*/React.createElement(RangeInput, _extends({}, toFieldProps, toFieldMeta, {
    value: rangeInputTo,
    error: isToError,
    theme: inputTheme,
    disabled: disabled,
    id: toFieldName,
    refWrapper: getToInputRef,
    onChange: handleChangeInputTo
  }))), isError && /*#__PURE__*/React.createElement("div", {
    className: style.errorWrapper
  }, /*#__PURE__*/React.createElement("span", null, description)), /*#__PURE__*/React.createElement("div", {
    className: style.contentWrapper
  }, /*#__PURE__*/React.createElement("div", {
    className: classnames(style.controlsWrapper, isMonthsMode && style.controlsWrapperMonths, isYearsMode && style.controlsWrapperYears)
  }, /*#__PURE__*/React.createElement(RangeControl, {
    dataUnit: "range:switcher:months",
    viewDate: viewDate,
    title: format(viewDate, 'MMMM', LOCALE),
    isActive: isMonthsMode,
    onControlClick: isMonthsMode ? setMonthMode : setMonthsMode,
    onPrevClick: handleChangePrevMonth,
    onNextClick: handleChangeNextMonth,
    customControlClassName: classnames(style.rangeControl, style.monthsControl)
  }), /*#__PURE__*/React.createElement(RangeControl, {
    onClick: isYearsMode ? setMonthMode : setYearsMode,
    viewDate: viewDate,
    dataUnit: "range:switcher:years",
    title: format(viewDate, 'YYYY', LOCALE),
    isActive: isYearsMode,
    onControlClick: isYearsMode ? setMonthMode : setYearsMode,
    onPrevClick: handleChangePrevYear,
    onNextClick: handleChangeNextYear,
    customControlClassName: classnames(style.rangeControl, style.yearsControl)
  })), isMonthMode && /*#__PURE__*/React.createElement(Month, {
    isFromError: isFromError,
    isToError: isToError,
    viewDate: viewDate,
    restriction: restriction,
    isRangeMode: isRangeMode,
    setIsRangeMode: setIsRangeMode,
    rangeTo: rangeTo,
    handleChangeRangeFrom: handleChangeRangeFrom,
    rangeFrom: rangeFrom,
    handleChangeRangeTo: handleChangeRangeTo,
    focusedInput: focusedInput
  }), isMonthsMode && /*#__PURE__*/React.createElement(Months, {
    viewDate: viewDate,
    setViewDate: setViewDate,
    restriction: restriction,
    setMonthMode: setMonthMode
  }), isYearsMode && /*#__PURE__*/React.createElement(Years, {
    viewDate: viewDate,
    setViewDate: setViewDate,
    restriction: restriction,
    setMonthMode: setMonthMode,
    setFocusBack: setFocusBack
  }), isMonthMode && /*#__PURE__*/React.createElement("div", {
    className: classnames(style.bottomButtons, isResetButtonVisible && style.bottomButtonsBetween)
  }, /*#__PURE__*/React.createElement(SubmitButton, {
    onSubmit: handleSubmit,
    text: localization.accept
  }), isResetButtonVisible && /*#__PURE__*/React.createElement(SubmitButton, {
    onSubmit: handleReset,
    text: localization.reset,
    isReset: true
  })))));
};

RangePicker.propTypes = {
  from: PropTypes.string,
  to: PropTypes.string,
  naked: PropTypes.bool,
  names: PropTypes.array,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  restriction: PropTypes.func,
  initialViewDate: PropTypes.string,
  description: PropTypes.string
};
RangePicker.defaultProps = {
  from: emptyString,
  to: emptyString,
  naked: false,
  names: [],
  disabled: false,
  onChange: _.noop,
  restriction: _.stubTrue,
  description: localization.error,
  initialViewDate: fullISOFormat(new Date())
};
RangePicker.displayName = 'Calendar.RangePicker';

export { RangePicker };
//# sourceMappingURL=range-picker.js.map
