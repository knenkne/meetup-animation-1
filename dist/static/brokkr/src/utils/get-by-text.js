const _ = require('lodash')

module.exports = (title, block) => {
    if (block === browser) {
        throw new Error('Плохо искать текст по всему документу, конкретизируйте, где же вы ищете')
    }

    return _.find(block.elements('*').value, (element) => element.getText() === title)
}
