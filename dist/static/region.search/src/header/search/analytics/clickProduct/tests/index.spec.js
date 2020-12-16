import { analytics } from '@sbol/lib.analytics'

import { clickProductMetric } from '..'

describe('Протестировать clickProductMetric:', () => {
    beforeEach(() => {
        analytics.private = jest.fn()
    })

    it('clickProductMetric', () => {
        const count = 3
        const position = 2
        const id = 1
        const result = clickProductMetric(count, position, 'Имя', id)

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Выдача/Продукты_Клик',
            value: '3, 2, Имя, 1'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

    it('clickProductMetric 2', () => {
        const count = 3
        const position = 2
        const id = 1
        const result = clickProductMetric(count, position, '1 И 2 м 3 я 4', id)

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Выдача/Продукты_Клик',
            value: '3, 2, 1 И 2 м 3 я 4, 1'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

    it('clickProductMetric 3', () => {
        const count = 3
        const position = 2
        const id = 1
        const result = clickProductMetric(count, position, '1 И 2 м 3 я 4 5', id)

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Выдача/Продукты_Клик',
            value: '3, 2, 1 И 2 м 3 я 4 *, 1'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })
})
