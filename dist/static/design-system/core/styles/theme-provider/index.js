import { _ as _slicedToArray } from '../../_rollupPluginBabelHelpers-3e859d87.js';
import React, { useState } from 'react';
import _ from 'lodash';
import { ThemeProvider } from 'emotion-theming';
import { getFromStorage, setToStorage } from './storage.js';
import { COLORS, THEME_COLORS } from './theme-colors.js';

var ThemeWrapper = function ThemeWrapper(_ref) {
  var children = _ref.children;

  var _useState = useState(getFromStorage('themeColor', COLORS.DARK)),
      _useState2 = _slicedToArray(_useState, 2),
      theme = _useState2[0],
      setTheme = _useState2[1];

  var changeTheme = function changeTheme() {
    var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : COLORS.WHITE;
    return _.memoize(function () {
      setToStorage('themeColor', color);
      return setTheme(color);
    });
  };

  return /*#__PURE__*/React.createElement(ThemeWrapperContext.Provider, {
    value: {
      changeTheme: changeTheme,
      theme: theme
    }
  }, /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: THEME_COLORS[theme]
  }, children));
};
var ThemeWrapperContext = /*#__PURE__*/React.createContext(function () {});

export { ThemeWrapper, ThemeWrapperContext };
//# sourceMappingURL=index.js.map
