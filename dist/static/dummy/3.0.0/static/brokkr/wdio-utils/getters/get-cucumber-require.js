const path = require('path')
const fs = require('fs')

const BROKKR_CUCUMBER_SETUP_PATH = path.resolve(__dirname, '..', '..', 'src', 'steps', 'cucumber-setup.js')
const PROJECT_CUCUMBER_SETUP_PATH = path.resolve('cucumber', 'index.js')

module.exports = () => {
    const cucumberOptsRequire = [
        BROKKR_CUCUMBER_SETUP_PATH
    ]

    if (fs.existsSync(PROJECT_CUCUMBER_SETUP_PATH)) {
        cucumberOptsRequire.push(PROJECT_CUCUMBER_SETUP_PATH)
    }

    return cucumberOptsRequire
}
