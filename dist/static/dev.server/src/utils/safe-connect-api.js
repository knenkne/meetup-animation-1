const path = require('path')
const fs = require('fs')

const chalk = require('chalk')

module.exports = (app, location) => {
    if (!fs.existsSync(path.resolve(location, 'index.js'))) {
        console.warn(
            chalk.yellow(
                `Stub API not found. Please add api from ${location} /index.js`
            )
        )
        console.warn(
            chalk.italic(`
        const router = require('express').Router()
        module.exports = router
        `)
        )
    } else {
        // Hotreload заглушки работает, если происходит перезапрос по пути apiPath
        app.use((...args) => require(location).apply(app, args))
    }
}
