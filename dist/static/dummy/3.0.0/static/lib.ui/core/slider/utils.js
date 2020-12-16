import '../_rollupPluginBabelHelpers-687385f0.js';
import 'react';
import 'prop-types';
import _ from 'lodash';
import 'classnames';
import '../utils/get-display-name.js';
import '../utils/hoc/style.css';
import '../utils/hoc/deprecate.js';
import '../utils/hoc/experimental.js';
import '../utils/hoc/error-adapter.js';
import '../utils/hoc/omittere.js';
import '../utils/hoc/accessibility-relocation.js';
import { handlePreventDefault } from '../utils/handlers.js';
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
import BigNumber from 'bignumber.js';

var HALF = 2;
var EXPONENT_FLOOR = 10;
var ACCURACY = 2;
var addSliderHandlers = function addSliderHandlers(element, handleMouseMove, handleMouseUp) {
  element.addEventListener('mousemove', handleMouseMove);
  element.addEventListener('mouseup', handleMouseUp);
  element.addEventListener('touchmove', handleMouseMove, {
    passive: false
  });
  element.addEventListener('touchend', handleMouseUp, {
    passive: false
  });
  element.addEventListener('selectstart', handlePreventDefault);
};
var removeSliderHandlers = function removeSliderHandlers(element, handleMouseMove, handleMouseUp) {
  element.removeEventListener('mousemove', handleMouseMove);
  element.removeEventListener('mouseup', handleMouseUp);
  element.removeEventListener('touchmove', handleMouseMove);
  element.removeEventListener('touchend', handleMouseUp);
  element.removeEventListener('selectstart', handlePreventDefault);
};
var makeDelimiters = function makeDelimiters(min, max, step, grid) {
  if (grid) {
    return grid.map(function (item, i) {
      return 100 * i / (grid.length - 1);
    });
  }

  var delimiters = [];
  var halfStep = step / HALF;
  var firstStep = min - min % step + step;

  if (firstStep < min + halfStep) {
    firstStep += step;
  }

  if (_.isNaN(firstStep) || firstStep >= max) {
    return delimiters;
  }

  delimiters.push(firstStep);

  while (_.last(delimiters) + step < max - halfStep) {
    delimiters.push(_.last(delimiters) + step);
  }

  return delimiters.map(function (value) {
    return (value - min) / (max - min) * 100;
  });
};

var clampBorders = function clampBorders(_ref, min, max, step) {
  var leftValue = _ref.leftValue,
      rightValue = _ref.rightValue;
  var halfStep = step / HALF;
  var newLeftValue = leftValue;
  var newRightValue = rightValue;

  if (newLeftValue < min + halfStep) {
    newLeftValue = min;
  }

  if (newRightValue < min + halfStep) {
    newRightValue = min;
  }

  if (newRightValue > max - halfStep) {
    newRightValue = max;
  }

  if (newLeftValue > max - halfStep) {
    newLeftValue = max;
  }

  return {
    leftValue: newLeftValue,
    rightValue: newRightValue
  };
};

var getClosest = function getClosest(value, _ref2) {
  var leftValue = _ref2.leftValue,
      rightValue = _ref2.rightValue;
  return Math.abs(value - leftValue) < Math.abs(rightValue - value) ? leftValue : rightValue;
};

var computeStepByDigits = function computeStepByDigits(min, max, step, digits) {
  if (!digits) {
    return step;
  }

  var diff = max - min;

  var maxSteps = _.ceil(diff / step);

  var exponent = Math.pow(EXPONENT_FLOOR, _.floor(Math.log(diff / maxSteps) / Math.LN10));
  var stepSize = 0;

  for (var i = 0; i < digits.length; i += 1) {
    stepSize = digits[i] * exponent;

    if (_.floor(diff / stepSize) <= maxSteps) {
      break;
    }
  }

  return _.floor(diff / stepSize) >= EXPONENT_FLOOR ? stepSize : 1;
};
var TOUCH_EVENT_TYPES = ['touchstart', 'touchend', 'touchmove'];
var getValueByMouse = function getValueByMouse(event, element, offset, step, min, max, grid, prevValue) {
  var position = TOUCH_EVENT_TYPES.includes(event.type) ? event.changedTouches[0].pageX : event.pageX;

  if (_.isUndefined(position)) {
    return prevValue;
  }

  var absoluteValue = _.clamp((position - element.clientLeft - element.getBoundingClientRect().left - offset) / element.clientWidth, 0, 1);

  if (grid) {
    var _newValue = grid[Math.round(absoluteValue * (grid.length - 1))];
    return new BigNumber(_newValue).toPrecision();
  }

  var relativeValue = absoluteValue * (max - min) + min;
  var borders = {
    leftValue: _.round(relativeValue - relativeValue % step, ACCURACY),
    rightValue: _.round(relativeValue - relativeValue % step + step, ACCURACY)
  };
  var clampedBorders = clampBorders(borders, min, max, step);
  var newValue = getClosest(relativeValue, clampedBorders);
  return new BigNumber(newValue).toPrecision();
};

function getLowerBound(grid, value) {
  var from = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var to = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : grid.length;

  if (from >= to) {
    return to - 1;
  }

  var m = Math.floor((from + to) / HALF);

  if (Number(grid[m]) < value) {
    return getLowerBound(grid, value, m + 1, to);
  }

  return getLowerBound(grid, value, from, m);
}

function getUpperBound(grid, value) {
  var from = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var to = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : grid.length;

  if (from >= to) {
    return to;
  }

  var m = Math.floor((from + to) / HALF);

  if (Number(grid[m]) > value) {
    return getUpperBound(grid, value, from, m);
  }

  return getUpperBound(grid, value, m + 1, to);
}

var getGridValue = function getGridValue(value, grid) {
  // parseFloat нужен, т.к. value может быть с точкой в конце, например "5000."
  var matchIndex = grid.findIndex(function (i) {
    return parseFloat(String(i)) === parseFloat(String(value));
  });

  if (matchIndex !== -1) {
    return matchIndex / (grid.length - 1);
  }

  var lowerBound = getLowerBound(grid, value);
  var upperBound = getUpperBound(grid, value, lowerBound + 1);

  if (lowerBound < 0) {
    return 0;
  }

  if (upperBound >= grid.length) {
    return 1;
  }

  var pseudoPercentage = (value - grid[lowerBound]) / (grid[upperBound] - grid[lowerBound]);
  return (lowerBound + pseudoPercentage) / (grid.length - 1);
};
var getLinearValue = function getLinearValue(value, min, max) {
  return _.clamp((value - min) / (max - min), 0, 1);
};

export { addSliderHandlers, computeStepByDigits, getGridValue, getLinearValue, getValueByMouse, makeDelimiters, removeSliderHandlers };
//# sourceMappingURL=utils.js.map
