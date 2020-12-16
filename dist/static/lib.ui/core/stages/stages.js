import { j as _objectWithoutProperties, _ as _extends } from '../_rollupPluginBabelHelpers-687385f0.js';
import React, { useMemo, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import 'lodash';
import classnames from 'classnames';
import '../utils/get-display-name.js';
import '../utils/hoc/style.css';
import { deprecate } from '../utils/hoc/deprecate.js';
import '../utils/styles/media.config.css';
import { isPhoneViewport, isDesktopViewport } from '../utils/adaptive.js';
import '../icon/style.css';
import '../icon/icon.js';
import '../index-85b17782.js';
import '../external-969f6c5f.js';
import '../icon/index.js';
import '../full-width/style.css';
import '../full-width/inner.js';
import { FullWidth } from '../full-width/index.js';
import defaultTheme from './style.css';
import { Step } from './step.js';
import { Progress } from './progress.js';

var CENTERED_COUNT = 2;
var DESKTOP_OFFSET = 160;
var MOBILE_OFFSET = 128;
var OFFSET = isPhoneViewport() ? MOBILE_OFFSET : DESKTOP_OFFSET;
/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d/screen/5ca7884a65b9d234eaf140ae)
 * Компонент для вывода шагов движения по процессу.
 *
 * @param {Object} props - Свойства компонента.
 * @return {JSX} - Компонент.
 */

var Stages = function Stages(_ref) {
  var children = _ref.children,
      translations = _ref.translations,
      avaLink = _ref.avaLink,
      theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ["children", "translations", "avaLink", "theme"]);

  var mobileCentered = React.Children.count(children) <= CENTERED_COUNT;
  var currIndex = useMemo(function () {
    return React.Children.toArray(children).findIndex(function (child) {
      return child.props.mode;
    });
  }, [children]);
  var containerRef = useRef();
  useEffect(function () {
    if (!isDesktopViewport() && (containerRef === null || containerRef === void 0 ? void 0 : containerRef.current)) {
      containerRef.current.scrollTo({
        left: (currIndex - 1) * OFFSET,
        behavior: 'smooth'
      });
    }
  }, [currIndex]);
  var mainComponent = /*#__PURE__*/React.createElement("ul", _extends({}, props, {
    className: classnames(theme.stages, mobileCentered && theme.centered)
  }), React.Children.map(children, function (StepChildren, index) {
    return /*#__PURE__*/React.cloneElement(StepChildren, {
      value: index + 1,
      translations: translations,
      avaLink: avaLink
    });
  }), !isDesktopViewport() && !mobileCentered && /*#__PURE__*/React.createElement("li", {
    className: theme.emptyStep
  }));

  if (isDesktopViewport()) {
    return mainComponent;
  }

  return /*#__PURE__*/React.createElement(FullWidth, null, /*#__PURE__*/React.createElement("div", {
    className: theme.scroll,
    ref: containerRef
  }, /*#__PURE__*/React.createElement(FullWidth.Inner, null, mainComponent)));
};
Stages.propTypes = {
  children: PropTypes.node.isRequired,

  /**
   * Содержит переводы для компонента.
   */
  translations: PropTypes.shape({
    tooltip: PropTypes.string.isRequired
  }).isRequired,

  /**
   * Ссылка на аватарку пользователя.
   */
  avaLink: PropTypes.string,
  theme: PropTypes.object
};
Stages.defaultProps = {
  avaLink: void 0,
  theme: defaultTheme
};
Stages.theme = defaultTheme;
Stages.Step = Step;
Stages.Progress = deprecate('4.0.0', 'Stages.Progress')(Progress);
Stages.displayName = 'Stages';

export default Stages;
export { Stages };
//# sourceMappingURL=stages.js.map
