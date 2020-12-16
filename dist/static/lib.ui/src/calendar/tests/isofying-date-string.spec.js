import { fullISOFormat, isofyingDateString } from '../utils'
import { EMPTY_STRING, EMPTY_MODE } from '../constants'

describe('Calendar #isofyingDateString - получение ISO строки из строки даты', () => {

    it('Правильная строка с датой', () => {
        const date = isofyingDateString({ value: '12.10.2017' })
        const expected = fullISOFormat(new Date(2017, 9, 12, 11, 50))
        expect(date).toBe(expected)
    })

    it('Правильная длинна строки, но содержание так себе', () => {
        const date = { value: '12baab2017' }
        const date2 = { value: '12baab2017', mode: EMPTY_MODE }
        expect(isofyingDateString(date)).toBe(date.value)
        expect(isofyingDateString(date2)).toBe(EMPTY_STRING)
    })
})
