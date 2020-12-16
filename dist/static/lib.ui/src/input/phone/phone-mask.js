import _ from 'lodash'

const EMPTY_STRING = ''
const defaultCodeLength = 3
const oneDigit = /\d/
const maskDelimiter = '-'
const maskSpace = ' '
const maskStart = ['+', '7', maskSpace, '(', oneDigit]
const maskEnd = [
    oneDigit, oneDigit, ')', maskSpace,
    oneDigit, oneDigit, oneDigit, maskDelimiter,
    oneDigit, oneDigit, maskDelimiter,
    oneDigit, oneDigit
]
const safeCodeLength = 5

export const calculateMask = (codeLength) => _.concat(
    maskStart,
    _.fill(new Array(codeLength - 1), oneDigit),
    ')',
    maskSpace,
    _.drop(maskEnd, codeLength + (codeLength > safeCodeLength ? 2 : 1))
)

export const recursiveCodeLength = (rawValue, suggest, codeLength, count = 0) => {
    if (rawValue.length <= codeLength + count) {
        return codeLength
    }
    if (_.indexOf(suggest, rawValue.slice(0, codeLength + count + 1)) !== -1) {
        return codeLength + count + 1
    }
    return recursiveCodeLength(rawValue, suggest, codeLength, count + 1)
}

export const unmaskedPhone = (value) => value.replace(/(^\+7\s|[\s()+_-]*)/g, EMPTY_STRING)

export const trimPhoneRight = (value) => value.replace(/[\s()_-]*$/, EMPTY_STRING)

export const phoneMask = (value, suggest) => calculateMask(recursiveCodeLength(unmaskedPhone(value), suggest, defaultCodeLength))
