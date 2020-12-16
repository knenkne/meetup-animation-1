const { exec } = require('child_process')

const architectures = ['ia32', 'x64']

module.exports = (drivers) => {
    architectures.forEach((architecture) => {
        Object.keys(drivers).forEach((driverName) => {
            const { processNames, version } = drivers[driverName]
            processNames.forEach((processName) => {
                if (process.platform === 'win32') {
                    exec(`taskkill /F /IM ${version}-${architecture}-${processName}`)
                }
            })
        })
    })
}
