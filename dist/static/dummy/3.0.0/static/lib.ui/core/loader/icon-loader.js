import '../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import 'lodash';
import classnames from 'classnames';
import '../utils/get-display-name.js';
import '../utils/hoc/style.css';
import '../utils/hoc/deprecate.js';
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
import { isIE } from '../utils/adaptive.js';
import '../utils/pseudo/pseudo-button.js';
import '../utils/get-card-icon.js';
import '../utils/get-ivestments-icon.js';
import '../utils/get-metal-icon.js';
import '../utils/get-target-icon.js';
import '../icon/style.css';
import '../icon/icon.js';
import '../index-85b17782.js';
import '../external-969f6c5f.js';
import '../icon/index.js';
import '../utils/set-project-id.js';
import '../utils/make-direction.js';
import '../utils/show-error.js';
import defaultTheme from './icon-loader.css';

/**
 * Лоадер для иконок и мелких элементов
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var IconLoader = function IconLoader(_ref) {
  var size = _ref.size,
      colorScheme = _ref.colorScheme;

  if (isIE) {
    return /*#__PURE__*/React.createElement("div", {
      className: classnames(defaultTheme.ieIconLoader, defaultTheme[size], defaultTheme[colorScheme])
    }, /*#__PURE__*/React.createElement("div", {
      className: defaultTheme.ieCycle
    }, /*#__PURE__*/React.createElement("div", {
      className: defaultTheme.ieBorder
    }), /*#__PURE__*/React.createElement("div", {
      className: defaultTheme.ieLoader
    }), /*#__PURE__*/React.createElement("div", {
      className: defaultTheme.ieLoader
    }), /*#__PURE__*/React.createElement("div", {
      className: defaultTheme.ieLoader
    })));
  }

  return /*#__PURE__*/React.createElement("div", {
    className: classnames(defaultTheme.iconLoader, defaultTheme[size], defaultTheme[colorScheme])
  }, /*#__PURE__*/React.createElement("svg", {
    className: defaultTheme.cycle,
    viewBox: "0 0 50 50"
  }, /*#__PURE__*/React.createElement("circle", {
    className: defaultTheme.border,
    cx: "25",
    cy: "25",
    r: "20",
    fill: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    className: defaultTheme.loader,
    cx: "25",
    cy: "25",
    r: "20",
    fill: "none"
  })));
};
IconLoader.propTypes = {
  /**
   * Размер отображаемого лоадера
   */
  size: PropTypes.oneOf(['sm', 'lg']),

  /**
   * Светлый или темный цвет лоадера
   */
  colorScheme: PropTypes.oneOf(['dark', 'light'])
};
IconLoader.defaultProps = {
  size: 'lg',
  colorScheme: 'dark'
};
IconLoader.displayName = 'Loader.Icon';
IconLoader.theme = defaultTheme;

export default IconLoader;
export { IconLoader };
//# sourceMappingURL=icon-loader.js.map
