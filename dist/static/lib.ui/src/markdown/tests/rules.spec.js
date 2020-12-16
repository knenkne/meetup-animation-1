import { numberFormatter, currencySymbol } from '../rules'
import { symbols } from '../../currency/locales'

describe('Кастомные теги для Markdown', () => {
    it('numberFormatter - формат чисел в ru-RU', () => {
        expect(numberFormatter(100000)).toBe('100 000,00')
        expect(numberFormatter('100000')).toBe('100 000,00')
        expect(numberFormatter('100000.05')).toBe('100 000,05')
        expect(numberFormatter(100000.05)).toBe('100 000,05')
        expect(numberFormatter('')).toBe('')
        expect(numberFormatter('сто тысяч')).toBe('')
        expect(numberFormatter(-Infinity)).toBe('')
        expect(numberFormatter(Infinity)).toBe('')
        expect(numberFormatter(null)).toBe('')
        expect(numberFormatter(void 0)).toBe('')
    })
    it('currencySymbol - знаки валют', () => {
        expect(currencySymbol('RUB')).toBe(`<span>${symbols.rub}</span>`)
        expect(currencySymbol('RuB')).toBe(`<span>${symbols.rub}</span>`)
        expect(currencySymbol('BAC$ы')).toBe('BAC$ы')
        expect(currencySymbol('')).toBe('')
        expect(currencySymbol(null)).toBe('')
        expect(currencySymbol(void 0)).toBe('')
    })
})
