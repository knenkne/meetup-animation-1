import { scrollOffset } from '../../constants'

/**
 * Плавный вертикальный скроллинг вверх
 * @param {Number} targetY - Координата вехней части экрана, на которую нужно вернуться
 * @return {undefined} - ничего не возвращает
 */

export const smoothScroll = (targetY) => {
    const currentY = window.pageYOffset
    if (currentY > targetY) {
        if (currentY - targetY > scrollOffset) {
            window.scrollTo(0, currentY - scrollOffset)
            setTimeout(() => smoothScroll(targetY), 0)
        } else {
            window.scrollTo(0, targetY)
        }
    }
}
