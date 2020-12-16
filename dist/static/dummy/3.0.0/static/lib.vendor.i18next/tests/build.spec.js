it('i18next', function () {
    expect(window.default).toBeDefined()
    expect(typeof window.default).toBe('object')
    expect(typeof window.default.init).toBe('function')
})
