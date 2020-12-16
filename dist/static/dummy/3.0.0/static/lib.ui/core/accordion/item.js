import { a as _slicedToArray, _ as _extends } from '../_rollupPluginBabelHelpers-687385f0.js';
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';
import { Collapse } from 'react-collapse';
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
import { memoizeFuncWithArgs } from '../utils/memoize-func-with-args.js';
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
import '../typography/style.css';
import '../typography/headline.js';
import '../typography/title.js';
import '../typography/subheader.js';
import '../typography/caption.js';
import '../typography/uppercase.js';
import '../typography/description.js';
import { Typography } from '../typography/index.js';
import defaultTheme from './style.css';

var omitProps = ['title', 'description', 'children', 'forceOpened', 'onChange', 'onKeyDown', 'id', 'aria-level', 'warning', 'collapsible', 'as', 'theme'];
var extendedHeadlineTheme = mergeTheme(Typography.theme, {
  headline: classnames(Typography.theme.h4, defaultTheme.headline)
}); // eslint-disable-next-line complexity, comment: complexity of 15

var Item = function Item(props) {
  var title = props.title,
      children = props.children,
      icon = props.icon,
      forceOpened = props.forceOpened,
      mode = props.mode,
      onChange = props.onChange,
      onKeyDown = props.onKeyDown,
      id = props.id,
      ariaLevel = props['aria-level'],
      as = props.as,
      warning = props.warning,
      description = props.description,
      collapsible = props.collapsible,
      theme = props.theme;

  var _useState = useState(forceOpened),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      updateState = _useState2[1];

  var handleOnchange = useCallback(function () {
    updateState(!active);
    onChange(title);
  }); // вычисляем открывать или не открывать для кейсов, когда могут быть открыты несколько итемов

  var isOpened = collapsible ? active : forceOpened;
  var headingContent = React.useMemo(function () {
    if (mode === 'widget') {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
        className: classnames(Typography.theme.bodySemibold, theme.text)
      }, title), /*#__PURE__*/React.createElement("div", {
        className: theme.sideTitle
      }, as && /*#__PURE__*/React.createElement("div", {
        className: Typography.theme.bodySemibold
      }, as)), /*#__PURE__*/React.createElement("div", {
        className: classnames(theme.arrow, isOpened && theme.arrowOpened)
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "icon:core/common/down-arrow"
      })));
    }

    if (mode === 'classic') {
      return /*#__PURE__*/React.createElement(Typography.Headline, {
        mode: "h4",
        theme: extendedHeadlineTheme
      }, /*#__PURE__*/React.createElement("span", {
        className: theme.titleText
      }, title));
    }

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: theme.headingContent
    }, icon && /*#__PURE__*/React.createElement("div", {
      className: theme.icon
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: "self"
    })), /*#__PURE__*/React.createElement("div", {
      className: theme.headingWrapper
    }, /*#__PURE__*/React.createElement(Typography.Headline, {
      mode: "h4",
      theme: extendedHeadlineTheme
    }, title), description && /*#__PURE__*/React.createElement("div", {
      className: theme.description
    }, description)), /*#__PURE__*/React.createElement("div", {
      className: classnames(theme.arrow, isOpened && theme.arrowOpened)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "icon:core/common/down-arrow"
    }))), /*#__PURE__*/React.createElement("div", {
      className: theme.sideTitle
    }, as && /*#__PURE__*/React.createElement("div", {
      className: Typography.theme.bodySemibold
    }, as)));
  }, [mode, isOpened]);
  return /*#__PURE__*/React.createElement("div", _extends({}, _.omit(props, omitProps), {
    className: classnames(theme.item, theme["item".concat("-".concat(mode))], isOpened && theme.active, warning && theme.warning)
  }), /*#__PURE__*/React.createElement("div", {
    role: "heading",
    "aria-level": ariaLevel,
    className: theme.heading
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleOnchange,
    onKeyDown: memoizeFuncWithArgs(onKeyDown, title),
    className: theme.title,
    type: "button",
    "aria-expanded": isOpened,
    "aria-controls": "".concat(id, "-section"),
    id: "".concat(id, "-title")
  }, headingContent)), /*#__PURE__*/React.createElement("div", {
    className: theme.collapseWrapper,
    id: "".concat(id, "-section"),
    role: "region",
    "aria-labelledby": "".concat(id, "-title")
  }, /*#__PURE__*/React.createElement(Collapse, {
    isOpened: isOpened
  }, /*#__PURE__*/React.createElement("div", {
    className: classnames(theme.content, !isOpened && theme.contentHidden),
    "aria-hidden": !isOpened
  }, children))));
};
Item.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  forceOpened: PropTypes.bool,
  mode: PropTypes.oneOf(['widget', 'info', 'description', 'classic']),
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  'aria-level': PropTypes.string,

  /**
   * Для mode: widget, индикация негативного контента
   */
  warning: PropTypes.bool,
  collapsible: PropTypes.bool,
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.node]),
  icon: PropTypes.string,
  theme: PropTypes.object
};
Item.defaultProps = {
  id: void 0,
  description: void 0,
  forceOpened: false,
  mode: 'classic',
  onChange: _.noop,
  onKeyDown: _.noop,
  'aria-level': void '',
  warning: false,
  collapsible: false,
  as: void 0,
  icon: void 0,
  theme: defaultTheme
};
Item.displayName = 'Accordion.Item';

export { Item, extendedHeadlineTheme };
//# sourceMappingURL=item.js.map
