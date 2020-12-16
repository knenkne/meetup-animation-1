import { a as _slicedToArray } from '../_rollupPluginBabelHelpers-687385f0.js';
import React, { useState, useMemo, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { uniqueId, throttle, noop } from 'lodash';
import 'classnames';
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
import '../full-width/style.css';
import '../full-width/inner.js';
import '../full-width/index.js';
import '../horizontal-scroll/utils.js';
import '../horizontal-scroll/style.css';
import '../horizontal-scroll/horizontal-scroll.js';
import '../tabs/style.css';
import { getFirstChildTitle, getTopOffset, useUpdateEffect, scrollToElement } from '../tabs/tab-utils.js';
import { Header } from '../tabs/header.js';
import '../tabs/tab.js';
import { Tabs } from '../tabs/tabs.js';
import { Link } from './link.js';
import style from './anchor.css';

var THROTTLE_DELAY = 300;
var parentId = uniqueId('anchor-link-wrapper-');
/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=Blocks%20Tabs)
 * Компонент прокрутки блоков верстки
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var Anchor = function Anchor(_ref) {
  var children = _ref.children,
      colorScheme = _ref.colorScheme,
      size = _ref.size,
      initialValue = _ref.initialValue,
      mode = _ref.mode,
      onChange = _ref.onChange,
      onClick = _ref.onClick,
      theme = _ref.theme;

  var _useState = useState(function () {
    return initialValue || getFirstChildTitle(children);
  }),
      _useState2 = _slicedToArray(_useState, 2),
      selectedTitle = _useState2[0],
      setSelectedTitle = _useState2[1];

  var childrenArray = useMemo(function () {
    return React.Children.toArray(children);
  }, [children]);
  var topOffset = useMemo(function () {
    return getTopOffset(mode);
  }, [mode]);
  useUpdateEffect(function () {
    onChange(selectedTitle);
  }, [selectedTitle]);
  var scrolling = useRef(false);
  var references = useRef({});

  var handleScroll = function handleScroll() {
    if (scrolling.current) {
      return;
    }

    var referencesKeys = Object.keys(references.current);
    var selectedTitleKey = referencesKeys.find(function (key) {
      var rect = references.current[key].getBoundingClientRect();
      return Math.round(rect.bottom) - topOffset > 0;
    });

    if (selectedTitleKey) {
      setSelectedTitle(selectedTitleKey);
      return;
    }

    var lastRef = referencesKeys[referencesKeys.length - 1];

    if (references.current[lastRef].getBoundingClientRect().top < 0) {
      setSelectedTitle(lastRef);
    }
  };

  var throttleScroll = throttle(handleScroll, THROTTLE_DELAY);

  var getSelectedChild = function getSelectedChild() {
    return childrenArray.map(function (child, i) {
      var setRef = function setRef(ref) {
        if (child.props.title) {
          references.current[child.props.title] = ref;
        }
      };

      var key = "".concat(child.props.title, "-").concat(i);
      return /*#__PURE__*/React.createElement("div", {
        id: "anchor-link-id-".concat(i),
        ref: setRef,
        key: key,
        tabIndex: "-1",
        className: style.outlineNone
      }, child.props.children);
    });
  };

  var handleChange = function handleChange(value) {
    var ref = references.current[value];
    onClick(value);

    if (ref) {
      scrolling.current = true;
      scrollToElement(ref, {
        offset: topOffset
      }, function () {
        scrolling.current = false;
        ref.focus({
          preventScroll: true
        });
        setSelectedTitle(value);
      });
    }
  };

  var mapChildren = function mapChildren() {
    return childrenArray.map(function (child) {
      return /*#__PURE__*/React.cloneElement(child, {
        colorScheme: colorScheme,
        forceOpened: child.props.forceOpened || selectedTitle === child.props.title,
        onChange: handleChange,
        parentId: parentId,
        size: size
      });
    });
  };

  var containerRef = useRef();

  var isInViewPort = function isInViewPort() {
    if (containerRef) {
      var rect = containerRef.current.getBoundingClientRect();

      if (rect.top < 0 && rect.bottom < 0 || rect.top > window.innerHeight && rect.bottom > window.innerHeight) {
        window.removeEventListener('scroll', throttleScroll);
        return;
      }

      window.addEventListener('scroll', throttleScroll);
    }
  };

  var throttleViewPort = throttle(isInViewPort, THROTTLE_DELAY);
  useEffect(function () {
    window.addEventListener('scroll', throttleViewPort);
    return function () {
      window.removeEventListener('scroll', throttleViewPort);
      window.removeEventListener('scroll', throttleScroll);
    };
  }, []);

  if (!children) {
    return null;
  }

  return /*#__PURE__*/React.createElement("div", {
    ref: containerRef,
    className: theme.tabs
  }, /*#__PURE__*/React.createElement(Header, {
    parentId: parentId,
    mode: mode,
    theme: theme
  }, /*#__PURE__*/React.createElement("div", {
    className: theme.tabsNavigation
  }, mapChildren())), /*#__PURE__*/React.createElement("section", {
    className: theme.tabsContent
  }, getSelectedChild()));
};
Anchor.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,

  /**
   * Общая цветовая схема
   */
  colorScheme: PropTypes.oneOf(['base', 'purple', 'blue', 'green', 'black', 'skyblue', 'aqua', 'gold']),
  initialValue: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['sm', 'lg']),

  /**
   * Задает варианты отображения перечня заголовков
   * fullwidth - отображение длинной линии по всей ширине контентой части для продуктовой страницы
   * sticky - прилипание шапки к родительскому компоненту
   */
  mode: PropTypes.oneOfType([PropTypes.oneOf(['sticky', 'fullwidth']), PropTypes.arrayOf(PropTypes.oneOf(['sticky', 'fullwidth']))]),
  theme: PropTypes.object
};
Anchor.defaultProps = {
  onChange: noop,
  onClick: noop,
  colorScheme: 'base',
  initialValue: void 0,
  children: void 0,
  size: 'lg',
  mode: void 0,
  theme: Tabs.theme
};
Anchor.Link = Link;
Anchor.displayName = 'Anchor';

export { Anchor };
//# sourceMappingURL=anchor.js.map
