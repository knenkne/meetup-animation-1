const killWindowsProcess = require('../kill-windows-process')
const getSeleniumInstallArgs = require('../getters/get-selenium-install-args')

module.exports = () => {
    const {
        SELENIUM_SERVER
    } = process.env

    if (!SELENIUM_SERVER) {
        killWindowsProcess(getSeleniumInstallArgs().drivers)
    }
}
