const fs = require('fs')

const invalidateApi = require('./invalidate-api')
const safeConnectApi = require('./safe-connect-api')

module.exports = ({ app, location }) => {
    let watchTimeout = null
    const watch = () => {
        clearTimeout(watchTimeout)
        watchTimeout = setTimeout(() => {
            invalidateApi(location)
            if (app) {
                safeConnectApi(app, location)
            }
            console.log('API updated!')
        }, 200)
    }
    if (app) {
        safeConnectApi(app, location)
    }

    fs.watch(location, { recursive: true }, watch)
}
