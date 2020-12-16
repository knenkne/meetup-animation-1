import _ from 'lodash';

var TOP = 'top';
var BOTTOM = 'bottom';
var PADDING = 25;
/**
 * Функция, возвращающая true, если contextContent должен отобразиться вверх относительно contextTarget
 * Дополнительно задает максимальную высоту содержимому contextContent, если размеры окна не позволяют отобразиться элементу полностью
 * @param {Node} content - контент Dropdown
 * @param {Node} target - основной компонент (обертка)
 * @return {Boolean} - contextContent должен отобразиться вверх относительно contextTarget
 */

var autoTopCheckByWindow = function autoTopCheckByWindow(content, target) {
  if (content && target) {
    content.firstChild.style.maxHeight = ''; // eslint-disable-line no-param-reassign, comment: компонент посчитает свою высоту

    content.firstChild.style.overflowY = ''; // eslint-disable-line no-param-reassign, comment: компонент посчитает свою высоту

    var targetBottom = target.getBoundingClientRect().bottom;
    var distanceToBottom = document.documentElement.clientHeight - targetBottom;
    var distanceToTop = target.getBoundingClientRect().top;
    var freeHeightToBottom = distanceToBottom - content.clientHeight;
    var freeHeightToTop = distanceToTop - content.clientHeight;

    if (freeHeightToBottom >= 0) {
      return BOTTOM;
    } else if (freeHeightToBottom <= 0 && freeHeightToTop >= 0) {
      return TOP;
    }

    content.style.maxHeight = "".concat(_.max([distanceToBottom, distanceToTop]) - PADDING, "px"); // eslint-disable-line no-param-reassign, comment: компонент определит свою НОВУЮ высоту

    content.style.overflowY = 'scroll'; // eslint-disable-line no-param-reassign, comment: и будет скроллиться, если надо

    return freeHeightToTop >= freeHeightToBottom ? TOP : BOTTOM;
  }

  return BOTTOM;
};

export { autoTopCheckByWindow };
//# sourceMappingURL=auto-top-check-by-window.js.map
