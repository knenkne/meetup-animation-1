const pkg = require('../pkg')

describe('pkg.split', () => {
    it('split common package', () => {
        const { name, version } = pkg.split('foo@*')
        expect(name).toBe('foo')
        expect(version).toBe('*')
    })

    it('split scope package', () => {
        const { name, version } = pkg.split('@sbol/foo@0.0.0')
        expect(name).toBe('@sbol/foo')
        expect(version).toBe('0.0.0')
    })
})

describe('pkg.join', () => {
    it('join 2 args', () => {
        expect(pkg.join('foo', '0.0.0')).toBe('foo@0.0.0')
    })

    it('join object', () => {
        expect(pkg.join({ name: 'foo', version: '0.0.0' })).toBe('foo@0.0.0')
    })
})