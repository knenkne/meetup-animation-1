import { analytics } from '@sbol/lib.analytics'

import {
    historyOperationsMetric,
    historyOperationsAutoMetric
} from '../historyOperations'

describe('Протестировать historyOperations:', () => {
    const ms = 300

    beforeEach(() => {
        analytics.private = jest.fn()
    })

    it('historyOperationsAutoMetric', () => {
        const result = historyOperationsAutoMetric('test query', ms, false)

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Поисковый запрос/ЕРИБ/История операций_Автоматически',
            value: 'test query, 300, false'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

    it('historyOperationsMetric', () => {
        const result = historyOperationsMetric('test query', ms, true)

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Поисковый запрос/ЕРИБ/История операций_Нажатие клавиши',
            value: 'test query, 300, true'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

    it('historyOperationsAutoMetric 2', () => {
        const result = historyOperationsAutoMetric('test query 1', ms, false)

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Поисковый запрос/ЕРИБ/История операций_Автоматически',
            value: 'test query 1, 300, false'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

    it('historyOperationsMetric 2', () => {
        const result = historyOperationsMetric('test 1 query', ms, true)

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Поисковый запрос/ЕРИБ/История операций_Нажатие клавиши',
            value: 'test 1 query, 300, true'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

    it('historyOperationsAutoMetric 3', () => {
        const result = historyOperationsAutoMetric('12345678910test query', ms, false)

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Поисковый запрос/ЕРИБ/История операций_Автоматически',
            value: '1234*******test query, 300, false'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

    it('historyOperationsMetric 3', () => {
        const result = historyOperationsMetric('test query12345678910', ms, true)

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Поисковый запрос/ЕРИБ/История операций_Нажатие клавиши',
            value: 'test query1234*******, 300, true'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })
})
