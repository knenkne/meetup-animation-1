import { PROVIDERS_TOP_LINE_CHAR_LG, PROVIDERS_TOP_LINE_CHAR_MD } from '../../constants'

/**
 * Вернуть верхнюю часть заголовка
 * @param {String} title - Заголовок
 * @return {String} верхняя часть заголовка
 */
export const topLine = (title) => {

    let wordsNum
    if (window.screen.availWidth < 1056) {
        wordsNum = PROVIDERS_TOP_LINE_CHAR_MD
    } else {
        wordsNum = PROVIDERS_TOP_LINE_CHAR_LG
    }

    const words = title.split(' ')
    let result = words[0]
    for (let i = 1; i < words.length; i += 1) {
        if (result.length + ` ${words[i]}`.length <= wordsNum) {
            result += ` ${words[i]}`
        } else {
            return result
        }
    }
    return result
}

/**
 * Вернуть нижнюю часть заголовка
 * @param {String} title -  Заголовок
 * @return {String} нижняя часть заголовка
 */
export const bottomLine = (title) => `${title} `.replace(topLine(title), '').trim()
