const config = require('@sbol/karma-config')

// Расширенные настройки см. в пакете @sbol/karma-config
module.exports = config
    .configure({
        setups: [
            ...config.defaultSetups,
            // Добавляем в setups (делаем частью сборки) настройку enzyme adapter
            'src/tests/setup.js'
        ]
    })
