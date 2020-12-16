const getRequiredByPath = require('../get-required-by-path')

jest.mock('../get-node-modules-dependencies') // eslint-disable-line no-undef, comment: jest is def

describe('getRequiredByPath', () => {
    it('single path', () => {
        expect(getRequiredByPath('foo@1.0.0', '/one')).toBe(`
    Пути по дереву зависимостей:
    - bar@1.0.0 -> buz@1.0.0 -> foo@1.0.0`)
    })

    it('multiple path', () => {
        expect(getRequiredByPath('foo@1.0.0', '/')).toBe(`
    Пути по дереву зависимостей:
    - bar@1.0.0 -> buz@1.0.0 -> foo@1.0.0
    - qux@1.0.0 -> quux@1.0.0 -> foo@1.0.0`)
    })
})
