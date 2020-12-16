import { analytics } from '@sbol/lib.analytics'

import { hideAdditionalFunctions } from '../hideAdditionalFunctions'

describe('Тестирование hideAdditionalFunctions:', () => {
    const mockPrivate = jest.fn()
    const mockDispatch = jest.fn()

    beforeEach(() => {
        mockPrivate.mockClear()
        mockDispatch.mockClear()
        analytics.private = mockPrivate
    })

    it('hideAdditionalFunctions', () => {
        hideAdditionalFunctions()(mockDispatch, () => ({
            search: {
                query: 'a',
            }
        }))

        expect(mockPrivate).toHaveBeenCalledTimes(1)
        expect(mockDispatch).toHaveBeenCalledTimes(0)
    })
})
