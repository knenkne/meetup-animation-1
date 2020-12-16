import { log } from '../log'

export default {
    ready: false,
    allOnce (callbacks) {
        if (this.ready) {
            return Promise.resolve()
        }
        this.ready = true
        return Promise.all(callbacks).catch((err) => {
            this.ready = false
            log.error('On mount promise failed', err)
            throw err
        })
    },
    reset () {
        this.ready = false

    }
}
