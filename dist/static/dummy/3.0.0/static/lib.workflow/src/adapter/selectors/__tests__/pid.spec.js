import { getPid } from '../'

describe('Adapter :: selectors', () => {
    describe('getPid', () => {
        it('возвращает pid из стора', () => {
            const expected = '12345'

            const state = {
                workflow: {
                    process: {
                        pid: '12345'
                    }
                }
            }

            const actual = getPid(state)
            expect(actual).toBe(expected)
        })
    })
})
