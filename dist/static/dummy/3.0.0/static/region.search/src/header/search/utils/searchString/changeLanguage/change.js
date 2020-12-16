/**
 * Перевод строки из английского алфавита в русский.
 * На вход строка в которой все символы английского алфавита.
 * @param {String} str - все символы английского алфавита.
 * @param {Object} lettersMap - карта букв.
 * @return {String} - строка, состоящая из символов русского алфавита.
 */
export const change = (str, lettersMap) => {
    const arr = [...str]
    let convertedString = ''

    arr.forEach((currentLetter) => {
        let letter = lettersMap[currentLetter]

        if (letter && typeof letter !== 'string') {
            if (navigator.platform.indexOf('Mac') >= 0) {
                letter = letter.mac
            } else {
                letter = letter.standard
            }
        }

        if (letter) {
            convertedString += letter
        } else {
            convertedString += currentLetter
        }
    })

    return convertedString
}
