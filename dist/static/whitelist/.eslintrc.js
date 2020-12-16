module.exports = {
    extends: '@sbol/eslint-config',
    settings: {
        'import/resolver': {
            node: {
                moduleDirectory: ['node_modules']
            }
        }
    },
    rules: {
        'global-require': 0, /* Требуется запрашивать в рантайме */
        'import/no-dynamic-require': 0, /* Требуется в рантайме формировать путь до модуля */
        'no-console': 0 /* Необходимо логировать, это же информирующий пакет */
    }
}
