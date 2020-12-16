const _ = require('lodash')

const getNodeModulesDependencies = require('./get-node-modules-dependencies')

const DEP_SEP = '\n    - '
const DEP_LIST_SEP = '\n    '
const ARROW = ' -> '

/**
 * Построение пути потребителей от проекта до указанного модуля
 * @param {String} pkg - модуль, путь потребителей до которого строится
 * @param {String} pathToProject - путь по директориям до проекта
 * @return {String} - путь потребителей
 */
module.exports = (pkg, pathToProject) => {
    const nodeModulesDependencies = getNodeModulesDependencies(pathToProject)

    const title = `${DEP_LIST_SEP}Пути по дереву зависимостей:`
    const pkgPath = _.map(
        nodeModulesDependencies[pkg],
        (nodeModulesPath) => `${DEP_SEP}${nodeModulesPath.join(ARROW)}`
    ).join('')

    return `${title}${pkgPath}`
}
