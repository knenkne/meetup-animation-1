import { a as _slicedToArray } from '../_rollupPluginBabelHelpers-687385f0.js';
import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import defaultTheme from './loader.css';
import pulseTheme from './loader-themes/pulse-loader.css';
import jumpTheme from './loader-themes/jump-loader.css';
import swapTheme from './loader-themes/swap-loader.css';

var THEMES = [pulseTheme, jumpTheme, swapTheme];
var DEFAULT_DELAY = 300;
var DEFAULT_CHANGE_INTERVAL = 25600;
/**
 * Лоадер для страницы
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var Loader = function Loader(_ref) {
  var size = _ref.size,
      mode = _ref.mode,
      colorScheme = _ref.colorScheme;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showed = _useState2[0],
      setShowed = _useState2[1];

  var _useState3 = useState(THEMES[0]),
      _useState4 = _slicedToArray(_useState3, 2),
      theme = _useState4[0],
      setTheme = _useState4[1];

  var pointClassName = useMemo(function () {
    return theme[size] || theme.sm;
  }, [theme]);
  useEffect(function () {
    var timeoutId = setTimeout(function () {
      return setShowed(true);
    }, DEFAULT_DELAY);
    return function () {
      return clearTimeout(timeoutId);
    };
  }, []);
  useEffect(function () {
    var intervalId = setInterval(function () {
      var currentThemeIndex = THEMES.indexOf(theme);
      var newTheme = THEMES[currentThemeIndex + 1] || THEMES[0];
      setTheme(newTheme);
    }, DEFAULT_CHANGE_INTERVAL);
    return function () {
      return clearInterval(intervalId);
    };
  }, [showed, theme]);

  if (!showed) {
    return null;
  }

  return /*#__PURE__*/React.createElement("div", {
    className: classnames(defaultTheme.loader, defaultTheme[size], defaultTheme[colorScheme], mode === 'fill' && defaultTheme.fill)
  }, /*#__PURE__*/React.createElement("span", {
    className: classnames(defaultTheme.loaderPoint, pointClassName)
  }), /*#__PURE__*/React.createElement("span", {
    className: classnames(defaultTheme.loaderPoint, pointClassName)
  }), /*#__PURE__*/React.createElement("span", {
    className: classnames(defaultTheme.loaderPoint, pointClassName)
  }));
};
Loader.propTypes = {
  /**
   * Размер отображаемого лоадера
   */
  size: PropTypes.oneOf(['xs', 'sm', 'lg']),

  /**
   * Позиционирование по центру контейнера
   */
  mode: PropTypes.oneOf(['fill', void 0]),

  /**
   * Светлый или темный цвет лоадера
   */
  colorScheme: PropTypes.oneOf(['dark', 'light'])
};
Loader.defaultProps = {
  size: 'sm',
  mode: void 0,
  colorScheme: 'dark'
};
Loader.displayName = 'Loader';
Loader.theme = defaultTheme;

export default Loader;
export { Loader };
//# sourceMappingURL=loader.js.map
