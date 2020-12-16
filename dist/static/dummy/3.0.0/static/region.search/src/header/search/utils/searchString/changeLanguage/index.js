import { enCorrespondsRu, ruCorrespondsEn } from '../../../constants'

import { change } from './change'
import { validateRussianLetters, validateEnglishLetters } from './validator'

/**
 * Преобразовать английские символы в русские или русские в английские.
 * Строка не должна содержать символы обоих языков.
 * @param {String} str - поисковый запрос.
 * @return {String} - сконвертированная строка, если не удалось сконвертировать, то пустая строка.
 */
export const getConvertedString = (str) => {
    const onlyEng = validateEnglishLetters(str)

    if (onlyEng) {
        return change(str, enCorrespondsRu)
    }

    const onlyRus = validateRussianLetters(str)

    if (onlyRus) {
        return change(str, ruCorrespondsEn)
    }

    return ''
}
