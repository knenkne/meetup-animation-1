const path = require('path')
const fs = require('fs')

const DEPRECATED_STUB_PATH = path.resolve('node_modules/@sbol/webpack-config/stub/index.js')
const CURRENT_STUB_PATH = path.resolve('node_modules/@sbol/dev.server/src/index.js')

module.exports = async () => {
    // eslint-disable-next-line no-sync, comment: все равно ожидать выполнения
    const DEPRECATED = fs.existsSync(DEPRECATED_STUB_PATH)
    // eslint-disable-next-line no-sync, comment: все равно ожидать выполнения
    const CURRENT = fs.existsSync(CURRENT_STUB_PATH)
    const { DEV_SERVER_PORT } = process.env

    if (CURRENT) {
        await require('./start-sbol-dev-server')(DEV_SERVER_PORT, process.env.TARGET)
    } else if (DEPRECATED) {
        if (process.env.TARGET) {
            await require('./start-static-server')(DEV_SERVER_PORT)
        } else {
            await require('./start-webpack-dev-server')(DEV_SERVER_PORT)
        }
    } else {
        console.error(new Error('Не удалось найти dev stub. Поднимаю примитивный static server на target'))
        await require('./start-simple-static')(DEV_SERVER_PORT)
    }
}
