import _ from 'lodash'

const TOP = 'top'
const BOTTOM = 'bottom'
const LEFT = 'left'
const RIGHT = 'right'

export const autoLeftCheckByParent = (content, target) => {
    if (content && target) {
        const parentRight = target.parentNode.getBoundingClientRect().right
        const targetLeft = target.getBoundingClientRect().left
        const restWidth = parentRight - targetLeft
        const freeWidth = restWidth - content.offsetWidth

        return freeWidth < 0 ? RIGHT : LEFT
    }

    return LEFT
}

export const autoLeftCheckByWindow = (content, target) => {
    if (content && target) {
        content.parentNode.style.left = '' // eslint-disable-line no-param-reassign, comment: предварительная очистка
        content.parentNode.style.right = '' // eslint-disable-line no-param-reassign, comment: предварительная очистка
        content.parentNode.style.maxWidth = '' // eslint-disable-line no-param-reassign, comment: предварительная очистка

        const targetToRight = document.documentElement.clientWidth - target.getBoundingClientRect().left
        const targetToLeft = target.getBoundingClientRect().right

        const contentFullWidth = content.offsetWidth
        const freeSpaceToRight = targetToRight - contentFullWidth
        const freeSpaceToLeft = targetToLeft - contentFullWidth

        if (freeSpaceToRight >= 0) {
            return LEFT
        } else if (freeSpaceToLeft >= 0 && freeSpaceToRight < 0) {
            return RIGHT
        } else if (contentFullWidth > document.documentElement.clientWidth) {
            content.parentNode.style.left = `${target.offsetWidth - targetToLeft}px` // eslint-disable-line no-param-reassign, comment: компонент посчитает свое смещение
            content.parentNode.style.maxWidth = `${document.documentElement.clientWidth}px` // eslint-disable-line no-param-reassign, comment: компонент поровняется с окном
            return LEFT
        } else if (freeSpaceToRight >= freeSpaceToLeft) {
            content.parentNode.style.left = `${freeSpaceToRight}px` // eslint-disable-line no-param-reassign, comment: компонент посчитает свое смещение
            return LEFT
        }
        content.parentNode.style.right = `${freeSpaceToLeft}px` // eslint-disable-line no-param-reassign, comment: компонент посчитает свое смещение
        return RIGHT
    }

    return LEFT
}

/**
 * Функция, возвращающая true, если contextContent должен отобразиться вверх относительно contextTarget
 * Дополнительно задает максимальную высоту содержимому contextContent, если размеры окна не позволяют отобразиться элементу полностью
 * @param {Node} content - контент Dropdown
 * @param {Node} target - основной компонент Dropdown (обертка)
 * @return {Boolean} - contextContent должен отобразиться вверх относительно contextTarget
 */
export const autoTopCheckByWindow = (content, target) => {
    if (content && target) {
        content.firstChild.style.maxHeight = '' // eslint-disable-line no-param-reassign, comment: компонент посчитает свою высоту
        content.firstChild.style.overflowY = '' // eslint-disable-line no-param-reassign, comment: компонент посчитает свою высоту

        const targetBottom = target.getBoundingClientRect().bottom
        const distanceToBottom = document.documentElement.clientHeight - targetBottom
        const distanceToTop = target.getBoundingClientRect().top
        const freeHeightToBottom = distanceToBottom - content.scrollHeight
        const freeHeightToTop = distanceToTop - content.scrollHeight


        if (freeHeightToBottom >= 0) {
            return BOTTOM
        } else if (freeHeightToBottom <= 0 && freeHeightToTop >= 0) {
            return TOP
        }

        content.firstChild.style.maxHeight = `${_.max([distanceToBottom, distanceToTop])}px` // eslint-disable-line no-param-reassign, comment: компонент определит свою НОВУЮ высоту
        content.firstChild.style.overflowY = 'scroll' // eslint-disable-line no-param-reassign, comment: и будет скроллиться, если надо

        return freeHeightToTop >= freeHeightToBottom ? TOP : BOTTOM
    }

    return BOTTOM
}

export const autoScroll = (node, contentPlate) => {
    if (contentPlate && node) {
        const elementPos = contentPlate.scrollTop + node.getBoundingClientRect().top - contentPlate.getBoundingClientRect().top
        const height = contentPlate.clientHeight
        const currentPos = contentPlate.scrollTop

        if (!_.inRange(elementPos, currentPos, currentPos + height)) {
            contentPlate.scrollTop = Math.abs(currentPos - elementPos) < Math.abs(currentPos + height - elementPos) ? elementPos : elementPos - height + node.clientHeight // eslint-disable-line no-param-reassign, comment: скролл по клавиатуре
        } else if (!_.inRange(elementPos + node.clientHeight, currentPos, currentPos + height)) {
            contentPlate.scrollTop = elementPos - height + node.clientHeight // eslint-disable-line no-param-reassign, comment: скролл по клавиатуре
        }
    }
}

export const cyclicPrevItem = (list, item) => {
    if (!item) {
        return _.last(list)
    }
    return list[(_.indexOf(list, item) - 1 + list.length) % list.length]
}
export const cyclicNextItem = (list, item) => {
    if (!item) {
        return _.first(list)
    }
    return list[(_.indexOf(list, item) + 1) % list.length]
}
