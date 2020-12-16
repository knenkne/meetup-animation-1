import _ from 'lodash';

var TOP = 'top';
var BOTTOM = 'bottom';
var LEFT = 'left';
var RIGHT = 'right';
var autoLeftCheckByParent = function autoLeftCheckByParent(content, target) {
  if (content && target) {
    var parentRight = target.parentNode.getBoundingClientRect().right;
    var targetLeft = target.getBoundingClientRect().left;
    var restWidth = parentRight - targetLeft;
    var freeWidth = restWidth - content.offsetWidth;
    return freeWidth < 0 ? RIGHT : LEFT;
  }

  return LEFT;
};
var autoLeftCheckByWindow = function autoLeftCheckByWindow(content, target) {
  if (content && target) {
    content.parentNode.style.left = ''; // eslint-disable-line no-param-reassign, comment: предварительная очистка

    content.parentNode.style.right = ''; // eslint-disable-line no-param-reassign, comment: предварительная очистка

    content.parentNode.style.maxWidth = ''; // eslint-disable-line no-param-reassign, comment: предварительная очистка

    var targetToRight = document.documentElement.clientWidth - target.getBoundingClientRect().left;
    var targetToLeft = target.getBoundingClientRect().right;
    var contentFullWidth = content.offsetWidth;
    var freeSpaceToRight = targetToRight - contentFullWidth;
    var freeSpaceToLeft = targetToLeft - contentFullWidth;

    if (freeSpaceToRight >= 0) {
      return LEFT;
    } else if (freeSpaceToLeft >= 0 && freeSpaceToRight < 0) {
      return RIGHT;
    } else if (contentFullWidth > document.documentElement.clientWidth) {
      content.parentNode.style.left = "".concat(target.offsetWidth - targetToLeft, "px"); // eslint-disable-line no-param-reassign, comment: компонент посчитает свое смещение

      content.parentNode.style.maxWidth = "".concat(document.documentElement.clientWidth, "px"); // eslint-disable-line no-param-reassign, comment: компонент поровняется с окном

      return LEFT;
    } else if (freeSpaceToRight >= freeSpaceToLeft) {
      content.parentNode.style.left = "".concat(freeSpaceToRight, "px"); // eslint-disable-line no-param-reassign, comment: компонент посчитает свое смещение

      return LEFT;
    }

    content.parentNode.style.right = "".concat(freeSpaceToLeft, "px"); // eslint-disable-line no-param-reassign, comment: компонент посчитает свое смещение

    return RIGHT;
  }

  return LEFT;
};
/**
 * Функция, возвращающая true, если contextContent должен отобразиться вверх относительно contextTarget
 * Дополнительно задает максимальную высоту содержимому contextContent, если размеры окна не позволяют отобразиться элементу полностью
 * @param {Node} content - контент Dropdown
 * @param {Node} target - основной компонент Dropdown (обертка)
 * @return {Boolean} - contextContent должен отобразиться вверх относительно contextTarget
 */

var autoTopCheckByWindow = function autoTopCheckByWindow(content, target) {
  if (content && target) {
    content.firstChild.style.maxHeight = ''; // eslint-disable-line no-param-reassign, comment: компонент посчитает свою высоту

    content.firstChild.style.overflowY = ''; // eslint-disable-line no-param-reassign, comment: компонент посчитает свою высоту

    var targetBottom = target.getBoundingClientRect().bottom;
    var distanceToBottom = document.documentElement.clientHeight - targetBottom;
    var distanceToTop = target.getBoundingClientRect().top;
    var freeHeightToBottom = distanceToBottom - content.scrollHeight;
    var freeHeightToTop = distanceToTop - content.scrollHeight;

    if (freeHeightToBottom >= 0) {
      return BOTTOM;
    } else if (freeHeightToBottom <= 0 && freeHeightToTop >= 0) {
      return TOP;
    }

    content.firstChild.style.maxHeight = "".concat(_.max([distanceToBottom, distanceToTop]), "px"); // eslint-disable-line no-param-reassign, comment: компонент определит свою НОВУЮ высоту

    content.firstChild.style.overflowY = 'scroll'; // eslint-disable-line no-param-reassign, comment: и будет скроллиться, если надо

    return freeHeightToTop >= freeHeightToBottom ? TOP : BOTTOM;
  }

  return BOTTOM;
};
var autoScroll = function autoScroll(node, contentPlate) {
  if (contentPlate && node) {
    var elementPos = contentPlate.scrollTop + node.getBoundingClientRect().top - contentPlate.getBoundingClientRect().top;
    var height = contentPlate.clientHeight;
    var currentPos = contentPlate.scrollTop;

    if (!_.inRange(elementPos, currentPos, currentPos + height)) {
      contentPlate.scrollTop = Math.abs(currentPos - elementPos) < Math.abs(currentPos + height - elementPos) ? elementPos : elementPos - height + node.clientHeight; // eslint-disable-line no-param-reassign, comment: скролл по клавиатуре
    } else if (!_.inRange(elementPos + node.clientHeight, currentPos, currentPos + height)) {
      contentPlate.scrollTop = elementPos - height + node.clientHeight; // eslint-disable-line no-param-reassign, comment: скролл по клавиатуре
    }
  }
};
var cyclicPrevItem = function cyclicPrevItem(list, item) {
  if (!item) {
    return _.last(list);
  }

  return list[(_.indexOf(list, item) - 1 + list.length) % list.length];
};
var cyclicNextItem = function cyclicNextItem(list, item) {
  if (!item) {
    return _.first(list);
  }

  return list[(_.indexOf(list, item) + 1) % list.length];
};

export { autoLeftCheckByParent, autoLeftCheckByWindow, autoScroll, autoTopCheckByWindow, cyclicNextItem, cyclicPrevItem };
//# sourceMappingURL=utils.js.map
