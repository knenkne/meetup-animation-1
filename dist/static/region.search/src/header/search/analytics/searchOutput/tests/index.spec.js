import { analytics } from '@sbol/lib.analytics'

import {
    closeSearchMetric
} from '..'

describe('Протестировать очистку поискового зароса', () => {
    beforeEach(() => {
        analytics.private = jest.fn()
    })

    it('closeSearchMetric', () => {
        const result = closeSearchMetric()

        expect(result).toEqual({
            application: 'region.search',
            action: 'Поиск по интернет банку',
            label: 'Элемент очистки поля ввода поискового запроса_Клик'
        })
        expect(analytics.private).toHaveBeenCalledTimes(1)
    })

})

