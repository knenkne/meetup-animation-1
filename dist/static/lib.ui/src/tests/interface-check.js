import PropTypes from 'prop-types'
import _ from 'lodash'

const inputPropTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    readOnly: PropTypes.bool,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onDragStart: PropTypes.func,
    onDrop: PropTypes.func,
    onFocus: PropTypes.func,
    onContextMenu: PropTypes.func,
    tabIndex: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    placeholder: PropTypes.string,
    // complex
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.bool
    ]),
    autoComplete: PropTypes.oneOf(['on', 'off'])
}

const userEventsPropTypes = {
    onClick: PropTypes.func,
    onClose: PropTypes.func,
    onCloseEnd: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyUp: PropTypes.func,
    onOpen: PropTypes.func,
    onOpenEnd: PropTypes.func
}

const metaPropTypes = {
    active: PropTypes.bool,
    asyncValidating: PropTypes.bool,
    autofilled: PropTypes.bool,
    dirty: PropTypes.bool,
    error: PropTypes.string,
    formName: PropTypes.string,
    hasServerError: PropTypes.bool,
    invalid: PropTypes.bool,
    pristine: PropTypes.bool,
    submitFailed: PropTypes.bool,
    submitting: PropTypes.bool,
    touched: PropTypes.bool,
    valid: PropTypes.bool,
    visited: PropTypes.bool,
    warning: PropTypes.string,
    // complex
    initialValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

const connectPropTypes = {
    dispatch: PropTypes.func
}

const viewPropTypes = {
    /**
     *  markdown
     */
    description: PropTypes.string,
    forceOpened: PropTypes.bool,
    title: PropTypes.string,
    // complex
    mode: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
    as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    translations: PropTypes.objectOf(PropTypes.string),
    colorScheme: PropTypes.oneOf([]),
    theme: PropTypes.objectOf(PropTypes.string),
    icon: PropTypes.oneOf([]),
    loading: PropTypes.bool,
    imageSrc: PropTypes.string,
    srcSet: PropTypes.string,
    mobileSrcSet: PropTypes.string,
    href: PropTypes.string
}

const a11yPropTypes = {
    // complex
    a11y: PropTypes.objectOf(PropTypes.any)
}

const complexTypes = [
    'initialValue',
    'children',
    'mode',
    'size',
    'translations',
    'colorScheme',
    'value',
    'a11y',
    'theme',
    'icon',
    'as',
    'additional',
    'autoComplete'
]

const namePattern = /^(ref|node|data-|aria-)[A-Za-z]+$/

const defaultPropTypes = {
    ...inputPropTypes,
    ...userEventsPropTypes,
    ...metaPropTypes,
    ...connectPropTypes,
    ...viewPropTypes,
    ...a11yPropTypes
}

const exclusions = {
    accordionOptions: ['warning', 'collapsible'],
    labeledOptions: ['hint', 'tooltip', 'onHintOpen', 'onHintClose'],
    inputOptions: ['forceDisabled'],
    selectOptions: ['options'],
    breadcrumbsOptions: ['navigation', 'application', 'routes'],
    inputRestrictOptions: ['restriction'],
    calendarOptions: ['startingYear', 'initialViewDate'],
    rangeOptions: ['from', 'to', 'naked', 'names', 'initialViewDate'],
    currencyOptions: ['asSymbol', 'currencyCode'],
    directionOptions: ['direction'],
    suggestOptions: ['suggest'],
    tabsOptions: ['onSelect', 'selectedItem'],
    tabOptions: ['id'],
    sliderOptions: [
        'digits',
        'min',
        'max',
        'step',
        'grid',
        'options',
        'transitionDuration'
    ],
    dropdownOptions: ['align', 'verticalAlign', 'altSymbol'],
    gridOptions: [
        'xl',
        'offsetXl',
        'lg',
        'offsetLg',
        'md',
        'offsetMd',
        'sm',
        'offsetSm',
        'xs',
        'offsetXs'
    ],
    maskOptions: [
        'mask',
        'guide',
        'keepCharPositions',
        'placeholderChar',
        'pipe',
        'onBeforeChange'
    ],
    numberOptions: [
        'decimalLimit',
        'prefix',
        'suffix',
        'allowDecimal',
        'allowNegative',
        'allowEmpty',
        'includeThousandsSeparator',
        'thousandsSeparatorSymbol',
        'decimalSymbol',
        'currency'
    ],
    linkOptions: ['to', 'external', 'bold'],
    fieldOptions: ['component', 'type', 'normalize'],
    markdownOptions: ['content'],
    events: ['onKeyPress'],
    stagesOptions: ['tooltip', 'avaLink'],
    stagesStepOptions: ['tooltip', 'value', 'avaLink'],

    inputSuggestOptions: [
        'isLoading',
        'inputComponent',
        'query',
        'options',
        'optionsLabel',
        'isSearch',
        'iconFromCode',
        'onChangeOption',
        'onChangeInput',
        'onRetry',
        'onScroll'
    ],
    inputSuggestOptionOptions: ['searchString', 'iconFromCode', 'fallbackIcon'],
    inputSuggestInputOptions: [
        'fallbackIcon',
        'iconFromCode',
        'inputComponent',
        'withOptions'
    ],
    inputSuggestDynamicOptions: [
        'initialQuery',
        'initialOptions',
        'masked',
        'keyboardTimeout',
        'requestTimeout',
        'onDataRequest',
        'onChangeOption',
        'onChangeInput',
        'options',
        'requestMode',
        'withPagination'
    ],
    timeoutOptions: ['keyboardTimeout', 'requestTimeout'],
    horizontalScroll: ['scrollWidth'],
    Icon: ['onError'],
    localPhone: ['onMouseUp'],
}

const isValidProp = (propName, componentExclusions, componentPropType) =>
    _.includes(complexTypes, propName) ||
    namePattern.test(propName) ||
    _.includes(componentExclusions, propName) ||
    defaultPropTypes[propName] === componentPropType ||
    _.get(defaultPropTypes[propName], 'isRequired') === componentPropType

export const interfaceCheck = (
    exports,
    componentsWithExclusions,
    parentPath
) => {
    if (!parentPath) {
        interfaceCheck.warnList = []
    }

    _.forEach(exports, (Component, name) => {
        if (
            interfaceCheck.componentRegExp.test(name) &&
            name !== interfaceCheck.decoratorsShortcut
        ) {
            const path = parentPath ? `${parentPath}.${name}` : name

            _.forEach(Component.propTypes, (componentPropType, propName) => {
                if (
                    !isValidProp(
                        propName,
                        componentsWithExclusions[path],
                        componentPropType
                    )
                ) {
                    interfaceCheck.warnList.push(
                        `Prop ${propName} компонента ${
                            Component.displayName || Component.name
                        }`
                    )
                }
            })

            interfaceCheck(Component, componentsWithExclusions, path)
        }
    })

    if (!parentPath && interfaceCheck.warnList.length) {
        fail(`Test Error: В следующих компонентах выявлено несоответствие архитектурному решению:
    ${interfaceCheck.warnList.join('\n    ')}`)
    }
}
interfaceCheck.componentRegExp = /^[A-Z]/
interfaceCheck.decoratorsShortcut = 'WrappedComponent'
interfaceCheck.exclusions = exclusions
interfaceCheck.warnList = []
