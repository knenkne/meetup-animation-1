const getProjectPackage = require('./get-project-package')
const getSnapshotVersion = require('./get-snapshot-version')

const {
    __: {
        totalDependencies
    }
} = getProjectPackage()

const isSbolLib = (vendor) => vendor.startsWith('@sbol/lib.')

module.exports = () => Object
    .keys(totalDependencies)
    .filter(isSbolLib)
    .reduce((memo, packageName) => {
        const unsbolPackageName = packageName.replace('@sbol/', '')
        const expectedVersion = getSnapshotVersion(totalDependencies[unsbolPackageName])
            || require(`${packageName}/package.json`).version
        const from = `${unsbolPackageName}/*/index.js`
        const to = `${unsbolPackageName}/${expectedVersion}/index.js`

        return {
            ...memo,
            [from]: to
        }
    }, {})
