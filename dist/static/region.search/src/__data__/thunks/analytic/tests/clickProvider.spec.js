import { analytics } from '@sbol/lib.analytics'

import { clickProvider } from '../clickProvider'

describe('Тестирование clickProvider:', () => {
    const mockPrivate = jest.fn()
    const mockDispatch = jest.fn()

    analytics.private = mockPrivate

    beforeEach(() => {
        mockPrivate.mockClear()
        mockDispatch.mockClear()
    })

    it('clickProvider', () => {
        const item = {
            id: 1,
            name: 'name',
            position: 1
        }

        clickProvider(item)(mockDispatch, () => ({
            providers: {
                providers: [{
                    provider: {
                        id: 1,
                        name: 'name'
                    }
                }]
            }
        }))

        expect(mockPrivate).toHaveBeenCalledTimes(1)
        expect(mockDispatch).toHaveBeenCalledTimes(0)
    })
})
