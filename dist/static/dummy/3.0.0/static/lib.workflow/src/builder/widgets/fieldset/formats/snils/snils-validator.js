import { unmaskedSnils } from './unmasked-snils'

const EMPTY_STRING = ''

export const ERROR_MSG = {
    ONLY_NUM: 'СНИЛС может состоять только из цифр',
    WRONG_CHECKSUM: 'Неправильное контрольное число',
    NO_CHECKSUM: 'Проверка контрольной суммы не производится',
    WRONG_LENGTH: 'СНИЛС может состоять только из 11 цифр'
}

const snilsMagicNumbers = {
    overallLength: 11,
    signLength: 9,
    controlSumDivider: 101,
    controlSumLength: 2,
    minVerified: '001001998'
}

export const snilsValidator = (snils) => {

    const answer = {
        snils,
        validate: false,
        error: {
            code: 0,
            message: ''
        }
    }

    if (/[^0-9]/.test(answer.snils)) {
        answer.error.code = 1
        answer.error.message = ERROR_MSG.ONLY_NUM
    } else if (answer.snils.length === snilsMagicNumbers.overallLength) {

        if (parseInt(answer.snils.slice(0, -snilsMagicNumbers.controlSumLength), 10) > parseInt(snilsMagicNumbers.minVerified, 10)) {
            let sum = 0
            let checkDigit = 0

            for (let i = 0; i < snilsMagicNumbers.signLength; i += 1) {
                sum += parseInt(answer.snils[i], 10) * (snilsMagicNumbers.signLength - i)
            }

            if (sum < 100) {
                checkDigit = sum
            } else if (sum > snilsMagicNumbers.controlSumDivider) {
                checkDigit = parseInt(sum % snilsMagicNumbers.controlSumDivider, 10)
                if (checkDigit === 100) {
                    checkDigit = 0
                }
            }
            if (checkDigit === parseInt(answer.snils.slice(-snilsMagicNumbers.controlSumLength), 10)) {
                answer.validate = true
            } else {
                answer.error.code = 3
                answer.error.message = ERROR_MSG.WRONG_CHECKSUM
            }
        } else {
            answer.error.code = -1
            answer.error.message = ERROR_MSG.NO_CHECKSUM
        }

    } else {
        answer.error.code = 2
        answer.error.message = ERROR_MSG.WRONG_LENGTH
    }
    return answer
}

export const validateSnils = (value) => {
    const answer = snilsValidator(unmaskedSnils(value))
    return answer.snils.length > 0 ? answer.error.message : EMPTY_STRING
}
