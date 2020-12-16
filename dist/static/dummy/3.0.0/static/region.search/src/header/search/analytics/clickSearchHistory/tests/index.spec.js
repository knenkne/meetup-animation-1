import { analytics } from '@sbol/lib.analytics'

import { clickSearchHistoryMetric } from '..'

describe('Протестировать clickSearchHistoryMetric:', () => {
    beforeEach(() => {
        analytics.private = jest.fn()
    })

    it('clickSearchHistoryMetric', () => {
        const result = clickSearchHistoryMetric('Имя')

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Выдача/Элемент в истории поиска_Клик',
            value: 'Имя'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

    it('clickSearchHistoryMetric 2', () => {
        const result = clickSearchHistoryMetric('21Имя')

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Выдача/Элемент в истории поиска_Клик',
            value: '21Имя'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

    it('clickSearchHistoryMetric 3', () => {
        const result = clickSearchHistoryMetric('21Имя212')

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Выдача/Элемент в истории поиска_Клик',
            value: '21Имя21*'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })
})
