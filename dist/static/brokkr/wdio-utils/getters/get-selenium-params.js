const urlRegExp = /http:\/\/(.*):(\d+)(\/.*)/

module.exports = (expectedUrl) => {
    if (expectedUrl) {
        const [, host, port, path] = urlRegExp.exec(expectedUrl)

        return { host, port, path }
    }

    return {
        host: 'localhost',
        port: '4444',
        path: '/wd/hub'
    }
}
