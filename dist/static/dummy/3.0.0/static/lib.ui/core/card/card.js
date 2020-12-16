import '../_rollupPluginBabelHelpers-687385f0.js';
import React, { useMemo } from 'react';
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
import { mergeTheme } from '../utils/merge-theme.js';
import '../utils/styles/media.config.css';
import '../utils/adaptive.js';
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
import '../typography/style.css';
import '../typography/headline.js';
import '../typography/title.js';
import '../typography/subheader.js';
import '../typography/caption.js';
import '../typography/uppercase.js';
import '../typography/description.js';
import { Typography } from '../typography/index.js';
import defaultTheme from './style.css';
import { Image } from './components/image.js';
import { Actions } from './components/actions.js';
import { Description } from './components/description.js';

/**
 * [Zeplin](https://app.zeplin.io/project/5d385a888b7034775ab1a026/screen/5ecbc419487aa129233e2d6e0)
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var Card = function Card(_ref) {
  var title = _ref.title,
      children = _ref.children,
      imageSrc = _ref.imageSrc,
      srcSet = _ref.srcSet,
      mobileSrcSet = _ref.mobileSrcSet,
      mode = _ref.mode,
      colorScheme = _ref.colorScheme,
      theme = _ref.theme;
  var titleTheme = useMemo(function () {
    return mergeTheme(Typography.theme, {
      headline: theme.title
    }, [theme]);
  });
  return /*#__PURE__*/React.createElement("div", {
    className: classnames(theme.container, theme[mode], theme[colorScheme], !mobileSrcSet && theme.noImage)
  }, /*#__PURE__*/React.createElement("div", {
    className: theme.content
  }, title && /*#__PURE__*/React.createElement(Typography.Headline, {
    mode: "h4",
    theme: titleTheme
  }, title), children), /*#__PURE__*/React.createElement(Image, {
    alt: "title",
    imageSrc: imageSrc,
    srcSet: srcSet,
    mobileSrcSet: mobileSrcSet,
    theme: theme
  }));
};
Card.propTypes = {
  mode: PropTypes.oneOf(['banner']),
  colorScheme: PropTypes.oneOf(['success', 'warning', 'error', 'info']),
  title: PropTypes.string,
  imageSrc: PropTypes.string,
  srcSet: PropTypes.string,
  mobileSrcSet: PropTypes.string,
  children: PropTypes.node,
  theme: PropTypes.object
};
Card.defaultProps = {
  mode: 'banner',
  colorScheme: void 0,
  title: '',
  imageSrc: '',
  srcSet: '',
  mobileSrcSet: '',
  children: void 0,
  theme: defaultTheme
};
Card.theme = defaultTheme;
Card.Description = Description;
Card.Actions = Actions;
Card.Image = Image;
Card.displayName = 'Card';

export { Card };
//# sourceMappingURL=card.js.map
