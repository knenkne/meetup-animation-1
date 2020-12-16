import { analytics } from '@sbol/lib.analytics'

import {
    showAllHistoryMetric,
    showAllProvidersMetric
} from '..'

describe('Протестировать showAll:', () => {
    beforeEach(() => {
        analytics.private = jest.fn()
    })

    it('showAllHistoryMetric', () => {
        const count = 3
        const result = showAllHistoryMetric(count)

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Выдача/История операций/Показать все_Клик',
            value: '3'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

    it('showAllProvidersMetric', () => {
        const count = 3
        const result = showAllProvidersMetric(count)

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Выдача/Организации/Показать все_Клик',
            value: '3'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })
})
