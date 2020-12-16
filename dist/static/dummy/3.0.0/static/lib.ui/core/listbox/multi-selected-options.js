import '../_rollupPluginBabelHelpers-687385f0.js';
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import 'lodash';
import classnames from 'classnames';
import '../icon/style.css';
import { Icon } from '../icon/icon.js';
import '../index-85b17782.js';
import '../external-969f6c5f.js';
import '../icon/index.js';

var MultiSelectedOptions = function MultiSelectedOptions(_ref) {
  var items = _ref.items,
      theme = _ref.theme,
      onChange = _ref.onChange;
  var handleClick = useCallback(function (value) {
    return function (e) {
      e.stopPropagation();
      var newSelected = items.map(function (item) {
        return item.value;
      }).filter(function (val) {
        return val !== value;
      });
      onChange(newSelected);
    };
  }, [items]);
  return /*#__PURE__*/React.createElement("ul", {
    className: theme.selectedList
  }, items.map(function (item) {
    return /*#__PURE__*/React.createElement("li", {
      key: item.value,
      className: theme.selectedItem
    }, /*#__PURE__*/React.createElement("span", null, item.title), /*#__PURE__*/React.createElement(Icon, {
      name: "icon:core/common/close",
      theme: {
        icon: classnames(Icon.theme.icon, theme.selectedIcon)
      },
      onClick: handleClick(item.value)
    }));
  }));
};
MultiSelectedOptions.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  theme: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export { MultiSelectedOptions };
//# sourceMappingURL=multi-selected-options.js.map
