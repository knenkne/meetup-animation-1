const _ = require('lodash')

const JSX_ELEMENT_TYPE = 'JSXElement'
const DISPLAY_NAME = 'displayName'
const NO_COMPONENT_NAME = 'no_component'

const isReturningJSX = (node) => _.get(node, 'argument.type') === JSX_ELEMENT_TYPE

module.exports = {
    meta: {
        docs: {
            description: 'Disallow undefined display name',
            category: 'Best Practices',
            recommended: true
        },
        fixable: 'code',
        schema: [
            {
                type: 'object',
                properties: {
                    isCapitalizedOnly: {
                        type: 'boolean'
                    }
                },
                additionalProperties: false
            }
        ]
    },
    create: (context) => {
        const { isCapitalizedOnly } = context.options[0]
        const components = {}

        const addComponent = (node) => {
            const componentName = _.get(node, 'id.name', NO_COMPONENT_NAME)
            components[componentName] = components[componentName] || {}
            components[componentName].node = node
        }

        const reportMissingDisplayName = (node) => {
            const nodeName = node.id.name
            context.report({
                node: node.type === 'ClassDeclaration' ? node.id : node,
                message: 'Display name missing for {{ componentName }}',
                data: {
                    componentName: nodeName
                },
                fix: (fixer) => {
                    if (node.type === 'ClassDeclaration') {
                        return fixer.insertTextBefore(node.body.body[0], `static ${DISPLAY_NAME} = '${nodeName}'\n\n    `)
                    }
                    return fixer.insertTextAfter(node, `\n\n ${nodeName}.${DISPLAY_NAME}='${nodeName}'`)
                }
            })
        }

        const shouldFunctionHaveDisplayName = (node) => {
            const firstLetter = _.get(node, 'parent.id.name', 'a')[0]
            if (_.get(node, 'parent.type') !== 'VariableDeclarator' ||
                (isCapitalizedOnly && firstLetter === firstLetter.toLowerCase())) {
                return false
            }
            switch (_.get(node, 'body.type')) {
                case JSX_ELEMENT_TYPE:
                    return true
                case 'BlockStatement':
                    return isReturningJSX(_.find(node.body.body, (statement) => statement.type === 'ReturnStatement'))
                default:
                    return false
            }
        }

        const arrowFunctionExpression = (node) => {
            if (shouldFunctionHaveDisplayName(node)) {
                addComponent(node.parent)
            }
        }

        const expressionStatement = (node) => {
            if (_.get(node, 'expression.left.property.name') === DISPLAY_NAME) {
                const componentName = _.get(node, 'expression.left.object.name', NO_COMPONENT_NAME)
                components[componentName] = components[componentName] || {}
                components[componentName].hasDisplayName = true
            }
        }

        const shouldClassHaveDisplayName = (node) => {
            const superclasses = ['Component', 'PureComponent']
            const nodeSuperclass = _.get(node, 'superClass.property.name', _.get(node, 'superClass.name'))
            return superclasses.indexOf(nodeSuperclass) > -1
        }

        const classDeclaration = (node) => {
            if (shouldClassHaveDisplayName(node)) {
                addComponent(node)
                const hasDisplayName = !!_.find(_.get(node, 'body.body'),
                    (el) => el.type === 'ClassProperty' && _.get(el, 'key.name') === DISPLAY_NAME)
                components[_.get(node, 'id.name', NO_COMPONENT_NAME)].hasDisplayName = hasDisplayName
            }
        }

        const programExit = () => {
            _.forEach(components, (value) => {
                if (!value.hasDisplayName) {
                    reportMissingDisplayName(value.node)
                }
            })
        }

        return {
            ArrowFunctionExpression: arrowFunctionExpression,
            ExpressionStatement: expressionStatement,
            ClassDeclaration: classDeclaration,
            'Program:exit': programExit
        }
    }
}
