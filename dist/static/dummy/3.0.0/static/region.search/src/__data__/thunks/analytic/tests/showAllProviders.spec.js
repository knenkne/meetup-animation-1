import { analytics } from '@sbol/lib.analytics'

import { showAllProviders } from '../showAllProviders'

describe('Тестирование showAllProviders:', () => {
    const mockPrivate = jest.fn()
    const mockDispatch = jest.fn()

    beforeEach(() => {
        mockPrivate.mockClear()
        mockDispatch.mockClear()
        analytics.private = mockPrivate
    })

    it('showAllProviders', () => {
        showAllProviders()(mockDispatch, () => ({
            providers: {
                providers: [{
                    id: 1
                }]
            }
        }))

        expect(mockPrivate).toHaveBeenCalledTimes(1)
        expect(mockDispatch).toHaveBeenCalledTimes(0)
    })
})
