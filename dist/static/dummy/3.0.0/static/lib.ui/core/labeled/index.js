import { a as _slicedToArray } from '../_rollupPluginBabelHelpers-687385f0.js';
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
import '../button/command/style.css';
import '../button/command/index.js';
import '../loader/loader.css';
import '../loader/loader-themes/pulse-loader.css';
import '../loader/loader-themes/jump-loader.css';
import '../loader/loader-themes/swap-loader.css';
import '../loader/loader.js';
import '../loader/icon-loader.css';
import '../loader/icon-loader.js';
import '../loader/button-loader.css';
import '../loader/utils.js';
import '../loader/button-loader.js';
import '../loader/index.js';
import '../button/icon/style.css';
import '../button/icon/index.js';
import '../tooltip/style.css';
import '../tooltip/tip.js';
import '../tooltip/tooltip.js';
import '../tooltip/hover-tooltip.js';
import 'react-onclickoutside';
import '../perimeter/perimeter.js';
import '../perimeter/index.js';
import '../tooltip/click-tooltip.js';
import '../tooltip/index.js';
import '../button/info/style.css';
import '../button/info/index.js';
import '../button/radio-segmented/style.css';
import '../button/radio-segmented/index.js';
import '../button/style.css';
import { Button } from '../button/index.js';
import 'remarkable';
import 'remarkable/lib/common/utils';
import '../markdown/utils.js';
import '../markdown/style.css';
import '../markdown/full.js';
import '../markdown/short.js';
import { Markdown } from '../markdown/index.js';
import defaultTheme from './labeled.css';

var Labeled = function Labeled(_ref) {
  var title = _ref.title,
      description = _ref.description,
      id = _ref.id,
      touched = _ref.touched,
      error = _ref.error,
      value = _ref.value,
      children = _ref.children,
      tooltip = _ref.tooltip,
      hint = _ref.hint,
      theme = _ref.theme,
      mode = _ref.mode,
      onHintOpen = _ref.onHintOpen,
      onHintClose = _ref.onHintClose;

  var _useMemo = useMemo(function () {
    var labeledClassNames = classnames(Typography.theme.caption, theme.title, value && theme.filled);
    var markdownErrorTheme = mergeTheme(Markdown.theme, {
      container: theme.errorText
    });
    var markdownDescriptionTheme = mergeTheme(Markdown.theme, {
      container: theme.description
    });
    return [labeledClassNames, markdownErrorTheme, markdownDescriptionTheme];
  }, [theme, value]),
      _useMemo2 = _slicedToArray(_useMemo, 3),
      classNames = _useMemo2[0],
      errorTheme = _useMemo2[1],
      descriptionTheme = _useMemo2[2];

  var withHeadline = useMemo(function () {
    return title || tooltip.contents || hint;
  }, [title, tooltip, hint]);
  var label = id ? /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    className: classNames
  }, title) : /*#__PURE__*/React.createElement("span", {
    className: classNames
  }, title);
  return /*#__PURE__*/React.createElement("div", {
    className: classnames(theme.labeled, theme[mode])
  }, withHeadline && /*#__PURE__*/React.createElement("div", {
    className: theme.headline
  }, title && label, Boolean(tooltip.contents || hint) && /*#__PURE__*/React.createElement("div", {
    className: theme.hint
  }, /*#__PURE__*/React.createElement(Button.Info, {
    title: tooltip.title,
    mode: "info",
    icon: "info",
    size: "sm",
    onOpen: onHintOpen,
    onClose: onHintClose
  }, /*#__PURE__*/React.createElement(Markdown.Full, {
    content: tooltip.contents || hint
  })))), /*#__PURE__*/React.createElement("div", null, children), (touched || value) && error && /*#__PURE__*/React.createElement(Markdown.Full, {
    content: error,
    theme: errorTheme
  }), description && /*#__PURE__*/React.createElement(Markdown.Full, {
    content: description,
    theme: descriptionTheme
  }));
};
Labeled.propTypes = {
  theme: PropTypes.shape({
    caption: PropTypes.string,
    description: PropTypes.string,
    errorText: PropTypes.string,
    filled: PropTypes.string,
    headline: PropTypes.string,
    hint: PropTypes.string,
    labeled: PropTypes.string,
    title: PropTypes.string
  }),
  title: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string,
  children: PropTypes.node.isRequired,
  touched: PropTypes.bool,
  hint: PropTypes.string,
  tooltip: PropTypes.shape({
    title: PropTypes.string,
    contents: PropTypes.string
  }),
  mode: PropTypes.oneOf(['checkbox', 'switch', void '']),
  onHintOpen: PropTypes.func,
  onHintClose: PropTypes.func
};
Labeled.defaultProps = {
  theme: defaultTheme,
  title: void '',
  description: void '',
  id: '',
  error: void '',
  value: void '',
  touched: false,
  hint: void '',
  tooltip: {},
  mode: void '',
  onHintOpen: void '',
  onHintClose: void ''
};
Labeled.theme = defaultTheme;

export default Labeled;
export { Labeled };
//# sourceMappingURL=index.js.map
