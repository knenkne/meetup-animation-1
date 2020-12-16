import { getStringFromDateStartEnd } from '../utils'

describe('Calendar #getStringFromDateStartEnd - получение строки диапазона дат', () => {

    it('На входе instanceOfDate', () => {
        const props = {
            start: new Date(2016, 1, 12),
            end: new Date(2017, 2, 13)
        }
        const expected = '12.02.2016 - 13.03.2017'
        expect(getStringFromDateStartEnd(props)).toBe(expected)
    })

    it('На входе ISO строки', () => {
        const props = {
            start: '2016-02-12T00:00:00.000+03:00',
            end: '2017-03-13T00:00:00.000+03:00'
        }
        const expected = '12.02.2016 - 13.03.2017'
        expect(getStringFromDateStartEnd(props)).toBe(expected)
    })

    it('На входе неверное начало диапазона - произвольная строка', () => {
        const props = {
            start: 'gfhdsjkay7768',
            end: '2017-03-13T00:00:00.000+03:00'
        }
        expect(getStringFromDateStartEnd(props)).toBe('gfhdsjkay7768 - 13.03.2017')
    })

    it('На входе неверный конец диапазона - произвольная строка', () => {
        const props = {
            start: new Date(2016, 1, 12),
            end: 'gfhdsjkay7768'
        }
        const expected = '12.02.2016 - gfhdsjkay7768'
        expect(getStringFromDateStartEnd(props)).toBe(expected)
    })

    it('На входе неверное начало диапазона - объект', () => {
        const props = {
            start: { someProp: 'gfhdsjkay7768' },
            end: '2017-03-13T00:00:00.000+03:00'
        }
        expect(getStringFromDateStartEnd(props)).toBe(' - 13.03.2017')
    })

    it('На входе неверный конец диапазона - объект', () => {
        const props = {
            start: new Date(2016, 1, 12),
            end: { someProp: 'gfhdsjkay7768' }
        }
        const expected = '12.02.2016'
        expect(getStringFromDateStartEnd(props)).toBe(expected)
    })

})
