import screenReducer from '../screen'

describe('Тестирование reducer-а экранов:', () => {
    const initialState = {
        url: false,
        blockOrder: ['Pages', 'OperationsHistory', 'Providers', 'Products']
    }
    let state = { ...initialState }

    afterEach(() => {
        state = { ...initialState }
    })

    it('DEFAULT', () => {
        const result = screenReducer(state, { type: 'UNKNOWN_ACTION_TYPE' })

        expect(result).toEqual(initialState)
    })

    it('SCREEN_UPDATE_URL', () => {
        const result = screenReducer(state, { type: 'SCREEN_UPDATE_URL', payload: 'http://some/url' })

        expect(result).toEqual({
            ...initialState,
            url: 'http://some/url'
        })
    })

    it('SCREEN_UPDATE_BLOCK_ORDER', () => {
        const result = screenReducer(state, { type: 'SCREEN_UPDATE_BLOCK_ORDER', payload: ['1', '2'] })

        expect(result).toEqual({
            ...initialState,
            blockOrder: ['1', '2']
        })
    })
})
