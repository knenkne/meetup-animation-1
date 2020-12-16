const { execSync } = require('child_process')

const { sync: rimraf } = require('rimraf')

module.exports = (config) => {
    rimraf(`${config.pathToProject}/node_modules`)
    rimraf(`${config.pathToProject}/package-lock.json`)

    const flags = []

    if (config.registry) {
        flags.push(`--registry=${config.registry}`)
    }

    if (config.userconfig) {
        flags.push(`--userconfig=${config.userconfig}`)
    }

    execSync(`cd ${config.pathToProject} && npm install ${flags.join(' ')}`)
}
