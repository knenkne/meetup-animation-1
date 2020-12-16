import { analytics } from '@sbol/lib.analytics'

import {
    suggestArrowRightMetric
} from '..'

describe('Протестировать suggestArrowRight', () => {
    beforeEach(() => {
        analytics.private = jest.fn()
    })

    it('suggestMetric', () => {
        const result = suggestArrowRightMetric('а', 'акадо')

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Подсказка_Нажатие стрелки вправо',
            value: 'а, акадо'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

    it('suggestMetric 2', () => {
        const result = suggestArrowRightMetric('12 а 34', 'акадо 12345')

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Подсказка_Нажатие стрелки вправо',
            value: '12 а 34, акадо 1234*'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

    it('suggestMetric 3', () => {
        const result = suggestArrowRightMetric('12345а', '123акадо')

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Подсказка_Нажатие стрелки вправо',
            value: '1234*а, 123акадо'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

})
