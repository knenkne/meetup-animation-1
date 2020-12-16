import { analytics } from '@sbol/lib.analytics'

import {
    hideAdditionalProductsMetric
} from '..'

describe('Протестировать hideAdditionalProductsMetric', () => {
    beforeEach(() => {
        analytics.private = jest.fn()
    })

    it('hideAdditionalFunctionsMetric', () => {
        const result = hideAdditionalProductsMetric('а')

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Выдача/Продукты/Свернуть_Клик',
            value: 'а'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

    it('hideAdditionalFunctionsMetric 2', () => {
        const result = hideAdditionalProductsMetric('1а2')

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Выдача/Продукты/Свернуть_Клик',
            value: '1а2'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

    it('hideAdditionalFunctionsMetric 3', () => {
        const result = hideAdditionalProductsMetric('345 1а2')

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Выдача/Продукты/Свернуть_Клик',
            value: '345 1а*'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

})
