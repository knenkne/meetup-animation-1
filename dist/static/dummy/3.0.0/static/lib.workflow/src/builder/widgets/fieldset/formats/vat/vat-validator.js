import _ from 'lodash'

import { unmaskedVat } from './unmsaked-vat'

const EMPTY_STRING = ''

export const LONG_VAT = 'person'
export const SHORT_VAT = 'organization'

export const ERROR_MSG = {
    ONLY_NUM: 'ИНН может состоять только из цифр',
    WRONG_CHECKSUM: 'Неправильное контрольное число',
    WRONG_LENGTH: 'ИНН физического лица может состоять только из 12 цифр',
    WRONG_SHORT_LENGTH: 'ИНН юридического лица может состоять только из 10 цифр'
}

export const OVERALL_LENGTH_SHORT = 10
export const OVERALL_LENGTH = 12
export const SIGN_LENGTH = 10
export const CONTROL_SUM_DIVIDER = 11
export const LAST_CONTROL_SUM_DIVIDER = 10
export const CONTROL_SUM_LENGTH = 2
export const COEFFICIENTS = {
    // (коэффициенты валидации)
    FIRST: [7, 2, 4, 10, 3, 5, 9, 4, 6, 8], // eslint-disable-line no-magic-numbers
    LAST: [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8], // eslint-disable-line no-magic-numbers
    SHORT: [2, 4, 10, 3, 5, 9, 4, 6, 8] // eslint-disable-line no-magic-numbers
}
export const checkDigitCalc = (invat, coefficients) =>
    _.parseInt(
        _.reduce(
            coefficients,
            (result, value, index) => (value * invat[index]) + _.parseInt(result, 0),
            0)
        % CONTROL_SUM_DIVIDER
        % LAST_CONTROL_SUM_DIVIDER,
        0)

export const vatValidator = (vat, vatLength = LONG_VAT) => {

    const answer = {
        vat,
        validate: false,
        error: {
            code: 0,
            message: EMPTY_STRING
        }
    }

    if (/\D/.test(answer.vat)) {
        answer.error.code = 1
        answer.error.message = ERROR_MSG.ONLY_NUM
    } else if (
        (vatLength === LONG_VAT && answer.vat.length === OVERALL_LENGTH)
        || (vatLength !== LONG_VAT && answer.vat.length === OVERALL_LENGTH_SHORT)) {

        if (vatLength === LONG_VAT) {
            const n11 = checkDigitCalc(vat, COEFFICIENTS.FIRST)
            const n12 = checkDigitCalc(vat, COEFFICIENTS.LAST)
            if (n11 === parseInt(vat[OVERALL_LENGTH - CONTROL_SUM_LENGTH], 10) && n12 === parseInt(vat[OVERALL_LENGTH - 1], 10)) {
                answer.validate = true
            }
        } else {
            const n10 = checkDigitCalc(vat, COEFFICIENTS.SHORT)
            if (n10 === parseInt(vat[OVERALL_LENGTH_SHORT - 1], 10)) {
                answer.validate = true
            }
        }

        if (!answer.validate) {
            answer.error.code = 3
            answer.error.message = ERROR_MSG.WRONG_CHECKSUM
        }


    } else {
        answer.error.code = 2
        answer.error.message = vatLength === LONG_VAT ? ERROR_MSG.WRONG_LENGTH : ERROR_MSG.WRONG_SHORT_LENGTH
    }
    return answer
}

export const validateVat = (value) => {
    const answer = vatValidator(unmaskedVat(value))
    return answer.vat.length > 0 ? answer.error.message : EMPTY_STRING
}

export const validateVatShort = (value) => {
    const answer = vatValidator(unmaskedVat(value), SHORT_VAT)
    return answer.vat.length > 0 ? answer.error.message : EMPTY_STRING
}
