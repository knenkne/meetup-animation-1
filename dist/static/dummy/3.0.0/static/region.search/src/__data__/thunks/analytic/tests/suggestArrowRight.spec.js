import { analytics } from '@sbol/lib.analytics'

import { suggestArrowRight } from '../suggestArrowRight'

describe('Тестирование suggestArrowRight:', () => {
    const mockPrivate = jest.fn()
    const mockDispatch = jest.fn()

    analytics.private = mockPrivate

    beforeEach(() => {
        mockPrivate.mockClear()
        mockDispatch.mockClear()
    })

    it('suggestArrowRight', () => {
        suggestArrowRight()(mockDispatch, () => ({
            search: {
                query: 'a',
            },
            suggests: {
                searchedValues: [{ suggest: 'Ростелеком', date: '1' }],
                searchQuerySuggestions: {
                    a: {
                        suggestions: [
                            {
                                e: {
                                    suggest: 'avon'
                                }
                            }
                        ]
                    }
                },
                quick: {
                    data: [{ type: 3, text: 'Автоплатеж' }]
                }
            }
        }))

        expect(mockPrivate).toHaveBeenCalledTimes(1)
        expect(mockDispatch).toHaveBeenCalledTimes(0)
    })

})

