import { analytics } from '@sbol/lib.analytics'

import { clickProduct } from '../clickProduct'

describe('Тестирование clickProduct:', () => {
    const mockPrivate = jest.fn()
    const mockDispatch = jest.fn()

    analytics.private = mockPrivate

    beforeEach(() => {
        mockPrivate.mockClear()
        mockDispatch.mockClear()
    })

    it('clickProduct', () => {
        const item = {
            id: 1,
            title: 'name',
            position: 1
        }
        clickProduct(item)(mockDispatch, () => ({
            search: {
                query: 'name'
            },
            products: {
                accounts: [
                    {
                        id: 1,
                        name: 'name'
                    }
                ],
                loans: [],
                cards: [],
                depoaccounts: [],
                imaccounts: [],
                targets: []

            }
        }))

        expect(mockPrivate).toHaveBeenCalledTimes(1)
        expect(mockDispatch).toHaveBeenCalledTimes(0)
    })
})
