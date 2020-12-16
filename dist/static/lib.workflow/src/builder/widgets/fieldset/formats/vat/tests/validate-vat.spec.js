import { validateVat, ERROR_MSG } from '../vat-validator'

const EMPTY_STRING = ''

describe('vat.validateVat', () => {
    it('Export validateVat is correct', () => {
        expect(validateVat).toBeDefined()
    })

    it('Empty in value', () => {
        expect(validateVat('')).toBe(EMPTY_STRING)
    })

    it('Incorrect in value length', () => {
        expect(validateVat('9879877984')).toBe(ERROR_MSG.WRONG_LENGTH)
    })

    it('Incorrect in value', () => {
        expect(validateVat('987987798477')).toBe(ERROR_MSG.WRONG_CHECKSUM)
    })

    it('Correct in value', () => {
        expect(validateVat('503405168522')).toBe(EMPTY_STRING)
    })

})
