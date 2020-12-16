import '../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import 'lodash';
import classnames from 'classnames';
import '../icon/style.css';
import { Icon } from '../icon/icon.js';
import '../index-85b17782.js';
import '../external-969f6c5f.js';
import '../icon/index.js';
import defaultTheme from './style.css';
import { Actions } from './actions.js';
import { Description } from './description.js';

var iconTheme = {
  icon: classnames(Icon.theme.icon, defaultTheme.technicalErrorIcon)
};
/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d/dashboard?sid=5ca6147577eeb0193d2fe1d7)
 * Компонент отображения технической ошибки в приложении
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var TechnicalError = function TechnicalError(_ref) {
  var imageSrc = _ref.imageSrc,
      srcSet = _ref.srcSet,
      title = _ref.title,
      children = _ref.children,
      theme = _ref.theme;
  return /*#__PURE__*/React.createElement("article", {
    className: theme.technicalError,
    "data-unit": "technical:error"
  }, imageSrc ? /*#__PURE__*/React.createElement("img", {
    src: imageSrc,
    srcSet: srcSet,
    alt: title,
    className: theme.technicalErrorImage
  }) : /*#__PURE__*/React.createElement(Icon, {
    theme: iconTheme,
    name: "icon:core/common/technical-error"
  }), /*#__PURE__*/React.createElement("h3", {
    "data-unit": "technical:error:title",
    className: theme.technicalErrorTitle
  }, title), children);
};
TechnicalError.propTypes = {
  imageSrc: PropTypes.string,
  srcSet: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  theme: PropTypes.object
};
TechnicalError.defaultProps = {
  imageSrc: void 0,
  srcSet: void 0,
  children: void 0,
  theme: defaultTheme
};
TechnicalError.theme = defaultTheme;
TechnicalError.Actions = Actions;
TechnicalError.Description = Description;
TechnicalError.displayName = 'TechnicalError';

export default TechnicalError;
export { TechnicalError };
//# sourceMappingURL=technical-error.js.map
