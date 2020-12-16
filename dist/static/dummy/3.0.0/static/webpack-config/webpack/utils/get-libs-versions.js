const getProjectPackage = require('./get-project-package')
const getSnapshotVersion = require('./get-snapshot-version')

const {
    __: {
        totalDependencies
    }
} = getProjectPackage()

const isLib = (request) => request.includes('@sbol/lib.')
    && !request.includes('@sbol/lib.vendor.')

module.exports = () => Object
    .keys(totalDependencies)
    .filter(isLib)
    // Формируем ссылки на локали
    .reduce((memo, packageName) => {
        const unsbolPackageName = packageName.replace('@sbol/', '')
        const version = getSnapshotVersion(totalDependencies[packageName])
            || require(`${packageName}/package.json`).version

        return {
            ...memo,
            [unsbolPackageName]: version
        }
    }, {})
