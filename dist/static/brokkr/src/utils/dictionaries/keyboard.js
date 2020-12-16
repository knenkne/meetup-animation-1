const getFromDictionary = require('../get-from-dictionary')

/* eslint-disable quote-props, comment: консистентность */
const clearKeyboard = {
    'вниз': 'ArrowDown',
    'вверх': 'ArrowUp',
    'влево': 'ArrowLeft',
    'вправо': 'ArrowRight',
    '/^(таб|tab)$/': 'Tab',
    '/^(ентер|enter)$/': 'Enter',
    '/^(пробел|space)$/': ' ',
    '/^(возврат|назад|стереть|backspace)$/': 'Backspace',
}

module.exports = new Proxy(
    clearKeyboard,
    {
        get (target, word) {
            return getFromDictionary(target, word)
        }
    }
)
