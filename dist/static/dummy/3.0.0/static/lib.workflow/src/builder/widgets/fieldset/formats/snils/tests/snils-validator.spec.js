import { snilsValidator } from '../snils-validator'

describe('snilsValidator', () => {

    it('Export snilsValidator is correct', () => {
        expect(snilsValidator).toBeDefined()
    })

    it('Valid Snils Number', () => {
        const validatorAnswer = snilsValidator('07652076979')
        expect(validatorAnswer.validate).toBeTruthy()
        expect(validatorAnswer.error.code).toBe(0)
        expect(validatorAnswer.error.message).toBe('')
    })

    it('Not A Number symbols', () => {
        const validatorAnswer = snilsValidator('67арбуз8327')
        expect(validatorAnswer.validate).toBeFalsy()
    })

    it('Wrong length', () => {
        const validatorAnswer = snilsValidator('876876')
        expect(validatorAnswer.validate).toBeFalsy()
    })

    it('Wrong Check Sum', () => {
        const validatorAnswer = snilsValidator('98798798477')
        expect(validatorAnswer.validate).toBeFalsy()
    })

    it('Too Old Snils Number', () => {
        const validatorAnswer = snilsValidator('00100198053')
        expect(validatorAnswer.validate).toBeFalsy()
        expect(validatorAnswer.error.code).toBe(-1)
    })
})
