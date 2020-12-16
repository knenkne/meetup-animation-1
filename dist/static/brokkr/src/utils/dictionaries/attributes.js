const getFromDictionary = require('../get-from-dictionary')

/* eslint-disable quote-props, comment: консистентность */
const attributes = {
    'всплывающая подсказка': 'title',
    'подсказка поля ввода': 'placeholder',
    'значение': 'value'
}

module.exports = new Proxy(
    attributes,
    {
        get (target, word) {
            return getFromDictionary(target, word)
        }
    }
)
