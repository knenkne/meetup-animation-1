import { validateVatShort, ERROR_MSG } from '../vat-validator'

const EMPTY_STRING = ''

describe('vat.validateVatShort', () => {
    it('Export validateVatShort is correct', () => {
        expect(validateVatShort).toBeDefined()
    })

    it('Empty in value', () => {
        expect(validateVatShort('')).toBe(EMPTY_STRING)
    })

    it('Incorrect in value length', () => {
        expect(validateVatShort('98798')).toBe(ERROR_MSG.WRONG_SHORT_LENGTH)
    })

    it('Incorrect in value', () => {
        expect(validateVatShort('9879877984')).toBe(ERROR_MSG.WRONG_CHECKSUM)
    })

    it('Correct in value', () => {
        expect(validateVatShort('5406344202')).toBe(EMPTY_STRING)
    })
})
