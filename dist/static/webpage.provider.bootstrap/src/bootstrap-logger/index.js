const getLoglevel = () => {
    if (localStorage.getItem('loglevel:bootstrap')) {
        return import(/* webpackChunkName: "loglevel" */ './loglevel')
    }

    return Promise.resolve()
}

const createMethod = (method) => (...messages) =>
    getLoglevel()
        .then(({ log = {} } = {}) => {
            if (log[method]) {
                const date = new Date()
                log[method](
                    `Bootstrap [${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}] ${method}:`,
                    ...messages
                )
            }
        })
        .catch(console.error)

const log = ['debug', 'info', 'log', 'warn', 'error']
    .reduce((memo, method) => ({
        ...memo,
        [method]: createMethod(method)
    }), {})

export default log
