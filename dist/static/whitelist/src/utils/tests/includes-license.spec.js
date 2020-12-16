const includesLicense = require('../includes-license')

describe('includesLicense', () => {
    it('common', () => {
        expect(includesLicense(['MIT'], 'MIT')).toBe(true)
        expect(includesLicense(['MIT'], 'GPL')).toBe(false)
    })

    describe('or/and concat', () => {
        it('unstrict single', () => {
            expect(includesLicense(['MIT'], 'MIT OR GPL')).toBe(true)
            expect(includesLicense(['MIT'], '(MIT OR GPL)')).toBe(true)
            expect(includesLicense(['MIT'], '(MIT AND GPL)')).toBe(false)
        })
        it('unstrict all', () => {
            expect(includesLicense(['MIT', 'GPL'], '(MIT AND GPL)')).toBe(true)
            expect(includesLicense(['MIT', 'GPL', 'WTFPL'], 'MIT AND GPL AND WTFPL')).toBe(true)
            expect(includesLicense(['MIT', 'GPL'], 'MIT,GPL')).toBe(true)
            expect(includesLicense(['MIT', 'GPL'], 'MIT, GPL')).toBe(true)
        })
        it('strict', () => {
            expect(includesLicense(['MIT'], '(MIT OR GPL)', { strict: true })).toBe(false)
            expect(includesLicense(['MIT'], '(MIT AND GPL)', { strict: true })).toBe(false)
            expect(includesLicense(['MIT', 'GPL'], '(MIT OR GPL)', { strict: true })).toBe(true)
            expect(includesLicense(['MIT', 'GPL'], '(MIT AND GPL)', { strict: true })).toBe(true)
        })
    })
})
