import { analytics } from '@sbol/lib.analytics'

import {
    showAdditionalProductsMetric
} from '..'

describe('Протестировать showAdditionalProductsMetric', () => {
    beforeEach(() => {
        analytics.private = jest.fn()
    })

    it('showAdditionalProductsMetric', () => {
        const result = showAdditionalProductsMetric('а', 1)

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Выдача/Продукты/Показать ещё_Клик',
            value: 'а, 1'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

    it('showAdditionalProductsMetric 2', () => {
        const result = showAdditionalProductsMetric('12 а', 1)

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Выдача/Продукты/Показать ещё_Клик',
            value: '12 а, 1'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

    it('showAdditionalProductsMetric 3', () => {
        const result = showAdditionalProductsMetric('а 3434 12', 1)

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Выдача/Продукты/Показать ещё_Клик',
            value: 'а 3434 **, 1'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

})
