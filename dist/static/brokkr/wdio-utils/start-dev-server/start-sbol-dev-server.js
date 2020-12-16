const devServer = require('@sbol/dev.server')
const { version } = require('@sbol/dev.server/package')

module.exports = (port, withoutWebpack) => new Promise((resolve) => {
    devServer({
        port,
        withoutWebpack,
        withOpenBrowser: false,
        onStart: () => {
            console.log(`Start @sbol/dev.server@${version} stub with target on port ${port}`)
            resolve()
        }
    })
})
