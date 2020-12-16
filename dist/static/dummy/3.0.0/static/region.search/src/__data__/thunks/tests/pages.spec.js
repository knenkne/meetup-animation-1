import { openChat } from '../pages'

describe('Тестирование thunks pages:', () => {
    it('openChat с пустым поисковым запросом', () => {
        const tmp = { result: null }
        const dispatch = (action) => {
            tmp.result = action
        }
        const getState = () => ({ search: { query: '' } })

        openChat()(dispatch, getState)
        expect(tmp.result).toEqual({ type: 'PAGES_CHAT_OPEN', payload: '' })
    })

    it('openChat с не пустым поисковым запросом', () => {
        const tmp = { result: null }
        const dispatch = (action) => {
            tmp.result = action
        }
        const getState = () => ({ search: { query: 'test' } })

        openChat()(dispatch, getState)
        expect(tmp.result).toEqual({ type: 'PAGES_CHAT_OPEN', payload: 'test' })
    })
})
