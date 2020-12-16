const elementType = require('jsx-ast-utils/elementType')

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

function isButton (name) {
    return name === 'button'
}

function hasTypeAttr (element) {
    return element.attributes.some(function (attr) {
        return attr.name &&
            attr.name.name === 'type' &&
            attr.value.value
    })
}

module.exports = {
    meta: {
        docs: {
            description: 'disallow button element without any type',
            category: 'Sberbank Online Best Practices',
            recommended: true
        },
        schema: []
    },

    create: function (context) {
        return {
            JSXOpeningElement: (node) => {
                const name = elementType(node)

                if (isButton(name) && !hasTypeAttr(node)) {
                    context.report({
                        node: node,
                        message: 'Using tag button without type attr. ' +
                        'Default type is submit. Please, confirm any type.'
                    })
                }
            }
        }
    }
}
