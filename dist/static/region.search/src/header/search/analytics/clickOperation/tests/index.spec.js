import { analytics } from '@sbol/lib.analytics'

import { clickOperationMetric } from '..'

describe('Протестировать clickOperationMetric:', () => {
    beforeEach(() => {
        analytics.private = jest.fn()
    })

    it('repeatOperationMetric', () => {
        const count = 3
        const position = 2
        const id = 1
        const result = clickOperationMetric(count, position, 'Имя', id)

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Выдача/История операций_Клик',
            value: '3, 2, Имя, 1'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

    it('repeatOperationMetric 2', () => {
        const count = 3
        const position = 2
        const id = 1
        const result = clickOperationMetric(count, position, 'Имя 1233', id)

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Выдача/История операций_Клик',
            value: '3, 2, Имя 1233, 1'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

    it('repeatOperationMetric 3', () => {
        const count = 3
        const position = 2
        const id = 1
        const result = clickOperationMetric(count, position, 'Имя 12334', id)

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Выдача/История операций_Клик',
            value: '3, 2, Имя 1233*, 1'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })
})
