import pagesReducer from '../pages'

describe('Тестирование reducer-а функций:', () => {
    const initialState = {
        isLoading: false,
        isLoaded: false,
        loadingFailed: false,
        pages: [],
        productsToShow: {},
        pagesUnAvailable: {},
        serverData: []
    }
    let state = { ...initialState }

    afterEach(() => {
        state = { ...initialState }
    })

    it('DEFAULT', () => {
        const result = pagesReducer(state, { type: 'UNKNOWN_ACTION_TYPE' })

        expect(result).toEqual(initialState)
    })

    it('PAGES_SEARCH_STARTED', () => {
        const result = pagesReducer(state, { type: 'PAGES_SEARCH_STARTED' })

        expect(result).toEqual({
            ...initialState,
            isLoading: true,
            isLoaded: false,
            loadingFailed: false
        })
    })

    it('PAGES_SEARCH_FAILED', () => {
        const result = pagesReducer(state, { type: 'PAGES_SEARCH_FAILED' })

        expect(result).toEqual({
            ...initialState,
            isLoading: false,
            isLoaded: false,
            loadingFailed: true
        })
    })

    it('PAGES_SEARCH_COMPLETE', () => {
        const result = pagesReducer(state, { type: 'PAGES_SEARCH_COMPLETE', pages: [{
            id: 20,
            type: 'Action',
            category: 'Переводы и платежи',
            action: 'Перевод между своими счетами и картами',
            keyWords: 'перевод между своими счетами и картами, переводы',
            link: '/PhizIC/private/payments/payment.do?form=InternalPayment',
            prodListType: null
        }],
        serverData: [{
            id: 20,
            type: 'Action',
            category: 'Переводы и платежи',
            action: 'Перевод между своими счетами и картами',
            keyWords: 'перевод между своими счетами и картами, переводы',
            keyWordsArray: ['перевод между своими счетами и картами', 'переводы'],
            link: '/PhizIC/private/payments/payment.do?form=InternalPayment',
            prodListType: null
        }] })

        expect(result).toEqual({
            ...initialState,
            isLoading: false,
            isLoaded: true,
            loadingFailed: false,
            pages: [{
                id: 20,
                type: 'Action',
                category: 'Переводы и платежи',
                action: 'Перевод между своими счетами и картами',
                keyWords: 'перевод между своими счетами и картами, переводы',
                link: '/PhizIC/private/payments/payment.do?form=InternalPayment',
                prodListType: null
            }],
            serverData: [{
                id: 20,
                type: 'Action',
                category: 'Переводы и платежи',
                action: 'Перевод между своими счетами и картами',
                keyWords: 'перевод между своими счетами и картами, переводы',
                keyWordsArray: ['перевод между своими счетами и картами', 'переводы'],
                link: '/PhizIC/private/payments/payment.do?form=InternalPayment',
                prodListType: null
            }]
        })
    })

    it('SET_PRODUCTS_TO_SHOW', () => {
        const result = pagesReducer(state, { type: 'SET_PRODUCTS_TO_SHOW', item: 1 })

        expect(result).toEqual({
            ...initialState,
            productsToShow: 1
        })
    })

    it('CLEAR_PRODUCTS_TO_SHOW', () => {
        const result = pagesReducer(state, { type: 'CLEAR_PRODUCTS_TO_SHOW', item: 1 })

        expect(result).toEqual({
            ...initialState,
            productsToShow: {}
        })
    })

    it('PAGES_AVAILABILITY', () => {
        const result = pagesReducer(state, {
            type: 'PAGES_AVAILABILITY',
            payload: {
                anyUid: true
            }
        })

        expect(result).toEqual({
            ...initialState,
            pagesUnAvailable: {
                anyUid: true
            }
        })
    })
})
