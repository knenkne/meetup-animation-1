import { j as _objectWithoutProperties, a as _slicedToArray, _ as _extends } from '../_rollupPluginBabelHelpers-687385f0.js';
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
import { Icon } from '../icon/icon.js';
import '../index-85b17782.js';
import '../external-969f6c5f.js';
import '../icon/index.js';
import '../utils/set-project-id.js';
import '../utils/make-direction.js';
import '../utils/show-error.js';
import defaultTheme from '../typography/style.css';
import '../loader/loader.css';
import '../loader/loader-themes/pulse-loader.css';
import '../loader/loader-themes/jump-loader.css';
import '../loader/loader-themes/swap-loader.css';
import { Loader } from '../loader/loader.js';
import '../loader/icon-loader.css';
import '../loader/icon-loader.js';
import '../loader/button-loader.css';
import '../loader/utils.js';
import '../loader/button-loader.js';
import '../loader/index.js';
import defaultTheme$1 from './style.css';

var FastAction = function FastAction(_ref) {
  var href = _ref.href,
      onClick = _ref.onClick,
      icon = _ref.icon,
      loading = _ref.loading,
      imageSrc = _ref.imageSrc,
      title = _ref.title,
      description = _ref.description,
      as = _ref.as,
      external = _ref.external,
      colorScheme = _ref.colorScheme,
      theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ["href", "onClick", "icon", "loading", "imageSrc", "title", "description", "as", "external", "colorScheme", "theme"]);

  var Wrapper = useMemo(function () {
    if (as) {
      return as;
    }

    if (href) {
      return 'a';
    }

    if (onClick) {
      return 'button';
    }

    return 'div';
  }, [as, href, onClick]);

  var _useMemo = useMemo(function () {
    var themeIcon = mergeTheme(Icon.theme, {
      icon: theme.icon
    });
    var themeExternalIcon = mergeTheme(Icon.theme, {
      icon: theme.iconExternal
    });
    return [themeIcon, themeExternalIcon];
  }, [theme]),
      _useMemo2 = _slicedToArray(_useMemo, 2),
      iconTheme = _useMemo2[0],
      externalIconTheme = _useMemo2[1];

  var normalColorScheme = React.useMemo(function () {
    return colorScheme === 'success' ? 'done' : colorScheme;
  }, [colorScheme]);
  var renderIcon = React.useMemo(function () {
    return icon ? /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      theme: iconTheme
    }) : /*#__PURE__*/React.createElement("img", {
      src: imageSrc,
      alt: title,
      role: "presentation"
    });
  }, [icon, title, imageSrc]);
  return /*#__PURE__*/React.createElement(Wrapper, _extends({
    type: Wrapper === 'button' ? 'button' : void 0,
    href: href,
    external: href && as ? external : void 0,
    target: Wrapper === 'a' && external ? '_blank' : void 0,
    rel: Wrapper === 'a' && external ? 'noopener noreferrer' : void 0,
    onClick: loading ? void 0 : onClick
  }, props, {
    className: classnames(theme.action, Wrapper !== 'div' && !loading && theme.active)
  }), /*#__PURE__*/React.createElement("div", {
    className: theme.body
  }, /*#__PURE__*/React.createElement("div", {
    className: classnames(theme.iconWrapper, theme[normalColorScheme])
  }, loading ? /*#__PURE__*/React.createElement(Loader.Icon, null) : renderIcon, external && /*#__PURE__*/React.createElement(Icon, {
    name: "icon:core/common/external",
    theme: externalIconTheme
  })), /*#__PURE__*/React.createElement("div", {
    className: theme.text
  }, /*#__PURE__*/React.createElement("div", {
    className: defaultTheme.bodySemibold,
    title: title
  }, title), description && /*#__PURE__*/React.createElement("div", {
    className: classnames(defaultTheme.caption, defaultTheme.blackOpaque, theme.description),
    title: description
  }, description))));
};
FastAction.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.string,
  loading: PropTypes.bool,
  imageSrc: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  external: PropTypes.bool,
  colorScheme: PropTypes.oneOf(['done', 'waiting', 'error', 'info', 'blue', 'green', 'sky-blue', 'aqua', 'yellow', 'black']),
  theme: PropTypes.object
};
FastAction.defaultProps = {
  href: void 0,
  onClick: void 0,
  icon: '',
  loading: false,
  imageSrc: '',
  description: '',
  as: void 0,
  external: void 0,
  colorScheme: void '',
  theme: defaultTheme$1
};
FastAction.displayName = 'FastActions.FastAction';

export default FastAction;
export { FastAction };
//# sourceMappingURL=fast-action.js.map
