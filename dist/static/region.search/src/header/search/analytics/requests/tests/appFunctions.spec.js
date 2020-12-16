import { analytics } from '@sbol/lib.analytics'

import { appFunctionsMetric } from '../appFunctions'

describe('Протестировать appFunctions:', () => {
    const ms = 300

    beforeEach(() => {
        analytics.private = jest.fn()
    })

    it('appFunctionsMetric', () => {
        const result = appFunctionsMetric('test query', ms, false)

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Поисковый запрос/PL Middle/Функции_Нажатие клавиши',
            value: 'test query, 300, false'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

    it('appFunctionsMetric 2', () => {
        const result = appFunctionsMetric('test 123 query', ms, false)

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Поисковый запрос/PL Middle/Функции_Нажатие клавиши',
            value: 'test 123 query, 300, false'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

    it('appFunctionsMetric 3', () => {
        const result = appFunctionsMetric(' 123 test 456 query 789', ms, false)

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Поисковый запрос/PL Middle/Функции_Нажатие клавиши',
            value: ' 123 test 4** query ***, 300, false'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })
})
