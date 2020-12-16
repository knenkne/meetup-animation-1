import {
    parseDate,
    sortOperations
} from '../sort'

describe('Тестирование функций, отвечающих за сортировку операций пользователя по дате:', () => {
    it('parseDate', () => {
        const result = parseDate('25.12.2019T11:06:06')
        const seconds = 6
        const minutes = 6
        const hours = 11
        const day = 25
        // 12 - 1
        const month = 11
        const year = 2019

        expect(result.second()).toBe(seconds)
        expect(result.minutes()).toBe(minutes)
        expect(result.hours()).toBe(hours)
        expect(result.date()).toBe(day)
        expect(result.month()).toBe(month)
        expect(result.year()).toBe(year)
    })

    it('sortOperations', () => {
        const operations = [{
            date: '25.12.2019T11:06:06',
            id: 1
        }, {
            date: '25.12.2019T13:06:06',
            id: 2
        }, {
            date: '25.12.2019T12:06:06',
            ufsId: 3
        }]
        const first = 2
        const second = 3
        const third = 1
        const result = sortOperations(operations)
        const preparedResult = result.map((item) => item.id)

        expect(preparedResult).toEqual([first, second, third])
    })
})
