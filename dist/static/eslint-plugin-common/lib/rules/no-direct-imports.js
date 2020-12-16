const directRegExp = /^@sbol\/lib\.[^/]+\/.+/

module.exports = {
    meta: {
        docs: {
            description: 'disallow direct imports',
            category: 'Sberbank Online Best Practices',
            recommended: true
        },
        schema: []
    },

    create: function (context) {
        return {
            ImportDeclaration (node) {
                if (node.source.value && directRegExp.test(node.source.value)) {
                    context.report({
                        node: node,
                        message: `Don\'t use direct imports for @sbol libs (${node.source.value}). ` +
                        'Direct import\'s code will be compiled to your product bundle.'
                    })
                }
            }
        }
    }
}
