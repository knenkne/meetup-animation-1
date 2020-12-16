import { analytics } from '@sbol/lib.analytics'

import { showAllHistory } from '../showAllHistory'

describe('Тестирование showAllHistory:', () => {
    const mockPrivate = jest.fn()
    const mockDispatch = jest.fn()

    beforeEach(() => {
        mockPrivate.mockClear()
        mockDispatch.mockClear()
        analytics.private = mockPrivate
    })

    it('showAllHistory', () => {
        showAllHistory()(mockDispatch, () => ({
            operations: {
                result: {
                    totalCount: 1
                }
            }
        }))

        expect(mockPrivate).toHaveBeenCalledTimes(1)
        expect(mockDispatch).toHaveBeenCalledTimes(0)
    })
})
