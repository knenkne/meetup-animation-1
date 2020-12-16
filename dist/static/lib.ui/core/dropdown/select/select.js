import { _ as _extends } from '../../_rollupPluginBabelHelpers-687385f0.js';
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
import { memoizeFuncWithArgs } from '../../utils/memoize-func-with-args.js';
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
import 'react-onclickoutside';
import '../../perimeter/perimeter.js';
import '../../perimeter/index.js';
import '../../button/style.css';
import '../style.css';
import '../target-button.js';
import '../utils.js';
import '../contents.js';
import '../group.js';
import styles from './select.css';
import '../option.js';
import '../../link/link.css';
import '../../link/components/simple-external-link.js';
import '../../link/link.js';
import '../link.js';
import DropdownConstructor from '../dropdown.js';
import { Item } from './item.js';

var mergedTheme = mergeTheme(DropdownConstructor.theme, styles);

var renderOption = function renderOption(option) {
  var translations = {
    title: option.title
  };
  return /*#__PURE__*/React.createElement(DropdownConstructor.Option, {
    key: option.value,
    value: option.value,
    title: option.title,
    translations: translations
  });
};

var Select = function Select(props) {
  var options = props.options,
      value = props.value,
      onChange = props.onChange,
      onFocus = props.onFocus,
      onBlur = props.onBlur,
      disabled = props.disabled,
      error = props.error;

  var title = _.get(_.find(options, {
    value: value
  }), 'title', '');

  var description = _.get(_.find(options, {
    value: value
  }), 'description', '');

  var additional = _.get(_.find(options, {
    value: value
  }), 'additional', '');

  var filteredOptions = _.reject(options, function (item) {
    return item.value === value;
  });

  if (disabled) {
    return /*#__PURE__*/React.createElement(Item, _extends({}, props, {
      title: title,
      readOnly: true
    }));
  }

  return /*#__PURE__*/React.createElement(DropdownConstructor, _extends({}, _.omit(props, 'options'), {
    mode: "click",
    onChange: onChange,
    value: value,
    error: error,
    theme: mergedTheme
  }), /*#__PURE__*/React.createElement(DropdownConstructor.Contents, {
    theme: mergedTheme
  }, _.map(filteredOptions, renderOption)), /*#__PURE__*/React.createElement(DropdownConstructor.TargetButton, {
    theme: mergedTheme,
    onFocus: memoizeFuncWithArgs(onFocus, value),
    onBlur: memoizeFuncWithArgs(onBlur, value),
    "aria-label": title || 'Значение не выбрано',
    colorScheme: ""
  }, /*#__PURE__*/React.createElement(Item, {
    title: title,
    description: description,
    amount: additional
  })));
};
Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  touched: PropTypes.bool
};
Select.defaultProps = {
  options: [],
  value: '',
  onChange: _.noop,
  onFocus: _.noop,
  onBlur: _.noop,
  disabled: false,
  error: void 0,
  touched: false
};
Select.theme = styles;
Select.displayName = 'Dropdown.Select';

export default Select;
export { Select };
//# sourceMappingURL=select.js.map
