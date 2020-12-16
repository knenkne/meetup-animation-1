import { analytics } from '@sbol/lib.analytics'

import { clickPage } from '../clickPage'

describe('Тестирование clickPage:', () => {
    const mockPrivate = jest.fn()
    const mockDispatch = jest.fn()

    analytics.private = mockPrivate

    beforeEach(() => {
        mockPrivate.mockClear()
        mockDispatch.mockClear()
    })

    it('clickPage', () => {
        const item = {
            id: 1,
            action: 'description',
            position: 1
        }
        clickPage(item)(mockDispatch, () => ({
            pages: {
                pages: [{
                    id: 1,
                    action: 'description'
                }]
            }
        }))

        expect(mockPrivate).toHaveBeenCalledTimes(1)
        expect(mockDispatch).toHaveBeenCalledTimes(0)
    })
})
