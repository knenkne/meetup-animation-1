import localesRu from '../../../../locales/ru.json'

const ruValues = {
    ...localesRu,
}

module.exports = {
    init: (args) => args,
    t: (key) => ruValues[key]
}
