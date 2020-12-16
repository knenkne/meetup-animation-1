it('lodash', function () {
    expect(window._).toBeDefined()
    expect(typeof window._).toBe('function')
    expect(typeof window._.map).toBe('function')
    expect(typeof window._.filter).toBe('function')
    expect(typeof window._.reject).toBe('function')
})
