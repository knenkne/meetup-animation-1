import { j as _objectWithoutProperties, f as _defineProperty, i as _objectSpread2, _ as _extends } from '../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';
import '../icon/style.css';
import { Icon } from '../icon/icon.js';
import '../index-85b17782.js';
import '../external-969f6c5f.js';
import '../icon/index.js';
import defaultTheme from './link.css';
import { SimpleExternalLink } from './components/simple-external-link.js';

var modeToSide = {
  'file:word': 'left',
  'file:pdf': 'left',
  'file:xlsx': 'left',
  'file:html': 'left',
  'file:txt': 'left',
  email: 'left',
  print: 'left',
  download: 'left',
  backward: 'left',
  forward: 'right',
  external: 'right',
  externalBold: 'right',
  breadcrumb: 'left'
};
var modeToIcon = {
  backward: 'arrow-right',
  forward: 'arrow-right',
  breadcrumb: 'chevronLeft'
};
var modeToRotate = ['backward'];

var checkIcon = function checkIcon(iconMode) {
  var icon = modeToIcon[iconMode] || iconMode;
  return Icon.namespaces['icon:core/common'][_.camelCase(icon)] ? "icon:core/common/".concat(icon) : icon;
};
/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d/screen/5ca6147577eeb0193d2fe1d7)
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
// eslint-disable-next-line complexity, comment: complexity more 12


var Link = function Link(_ref) {
  var theme = _ref.theme,
      icon = _ref.icon,
      size = _ref.size,
      children = _ref.children,
      mode = _ref.mode,
      colorScheme = _ref.colorScheme,
      refWrapper = _ref.refWrapper,
      external = _ref.external,
      bold = _ref.bold,
      Component = _ref.as,
      props = _objectWithoutProperties(_ref, ["theme", "icon", "size", "children", "mode", "colorScheme", "refWrapper", "external", "bold", "as"]);

  var iconMode = mode;
  var externalProps = {};
  var refProps = {};
  var customStyles = [theme[size], theme[colorScheme]];
  var breadcrumbStyles = [theme.breadcrumb, theme.gray];
  var extendProps = {
    className: classnames(theme.link, bold && theme.linkBold, Component === 'button' && theme.transparent, mode !== 'breadcrumb' ? customStyles : breadcrumbStyles, mode === 'underline' && theme.underline),
    'data-unit': 'link:internal'
  };

  if (refWrapper) {
    refProps = _defineProperty({}, typeof Component === 'string' ? 'ref' : 'refWrapper', refWrapper);
  }

  if (external) {
    iconMode = mode.startsWith('file:') ? mode : "external".concat(bold ? 'Bold' : '');
    externalProps = {
      'data-unit': 'link:external',
      rel: 'noopener noreferrer',
      target: '_blank'
    };
  }

  var iconName = icon || checkIcon(iconMode);

  var passedProps = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, props), refProps), extendProps), externalProps);

  if (external && Component === 'a' && typeof children === 'string') {
    return /*#__PURE__*/React.createElement(SimpleExternalLink, _extends({
      theme: theme,
      iconName: iconName
    }, passedProps), children);
  }

  return /*#__PURE__*/React.createElement(Component, passedProps, (icon || modeToSide[iconMode] === 'left') && /*#__PURE__*/React.createElement(Icon, {
    name: iconName,
    size: "self",
    theme: {
      self: classnames(Icon.theme.self, theme.icon, theme.left, modeToRotate.includes(mode) && theme.rotate)
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: theme.content
  }, children), modeToSide[iconMode] === 'right' && /*#__PURE__*/React.createElement(Icon, {
    name: iconName,
    size: "self",
    theme: {
      self: classnames(Icon.theme.self, theme.icon, theme.right)
    }
  }));
};
Link.propTypes = {
  external: PropTypes.bool,
  children: PropTypes.node,
  size: PropTypes.oneOf(['sm', 'lg']),
  mode: PropTypes.string,
  colorScheme: PropTypes.oneOf(['green', 'gray', 'purple', 'blue', 'goals', 'sky-blue', 'aqua', 'gold', 'metal', 'orange', 'button', 'button-blue', 'button-purple', 'button-skyblue', 'button-aqua', 'button-gold', 'button-black', 'button-green', 'button-secondary']),
  theme: PropTypes.shape({
    link: PropTypes.string,
    sm: PropTypes.string,
    lg: PropTypes.string,
    content: PropTypes.string,
    icon: PropTypes.string,
    left: PropTypes.string,
    right: PropTypes.string,
    breadcrumb: PropTypes.string,
    gray: PropTypes.string,
    linkBold: PropTypes.string,
    underline: PropTypes.string,
    rotate: PropTypes.string,
    externalWrapper: PropTypes.string,
    last: PropTypes.string,
    transparent: PropTypes.string
  }),
  refWrapper: PropTypes.func,

  /**
   * Может быть Link из react-router(-dom)
   */
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  icon: PropTypes.string,
  bold: PropTypes.bool
};
Link.defaultProps = {
  external: false,
  children: void 0,
  as: 'a',
  size: 'lg',
  colorScheme: 'green',
  mode: '',
  theme: defaultTheme,
  refWrapper: void 0,
  icon: void 0,
  bold: false
};
Link.displayName = 'Link';
Link.theme = defaultTheme;

export default Link;
export { Link };
//# sourceMappingURL=link.js.map
