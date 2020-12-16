import _ from 'lodash'

/**
 * Если бэк пришлет лишние символы в строке, то их нужно убрать ()
 * @param {String} str - строка
 * @return {String} - отформатированная строка
 */
export const normalizeString = (str) => str ? str.replace(/↵/g, '') : ''

/**
 * Замена множества пробелов на один.
 * @param {String} str - строка
 * @return {String} - отформатированная строка
 */
export const removeMultipleSpaces = (str) => str.replace(/\s\s+/g, ' ')

/**
 * Распарсить строку - извлеч из неё текст и номер карты/счёта.
 * @param {String} str - строка
 * @return {{text: {String}}|{text: String, accountNumber: String}} - объект, содержащий текст и номер карты/счёта.
 */
export const parseString = (str) => {
    const check = /[0-9\s•]{10,}[0-9\s]{4}$/.test(str)
    const valueMask = str.replace('****', '•• ')

    const lengthNumberCard = 4

    if (check) {
        const name = valueMask.replace(/[0-9•]/g, '')
        const nameWithoutSpaces = removeMultipleSpaces(name)
        const withoutSpaces = valueMask.replace(/\s/g, '')
        const number = withoutSpaces.slice(-lengthNumberCard)

        return {
            text: nameWithoutSpaces.trim(),
            accountNumber: `•• ${number}`
        }
    }

    return {
        text: removeMultipleSpaces(valueMask)
    }
}

/**
 * Получить первую строку, содержащую заголовок.
 * @param {Boolean} empty - указывает на то прислал ли сервер данные для данной строки: true - не прислал, false прислал
 * @param {String} str - строка, содержащая данные
 * @return {String} - результирующая строка или false
 */
export const getTitle = (empty, str) => {
    const { text = '', accountNumber = '' } = parseString(str)

    if (empty) {
        return text
    }

    const space = text && accountNumber && ' '

    return text + space + accountNumber
}

/**
 * Получить первую строку, содержащую описание.
 * @param {Boolean} empty - указывает на то прислал ли сервер данные для данной строки: true - не прислал, false прислал
 * @param {String} str - строка, содержащая данные
 * @return {String} - результирующая строка или false
 */
export const getDescription = (empty, str) => {
    const { text = '', accountNumber = '' } = parseString(str)

    if (empty) {
        return accountNumber
    }

    const space = text && accountNumber && ' '

    return text + space + accountNumber
}

/**
 * Вычислить заголовок и описание.
 * @param {String} to - содержит данные для заголовка
 * @param {String} description - содержит данные для поисания
 * @return {{description: (String|Boolean), title: (String|Boolean)}} - объект, содержащие заголовок и описание
 */
export const calculate = (to, description) => {
    const descriptionNorm = normalizeString(description)
    const titleRender = normalizeString(to) || descriptionNorm
    const empty = _.isEmpty(to)

    return {
        title: getTitle(empty, titleRender),
        description: getDescription(empty, descriptionNorm)
    }
}
