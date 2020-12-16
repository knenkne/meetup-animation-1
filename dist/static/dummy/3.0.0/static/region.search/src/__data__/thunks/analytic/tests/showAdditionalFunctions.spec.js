import { analytics } from '@sbol/lib.analytics'

import { showAdditionalFunctions } from '../showAdditionalFunctions'

describe('Тестирование showAdditionalFunctions:', () => {
    const mockPrivate = jest.fn()
    const mockDispatch = jest.fn()

    beforeEach(() => {
        mockPrivate.mockClear()
        mockDispatch.mockClear()
        analytics.private = mockPrivate
    })

    it('showAdditionalFunctions', () => {
        showAdditionalFunctions(5)(mockDispatch, () => ({
            search: {
                query: 'a',
            }
        }))

        expect(mockPrivate).toHaveBeenCalledTimes(1)
        expect(mockDispatch).toHaveBeenCalledTimes(0)
    })
})
