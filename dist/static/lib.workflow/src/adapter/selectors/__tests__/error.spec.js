import { getError } from '../'

describe('Adapter :: selectors', () => {
    describe('getError', () => {
        it('возвращает объект ошибки', () => {
            const state = {
                workflow: {
                    error: {
                        code: null,
                        title: 'title',
                        text: 'text'
                    }
                }
            }

            const expected = {
                code: null,
                title: 'title',
                text: 'text'
            }

            const actual = getError(state)

            expect(actual).toEqual(expected)
        })
    })
})
