import { analytics } from '@sbol/lib.analytics'

import { providersMetric } from '../providers'

describe('Протестировать providers:', () => {
    const ms = 300

    beforeEach(() => {
        analytics.private = jest.fn()
    })

    it('providersMetric', () => {
        const result = providersMetric('test query', ms, true)

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Поисковый запрос/ЕРИБ/Поставщики услуг_Нажатие клавиши',
            value: 'test query, 300, true'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

    it('providersMetric 2', () => {
        const result = providersMetric('12 test 34 query', ms, true)

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Поисковый запрос/ЕРИБ/Поставщики услуг_Нажатие клавиши',
            value: '12 test 34 query, 300, true'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

    it('providersMetric 3', () => {
        const result = providersMetric('test query 98765', ms, true)

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Поисковый запрос/ЕРИБ/Поставщики услуг_Нажатие клавиши',
            value: 'test query 9876*, 300, true'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })
})
