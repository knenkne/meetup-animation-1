import MessageBus from '../'

const VALUE_EVENT = 'VALUE_EVENT'

describe('Message bus', () => {
    it('Emit event', (done) => {
        const handler = (value) => {
            expect(value).toBe(VALUE_EVENT)
            done()
        }
        MessageBus.on('test:event', handler)
        MessageBus.emit('test:event', VALUE_EVENT)
        MessageBus.off('test:event', handler)
    })
    it('Emit event and return last payload', (done) => {
        const handler = (value) => {
            expect(value).toBe(VALUE_EVENT)
            done()
        }
        MessageBus.emit('test:event', VALUE_EVENT)
        MessageBus.on('test:event', handler, true)
        MessageBus.off('test:event', handler)
    })
})
