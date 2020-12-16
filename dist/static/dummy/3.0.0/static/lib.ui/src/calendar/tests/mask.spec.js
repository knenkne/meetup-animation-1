import { mask } from '../utils'

describe('Calendar #mask - получение строки из объекта диапазона дат', () => {
    it('на входе правильный объект', () => {
        const value = {
            startDate: '2017-09-09T00:00:00.000+03:00',
            endDate: '2017-10-10T00:00:00.000+03:00'
        }
        const expected = '09.09.2017 - 10.10.2017'
        expect(mask(value)).toBe(expected)
    })
    it('на входе строка', () => {
        const value = '2017-09-09T00:00:00.000+03:00'
        expect(mask(value)).toBe(value)
    })
})
