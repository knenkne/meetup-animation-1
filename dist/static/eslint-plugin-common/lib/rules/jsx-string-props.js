// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const wrapperMap = {
    'double-quotes': { start: '"', end: '"' },
    'single-quotes': { start: '\'', end: '\'' },
    'brackets': { start: '{', end: '}' },
}

function checkWrappers (attribute, wrapperName) {
    const { start, end } = wrapperMap[wrapperName]
    return Boolean(
        attribute.startsWith(start) &&
        attribute.endsWith(end)
    )
}

function getStringAttributeValue (node) {
    if (node.value) {
        if (node.value.expression
            && node.value.expression.type === 'Literal'
            && typeof node.value.expression.value === 'string') {
            return `{${node.value.expression.raw}}`
        }

        if (node.value.type === 'Literal') {
            return node.value.raw
        }
    }
}


module.exports = {
    meta: {
        docs: {
            description: 'allow only quotes or brackets for string literal props',
            category: 'Sberbank Online Best Practices',
            recommended: true
        },
        schema: []
    },

    create: function (context) {
        const wrapperName = context.options[0] || 'double-quotes'

        return {
            JSXAttribute: (node) => {
                const attributeValue = getStringAttributeValue(node)

                if (attributeValue && !checkWrappers(attributeValue, wrapperName)) {
                    context.report({
                        node: node,
                        message: `Use ${wrapperName} to wrap string literal prop ${attributeValue}.`
                    })
                }
            }
        }
    }
}
