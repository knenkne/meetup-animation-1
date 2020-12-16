import '../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import 'classnames';
import './loader.css';
import './loader-themes/pulse-loader.css';
import './loader-themes/jump-loader.css';
import './loader-themes/swap-loader.css';
import { Loader } from './loader.js';
import defaultTheme from './button-loader.css';
import { getLoaderColorScheme } from './utils.js';

/**
 * Лоадер для активных элементов ввода
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var ButtonLoader = function ButtonLoader(_ref) {
  var theme = _ref.theme,
      colorScheme = _ref.colorScheme;
  return /*#__PURE__*/React.createElement("div", {
    className: theme.loaderContainer
  }, /*#__PURE__*/React.createElement(Loader, {
    colorScheme: getLoaderColorScheme(colorScheme)
  }));
};
ButtonLoader.propTypes = {
  colorScheme: PropTypes.oneOf(['base', 'secondary', 'link', 'purple', 'blue', 'green', 'skyblue', 'black', 'gold', 'aqua', 'dark', 'light']),
  theme: PropTypes.object
};
ButtonLoader.defaultProps = {
  theme: defaultTheme,
  colorScheme: 'base'
};
ButtonLoader.theme = defaultTheme;
ButtonLoader.displayName = 'Loader.Button';

export { ButtonLoader };
//# sourceMappingURL=button-loader.js.map
