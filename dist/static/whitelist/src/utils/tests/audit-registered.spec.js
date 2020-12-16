const auditRegistered = require('../audit-registered')

jest.mock('../get-node-modules-dependencies') // eslint-disable-line no-undef, comment: jest is def

describe('auditRegistered', () => {
    it('all is ok', () => {
        const fullWhitelist = [
            { path: ['bar@1.0.0', 'foo@*'], id: 1 }
        ]

        const result = auditRegistered('foo@1.0.0', fullWhitelist, { pathToProject: '/one', blacklist: false, id: 1 })

        expect(result).toBe(true)
    })
    it('no semver', () => {
        const fullWhitelist = [
            { path: ['bar@2.0.0', 'foo@*'], id: 1 }
        ]

        const result = auditRegistered('foo@1.0.0', fullWhitelist, { pathToProject: '/one', blacklist: false, id: 1 })

        expect(result).toBe(false)
    })
    it('no id', () => {
        const fullWhitelist = [
            { path: ['bar@1.0.0', 'foo@*'], id: 2 }
        ]

        const result = auditRegistered('foo@1.0.0', fullWhitelist, { pathToProject: '/one', blacklist: false, id: 1 })

        expect(result).toBe(false)
    })
    
    describe('whitelist', () => {
        it('one of many paths', () => {
            const shortWhitelist = [{ path: ['bar@*', 'foo@*'], id: 1 }]
            const result = auditRegistered('foo@1.0.0', shortWhitelist, { pathToProject: '/', blacklist: false, id: 1 })

            expect(result).toBe(false)
        })

        it('all paths', () => {
            const fullWhitelist = [
                { path: ['bar@*', 'foo@*'], id: 1 },
                { path: ['qux@*', 'quux@*', 'foo@*'], id: 1 }
            ]

            const result = auditRegistered('foo@1.0.0', fullWhitelist, { pathToProject: '/', blacklist: false, id: 1 })

            expect(result).toBe(true)
        })
    })

    describe('blacklist', () => {
        it('one of many paths', () => {
            const fullWhitelist = [
                { path: ['bar@*', 'foo@*'], id: 1 }
            ]

            const result = auditRegistered('foo@1.0.0', fullWhitelist, { pathToProject: '/', blacklist: true, id: 1 })

            expect(result).toBe(true)
        })

        it('all paths', () => {
            const fullWhitelist = [
                { path: ['bar@*', 'foo@*'], id: 1 },
                { path: ['qux@*', 'quux@*', 'foo@*'], id: 1 }
            ]

            const result = auditRegistered('foo@1.0.0', fullWhitelist, { pathToProject: '/', blacklist: true, id: 1 })

            expect(result).toBe(true)
        })
    })
})
