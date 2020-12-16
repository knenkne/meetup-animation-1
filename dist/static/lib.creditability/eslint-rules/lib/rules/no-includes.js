const INCLUDES = 'includes'

module.exports = {
    meta: {
        type: 'problem',
        docs: {
            description: 'disallow using Arrays.includes and String.includes',
            category: 'Best Practices',
            recommended: true
        },
        fixable: 'code',
        schema: [
            {
                type: 'object',
                properties: {
                    acceptedObjects: {
                        type: 'array',
                        items: {
                            type: 'string'
                        }
                    }
                },
                additionalProperties: false
            }
        ]
    },
    create: (context) => {
        const source = context.getSourceCode()
        const { acceptedObjects } = context.options[0]

        return {
            CallExpression: function reportIncludes (node) {
                const { callee, arguments: args } = node
                const { object, property } = callee
                const functionName = property && property.name
                const objectName = object && object.name
                if (functionName === INCLUDES && acceptedObjects.indexOf(objectName) < 0) {
                    context.report({
                        node,
                        message: [
                            `Please don't use ${INCLUDES} because of IE. Use indexOf or lodash.includes instead.`
                        ],
                        fix: (fixer) => fixer.replaceText(node, `${source.getText(object)}.indexOf(${source.getText(args[0])}) >= 0`)
                    })
                }
            }
        }
    }
}
