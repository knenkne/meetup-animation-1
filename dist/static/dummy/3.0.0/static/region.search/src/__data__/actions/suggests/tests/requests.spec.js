import requests from '../requests'
import ddpClientApi from '../../../../header/search/__data__/axiosDDP'
// import { URL_SEARCH_EXAMPLES } from '../../../../header/search/constants'
import quickSuggestions from '../../../../header/assets/quickSuggests.json'

describe('Тестирование запросов:', () => { //TODO переделать тест, когда getFeatureValue('quickSuggestionsFromDDP', 'region.search') вернёт true
    const mockGet = jest.fn()
    const mockDispatch = jest.fn()
    const mockGetState = jest.fn()
    let tmp = null

    const firstCall = 1
    const secondCall = 2
    // const thirdCall = 3
    // const one = 1
    const two = 2
    // const three = 3

    beforeEach(() => {
        tmp = ddpClientApi.get
        ddpClientApi.get = mockGet
        mockDispatch.mockClear()
        mockGetState.mockReset()
    })

    afterEach(() => {
        ddpClientApi.get = tmp
        tmp = null
    })

    it('requestQuickSuggestions БЕЗ ЗАПРОСА, инициализация', async () => {
        mockGetState.mockReturnValue({
            suggests: {
                quick: {
                    data: []
                }
            }
        })

        const result = await requests.requestQuickSuggestions(mockDispatch, mockGetState)

        expect(mockGet).toHaveBeenCalledTimes(0)
        expect(mockGetState).toHaveBeenCalledTimes(1)
        // expect(mockGet).toHaveBeenCalledWith(URL_SEARCH_EXAMPLES)
        expect(mockDispatch).toHaveBeenCalledTimes(two)
        expect(mockDispatch).toHaveBeenNthCalledWith(firstCall, {
            type: 'IS_LOADING_QUICK_SUGGESTIONS'
        })
        expect(mockDispatch).toHaveBeenNthCalledWith(secondCall, {
            type: 'UPDATE_QUICK_SUGGESTIONS',
            payload: quickSuggestions.data
        })

        expect(result).toEqual(quickSuggestions.data)
    })

    it('requestQuickSuggestions БЕЗ ЗАПРОСА, данные уже есть', async () => {
        mockGetState.mockReturnValue({
            suggests: {
                quick: {
                    data: [{
                        text: '1',
                        type: '2'
                    }]
                }
            }
        })

        const result = await requests.requestQuickSuggestions(mockDispatch, mockGetState)

        expect(mockGet).toHaveBeenCalledTimes(0)
        expect(mockGetState).toHaveBeenCalledTimes(1)
        expect(mockDispatch).toHaveBeenCalledTimes(two)
        expect(mockDispatch).toHaveBeenNthCalledWith(firstCall, {
            type: 'IS_LOADING_QUICK_SUGGESTIONS'
        })
        expect(mockDispatch).toHaveBeenNthCalledWith(secondCall, {
            type: 'UPDATE_QUICK_SUGGESTIONS',
            payload: [{
                text: '1',
                type: '2'
            }]
        })

        expect(result).toEqual([{
            text: '1',
            type: '2'
        }])
    })

    // it('requestQuickSuggestions success нет значения', async () => {
    //     mockGet.mockReturnValue(Promise.resolve())
    //     await requests.requestQuickSuggestions(mockDispatch)
    //
    //     expect(mockGet).toHaveBeenCalledTimes(0)
    //     expect(mockGet).toHaveBeenCalledWith(URL_SEARCH_EXAMPLES)
    //     expect(mockDispatch).toHaveBeenCalledTimes(two)
    //     expect(mockDispatch).toHaveBeenNthCalledWith(firstCall, {
    //         type: 'IS_LOADING_QUICK_SUGGESTIONS'
    //     })
    //     expect(mockDispatch).toHaveBeenNthCalledWith(secondCall, {
    //         type: 'UPDATE_QUICK_SUGGESTIONS',
    //         payload: []
    //     })
    // })
    //
    // it('requestQuickSuggestions failure', async () => {
    //     mockGet.mockReturnValue(Promise.reject())
    //     await requests.requestQuickSuggestions(mockDispatch)
    //
    //     expect(mockGet).toHaveBeenCalledTimes(0)
    //     expect(mockGet).toHaveBeenCalledWith(URL_SEARCH_EXAMPLES)
    //     expect(mockDispatch).toHaveBeenCalledTimes(three)
    //     expect(mockDispatch).toHaveBeenNthCalledWith(firstCall, {
    //         type: 'IS_LOADING_QUICK_SUGGESTIONS'
    //     })
    //     expect(mockDispatch).toHaveBeenNthCalledWith(secondCall, {
    //         type: 'UPDATE_QUICK_SUGGESTIONS',
    //         payload: quickSuggestions.data
    //     })
    //     expect(mockDispatch).toHaveBeenNthCalledWith(thirdCall, {
    //         type: 'IS_LOADING_FAILED_QUICK_SUGGESTIONS'
    //     })
    // })
})
