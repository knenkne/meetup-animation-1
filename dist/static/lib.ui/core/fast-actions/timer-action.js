import { j as _objectWithoutProperties, a as _slicedToArray, _ as _extends } from '../_rollupPluginBabelHelpers-687385f0.js';
import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
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
import '../typography/style.css';
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
import './style.css';
import { FastAction } from './fast-action.js';

var SECONDS = 60;
var MILLISECONDS = 1000;

var parseTimer = function parseTimer(timer) {
  var minutes = (timer - timer % SECONDS) / SECONDS;

  var seconds = _.padStart(timer % SECONDS, 2, 0);

  return "".concat(minutes, ":").concat(seconds);
};

var TimerAction = function TimerAction(_ref) {
  var initialValue = _ref.initialValue,
      value = _ref.value,
      title = _ref.title,
      timerTitle = _ref.timerTitle,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ["initialValue", "value", "title", "timerTitle", "onClick"]);

  var _useState = useState(initialValue),
      _useState2 = _slicedToArray(_useState, 2),
      timer = _useState2[0],
      setTimer = _useState2[1];

  useEffect(function () {
    var timerID = setInterval(function () {
      if (timer) {
        setTimer(timer - 1);
      } else {
        clearInterval(timerID);
      }
    }, MILLISECONDS);
    return function () {
      clearInterval(timerID);
    };
  });
  var handleClick = useCallback(function () {
    setTimer(value);
    onClick();
  });
  return /*#__PURE__*/React.createElement(FastAction, _extends({
    title: timer ? "".concat(timerTitle, " ").concat(parseTimer(timer)) : title,
    onClick: timer ? void '' : handleClick
  }, props));
};
TimerAction.propTypes = {
  /**
   * Передавайте значение, если таймер должен быть выставлен сразу
   */
  initialValue: PropTypes.number,
  value: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  timerTitle: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  href: PropTypes.string,
  icon: PropTypes.string,
  imageSrc: PropTypes.string,
  description: PropTypes.string,
  as: PropTypes.oneOf([PropTypes.string, PropTypes.func])
};
TimerAction.defaultProps = {
  initialValue: 0,
  href: void '',
  timerTitle: '',
  onClick: void '',
  icon: void '',
  imageSrc: void '',
  description: void '',
  as: void ''
};
TimerAction.displayName = 'FastActions.TimerAction';

export default TimerAction;
export { TimerAction };
//# sourceMappingURL=timer-action.js.map
