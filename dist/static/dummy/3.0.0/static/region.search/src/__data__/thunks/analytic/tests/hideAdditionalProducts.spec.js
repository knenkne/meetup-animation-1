import { analytics } from '@sbol/lib.analytics'

import { hideAdditionalProducts } from '../hideAdditionalProducts'

describe('Тестирование hideAdditionalProducts:', () => {
    const mockPrivate = jest.fn()
    const mockDispatch = jest.fn()

    beforeEach(() => {
        mockPrivate.mockClear()
        mockDispatch.mockClear()
        analytics.private = mockPrivate
    })

    it('hideAdditionalFunctions', () => {
        hideAdditionalProducts()(mockDispatch, () => ({
            search: {
                query: 'a',
            }
        }))

        expect(mockPrivate).toHaveBeenCalledTimes(1)
        expect(mockDispatch).toHaveBeenCalledTimes(0)
    })
})
