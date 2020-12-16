const requiredValidator = require('../validators/required')

module.exports = {
    type: 'DummyInput',
    title: 'Пример собственного виджета DummyInput',
    description: 'Это простое поле ввода',
    fields: [
        {
            id: 'primitive:text:dummy',
            type: 'text',
            title: 'Поле ввода',
            validators: [requiredValidator]
        }
    ]
}
