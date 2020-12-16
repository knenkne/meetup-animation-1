import { hasUFSError } from '../rs/platform-error-check'

describe('Adapter :: actions :: utils', () => {
    describe('hasSystemError возвращает', () => {
        it('ложь, если success: true', () => {
            const response = {
                success: true,
                body: {}
            }

            const expected = false
            const actual = hasUFSError(response)

            expect(actual).toEqual(expected)
        })
        it('ложь, если success: false', () => {
            const response = {
                success: false
            }

            const expected = false
            const actual = hasUFSError(response)

            expect(actual).toEqual(expected)
        })
        it('истину, если success: false и тело ответа содержит свойство error', () => {

            const response = {
                success: false,
                error: {}
            }

            const expected = true
            const actual = hasUFSError(response)

            expect(actual).toEqual(expected)
        })
    })
})
