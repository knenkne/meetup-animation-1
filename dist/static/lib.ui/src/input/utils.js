import _ from 'lodash'
import BigNumber from 'bignumber.js'
import { conformToMask } from 'text-mask-core/dist/textMaskCore'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

const GLOBAL = 'g'
const EMPTY_STRING = ''
const DOT = '.'
const MINUS = '-'
const ZERO = '0'
const TRIM_REGEXP = /^(-)?0*([^.])/
const UNDERSCORE = '_'
const CARET_TRAP = '[]'
const REPLACE_STRING = '$1$2'
const trimStartNumber = (value) => value.replace(TRIM_REGEXP, REPLACE_STRING)

export const safeClamp = (value, min, max) => {
    if (value === EMPTY_STRING || value === MINUS || (!_.isNumber(min) && !_.isNumber(max))) {
        return trimStartNumber(value)
    }

    const current = new BigNumber(value)
    const clamped = BigNumber.min(
        BigNumber.max(
            new BigNumber(_.isNumber(min) ? min : -Infinity),
            current
        ),
        new BigNumber(_.isNumber(max) ? max : Infinity)
    ).toPrecision()

    return current === clamped ? trimStartNumber(value) : clamped
}

const getNumberRegexp = (decimalSymbol) => new RegExp(`[^\\-\\d\\${decimalSymbol}]`, GLOBAL)

export const unmaskNumberValue = (value, {
    decimalSymbol,
    allowEmpty,
    blur
}) => {
    let unmaskedValue = _.toString(value)
        .replace(getNumberRegexp(decimalSymbol), EMPTY_STRING)
        .replace(decimalSymbol, DOT)

    const fastNumber = _.toNumber(unmaskedValue)
    if (blur && !allowEmpty && !fastNumber) {
        unmaskedValue = ZERO
    } else if (blur && fastNumber !== 0 && !fastNumber) {
        unmaskedValue = EMPTY_STRING
    } else if (blur && _.last(unmaskedValue) === DOT) {
        unmaskedValue = _.replace(unmaskedValue, DOT, '')
    }

    return unmaskedValue
}


export const prepareToMaskNumberValue = (value, { allowDecimal = false, decimalSymbol }) => {
    if (allowDecimal) {
        return _.toString(value).replace(DOT, decimalSymbol)
    }

    return _.first(_.toString(value).split(DOT))
}

const clearTraps = (arrayMask) => _.reject(arrayMask, (item) => item === CARET_TRAP)

const getConformedValue = (value, arrayMask) => _.get(conformToMask(value, arrayMask), 'conformedValue', EMPTY_STRING)

export const maskNumberValue = (value, {
    allowDecimal,
    decimalSymbol,
    mask,
    prefix = EMPTY_STRING,
    suffix = EMPTY_STRING
}) => {
    const preparedValue = prepareToMaskNumberValue(value, { allowDecimal, decimalSymbol })
    const dirtyMask = mask(preparedValue)
    const clearMask = clearTraps(dirtyMask)
    const conformedValue = getConformedValue(value, clearMask)
    return conformedValue
        .replace(`${prefix}${UNDERSCORE}${suffix}`, EMPTY_STRING)
        .replace(UNDERSCORE, EMPTY_STRING)
}

export const formatNumberValue = (value, {
    allowDecimal = true,
    decimalSymbol = ',',
    prefix = EMPTY_STRING,
    suffix = EMPTY_STRING,
    includeThousandsSeparator = true,
    thousandsSeparatorSymbol = ' ',
    decimalLimit = null,
    integerLimit = null,
    requireDecimal = false,
    allowNegative = true,
    allowLeadingZeroes = false
} = {}) => {
    const mask = createNumberMask({
        prefix,
        suffix,
        allowDecimal,
        decimalSymbol,
        includeThousandsSeparator,
        thousandsSeparatorSymbol,
        decimalLimit,
        integerLimit,
        requireDecimal,
        allowNegative,
        allowLeadingZeroes
    })

    return maskNumberValue(value, {
        allowDecimal,
        decimalSymbol,
        mask,
        prefix,
        suffix
    })
}

