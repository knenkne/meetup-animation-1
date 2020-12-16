import { _ as _slicedToArray } from '../_rollupPluginBabelHelpers-3e859d87.js';
import _ from 'lodash';

var BOTTOM = 'bottom';
var TOP = 'top';
var LEFT = 'left';
var RIGHT = 'right';
var CENTER = 'center';
var LINE_HEIGHT = 25;
var HALF_TIP_WIDTH = 144;
var parseDirection = function parseDirection(directionStr) {
  return _.kebabCase(directionStr.replace('Text', '').replace('Icon', '').replace('sideLeft', 'topLeft').replace('sideRight', 'topLeft')).split('-');
};

var makeVerticalDirection = function makeVerticalDirection(height, bottom, clientHeight, verticalDirection, startVerticalDirection) {
  switch (true) {
    case verticalDirection === TOP && bottom <= height:
      return BOTTOM;

    case startVerticalDirection === TOP && bottom - height - LINE_HEIGHT > height:
      return TOP;

    case verticalDirection === BOTTOM && bottom >= clientHeight:
      return TOP;

    case startVerticalDirection === BOTTOM && bottom + LINE_HEIGHT + height < clientHeight:
      return BOTTOM;

    default:
      return verticalDirection;
  }
};

var makeHorizontalDirection = function makeHorizontalDirection(right, left, clientWidth, horizontalDirection) {
  if (right >= clientWidth) {
    if (horizontalDirection === LEFT) {
      return right - HALF_TIP_WIDTH < clientWidth ? CENTER : RIGHT;
    }

    if (horizontalDirection === CENTER) {
      return RIGHT;
    }
  }

  if (left <= 0) {
    if (horizontalDirection === RIGHT) {
      return left + HALF_TIP_WIDTH > 0 ? CENTER : LEFT;
    }

    if (horizontalDirection === CENTER) {
      return LEFT;
    }
  }

  return horizontalDirection;
};

var makeDirection = function makeDirection(node, direction) {
  var startDirection = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (!node) {
    return direction;
  }

  var _direction = _slicedToArray(direction, 2),
      verticalDirection = _direction[0],
      horizontalDirection = _direction[1];

  var _startDirection = _slicedToArray(startDirection, 1),
      startVerticalDirection = _startDirection[0];

  var _node$getBoundingClie = node.getBoundingClientRect(),
      bottom = _node$getBoundingClie.bottom,
      height = _node$getBoundingClie.height,
      left = _node$getBoundingClie.left,
      right = _node$getBoundingClie.right;

  var _document$documentEle = document.documentElement,
      clientHeight = _document$documentEle.clientHeight,
      clientWidth = _document$documentEle.clientWidth;
  var newVerticalDirection = makeVerticalDirection(height, bottom, clientHeight, verticalDirection, startVerticalDirection);
  var newHorizontalDirection = makeHorizontalDirection(right, left, clientWidth, horizontalDirection);
  return [newVerticalDirection, newHorizontalDirection];
};

export { makeDirection, parseDirection };
//# sourceMappingURL=make-direction.js.map
