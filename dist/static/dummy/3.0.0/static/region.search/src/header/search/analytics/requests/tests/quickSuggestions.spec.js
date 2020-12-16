import { analytics } from '@sbol/lib.analytics'

import { quickSuggestionsMetric } from '../quickSuggestions'

describe('Протестировать quickSuggestions:', () => {
    const ms = 300

    beforeEach(() => {
        analytics.private = jest.fn()
    })

    it('quickSuggestionsMetric', () => {
        const result = quickSuggestionsMetric('', ms, true)

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Поисковый запрос/DDP/Примеры поиска_Автоматически',
            value: '300, true'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })
})
