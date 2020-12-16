const _ = require('lodash')
const semver = require('semver')

const getPackageDependencies = require('./get-package-dependencies')
const { split } = require('./pkg')

const isThirdPartyLib = (packageName) =>
    !_.startsWith(packageName, '@sbol/')
        && !_.endsWith(packageName, '-sbtsbol')
        && !_.startsWith(packageName, 'sbtsbol-')
        // sbersite
        && !_.startsWith(packageName, '@sbtweb/')

// TODO: переделать на ls, чтобы удовлетворять конкретной версии (например, запрашиваем в пакете ^4, а установлены где-то в глубине 4.3, 4.4, а в корне 4.5)
const isRequestedByRootPackageJson = (name, version, pathToProject) =>
    getPackageDependencies(pathToProject)[name]
        && semver.satisfies(version, getPackageDependencies(pathToProject)[name])

/**
 * Следует ли проверять данный пакет
 * @param {String} pkg - {name}@{version}
 * @param {Boolean} includeSbol - проверяем ли @sbol библиотеки
 * @param {Boolean} root - проверяем ли в глубину
 * @param {String} pathToProject - путь до проекта
 * @return {Boolean} - проверяем/не проверяем
 */
module.exports = (pkg, { includeSbol = true, root = false, pathToProject = process.cwd() } = {}) => {
    const { name, version } = split(pkg)

    return !!((!root || isRequestedByRootPackageJson(name, version, pathToProject))
        && (includeSbol || isThirdPartyLib(name)))
}
