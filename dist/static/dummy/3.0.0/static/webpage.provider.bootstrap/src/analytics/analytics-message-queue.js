export default {
    queue: [],
    addElementToQueue (value) {
        this.queue.push(value)
    },
    getQueue () {
        return this.queue
    }
}
