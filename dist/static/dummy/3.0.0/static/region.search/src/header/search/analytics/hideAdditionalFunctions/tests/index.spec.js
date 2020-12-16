import { analytics } from '@sbol/lib.analytics'

import {
    hideAdditionalFunctionsMetric
} from '..'

describe('Протестировать hideAdditionalFunctionsMetric', () => {
    beforeEach(() => {
        analytics.private = jest.fn()
    })

    it('hideAdditionalFunctionsMetric', () => {
        const result = hideAdditionalFunctionsMetric('а')

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Выдача/Функции приложения/Свернуть_Клик',
            value: 'а'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

    it('hideAdditionalFunctionsMetric 2', () => {
        const result = hideAdditionalFunctionsMetric('а123')

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Выдача/Функции приложения/Свернуть_Клик',
            value: 'а123'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

    it('hideAdditionalFunctionsMetric 3', () => {
        const result = hideAdditionalFunctionsMetric('а123 45')

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Выдача/Функции приложения/Свернуть_Клик',
            value: 'а123 4*'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })
})
