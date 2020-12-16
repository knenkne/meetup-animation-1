import { a as _slicedToArray } from '../../../_rollupPluginBabelHelpers-687385f0.js';
import React, { useState, useEffect } from 'react';
import 'prop-types';
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
import { MULTIPLE_OF_TEN, CALENDAR_MODES } from '../../constants.js';
import { getYear, subYears } from 'date-fns';
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
import { getItemsYears, fullISOFormat } from '../../utils.js';
import { useCalendarContext } from '../../context.js';
import '../common/table.css';
import '../common/square-button.css';
import '../common/square-button.js';
import style$1 from '../common/navigation.css';
import Navigation from '../common/navigation.js';
import style from './style.css';
import './cell.js';
import './row.js';
import { Grid } from './grid.js';

var PERIOD = 10;
var minValidYear = 1800;
var maxValidYear = 2200;

var Years = function Years() {
  var _useCalendarContext = useCalendarContext(),
      mode = _useCalendarContext.mode,
      startingYear = _useCalendarContext.startingYear,
      initialShowDate = _useCalendarContext.showDate;

  var _useState = useState(initialShowDate),
      _useState2 = _slicedToArray(_useState, 2),
      showDate = _useState2[0],
      changeDate = _useState2[1];

  var handleChangePeriod = function handleChangePeriod(period) {
    return function () {
      return changeDate(fullISOFormat(subYears(showDate, period)));
    };
  };

  var handlePeriodPrev = handleChangePeriod(PERIOD);
  var handlePeriodNext = handleChangePeriod(-PERIOD);
  var items = getItemsYears(showDate); // Делаем из самого первого года в выборке подпись навигации в формате 2000-е, 2010-е и т.д.

  var minYear = _.get(items, ['0', '0'], null);

  var parsedYear = getYear(minYear);
  var period = minYear ? "".concat(parsedYear - parsedYear % MULTIPLE_OF_TEN) : null;
  var isYearsMode = mode === CALENDAR_MODES.YEARS;
  useEffect(function () {
    if (showDate !== initialShowDate) {
      changeDate(initialShowDate);
    }
  }, [initialShowDate]);
  return /*#__PURE__*/React.createElement("div", {
    className: classnames(!isYearsMode && style.offsetTop)
  }, /*#__PURE__*/React.createElement(Navigation, {
    handlePrevClick: parsedYear >= minValidYear ? handlePeriodPrev : _.noop,
    handleNextClick: parsedYear <= maxValidYear ? handlePeriodNext : _.noop,
    wrapperClassName: style$1.navigationWrapper
  }, "".concat(period, "-\u0435")), /*#__PURE__*/React.createElement(Grid, {
    items: items
  }));
};

export { PERIOD, Years };
//# sourceMappingURL=index.js.map
