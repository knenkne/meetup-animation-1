import { getAutocomplete, getSuggests, getHistory } from '../suggests'
import {
    HASH_PHONE_NUMBER,
    EXAMPLE_KEY,
    HISTORY_KEY,
    SEARCH_HISTORY_SUGGESTS_COUNT
} from '../../../header/search/constants'

describe('Тестирование getSuggests, getHistory, getAutocomplete', () => {

    it('getSuggests - нет suggest-ов', () => {
        const result = getSuggests([])

        expect(result.length).toBe(0)
    })

    it('getSuggests - один suggest', () => {
        const result = getSuggests([{ text: '1' }])

        expect(result).toEqual([{ typeOfSuggest: EXAMPLE_KEY, value: '1' }])
    })

    it('getSuggests - 2 suggest-а', () => {
        const result = getSuggests([{ text: '1' }, { text: '2' }])

        expect(result.length).toBe(2)
    })

    it('getSuggests - HASH_PHONE_NUMBER в примерах поиска ', () => {
        const result = getSuggests([{ type: HASH_PHONE_NUMBER, text: '1' }, { text: '2' }])
        expect(result).toEqual([{ typeOfSuggest: EXAMPLE_KEY, value: '2' }])
    })

    it('getSuggests - 8 suggest-ов', () => {
        const result = getSuggests([{ text: '1' }, { text: '2' }, { text: '3' }, { text: 4 }, { text: 5 }, { text: 6 }, { text: 7 }, { text: 8 }])
        expect(result.length).toBe(7)
    })

    it('getSuggests - нет поля text в примере поиска', () => {
        const result = getSuggests([{ type: 1 }])
        expect(result.length).toBe(0)
    })

    it('getHistory - пустой список', () => {
        const result = getHistory([])
        expect(result.length).toBe(0)
    })

    it('getHistory - менее SEARCH_HISTORY_SUGGESTS_COUNT елементов', () => {
        const store = [
            { suggest: '1', date: '1' },
            { suggest: '2', date: '2' },
            { suggest: '3', date: '3' }
        ]
        const result = getHistory(store)
        expect(result).toEqual([{
            value: '1', typeOfSuggest: HISTORY_KEY, date: '1'
        }, {
            value: '2', typeOfSuggest: HISTORY_KEY, date: '2'
        }, {
            value: '3', typeOfSuggest: HISTORY_KEY, date: '3'
        }])
    })

    it('getHistory - SEARCH_HISTORY_SUGGESTS_COUNT елементов', () => {
        const store = [
            { suggest: '1', date: '1' },
            { suggest: '2', date: '2' },
            { suggest: '3', date: '3' },
            { suggest: '4', date: '4' },
            { suggest: '5', date: '5' },
            { suggest: '6', date: '6' },
            { suggest: '7', date: '7' }
        ]
        const result = getHistory(store)

        expect(result).toEqual([{
            value: '1', typeOfSuggest: HISTORY_KEY, date: '1'
        }, {
            value: '2', typeOfSuggest: HISTORY_KEY, date: '2'
        }, {
            value: '3', typeOfSuggest: HISTORY_KEY, date: '3'
        }, {
            value: '4', typeOfSuggest: HISTORY_KEY, date: '4'
        }, {
            value: '5', typeOfSuggest: HISTORY_KEY, date: '5'
        }, {
            value: '6', typeOfSuggest: HISTORY_KEY, date: '6'
        }, {
            value: '7', typeOfSuggest: HISTORY_KEY, date: '7'
        }])
    })

    it('getHistory - более SEARCH_HISTORY_SUGGESTS_COUNT елементов', () => {
        const store = [
            { suggest: '1', date: '1' },
            { suggest: '2', date: '2' },
            { suggest: '3', date: '3' },
            { suggest: '4', date: '4' },
            { suggest: '5', date: '5' },
            { suggest: '6', date: '6' },
            { suggest: '7', date: '7' },
            { suggest: '8', date: '8' }
        ]
        const result = getHistory(store)
        expect(result.length).toBe(SEARCH_HISTORY_SUGGESTS_COUNT)
    })

    it('getHistory - Убрать повторяющиеся suggest-ы', () => {
        const store = [
            { suggest: '1', date: '1' },
            { suggest: '2', date: '2' },
            { suggest: '1', date: '3' },
            { suggest: '3', date: '4' },
            { suggest: '3', date: '5' }
        ]
        const result = getHistory(store)
        expect(result).toEqual([
            { value: '1', date: '1', typeOfSuggest: 'HISTORY_KEY' },
            { value: '2', date: '2', typeOfSuggest: 'HISTORY_KEY' },
            { value: '3', date: '4', typeOfSuggest: 'HISTORY_KEY' }
        ])
    })

    it('getAutocomplete - query = ""', () => {
        const result = getAutocomplete('', [], {})

        expect(result).toBe('')
    })

    it('getAutocomplete - query = "люб", searchedValues, suggestions', () => {
        const searchedValues = [{ suggest: 'слово', date: '1' }, { suggest: 'любое', date: '2' }]
        const result = getAutocomplete('люб', searchedValues, {})

        expect(result).toBe('любое')
    })

    it('getAutocomplete - query = "м", searchedValues, suggestions', () => {
        const key = 'м'
        const searchedValues = [{ suggest: 'слово', date: '1' }, { suggest: 'любое', date: '2' }]
        const result = getAutocomplete('м', searchedValues, { [key]: { suggestions: [{ e: { suggest: 'мтс' } }] } })

        expect(result).toBe('мтс')
    })

    it('getAutocomplete - query = "люб", searchedValues, suggestions', () => {
        const result = getAutocomplete('люб', [], {})

        // eslint-disable-next-line no-undefined
        expect(result).toBe(undefined)
    })

    it('getAutocomplete - query = "м", searchedValues, suggestions - неверный формат истории поиска:', () => {
        const key = 'м'
        const searchedValues = ['слово', 'любое']
        const result = getAutocomplete('м', searchedValues, { [key]: { suggestions: [{ e: { suggest: 'мтс' } }] } })

        expect(result).toBe('мтс')
    })

    it('getAutocomplete - query = "м", searchedValues, suggestions - проверять, что элемент истории поиска является строкой:', () => {
        const key = 'м'
        const searchedValues = [{ suggest: 1, date: '1' }, { suggest: 'любое', date: '2' }, 'слово', 1]
        const result = getAutocomplete('м', searchedValues, { [key]: { suggestions: [{ e: { suggest: 'мтс' } }] } })

        expect(result).toBe('мтс')
    })
})
