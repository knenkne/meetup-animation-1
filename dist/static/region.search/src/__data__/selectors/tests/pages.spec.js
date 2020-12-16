import { log } from '@sbol/lib.app'

import {
    filterByCategory,
    filterByAvailability,
    sortPages,
    filterByEmptyLink,
    filterEmptyPages
} from '../pages'
import { PAGES_CHAT_UID } from '../../../header/search/constants'

describe('Тестирование селекторов функций:', () => {
    it('filterByAvailability: isChat, skip', () => {
        const result = filterByAvailability({ id: PAGES_CHAT_UID }, { [PAGES_CHAT_UID]: true })

        expect(result).toBe(false)
    })

    it('filterByAvailability: isChat, not skip', () => {
        const result = filterByAvailability({ id: PAGES_CHAT_UID }, {})

        expect(result).toBe(true)
    })

    it('filterByCategory: нет свойства category в page', () => {
        const page = {}
        const result = filterByCategory(page, {})

        expect(result).toBe(true)
    })

    it('filterByCategory: не найдена category', () => {
        const page = { prodListType: 'tEsT' }
        const result = filterByCategory(page, {})

        expect(result).toBe(false)
    })

    it('filterByCategory: не найдена category', () => {
        const page = { prodListType: 'tEsT' }
        const products = { tEsT: [1] }
        const result = filterByCategory(page, products)

        expect(result).toBe(false)
    })

    it('filterByCategory: найдена пустая category', () => {
        const page = { prodListType: 'tEsT' }
        const products = { test: [] }
        const result = filterByCategory(page, products)

        expect(result).toBe(false)
    })

    it('filterByCategory: найдена не пустая category', () => {
        const page = { prodListType: 'tEsT' }
        const products = { test: [1] }
        const result = filterByCategory(page, products)

        expect(result).toBe(true)
    })

    it('sortPages: chat в конце', () => {
        const pages = [{ id: 1 }, { id: 2 }, { id: PAGES_CHAT_UID }]
        const result = sortPages(pages)

        expect(result).toEqual([{ id: 1 }, { id: 2 }, { id: PAGES_CHAT_UID }])
    })

    it('sortPages: chat не в конце', () => {
        const pages = [{ id: 1 }, { id: PAGES_CHAT_UID }, { id: 2 }]
        const result = sortPages(pages)

        expect(result).toEqual([{ id: 1 }, { id: 2 }, { id: PAGES_CHAT_UID }])
    })

    it('sortPages: chat нет в списке', () => {
        const pages = [{ id: 1 }, { id: 2 }]
        const result = sortPages(pages)

        expect(result).toEqual([{ id: 1 }, { id: 2 }])
    })

    it('filterByEmptyLink: link присутствует', () => {
        const result = filterByEmptyLink({
            id: 'someFakeId',
            link: '/url/to/somewhere'
        })

        expect(result).toEqual(true)
    })

    it('filterByEmptyLink: link присутствует, PAGES_CHAT_UID', () => {
        const result = filterByEmptyLink({
            id: PAGES_CHAT_UID,
            link: '/url/to/somewhere'
        })

        expect(result).toEqual(true)
    })

    it('filterByEmptyLink: link отсутствует, PAGES_CHAT_UID', () => {
        const result = filterByEmptyLink({
            id: PAGES_CHAT_UID,
            link: '/url/to/somewhere'
        })

        expect(result).toEqual(true)
    })

    it('filterByEmptyLink: link отсутствует, PAGES_CHAT_UID', () => {
        const result = filterByEmptyLink({
            id: PAGES_CHAT_UID,
            link: null
        })

        expect(result).toEqual(true)
    })

    it('filterByEmptyLink: link отсутствует', () => {
        jest.spyOn(log, 'error')

        const result = filterByEmptyLink({
            id: 'someFakeId',
            link: null
        })

        expect(result).toEqual(false)
        expect(log.error).toHaveBeenCalledTimes(1)
        expect(log.error).toHaveBeenCalledWith('App function, error in data structure: link does not exist.')
    })

    it('filterEmptyPages', () => {
        const results = filterEmptyPages([
            { id: PAGES_CHAT_UID },
            { id: 1, link: null },
            { id: 2, link: '/url/to/somewhere', prodListType: 'test1' },
            { id: 3, link: '/url/to/somewhere', prodListType: 'test2' }
        ], { test2: [1] }, { [PAGES_CHAT_UID]: true })

        expect(results).toEqual([{ id: 3, link: '/url/to/somewhere', prodListType: 'test2' }])
    })
})
