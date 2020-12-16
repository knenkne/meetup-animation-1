import * as main from '../../region-footer'

it('main', () => {
    expect(typeof main.default).toBe('function')
    expect(typeof main.mount).toBe('function')
    expect(typeof main.unmount).toBe('function')
})
