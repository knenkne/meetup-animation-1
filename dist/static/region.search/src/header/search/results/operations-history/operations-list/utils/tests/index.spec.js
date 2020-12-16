import { joinUrl } from '..'

describe('Тестирование вспомогательных функций:', () => {
    describe('joinUrl:', () => {
        it('https://someUrl, part1', () => {
            const result = joinUrl('https://someUrl', 'part1')

            expect('https://someUrl/part1').toBe(result)
        })

        it('https://someUrl, /part1', () => {
            const result = joinUrl('https://someUrl', '/part1')

            expect('https://someUrl/part1').toBe(result)
        })

        it('https://someUrl, /, /part1, /', () => {
            const result = joinUrl('https://someUrl', '/', '/part1', '/')

            expect('https://someUrl/part1').toBe(result)
        })

        it('someUrl, /, /part1, /', () => {
            const result = joinUrl('someUrl', '/', '/part1', '/')

            expect('/someUrl/part1').toBe(result)
        })
    })
})
