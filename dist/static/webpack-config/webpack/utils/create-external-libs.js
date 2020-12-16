const path = require('path')

const getProjectPackage = require('./get-project-package')
const getSnapshotVersion = require('./get-snapshot-version')

const isLib = (request) => request.includes('@sbol/lib.')
    && !request.includes('@sbol/lib.vendor.')
const isDirectPath = (request) => /^@sbol\/lib\..+[\\/].+/.test(request)

const {
    __: {
        totalDependencies
    }
} = getProjectPackage()

module.exports = (context, packageName, cb) => {
    if (isLib(packageName) && !isDirectPath(packageName)) {
        const version = getSnapshotVersion(totalDependencies[packageName])
            || require(`${packageName}/package.json`).version

        return cb(
            null,
            path.join(
                packageName.replace('@sbol/', ''),
                version,
                'index.js'
            )
        )
    }

    return cb()
}
