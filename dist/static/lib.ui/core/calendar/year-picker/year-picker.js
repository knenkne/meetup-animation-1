import { j as _objectWithoutProperties, _ as _extends } from '../../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import 'classnames';
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
import '../../utils/merge-theme.js';
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
import 'date-fns/toDate';
import 'date-fns/isValid';
import 'date-fns/esm/locale/ru';
import '../constants.js';
import 'date-fns';
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
import '../../input/index.js';
import '../utils.js';
import '../context.js';
import '../components/common/control.css';
import '../components/common/control.js';
import '../components/controls/style.css';
import '../components/controls/index.js';
import '../style.css';
import '../components/common/table.css';
import '../components/common/square-button.css';
import '../components/common/square-button.js';
import '../components/months/cell.js';
import '../components/months/row.js';
import '../components/months/style.css';
import '../components/months/grid.js';
import 'date-fns/endOfMonth';
import 'date-fns/startOfQuarter';
import 'date-fns/endOfQuarter';
import 'date-fns/format';
import '../components/quarters/style.css';
import '../components/quarters/cell.js';
import '../components/quarters/row.js';
import '../components/quarters/quarters.js';
import 'date-fns/startOfWeek';
import 'date-fns/addDays';
import '../components/month/style.css';
import '../components/month/header-month.js';
import '../components/month/cell.js';
import '../components/month/row.js';
import '../components/month/grid.js';
import '../components/common/navigation.css';
import '../components/common/navigation.js';
import '../components/years/style.css';
import '../components/years/cell.js';
import '../components/years/row.js';
import '../components/years/grid.js';
import '../components/years/index.js';
import '../components/calendar-item/show-table.js';
import { CalendarItem } from '../components/calendar-item/calendar-item.js';
import '../mobile-enabler.js';
import '../calendar-input.css';
import '../date-picker/single-input.js';
import { dropdownCombiner } from '../components/hoc/dropdown-combiner.js';
import { dropdownHandleClose } from '../components/hoc/dropdown-handle-close.js';
import '../components/icon-block/icon-block.js';
import { YearInput } from './year-input.js';

var CalendarHOCed = dropdownHandleClose(CalendarItem);
var DropdownCombinerHOCed = dropdownCombiner(YearInput, CalendarHOCed);
/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=calendar)
 * Ввод года
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var YearPicker = function YearPicker(_ref) {
  var initialViewDate = _ref.initialViewDate,
      otherProps = _objectWithoutProperties(_ref, ["initialViewDate"]);

  return /*#__PURE__*/React.createElement(DropdownCombinerHOCed, _extends({}, otherProps, {
    mode: "years",
    showDate: otherProps.value || initialViewDate
  }));
};
YearPicker.propTypes = {
  /**
   * Полная ISO строка даты
   */
  value: PropTypes.string,

  /**
   * Первоначально отображаемая дата. Полная ISO строка даты
   */
  initialViewDate: PropTypes.string,

  /**
   * Год, с которого начинается таблица выбора годов. ISO строка года
   */
  startingYear: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.string,
  disabled: PropTypes.bool,

  /**
   * Функция, запрещающая выбор даты. Принимает в качестве аргумента дату в формате объекта Date, возвращает логическое значение
   * (instanceof(Date)) => boolean
   */
  restriction: PropTypes.func,
  theme: PropTypes.shape({
    input: PropTypes.string,
    calendarMonthYearBlock: PropTypes.string,
    iconPosition: PropTypes.string,
    block: PropTypes.string,
    disabled: PropTypes.string,
    error: PropTypes.string,
    icon: PropTypes.string,
    inputIcon: PropTypes.string
  })
};
YearPicker.defaultProps = {
  value: '',
  initialViewDate: new Date().toISOString(),
  startingYear: new Date().toISOString(),
  name: '',
  onChange: _.noop,
  onFocus: _.noop,
  onBlur: _.noop,
  restriction: _.stubTrue,
  error: void 0,
  disabled: false,
  theme: YearInput.theme
};
YearPicker.theme = YearInput.theme;
YearPicker.displayName = 'Calendar.Year';

export { YearPicker };
//# sourceMappingURL=year-picker.js.map
