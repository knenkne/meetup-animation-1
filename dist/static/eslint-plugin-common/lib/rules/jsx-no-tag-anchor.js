const elementType = require('jsx-ast-utils/elementType')

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

function isAnchor (name) {
    return name === 'a'
}

module.exports = {
    meta: {
        docs: {
            description: 'disallow anchor element',
            category: 'Sberbank Online Best Practices',
            recommended: true
        },
        schema: []
    },

    create: function (context) {
        return {
            JSXOpeningElement: (node) => {
                const name = elementType(node)

                if (isAnchor(name)) {
                    context.report({
                        node: node,
                        message: 'Using tag <a />. Please, use <Link /> from @sbol/lib.ui or @sbol/lib.app instead.'
                    })
                }
            }
        }
    }
}
