const path = require('path')

const rimraf = require('rimraf').sync

const startDevServer = require('../start-dev-server')
const killWindowsProcess = require('../kill-windows-process')
const getSeleniumInstallArgs = require('../getters/get-selenium-install-args')

module.exports = async () => {
    const {
        SELENIUM_SERVER,
        AUTOTESTING_PLACEMENT
    } = process.env
    
    if (SELENIUM_SERVER) {
        console.log('Run test on remote server:', SELENIUM_SERVER)
    } else {
        killWindowsProcess(getSeleniumInstallArgs().drivers)

        rimraf(path.resolve('reports', 'accessibility'))

        if (AUTOTESTING_PLACEMENT === 'dev') {
            try {
                await startDevServer()
            } catch (error) {
                console.error(error)
            }
        }
    }
}
