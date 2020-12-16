import { analytics } from '@sbol/lib.analytics'

import {
    showAdditionalFunctionsMetric
} from '..'

describe('Протестировать showAdditionalFunctionsMetric', () => {
    beforeEach(() => {
        analytics.private = jest.fn()
    })

    it('showAdditionalFunctionsMetric', () => {
        const result = showAdditionalFunctionsMetric('а', 1)

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Выдача/Функции приложения/Показать ещё_Клик',
            value: 'а, 1'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

    it('showAdditionalFunctionsMetric 2', () => {
        const result = showAdditionalFunctionsMetric('а 1234', 1)

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Выдача/Функции приложения/Показать ещё_Клик',
            value: 'а 1234, 1'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

    it('showAdditionalFunctionsMetric 3', () => {
        const result = showAdditionalFunctionsMetric('1234 а 5678', 1)

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Выдача/Функции приложения/Показать ещё_Клик',
            value: '1234 а ****, 1'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

})
