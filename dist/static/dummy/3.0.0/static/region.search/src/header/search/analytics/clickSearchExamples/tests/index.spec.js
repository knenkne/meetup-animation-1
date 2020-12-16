import { analytics } from '@sbol/lib.analytics'

import { clickSearchExamplesMetric } from '..'

describe('Протестировать clickSearchExamplesMetric:', () => {
    beforeEach(() => {
        analytics.private = jest.fn()
    })

    it('clickSearchExamplesMetric', () => {
        const result = clickSearchExamplesMetric('Имя')

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Выдача/Элемент в примерах поиска_Клик',
            value: 'Имя'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

    it('clickSearchExamplesMetric 2', () => {
        const result = clickSearchExamplesMetric('Имя 333 3')

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Выдача/Элемент в примерах поиска_Клик',
            value: 'Имя 333 3'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

    it('clickSearchExamplesMetric 3', () => {
        const result = clickSearchExamplesMetric('Имя 333 3 3')

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Выдача/Элемент в примерах поиска_Клик',
            value: 'Имя 333 3 *'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })
})
