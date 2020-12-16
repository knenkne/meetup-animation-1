import { EventEmitter } from 'events'

import { enhanceLogger } from './enhance-logger'

class MessageBus extends EventEmitter {
    state = new Map()

    getLastPayload = (event) => this.state.get(event)
    addListener = (event, cb, isPayload = false) => {
        if (isPayload) {
            cb(this.getLastPayload(event))
        }
        return super.addListener(event, cb)
    }
    on = (event, cb, isPayload = false) => this.subscribe(event, cb, isPayload)
    emit = (event, payload) => {
        this.state.set(event, payload)
        return super.emit(event, payload)
    }

    publish = (event, payload) => {
        this.state.set(event, payload)
        return super.emit(event, payload)
    }
    subscribe = (event, cb, isPayload = true) => {
        if (isPayload) {
            cb(this.getLastPayload(event))
        }
        super.on(event, cb)
        return () => this.removeListener(event, cb)
    }
}

const logMap = {
    addListener: '[Message Bus][Listener] Event: $1',
    on: '[Message Bus][Listener] Event: $1',
    once: '[Message Bus][Listener once] Event: $1',
    emit: '[Message Bus][Emit] Event: $1, payload: $2',
    getLastPayload: '[Message Bus][Get state] Return state for event: $1'
}

export default enhanceLogger(logMap)(new MessageBus())
