const indexRegExp = /\/index(\.js|\.jsx|\.ts|\.tsx)?$/

module.exports = {
    meta: {
        docs: {
            description: 'disallow index imports',
            category: 'Sberbank Online Best Practices',
            recommended: true
        },
        schema: []
    },

    create: function (context) {
        return {
            ImportDeclaration (node) {
                if (node.source.value && indexRegExp.test(node.source.value)) {
                    context.report({
                        node: node,
                        message: `Don\'t use "/index" imports (${node.source.value}). It\'s redundant.` +
                        'Possibly, this import was added by IDE. Check it!'
                    })
                }
            }
        }
    }
}
