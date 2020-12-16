import operationReducer from '../operations'

describe('Тестирование reducer-а операций:', () => {
    const initialSate = {
        searched: {
            isLoading: false,
            loadingFailed: false,
            operations: [],
            requestCount: 0
        },
        preFetched: {
            isLoading: false,
            loadingFailed: false,
            operations: []
        },
        result: {
            lastQuery: '',
            operations: [],
            showAll: false,
            totalCount: 0
        }
    }
    let state = { ...initialSate }

    afterEach(() => {
        state = { ...initialSate }
    })

    it('DEFAULT', () => {
        const result = operationReducer(state, { type: 'UNKNOWN_ACTION_TYPE', operations: [1] })

        expect(result).toEqual(initialSate)
    })

    it('OPERATIONS_SEARCH_STARTED', () => {
        const result = operationReducer(state, { type: 'OPERATIONS_SEARCH_STARTED', operations: [1] })

        expect(result).toEqual({
            ...initialSate,
            searched: {
                operations: [...state.searched.operations],
                isLoading: true,
                loadingFailed: false,
                requestCount: state.searched.requestCount + 1
            }
        })
    })

    it('OPERATIONS_SEARCH_FAILED', () => {
        const result = operationReducer(state, { type: 'OPERATIONS_SEARCH_FAILED', operations: [1] })

        expect(result).toEqual({
            ...initialSate,
            searched: {
                operations: [...state.searched.operations],
                isLoading: false,
                loadingFailed: true,
                requestCount: state.searched.requestCount
            }
        })
    })

    it('OPERATIONS_SEARCH_COMPLETE', () => {
        const result = operationReducer(state, { type: 'OPERATIONS_SEARCH_COMPLETE', operations: [1] })

        expect(result).toEqual({
            ...initialSate,
            searched: {
                operations: [1],
                isLoading: false,
                loadingFailed: false,
                requestCount: state.searched.requestCount
            }
        })
    })

    it('OPERATIONS_RESULT', () => {
        const result = operationReducer(state, { type: 'OPERATIONS_RESULT', operations: [1], showAll: true, totalCount: 1, lastQuery: 'qwe' })

        expect(result).toEqual({
            ...initialSate,
            result: {
                lastQuery: 'qwe',
                operations: [1],
                showAll: true,
                totalCount: 1
            }
        })
    })

    it('OPERATIONS_SEARCH_RESET', () => {
        const result = operationReducer(state, { type: 'OPERATIONS_SEARCH_RESET', operations: [1] })

        expect(result).toEqual({
            ...initialSate,
            searched: {
                operations: [...state.searched.operations],
                isLoading: false,
                loadingFailed: false,
                requestCount: 0
            }
        })
    })

    it('OPERATIONS_PREFETCH_STARTED', () => {
        const result = operationReducer(state, { type: 'OPERATIONS_PREFETCH_STARTED', operations: [1] })

        expect(result).toEqual({
            ...initialSate,
            preFetched: {
                operations: [...state.preFetched.operations],
                isLoading: true,
                loadingFailed: false
            }
        })
    })

    it('OPERATIONS_PREFETCH_FAILED', () => {
        const result = operationReducer(state, { type: 'OPERATIONS_PREFETCH_FAILED', operations: [1] })

        expect(result).toEqual({
            ...initialSate,
            preFetched: {
                operations: [...state.preFetched.operations],
                isLoading: false,
                loadingFailed: true
            }
        })
    })

    it('OPERATIONS_PREFETCH_COMPLETE', () => {
        const result = operationReducer(state, { type: 'OPERATIONS_PREFETCH_COMPLETE', operations: [1] })

        expect(result).toEqual({
            ...initialSate,
            preFetched: {
                operations: [1],
                isLoading: false,
                loadingFailed: false
            }
        })
    })
})
