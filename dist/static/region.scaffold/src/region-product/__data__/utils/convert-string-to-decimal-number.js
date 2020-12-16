import _ from 'lodash'

const FRACTION_DIGITS_DEFAULT = 2

export const convertStringToDecimalNumber = (value, fractionDigits = FRACTION_DIGITS_DEFAULT) =>
    Number(_.replace(value, ',', '.')).toFixed(fractionDigits)
