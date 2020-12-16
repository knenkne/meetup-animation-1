const getProjectPackage = require('./get-project-package')
const getSnapshotVersion = require('./get-snapshot-version')

const {
    __: {
        totalDependencies
    }
} = getProjectPackage()

const isSbolVendors = (vendor) => vendor.startsWith('@sbol/lib.vendor.')

module.exports = () => Object
    .keys(totalDependencies)
    // Отрезаем в вендоры, если есть @sbol/lib.vendor.<package>
    .filter(isSbolVendors)
    // Формируем ссылку к вендору
    .reduce((memo, packageName) => {
        const unsbolPackageName = packageName.replace('@sbol/', '')
        const version = getSnapshotVersion(totalDependencies[packageName])
            || require(`${packageName}/package.json`).version
        const from = unsbolPackageName.replace('lib.vendor.', '')
        const to = `${unsbolPackageName}/${version}/index.js`

        return {
            ...memo,
            [from]: to
        }
    }, [])
