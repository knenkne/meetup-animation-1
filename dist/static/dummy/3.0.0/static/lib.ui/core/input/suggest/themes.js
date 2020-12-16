import { i as _objectSpread2 } from '../../_rollupPluginBabelHelpers-687385f0.js';
import 'react';
import 'prop-types';
import 'lodash';
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
import '../../utils/merge-theme.js';
import '../../utils/styles/media.config.css';
import '../../utils/adaptive.js';
import '../../utils/pseudo/pseudo-button.js';
import '../../utils/get-card-icon.js';
import '../../utils/get-ivestments-icon.js';
import '../../utils/get-metal-icon.js';
import '../../utils/get-target-icon.js';
import '../../icon/style.css';
import { Icon } from '../../icon/icon.js';
import '../../index-85b17782.js';
import '../../external-969f6c5f.js';
import '../../icon/index.js';
import '../../utils/set-project-id.js';
import '../../utils/make-direction.js';
import '../../utils/show-error.js';
import '../../loader/loader.css';
import '../../loader/loader-themes/pulse-loader.css';
import '../../loader/loader-themes/jump-loader.css';
import '../../loader/loader-themes/swap-loader.css';
import { Loader } from '../../loader/loader.js';
import '../../loader/icon-loader.css';
import '../../loader/icon-loader.js';
import '../../loader/button-loader.css';
import '../../loader/utils.js';
import '../../loader/button-loader.js';
import '../../loader/index.js';
import 'react-onclickoutside';
import '../../perimeter/perimeter.js';
import '../../perimeter/index.js';
import '../../button/style.css';
import '../input.css';
import { Input } from '../input.js';
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
import { Dropdown } from '../../dropdown/index.js';
import '../../marked-text/style.css';
import { MarkedText } from '../../marked-text/marked-text.js';
import style from './style.css';

var dropdownTheme = _objectSpread2(_objectSpread2({}, Dropdown.theme), {}, {
  dropdown: classnames(Dropdown.theme.dropdown, style.dropdown)
});
var contentsTheme = _objectSpread2(_objectSpread2({}, Dropdown.theme), {}, {
  contents: classnames(Dropdown.theme.contents, style.contents),
  contentsView: classnames(Dropdown.theme.contentsView, style.contentsView)
});
var optionTheme = _objectSpread2(_objectSpread2({}, Dropdown.theme), {}, {
  item: classnames(Dropdown.theme.item, style.item),
  itemIcon: classnames(Dropdown.theme.itemIcon, style.itemIcon),
  itemIconFallback: style.itemIconFallback,
  itemTitle: classnames(Dropdown.theme.itemTitle, style.itemTitle),
  itemDescription: classnames(Dropdown.theme.itemDescription, style.itemDescription),
  checked: classnames(Dropdown.theme.checked, style.itemChecked)
});
var optionThemeWithIcon = _objectSpread2(_objectSpread2({}, optionTheme), {}, {
  item: classnames(Dropdown.theme.item, style.item, style.itemWithIcon)
});
var iconTheme = {
  icon: classnames(Icon.theme.icon, style.itemIconElement)
};
var inputTheme = _objectSpread2(_objectSpread2({}, Input.theme), {}, {
  input: classnames(Input.theme.input, style.inputField)
});
var loaderTheme = _objectSpread2(_objectSpread2({}, Loader.theme), {}, {
  loader: style.loader,
  loaderPoint: style.loaderPoint
});
var markedTextTheme = {
  text: classnames(MarkedText.theme.text, style.text),
  marked: classnames(MarkedText.theme.marked, style.marked)
};

export { contentsTheme, dropdownTheme, iconTheme, inputTheme, loaderTheme, markedTextTheme, optionTheme, optionThemeWithIcon };
//# sourceMappingURL=themes.js.map
