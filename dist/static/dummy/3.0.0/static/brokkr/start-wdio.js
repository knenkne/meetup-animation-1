const { Launcher } = require('webdriverio')

module.exports = () => {
    const launcher = new Launcher(require.resolve('./wdio.config.js'))
    return launcher.run()
}
