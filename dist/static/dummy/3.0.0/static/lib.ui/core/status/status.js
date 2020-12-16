import { _ as _extends } from '../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';
import '../utils/get-display-name.js';
import '../utils/hoc/style.css';
import { deprecate } from '../utils/hoc/deprecate.js';
import '../utils/hoc/experimental.js';
import '../utils/hoc/error-adapter.js';
import '../utils/hoc/omittere.js';
import '../utils/hoc/accessibility-relocation.js';
import '../utils/handlers.js';
import '../utils/pluralize.js';
import '../utils/scroll-to.js';
import '../utils/format-phone-number.js';
import '../utils/memoize-func-with-args.js';
import '../utils/auto-top-check-by-window.js';
import '../utils/merge-theme.js';
import '../utils/styles/media.config.css';
import '../utils/adaptive.js';
import '../utils/pseudo/pseudo-button.js';
import '../utils/get-card-icon.js';
import '../utils/get-ivestments-icon.js';
import '../utils/get-metal-icon.js';
import '../utils/get-target-icon.js';
import '../icon/style.css';
import { Icon } from '../icon/icon.js';
import '../index-85b17782.js';
import '../external-969f6c5f.js';
import '../icon/index.js';
import '../utils/set-project-id.js';
import '../utils/make-direction.js';
import '../utils/show-error.js';
import '../typography/style.css';
import '../typography/headline.js';
import '../typography/title.js';
import '../typography/subheader.js';
import '../typography/caption.js';
import '../typography/uppercase.js';
import '../typography/description.js';
import { Typography } from '../typography/index.js';
import '../currency/locales.js';
import '../currency/options.js';
import '../currency/style.css';
import '../currency/currency.js';
import 'bignumber.js';
import 'text-mask-core/dist/textMaskCore';
import 'text-mask-addons/dist/createNumberMask';
import '../input/utils.js';
import '../button/command/style.css';
import '../button/command/index.js';
import '../loader/loader.css';
import '../loader/loader-themes/pulse-loader.css';
import '../loader/loader-themes/jump-loader.css';
import '../loader/loader-themes/swap-loader.css';
import '../loader/loader.js';
import '../loader/icon-loader.css';
import '../loader/icon-loader.js';
import '../loader/button-loader.css';
import '../loader/utils.js';
import '../loader/button-loader.js';
import '../loader/index.js';
import '../button/icon/style.css';
import '../button/icon/index.js';
import '../tooltip/style.css';
import '../tooltip/tip.js';
import '../tooltip/tooltip.js';
import '../tooltip/hover-tooltip.js';
import 'react-onclickoutside';
import '../perimeter/perimeter.js';
import '../perimeter/index.js';
import '../tooltip/click-tooltip.js';
import '../tooltip/index.js';
import '../button/info/style.css';
import '../button/info/index.js';
import '../button/radio-segmented/style.css';
import '../button/radio-segmented/index.js';
import '../button/style.css';
import '../button/index.js';
import '../input/input.css';
import '../input/input.js';
import '../input/hoc/auto-size.js';
import '../input/masked/masked-format.js';
import '../input/masked/masked.js';
import '../input/numeric/numeric.js';
import '../input/counter/counter.css';
import '../input/counter/counter-control.js';
import '../input/counter/counter.js';
import '../input/text/text.css';
import '../input/text/text.js';
import '../input/currency/currency.js';
import '../input/money/money.js';
import '../input/password/eye-style.css';
import '../input/password/eye.js';
import '../input/password/input-style.css';
import '../input/password/password.js';
import '../input/currency-select/currency-select.js';
import '../input/currency-select/currency-select.css';
import '../input/currency-select/currency-select-option.js';
import '../dropdown/style.css';
import '../dropdown/target-button.js';
import '../dropdown/utils.js';
import '../dropdown/contents.js';
import '../dropdown/group.js';
import '../dropdown/select/select.css';
import '../dropdown/option.js';
import '../link/link.css';
import '../link/components/simple-external-link.js';
import '../link/link.js';
import '../dropdown/link.js';
import '../dropdown/dropdown.js';
import '../dropdown/select/item.js';
import '../dropdown/select/select.js';
import '../dropdown/index.js';
import '../marked-text/style.css';
import '../marked-text/marked-text.js';
import '../input/suggest/style.css';
import '../input/suggest/themes.js';
import '../input/suggest/target-input.js';
import '../input/suggest/long.js';
import '../input/suggest/no-matches.js';
import '../input/suggest/error.js';
import '../input/suggest/option.js';
import '../input/suggest/suggest.js';
import '../input/suggest/utils.js';
import '../input/suggest/suggest-dynamic.js';
import '../input/suggest/index.js';
import '../input/hoc/typeahead.css';
import '../input/hoc/typeahead.js';
import '../input/phone/phone-mask.js';
import '../input/phone/local-phone.js';
import '../input/hoc/keep-char-positions-typeahead.js';
import '../input/hoc/tooltiped.js';
import 'remarkable';
import 'remarkable/lib/common/utils';
import '../markdown/utils.js';
import '../markdown/style.css';
import '../markdown/full.js';
import '../markdown/short.js';
import '../markdown/index.js';
import '../labeled/labeled.css';
import '../labeled/index.js';
import '../input/hoc/labeled.js';
import '../input/index.js';
import '../grid/style.css';
import '../grid/cell.js';
import { Grid } from '../grid/grid.js';
import defaultTheme from './style.css';
import { Content } from './content.js';
import { Additional } from './additional.js';
import { Actions } from './actions.js';
import { Info } from './info.js';
import { Hatching } from './hatching.js';

