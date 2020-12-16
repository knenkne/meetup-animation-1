import { dumbClickSuggest } from '../clickSuggest'
import {
    EXAMPLE_KEY,
    HISTORY_KEY
} from '../../../../header/search/constants'

describe('Тестирование dumbClickSuggest:', () => {

    const mockClickSearchExamples = jest.fn()
    const mockClickSearchHistory = jest.fn()

    beforeEach(() => {
        mockClickSearchExamples.mockClear()
        mockClickSearchHistory.mockClear()
    })

    it('dumbClickSuggest, примеры поиска', () => {
        const suggest = { value: 'avon', typeOfSuggest: EXAMPLE_KEY }

        dumbClickSuggest(suggest, mockClickSearchHistory, mockClickSearchExamples)

        expect(mockClickSearchHistory).toHaveBeenCalledTimes(0)
        expect(mockClickSearchExamples).toHaveBeenCalledTimes(1)
    })


    it('dumbClickSuggest, история поиска', () => {
        const suggest = { value: 'avon', typeOfSuggest: HISTORY_KEY }

        dumbClickSuggest(suggest, mockClickSearchHistory, mockClickSearchExamples)

        expect(mockClickSearchHistory).toHaveBeenCalledTimes(1)
        expect(mockClickSearchExamples).toHaveBeenCalledTimes(0)
    })

    it('dumbClickSuggest, нет типа', () => {
        const suggest = { value: 'avon' }

        dumbClickSuggest(suggest, mockClickSearchHistory, mockClickSearchExamples)

        expect(mockClickSearchExamples).toHaveBeenCalledTimes(0)
        expect(mockClickSearchHistory).toHaveBeenCalledTimes(0)
    })

})

//TODO: Переделать тесты с использованием jest.spyOn?
