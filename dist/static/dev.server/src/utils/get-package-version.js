const { existsSync } = require('fs')
const path = require('path')

const getProjectPackage = require('./get-project-package')

const getVersionFromPackage = (pathToPkg = process.cwd()) => {
    if (existsSync(pathToPkg)) {
        return getProjectPackage(pathToPkg).__.actualVersion
    }

    return void ''
}

module.exports = (pkg) =>
    getVersionFromPackage(path.resolve('node_modules', '@sbol', pkg))
        || getVersionFromPackage()
