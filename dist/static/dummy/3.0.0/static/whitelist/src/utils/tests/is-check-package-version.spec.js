const isCheckPackageVersion = require('../is-check-package-version')

jest.mock('../get-package-dependencies') // eslint-disable-line no-undef, comment: jest is def

describe('isCheckPackageVersion', () => {
    it('includeSbol, deep', () => {
        const options = { includeSbol: true, root: false, pathToProject: '/' }
        expect(isCheckPackageVersion('foo@1.0.0', options)).toBe(true)
        expect(isCheckPackageVersion('bar@1.0.0', options)).toBe(true)
        expect(isCheckPackageVersion('@sbol/lib.app@1.0.0', options)).toBe(true)
        expect(isCheckPackageVersion('@sbol/lib.ui@1.0.0', options)).toBe(true)
    })

    it('excludeSbol, deep', () => {
        const options = { includeSbol: false, root: false, pathToProject: '/' }
        expect(isCheckPackageVersion('foo@1.0.0', options)).toBe(true)
        expect(isCheckPackageVersion('bar@1.0.0', options)).toBe(true)
        expect(isCheckPackageVersion('@sbol/lib.app@1.0.0', options)).toBe(false)
        expect(isCheckPackageVersion('@sbol/lib.ui@1.0.0', options)).toBe(false)
    })


    it('excludeSbol, root', () => {
        const options = { includeSbol: false, root: true, pathToProject: '/' }
        expect(isCheckPackageVersion('foo@1.0.0', options)).toBe(true)
        expect(isCheckPackageVersion('bar@1.0.0', options)).toBe(false)
        expect(isCheckPackageVersion('@sbol/lib.app@1.0.0', options)).toBe(false)
        expect(isCheckPackageVersion('@sbol/lib.ui@1.0.0', options)).toBe(false)
    })

    it('includeSbol, root', () => {
        const options = { includeSbol: true, root: true, pathToProject: '/' }
        expect(isCheckPackageVersion('foo@1.0.0', options)).toBe(true)
        expect(isCheckPackageVersion('bar@1.0.0', options)).toBe(false)
        expect(isCheckPackageVersion('@sbol/lib.app@1.0.0', options)).toBe(true)
        expect(isCheckPackageVersion('@sbol/lib.ui@1.0.0', options)).toBe(false)
    })
})
