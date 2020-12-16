import { analytics } from '@sbol/lib.analytics'

import { clickPageMetric } from '..'

describe('Протестировать clickPageMetric:', () => {
    beforeEach(() => {
        analytics.private = jest.fn()
    })

    it('clickPageMetric', () => {
        const count = 3
        const position = 2
        const id = 1
        const result = clickPageMetric(count, position, 'Имя', id)

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Выдача/Функции приложения_Клик',
            value: '3, 2, Имя, 1'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

    it('clickPageMetric 2', () => {
        const count = 3
        const position = 2
        const id = 1
        const result = clickPageMetric(count, position, '1234 Имя', id)

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Выдача/Функции приложения_Клик',
            value: '3, 2, 1234 Имя, 1'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

    it('clickPageMetric 3', () => {
        const count = 3
        const position = 2
        const id = 1
        const result = clickPageMetric(count, position, '1234 Имя 56', id)

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Выдача/Функции приложения_Клик',
            value: '3, 2, 1234 Имя **, 1'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })
})
