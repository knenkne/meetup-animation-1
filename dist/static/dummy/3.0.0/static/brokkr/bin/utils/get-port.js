const net = require('net')

const DEFAULT_MAX_RETRIES = 3

const pingPort = (port) => new Promise((resolve, reject) => {
    const sock = new net.Socket()
    const item = ['localhost', port]
    sock.on('connect', () => reject(sock.destroy()))
        .on('error', () => resolve(item[1]))
        .on('timeout', reject).connect(item[1], item[0])
})

const getPort = async (port, retries = DEFAULT_MAX_RETRIES) => {
    if (!retries) {
        throw new Error('Попытки найти свободный порт закончились. Проверьте перечень работающих приложений или искомые порты.')
    }

    try {
        return await pingPort(port)
    } catch (e) {
        return getPort(Number(port) + 1, retries - 1)
    }
}

module.exports = getPort
