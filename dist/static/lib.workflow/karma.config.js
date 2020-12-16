const { configure, defaultSetups } = require('@sbol/karma-config')

module.exports = configure({
    setups: [
        ...defaultSetups,
        'src/tests/setup.js'
    ],
    files: [
        'src/tests/*.spec.js?(x)',
        // FIXME: Добавить остальные тесты
        'src/builder/widgets/buttons/**/tests/*.spec.js?(x)',
        'src/adapter/actions/**/tests/*.spec.js?(x)',
        'src/adapter/selectors/tests/general.spec.js',
        'src/adapter/selectors/tests/get-visible-widgets-fields-ids.spec.js',
    ]
})
