import { emailValidator } from '../email-validator'

const EMAIL_FORMAT_ERROR = 'lib.workflow:email.validation.message'
const EMPTY_STRING = ''

describe('emailValidator', () => {
    it('Export is correct', () => {
        expect(emailValidator).toBeDefined()
    })

    it('Valid value', () => {
        const value = 'mail@mail.com'
        expect(emailValidator(value)).toBe(EMPTY_STRING)
    })

    it('Invalid value', () => {
        const value = '123231'
        expect(emailValidator(value)).toBe(EMAIL_FORMAT_ERROR)
    })
})
