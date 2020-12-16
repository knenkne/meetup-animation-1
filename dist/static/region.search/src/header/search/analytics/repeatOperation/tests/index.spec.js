import { analytics } from '@sbol/lib.analytics'

import { repeatOperationMetric } from '..'

describe('Протестировать repeatOperation:', () => {
    beforeEach(() => {
        analytics.private = jest.fn()
    })

    it('repeatOperationMetric', () => {
        const count = 3
        const position = 2
        const id = 1
        const result = repeatOperationMetric(count, position, 'Имя', id)

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Выдача/История операций/Повтор операции_Клик',
            value: '3, 2, Имя, 1'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

    it('repeatOperationMetric 2', () => {
        const count = 3
        const position = 2
        const id = 1
        const result = repeatOperationMetric(count, position, 'Имя1', id)

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Выдача/История операций/Повтор операции_Клик',
            value: '3, 2, Имя1, 1'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

    it('repeatOperationMetric 3', () => {
        const count = 3
        const position = 2
        const id = 1
        const result = repeatOperationMetric(count, position, 'Имя1234567', id)

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Выдача/История операций/Повтор операции_Клик',
            value: '3, 2, Имя1234***, 1'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })
})
