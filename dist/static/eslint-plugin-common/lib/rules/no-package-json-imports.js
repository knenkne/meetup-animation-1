const packageJsonRegExp = /\/package\.json$|\/package-lock\.json/

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
                if (node.source.value && packageJsonRegExp.test(node.source.value)) {
                    context.report({
                        node: node,
                        message: `Don\'t use imports from package.json (${node.source.value}). ` +
                        'Use process.env.VERSION and process.env.PKG_ID vars instead.'
                    })
                }
            }
        }
    }
}
