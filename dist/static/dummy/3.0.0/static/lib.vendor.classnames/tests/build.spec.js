it('classnames', function () {
    expect(window.default).toBeDefined()
    expect(typeof window.default).toBe('function')
    expect(window.default('foo', { bar: true, baz: false })).toBe('foo bar')
})
