import { updateScreenBlockOrder, updateScreenUrl } from '..'

describe('Тесты actions экрана', () => {
    it('SCREEN_UPDATE_URL', () => {
        expect(updateScreenUrl('someString')).toEqual({
            type: 'SCREEN_UPDATE_URL',
            payload: 'someString'
        })
    })

    it('SCREEN_UPDATE_BLOCK_ORDER', () => {
        expect(updateScreenBlockOrder('someString')).toEqual({
            type: 'SCREEN_UPDATE_BLOCK_ORDER',
            payload: 'someString'
        })
    })
})
