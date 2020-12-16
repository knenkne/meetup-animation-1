import { a as _slicedToArray } from '../../../_rollupPluginBabelHelpers-687385f0.js';
import React, { useState, useCallback } from 'react';
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
import { LOCALE } from '../../constants.js';
import { setYear, format, startOfYear, endOfYear, isSameYear, subYears } from 'date-fns';
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
import { getItemsYears, fullISOFormat, getYearsTitle } from '../../utils.js';
import commonTableStyles from '../../components/common/table.css';
import commonStyles from '../../components/common/square-button.css';
import SquareButton from '../../components/common/square-button.js';
import style from '../../components/common/navigation.css';
import Navigation from '../../components/common/navigation.js';
import commonStyle from './common.css';
import style$1 from './years.css';

var PERIOD = 10;
var LAST_DECADE = 9990;

var Years = function Years(props) {
  var viewDate = props.viewDate,
      restriction = props.restriction,
      setMonthMode = props.setMonthMode,
      setViewDate = props.setViewDate,
      setFocusBack = props.setFocusBack;

  var _useState = useState(viewDate),
      _useState2 = _slicedToArray(_useState, 2),
      currentYear = _useState2[0],
      setCurrentYear = _useState2[1];

  var handleChangePeriod = function handleChangePeriod(period) {
    return function (e) {
      e.preventDefault();
      setFocusBack();
      setCurrentYear(fullISOFormat(subYears(currentYear, period)));
    };
  };

  var handlePrevClick = handleChangePeriod(PERIOD);
  var handleNextClick = handleChangePeriod(-PERIOD);
  var years = getItemsYears(currentYear);
  var isLastDecade = _.get(years, ['0', '0']).getFullYear() === LAST_DECADE;
  var handleChangeViewDate = useCallback(function (date) {
    var parsedDate = _.get(date, 'target.value', date);

    setViewDate(fullISOFormat(setYear(viewDate, format(parsedDate, 'YYYY'))));
    setMonthMode(date);
  }, []);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Navigation, {
    handlePrevClick: handlePrevClick,
    handleNextClick: handleNextClick,
    wrapperClassName: style.navigationWrapper,
    isLastDecade: isLastDecade
  }, getYearsTitle(years)), /*#__PURE__*/React.createElement("table", {
    className: classnames(commonTableStyles.table, style$1.tableWrapper),
    "data-unit": "range:months"
  }, /*#__PURE__*/React.createElement("tbody", null, _.map(years, function (item, i) {
    return /*#__PURE__*/React.createElement("tr", {
      key: i,
      className: classnames(commonTableStyles.tableRow, style$1.tableRow)
    }, _.map(item, function (date, index) {
      var now = Date.now();
      var formattedDate = fullISOFormat(date);
      var isDisabled = !restriction(formattedDate, {
        start: startOfYear(formattedDate),
        end: endOfYear(formattedDate)
      });
      var isToday = isSameYear(formattedDate, now);
      var isActive = isSameYear(formattedDate, viewDate);
      return /*#__PURE__*/React.createElement("td", {
        key: index,
        className: classnames(commonTableStyles.tableCell)
      }, /*#__PURE__*/React.createElement(SquareButton, {
        className: classnames(commonStyle.squareButton, isActive && commonStyles.itemActive, isToday && commonStyles.itemNow),
        onClick: handleChangeViewDate,
        disabled: isDisabled,
        value: formattedDate,
        dataUnit: "range:year"
      }, format(formattedDate, 'YYYY', LOCALE)));
    }));
  }))));
};

Years.propTypes = {
  restriction: PropTypes.func,
  setMonthMode: PropTypes.func,
  setViewDate: PropTypes.func,
  setFocusBack: PropTypes.func,
  viewDate: PropTypes.string.isRequired
};
Years.defaultProps = {
  restriction: _.stubTrue,
  setMonthMode: _.noop,
  setViewDate: _.noop,
  setFocusBack: _.noop
};

export default Years;
//# sourceMappingURL=years.js.map
