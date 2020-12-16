import { analytics } from '@sbol/lib.analytics'

import { showAdditionalProducts } from '../showAdditionalProducts'

describe('Тестирование showAdditionalProducts:', () => {
    const mockPrivate = jest.fn()
    const mockDispatch = jest.fn()

    beforeEach(() => {
        mockPrivate.mockClear()
        mockDispatch.mockClear()
        analytics.private = mockPrivate
    })

    it('showAdditionalFunctions', () => {
        showAdditionalProducts(5)(mockDispatch, () => ({
            search: {
                query: 'a',
            }
        }))

        expect(mockPrivate).toHaveBeenCalledTimes(1)
        expect(mockDispatch).toHaveBeenCalledTimes(0)
    })
})
