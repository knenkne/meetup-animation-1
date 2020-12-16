/**
 * Строка не должна содержать английские символы.
 * @param {String} str - строка
 * @return {Boolean} - символы одного языка
 */
export const validateRussianLetters = (str) => /^[^a-zA-Z]+$/.test(str)

/**
 * Строка не должна содержать русские символы.
 * @param {String} str - строка
 * @return {Boolean} - символы одного языка
 */
export const validateEnglishLetters = (str) => /^[^а-яА-Я]+$/.test(str)
