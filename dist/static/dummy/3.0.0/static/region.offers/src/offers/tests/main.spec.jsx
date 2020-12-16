import { OffersBlocks, OffersCarousel, feedback } from '..'

it('module API', () => {
    expect(typeof OffersBlocks).toBe('function')
    expect(typeof OffersCarousel).toBe('function')
    expect(typeof feedback).toBe('object')
    expect(typeof feedback.shown).toBe('function')
    expect(typeof feedback.started).toBe('function')
    expect(typeof feedback.opened).toBe('function')
    expect(typeof feedback.close).toBe('function')
    expect(typeof feedback.done).toBe('function')
})
