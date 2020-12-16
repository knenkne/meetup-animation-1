const endSlashRegExp = /\/$/

module.exports = {
    meta: {
        docs: {
            description: 'disallow end slash imports',
            category: 'Sberbank Online Best Practices',
            recommended: true
        },
        schema: []
    },

    create: function (context) {
        return {
            ImportDeclaration (node) {
                if (node.source.value && endSlashRegExp.test(node.source.value)) {
                    context.report({
                        node: node,
                        message: `Don\'t use end slash imports (${node.source.value}). It\'s redundant.` +
                        ' Possibly, this import was added by IDE. Check it!' +
                        ` Use '${node.source.value.slice(0, -1)} instead.'`
                    })
                }
            }
        }
    }
}
