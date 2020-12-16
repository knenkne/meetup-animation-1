import { STRUCTURE_POSITION, SCREEN_PARTS } from '../structure/const'

/**
 * костылик чтобы облегчить вытаскивание STRUCTURE_POSITION ввиду неудачного наименования
 * @param {String} position - элемент STRUCTURE_POSITION либо SCREEN_PARTS
 * @return {String} - позиция виджета в скрине в терминах SCREEN_PARTS
 */
export const structurePositionToWidgetPart = (position) => position === STRUCTURE_POSITION.body ?
    SCREEN_PARTS.widgets : position
