import * as main from '../../region-header'

it('main', () => {
    expect(typeof main.default).toBe('function')
    expect(typeof main.mount).toBe('function')
    expect(typeof main.unmount).toBe('function')
})
