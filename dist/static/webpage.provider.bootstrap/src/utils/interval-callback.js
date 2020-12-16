export default (callback, min, max, onMin = () => {}, onMax = () => {}) => {
    let ready = false
    let called = false

    const connectedCallback = () => {
        if (ready) {
            callback()
        }
        called = true
    }

    setTimeout(() => {
        ready = true
        if (called) {
            onMin()
            connectedCallback()
        }
    }, min)

    setTimeout(() => {
        if (!called) {
            onMax()
            connectedCallback()
        }
    }, max)

    return connectedCallback
}
