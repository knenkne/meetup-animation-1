import { vatValidator, checkDigitCalc, COEFFICIENTS } from '../vat-validator'

describe('vat.vatValidator', () => {

    it('Export checkDigitCalc is correct', () => {
        expect(checkDigitCalc).toBeDefined()
    })

    it('Valid VAT number with checkDigitCalc', () => {
        const VAT = '503405168522'
        expect(checkDigitCalc(VAT, COEFFICIENTS.FIRST)).toBe(2)
    })

    it('Export vatValidator is correct', () => {
        expect(vatValidator).toBeDefined()
    })

    it('Valid VAT Number', () => {
        const validatorAnswer = vatValidator('503405168522')
        expect(validatorAnswer.validate).toBeTruthy()
        expect(validatorAnswer.error.code).toBe(0)
        expect(validatorAnswer.error.message).toBe('')
    })

    it('Not A Number symbols', () => {
        const validatorAnswer = vatValidator('67арбуз83217')
        expect(validatorAnswer.validate).toBeFalsy()
    })

    it('Wrong length', () => {
        const validatorAnswer = vatValidator('876876')
        expect(validatorAnswer.validate).toBeFalsy()
    })

    it('Wrong Check Sum', () => {
        const validatorAnswer = vatValidator('9879877968477')
        expect(validatorAnswer.validate).toBeFalsy()
    })

})
