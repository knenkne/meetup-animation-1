const ruleMatch = '\\b[\\w]+\\b([-\\/]\\b[\\w]+\\b)*(?![-\\/])'
const disableMatch = 'eslint-disable(-next)?(-line)?'
const startsWith = '^ ?'

const oneRuleComment = startsWith + disableMatch + ' ' + ruleMatch + '(?!, comment: .{10,}) ?'
const noMultiDisable = startsWith + disableMatch + ' ' + ruleMatch + '(, ' + ruleMatch + ')+[^:] ?'

module.exports = {
    plugins: [
        '@sbol/common'
    ],

    rules: {
        // Все причины отключения правил должны быть описаны
        '@sbol/common/no-warning-comments-regexp': ['warn', {
            terms: [oneRuleComment, noMultiDisable],
            message: 'Нежелательные комментарии:' +
            ' eslint-disable на несколько правил;' +
            ' eslint-disable для одного правила без комментария к причине отключения,' +
            ' пример правильного использования: "eslint-disable-line some-rule, comment: Развернутый текст с обоснованием"'
        }],

        // Используем только стандартные ссылки, которые не причинят зла пользователю
        '@sbol/common/jsx-no-tag-anchor': 'off',

        // <form><button /></form> является плохой практикой, поскольку часто button не предполагает отправку формы
        '@sbol/common/jsx-no-tag-button-without-type': 'off',

        // Весь русский текст должен быть локализуемым
        '@sbol/common/no-cyrillic-outside-cms': 'warn',

        // Необходимо объяснять, зачем делаются прямые импорты
        '@sbol/common/no-direct-imports': 'off',

        // Импорты от index.* были автоматически добавлены IDE и могут быть непредскауемыми
        // See unicorn/import-index
        '@sbol/common/no-index-imports': 'off',

        // Импорты вида '../../' не воспринимаются WebStorm корректным образом
        // See unicorn/import-index
        '@sbol/common/no-end-slash-imports': 'off',

        // Импорты файла package.json могут затянуть его в сборку целиком
        // Используйте вместо этого process.env.PKG_ID, process.env.VERSION
        '@sbol/common/no-package-json-imports': 'error'
    }
}