var iconTheme = _.extend({}, Icon.theme, {
  icon: classnames(Icon.theme.icon, defaultTheme.statusIcon)
});

var statusIcons = {
  done: 'icon:core/common/status-done',
  draft: 'icon:core/common/status-draft',
  error: 'icon:core/common/status-error',
  waiting: 'icon:core/common/status-waiting'
};
var omitStatus = ['mode', 'title', 'description', 'children', 'size'];
/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=ST%20Blocks%20Status)
 * Блок статуса процесса по услуге
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var Status = function Status(props) {
  var title = props.title,
      description = props.description,
      mode = props.mode,
      size = props.size;

  var passedProps = _.omit(props, omitStatus);

  var children = React.Children.toArray(props.children);

  var info = _.remove(children, function (el) {
    return _.get(el, 'type.displayName') === 'Status.Info';
  });

  return /*#__PURE__*/React.createElement(Grid, {
    mode: "strict"
  }, /*#__PURE__*/React.createElement(Grid.Cell, {
    mode: "strict",
    lg: 15,
    md: 15,
    sm: 15,
    offsetLg: 1,
    offsetMd: 1,
    offsetSm: 1
  }, /*#__PURE__*/React.createElement("article", _extends({}, passedProps, {
    className: classnames(defaultTheme.status, defaultTheme[size]),
    "data-unit": "status:".concat(mode)
  }), /*#__PURE__*/React.createElement(Hatching, {
    mode: mode
  }), /*#__PURE__*/React.createElement("div", {
    className: defaultTheme.iconWrap,
    "data-unit": "icon:".concat(mode)
  }, /*#__PURE__*/React.createElement(Icon, {
    theme: iconTheme,
    name: statusIcons[mode]
  })), /*#__PURE__*/React.createElement("div", {
    className: defaultTheme.body,
    "data-unit": "status:body"
  }, /*#__PURE__*/React.createElement("div", {
    className: defaultTheme.main,
    "data-unit": "status:main"
  }, /*#__PURE__*/React.createElement("div", {
    className: defaultTheme.description,
    "data-unit": "status:description"
  }, description), /*#__PURE__*/React.createElement(Typography.Subheader, {
    "data-unit": "status:title"
  }, title), children), info))));
};
Status.propTypes = {
  mode: PropTypes.oneOf(['draft', 'waiting', 'done', 'error']).isRequired,
  size: PropTypes.oneOf(['sm', 'lg']),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node
};
Status.defaultProps = {
  children: void 0,
  size: 'sm'
};
Status.theme = defaultTheme;
Status.Content = Content;
Status.Additional = Additional;
Status.Actions = Actions;
Status.Info = Info;
Status.Hatching = Hatching;
Status.displayName = 'Status';
var status = deprecate('4.0.0', 'Status')(Status);

export default status;
export { Status };
//# sourceMappingURL=status.js.map
