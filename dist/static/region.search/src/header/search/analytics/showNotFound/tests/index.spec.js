import { analytics } from '@sbol/lib.analytics'

import {
    showNotFoundMetric
} from '..'

describe('Протестировать showNotFound', () => {
    beforeEach(() => {
        analytics.private = jest.fn()
    })

    it('showNotFoundMetric', () => {
        const result = showNotFoundMetric('123')

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Выдача/Ничего не найдено_Отображение',
            value: '123'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

    it('showNotFoundMetric 2', () => {
        const result = showNotFoundMetric('123')

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Выдача/Ничего не найдено_Отображение',
            value: '123'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

    it('showNotFoundMetric 3', () => {
        const result = showNotFoundMetric('12345')

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Выдача/Ничего не найдено_Отображение',
            value: '1234*'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

})
