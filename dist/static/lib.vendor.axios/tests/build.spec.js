it('axios', function () {
    expect(window.default).toBeDefined()
    expect(typeof window.default).toBe('function')
    expect(typeof window.default.post).toBe('function')
    expect(typeof window.default.get).toBe('function')
})
