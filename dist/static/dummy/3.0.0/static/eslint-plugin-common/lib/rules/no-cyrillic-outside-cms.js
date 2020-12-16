const { resolve } = require('path')

module.exports = {
    meta: {
        docs: {
            description: 'Disallow cyrillic symbols in string literals outside localization files',
            category: 'Sberbank Online Best Practices',
            recommended: true
        },
        schema: []
    },

    create: function (context) {
        return {
            Literal: (node) => {

                const { value } = node
                const filePath = context.getFilename()

                if (typeof value === 'string' && /[а-яА-ЯЁё]/.test(value) && filePath.includes(resolve('src'))) {
                    context.report({
                        node,
                        message: 'All cyrillic strings must be stored in localization files: "{{value}}".',
                        data: { value }
                    })
                }
            }
        }
    }
}
