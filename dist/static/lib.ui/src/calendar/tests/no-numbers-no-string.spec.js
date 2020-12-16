import { noNumbersNoString } from '../utils'

describe('noNumbersNoString', () => {
    it('valid date string', () => {
        const date = '2017-02-10T00:00:00.000+03:00'
        const expected = '10.02.2017'
        expect(noNumbersNoString(date)).toBe(expected)
    })
    it('invalid date string', () => {
        const date = 'fgfdksugks'
        const expected = ''
        expect(noNumbersNoString(date)).toBe(expected)
    })
})
