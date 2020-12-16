const { RuleTester } = require('eslint')

const rule = require('../../../lib/rules/no-undefined-display-name')

RuleTester.setDefaultConfig({
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {
            arrowFunctions: true,
            blockBindings: true,
            classes: true,
            defaultParams: true,
            destructuring: true,
            jsx: true,
            modules: true,
            objectLiteralShorthandMethods: true,
            objectLiteralShorthandProperties: true,
            spread: true,
            templateStrings: true,
            experimentalObjectRestSpread: true
        }
    }
})

const ruleTester = new RuleTester()

const capitalizedOnly = [{ isCapitalizedOnly: true }]
const anyKind = [{ isCapitalizedOnly: false }]

ruleTester.run('no-undefined-display-name', rule, {
    valid: [
        {
            code: 'const x = 5',
            options: capitalizedOnly
        },
        {
            code: 'const x = 5',
            options: anyKind
        },
        {
            code: 'const x = (props) => <div />',
            options: capitalizedOnly
        },
        {
            code: 'const x = (props) => {const xx = 5; return (<div />)}',
            options: capitalizedOnly
        },
        {
            code: 'export const CapacityScale = ({ total, used, reserved, prepayment, captionKey, usedKey, reservedKey, freeKey, showAlways, i18params, children }) => {\n' +
                '    const absoluteValues = percentScaleValues(total, used, reserved, prepayment)\n' +
                '    const absoluteDescriptionValues = percentDescriptionValues(total, used, reserved, prepayment)\n' +
                '    const caption = i18next.t(captionKey, { total, ...i18params })\n' +
                '\n' +
                '    return (\n' +
                '        <div className={styles[\'capacity-scale\']} data-node="product:scale">\n' +
                '            <BaseScale {...absoluteValues} caption={caption} />\n' +
                '            <CapacityScaleDescription values={absoluteDescriptionValues} usedKey={usedKey} reservedKey={reservedKey} freeKey={freeKey} showAlways={showAlways} params={i18params} />\n' +
                '            {children}\n' +
                '        </div>\n' +
                '    )\n' +
                '}\n' +
                'CapacityScale.displayName = \'CapacityScale\'',
            options: capitalizedOnly
        },
        {
            code: 'export const CapacityScale = ({ total, used, reserved, prepayment, captionKey, usedKey, reservedKey, freeKey, showAlways, i18params, children }) => {\n' +
                '    const absoluteValues = percentScaleValues(total, used, reserved, prepayment)\n' +
                '    const absoluteDescriptionValues = percentDescriptionValues(total, used, reserved, prepayment)\n' +
                '    const caption = i18next.t(captionKey, { total, ...i18params })\n' +
                '\n' +
                '    return (\n' +
                '        <div className={styles[\'capacity-scale\']} data-node="product:scale">\n' +
                '            <BaseScale {...absoluteValues} caption={caption} />\n' +
                '            <CapacityScaleDescription values={absoluteDescriptionValues} usedKey={usedKey} reservedKey={reservedKey} freeKey={freeKey} showAlways={showAlways} params={i18params} />\n' +
                '            {children}\n' +
                '        </div>\n' +
                '    )\n' +
                '}\n' +
                'CapacityScale.displayName = \'CapacityScale\'',
            options: anyKind
        },
        {
            code: 'class TestComponent extends Component {\n' +
                '\n' +
                '    static propTypes = {}\n' +
                '\n' +
                '    static defaultProps = {}\n' +
                '\n' +
                '    static displayName = \'TestComponent\'\n' +
                '    \n' +
                '    render () {\n' +
                '        return (\n' +
                '            <div />\n' +
                '        )\n' +
                '    }\n' +
                '}',
            options: capitalizedOnly
        },
        {
            code: 'class TestComponent extends React.PureComponent {\n' +
                '\n' +
                '    static propTypes = {}\n' +
                '\n' +
                '    static defaultProps = {}\n' +
                '\n' +
                '    static displayName = \'TestComponent\'\n' +
                '    \n' +
                '    render () {\n' +
                '        return (\n' +
                '            <div />\n' +
                '        )\n' +
                '    }\n' +
                '}',
            options: capitalizedOnly
        },
        {
            code: 'class TestComponent extends Component {\n' +
                '\n' +
                '    static propTypes = {}\n' +
                '\n' +
                '    static defaultProps = {}\n' +
                '\n' +
                '    render () {\n' +
                '        return (\n' +
                '            <div />\n' +
                '        )\n' +
                '    }\n' +
                '}\n' +
                'TestComponent.displayName = \'TestComponent\'',
            options: capitalizedOnly
        },
        {
            code: 'class TestComponent extends React.Component {\n' +
                '\n' +
                '    static propTypes = {}\n' +
                '\n' +
                '    static defaultProps = {}\n' +
                '\n' +
                '    render () {\n' +
                '        return (\n' +
                '            <div />\n' +
                '        )\n' +
                '    }\n' +
                '}\n' +
                'TestComponent.displayName = \'TestComponent\'',
            options: capitalizedOnly
        }
    ],
    invalid: [
        {
            code: 'const X = (props) => <div />',
            options: capitalizedOnly,
            errors: [{
                message: 'Display name missing for X',
                type: 'VariableDeclarator'
            }]
        },
        {
            code: 'const X = (props) => <div />',
            options: anyKind,
            errors: [{
                message: 'Display name missing for X',
                type: 'VariableDeclarator'
            }]
        },
        {
            code: 'const x = (props) => <div />',
            options: anyKind,
            errors: [{
                message: 'Display name missing for x',
                type: 'VariableDeclarator'
            }]
        },
        {
            code: 'const X = (props) => {const xx = 5; return (<div />)}',
            options: capitalizedOnly,
            errors: [{
                message: 'Display name missing for X',
                type: 'VariableDeclarator'
            }]
        },
        {
            code: 'const x = (props) => {const xx = 5; return (<div />)}',
            options: anyKind,
            errors: [{
                message: 'Display name missing for x',
                type: 'VariableDeclarator'
            }]
        },
        {
            code: 'export const CapacityScale = ({ total, used, reserved, prepayment, captionKey, usedKey, reservedKey, freeKey, showAlways, i18params, children }) => {\n' +
                '    const absoluteValues = percentScaleValues(total, used, reserved, prepayment)\n' +
                '    const absoluteDescriptionValues = percentDescriptionValues(total, used, reserved, prepayment)\n' +
                '    const caption = i18next.t(captionKey, { total, ...i18params })\n' +
                '\n' +
                '    return (\n' +
                '        <div className={styles[\'capacity-scale\']} data-node="product:scale">\n' +
                '            <BaseScale {...absoluteValues} caption={caption} />\n' +
                '            <CapacityScaleDescription values={absoluteDescriptionValues} usedKey={usedKey} reservedKey={reservedKey} freeKey={freeKey} showAlways={showAlways} params={i18params} />\n' +
                '            {children}\n' +
                '        </div>\n' +
                '    )\n' +
                '}',
            options: capitalizedOnly,
            errors: [{
                message: 'Display name missing for CapacityScale',
                type: 'VariableDeclarator'
            }]
        },
        {
            code: 'export const CapacityScale = ({ total, used, reserved, prepayment, captionKey, usedKey, reservedKey, freeKey, showAlways, i18params, children }) => {\n' +
                '    const absoluteValues = percentScaleValues(total, used, reserved, prepayment)\n' +
                '    const absoluteDescriptionValues = percentDescriptionValues(total, used, reserved, prepayment)\n' +
                '    const caption = i18next.t(captionKey, { total, ...i18params })\n' +
                '\n' +
                '    return (\n' +
                '        <div className={styles[\'capacity-scale\']} data-node="product:scale">\n' +
                '            <BaseScale {...absoluteValues} caption={caption} />\n' +
                '            <CapacityScaleDescription values={absoluteDescriptionValues} usedKey={usedKey} reservedKey={reservedKey} freeKey={freeKey} showAlways={showAlways} params={i18params} />\n' +
                '            {children}\n' +
                '        </div>\n' +
                '    )\n' +
                '}',
            options: anyKind,
            errors: [{
                message: 'Display name missing for CapacityScale',
                type: 'VariableDeclarator'
            }]
        },
        {
            code: 'class TestComponent extends Component {\n' +
                '\n' +
                '    static propTypes = {}\n' +
                '\n' +
                '    static defaultProps = {}\n' +
                '    \n' +
                '    render () {\n' +
                '        return (\n' +
                '            <div />\n' +
                '        )\n' +
                '    }\n' +
                '}',
            options: capitalizedOnly,
            errors: [{
                message: 'Display name missing for TestComponent',
                type: 'Identifier'
            }]
        },
        {
            code: 'class TestComponent extends PureComponent {\n' +
                '\n' +
                '    static propTypes = {}\n' +
                '\n' +
                '    static defaultProps = {}\n' +
                '    \n' +
                '    render () {\n' +
                '        return (\n' +
                '            <div />\n' +
                '        )\n' +
                '    }\n' +
                '}',
            options: capitalizedOnly,
            errors: [{
                message: 'Display name missing for TestComponent',
                type: 'Identifier'
            }]
        },
        {
            code: 'class TestComponent extends React.Component {\n' +
                '\n' +
                '    static propTypes = {}\n' +
                '\n' +
                '    static defaultProps = {}\n' +
                '    \n' +
                '    render () {\n' +
                '        return (\n' +
                '            <div />\n' +
                '        )\n' +
                '    }\n' +
                '}',
            options: capitalizedOnly,
            errors: [{
                message: 'Display name missing for TestComponent',
                type: 'Identifier'
            }]
        },
        {
            code: 'class TestComponent extends React.PureComponent {\n' +
                '\n' +
                '    static propTypes = {}\n' +
                '\n' +
                '    static defaultProps = {}\n' +
                '    \n' +
                '    render () {\n' +
                '        return (\n' +
                '            <div />\n' +
                '        )\n' +
                '    }\n' +
                '}',
            options: capitalizedOnly,
            errors: [{
                message: 'Display name missing for TestComponent',
                type: 'Identifier'
            }]
        }
    ]
})
