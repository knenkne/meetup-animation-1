import { formatPhoneNumber } from '../format-phone-number'

describe('phone-number', () => {
    it('correctly format formatPhoneNumber', () => {
        expect(formatPhoneNumber({ prefix: '7', code: '495', number: '1234567' })).toBe('+7 (495) 123-45-67')
        expect(formatPhoneNumber({ prefix: '7', code: '4951', number: '123456' })).toBe('+7 (4951) 12-34-56')
        expect(formatPhoneNumber({ prefix: '7', code: '49512', number: '12345' })).toBe('+7 (49512) 1-23-45')
        expect(formatPhoneNumber({ prefix: '7', code: '495123', number: '1234' })).toBe('+7 (495123) 12-34')
        expect(formatPhoneNumber({ prefix: '7', code: '495', number: '•••1234' })).toBe('+7 (495) ••• 12-34')
        expect(formatPhoneNumber({ prefix: '7', code: '4951', number: '•••456' })).toBe('+7 (4951) •• •4-56')
        expect(formatPhoneNumber({ prefix: '7', code: '49512', number: '•••45' })).toBe('+7 (49512) • •• 45')
        expect(formatPhoneNumber({ prefix: '7', code: '495123', number: '•••4' })).toBe('+7 (495123) •• •4')
        expect(formatPhoneNumber({ code: '495', number: '1234567' })).toBe('')
        expect(formatPhoneNumber({ prefix: '+7', number: '1234567' })).toBe('')
        expect(formatPhoneNumber({ code: '495', prefix: '+7' })).toBe('')
        expect(formatPhoneNumber({})).toBe('')
        expect(formatPhoneNumber(null)).toBe('')
        expect(formatPhoneNumber({ prefix: '+7', code: '495', number: '1234567' })).toBe('+7 (495) 123-45-67')
    })
})