const ZERO_PX = '0px'
const NO_DIGITS = /^\D+$/
// eslint-disable no-param-reassign, comment: работа с размерами в realtime
const getExpectedDimensionFactory = (dimension) => {
    const capitalizeDimension = _.capitalize(dimension)
    const scroll = `scroll${capitalizeDimension}`
    const offset = `offset${capitalizeDimension}`
    const client = `client${capitalizeDimension}`
    const paddingStart = dimension === 'height' ? 'paddingTop' : 'paddingLeft'
    const paddingEnd = dimension === 'height' ? 'paddingBottom' : 'paddingRight'

    return (element, min, max = Infinity) => {
        if (element && min) {
            if (element[scroll] === 0) {
                return void 0
            }
            /**
             * IE-инпуты имеют неправильный scrollWidth
             * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11325194/
             * Для них необходимо проверять через div ширину контента и подставлять его значение
             */
            const responsiveElement = document.createElement('div')
            responsiveElement.innerHTML = element.value.replace(/\n/g, '<br />')
            responsiveElement.className = element.className
            const styles = getComputedStyle(element)
            _.forEach(styles, (value, key) => {
                // фикс для FF (он генерирует стили в разных форматах + массивом)
                if (NO_DIGITS.test(key)) {
                    responsiveElement.style[key] = value
                }
            })

            element.parentNode.appendChild(responsiveElement)
            if (element.tagName === 'INPUT') {
                responsiveElement.style.whiteSpace = 'nowrap'
            }

            const reservedPaddingStart = responsiveElement.style[paddingStart]
            const reservedPaddingEnd = responsiveElement.style[paddingEnd]
            responsiveElement.style[dimension] = ZERO_PX
            responsiveElement.style[paddingStart] = ZERO_PX
            responsiveElement.style[paddingEnd] = ZERO_PX

            const mainSize = responsiveElement[scroll] + responsiveElement[offset] - responsiveElement[client]

            responsiveElement.style[paddingStart] = reservedPaddingStart
            responsiveElement.style[paddingEnd] = reservedPaddingEnd

            const newValue = _.clamp(mainSize + parseFloat(styles[paddingStart]) + parseFloat(styles[paddingEnd]), min, max)

            responsiveElement.style[dimension] = `${newValue}px`

            const expectedDimension = responsiveElement.style[dimension]
            element.parentNode.removeChild(responsiveElement)

            return expectedDimension
        }

        return void 0
    }
}
// eslint-enable

const setDimensionFactory = (dimension) => {
    const capitalizeDimension = _.capitalize(dimension)
    const scroll = `scroll${capitalizeDimension}`
    const getExpectedDimension = getExpectedDimensionFactory(dimension)

    return (element, min, max = Infinity) => {
        if (element && min) {
            if (element[scroll] === 0) {
                return
            }

            const expectedDimension = getExpectedDimension(element, min, max)

            if (expectedDimension) {
                element.style[dimension] = expectedDimension // eslint-disable-line no-param-reassign, comment: работа с размерами в realtime
            }
        }
    }
}

export const getExpectedHeight = getExpectedDimensionFactory('height')
export const getExpectedWidth = getExpectedDimensionFactory('width')
export const setHeight = setDimensionFactory('height')
export const setWidth = setDimensionFactory('width')

/**
 * Функция определения изменений в поле ввода
 *
 * @param {String} nextValue - новое значение в поле ввода
 * @param {Number} prevSelectionStart - начало каретки до ввода
 * @param {Number} nextSelection - начало или конец каретки после ввода
 * @return {String} - произведенное изменение
 */
export const getInputDiff = (nextValue, prevSelectionStart, nextSelection) =>
    nextValue.substring(prevSelectionStart, nextSelection)
