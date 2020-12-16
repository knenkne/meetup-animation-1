import { analytics } from '@sbol/lib.analytics'

import { clickProductFromPageMetric } from '..'

describe('Протестировать clickProductFromPageMetric:', () => {
    beforeEach(() => {
        analytics.private = jest.fn()
    })

    it('clickPageMetric', () => {
        const count = 3
        const position = 2
        const id = 1
        const result = clickProductFromPageMetric(count, position, 'Имя', id)

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Выдача/Функции приложения/Функция содержит внутренние функции_Клик',
            value: '3, 2, Имя, 1'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

    it('clickPageMetric 2', () => {
        const count = 3
        const position = 2
        const id = 1
        const result = clickProductFromPageMetric(count, position, '123Имя 1', id)

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Выдача/Функции приложения/Функция содержит внутренние функции_Клик',
            value: '3, 2, 123Имя 1, 1'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

    it('clickPageMetric 3', () => {
        const count = 3
        const position = 2
        const id = 1
        const result = clickProductFromPageMetric(count, position, '123Имя 13', id)

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Выдача/Функции приложения/Функция содержит внутренние функции_Клик',
            value: '3, 2, 123Имя 1*, 1'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })
})
