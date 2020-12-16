import { hideNumbers } from '../utils'

describe('Утилиты метрик:', () => {
    it('hideNumbers query="какой-то текст 1234 3243 2443 3240  CVS 123"', () => {
        expect(hideNumbers('какой-то текст 1234 3243 2443 3240  CVS 123')).toBe('какой-то текст 1234 **** **** ****  CVS ***')
    })

    it('hideNumbers query="8 (495) 124-00-01"', () => {
        expect(hideNumbers('8 (495) 124-00-01')).toBe('8 (495) ***-**-**')
    })

    it('hideNumbers query="Перевести деньг 1234"', () => {
        expect(hideNumbers('Перевести деньг 1234')).toBe('Перевести деньг 1234')
    })

    it('hideNumbers query="Перевести деньг 12342"', () => {
        expect(hideNumbers('Перевести деньг 12342')).toBe('Перевести деньг 1234*')
    })

    it('hideNumbers query="Иванов Иван Иванович 1234 5678 9012 3456  CVV 567"', () => {
        expect(hideNumbers('Иванов Иван Иванович 1234 5678 9012 3456  CVV 567')).toBe('Иванов Иван Иванович 1234 **** **** ****  CVV ***')
    })

    it('hideNumbers query="Иванов Иван Иванович  CVV 567 1234 5678 9012 3456"', () => {
        expect(hideNumbers('Иванов Иван Иванович  CVV 567 1234 5678 9012 3456')).toBe('Иванов Иван Иванович  CVV 567 1*** **** **** ****')
    })

    it('hideNumbers query=""', () => {
        expect(hideNumbers('')).toBe('')
    })
})
