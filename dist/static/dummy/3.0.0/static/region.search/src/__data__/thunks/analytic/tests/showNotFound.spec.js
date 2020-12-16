import { analytics } from '@sbol/lib.analytics'

import { showNotFound } from '../showNotFound'

describe('Тестирование showNotFound:', () => {
    const mockPrivate = jest.fn()
    const mockDispatch = jest.fn()

    analytics.private = mockPrivate

    beforeEach(() => {
        mockPrivate.mockClear()
        mockDispatch.mockClear()
    })

    it('showNotFound', () => {
        showNotFound()(mockDispatch, () => ({
            search: {
                query: 'a',
            }
        }))

        expect(mockPrivate).toHaveBeenCalledTimes(1)
        expect(mockDispatch).toHaveBeenCalledTimes(0)
    })

})
