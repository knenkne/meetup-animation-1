import { analytics } from '@sbol/lib.analytics'

import { clickProviderMetric } from '..'

describe('Протестировать repeatOperation:', () => {
    beforeEach(() => {
        analytics.private = jest.fn()
    })

    it('repeatOperationMetric', () => {
        const count = 3
        const position = 2
        const id = 1
        const result = clickProviderMetric(count, position, 'Имя', id)

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Выдача/Организации_Клик',
            value: '3, 2, Имя, 1'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

    it('repeatOperationMetric 2', () => {
        const count = 3
        const position = 2
        const id = 1
        const result = clickProviderMetric(count, position, 'И1234мя', id)

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Выдача/Организации_Клик',
            value: '3, 2, И1234мя, 1'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

    it('repeatOperationMetric 3', () => {
        const count = 3
        const position = 2
        const id = 1
        const result = clickProviderMetric(count, position, 'И12345мя', id)

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Выдача/Организации_Клик',
            value: '3, 2, И1234*мя, 1'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })
})
