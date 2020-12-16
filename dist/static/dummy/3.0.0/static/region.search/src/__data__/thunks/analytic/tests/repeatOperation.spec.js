import { analytics } from '@sbol/lib.analytics'

import { repeatOperation } from '../repeatOperation'

describe('Тестирование repeatOperation:', () => {
    const mockPrivate = jest.fn()
    const mockDispatch = jest.fn()

    beforeEach(() => {
        mockPrivate.mockClear()
        mockDispatch.mockClear()
        analytics.private = mockPrivate
    })

    it('repeatOperation', () => {
        const item = {
            id: 1,
            description: 'description',
            position: 1
        }

        repeatOperation(item)(mockDispatch, () => ({
            operations: {
                result: {
                    totalCount: 1,
                    operations: [{
                        id: 1,
                        description: 'description'
                    }]
                }
            }
        }))

        expect(mockPrivate).toHaveBeenCalledTimes(1)
        expect(mockDispatch).toHaveBeenCalledTimes(0)
    })
})
