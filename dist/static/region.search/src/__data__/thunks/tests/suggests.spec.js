import { getQuickSuggestions } from '../suggests'
import suggestsRequests from '../../actions/suggests/requests'

describe('Тесты для thunk suggestions:', () => {
    it('getQuickSuggestions', () => {
        const mockRequestQuickSuggestions = jest.fn()
        const action = {
            type: 'SOME_TYPE',
            payload: 'some payload'
        }

        mockRequestQuickSuggestions.mockReturnValue(action)
        const mockDispatch = jest.fn()
        const mockGetState = jest.fn()

        suggestsRequests.requestQuickSuggestions = mockRequestQuickSuggestions

        getQuickSuggestions()(mockDispatch, mockGetState)
        expect(mockRequestQuickSuggestions).toHaveBeenCalledTimes(1)
        expect(mockRequestQuickSuggestions).toHaveBeenCalledWith(mockDispatch, mockGetState)
    })
})
