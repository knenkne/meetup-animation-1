const _ = require('lodash')
const chalk = require('chalk')

const safeNpmList = require('./safe-npm-list')

/**
 * Парсер дерева зависимостей
 * @param {Object} tree - дерево зависимостей
 * @param {Array} pathToDep - параметр для рекурсии, предварительно пройденный путь
 * @param {Object} result - параметр для рекурсии, результирующее дерево
 * @param {String} packageName - имя пакета
 * @return {Object} - дерево зависимостей
 */
const parseNpmList = (tree, pathToDep = [], result = {}, packageName = '') => {
    const fullName = `${tree.name || _.get(tree, 'required.name') || packageName}@${tree.version || _.get(tree, 'required.version')}`

    if (_.isUndefined(result[fullName])) {
        result[fullName] = [] // eslint-disable-line no-param-reassign, comment: это осознанное мутирование
    }

    const halfPath = (_.findIndex(result[fullName], (p) => _.includes(pathToDep, p)) + 1) || result[fullName].length

    result[fullName][halfPath] = pathToDep.concat([fullName]) // eslint-disable-line no-param-reassign, comment: это осознанное мутирование

    _.forEach(tree.dependencies, (dependency, name) => {
        parseNpmList(dependency, result[fullName][halfPath], result, name)
    })

    return result
}

const parseFallbackPlainDeps = (pathToProject) => {
    const {
        devDependencies = {},
        optionalDependencies = {},
        dependencies = {},
        name,
        version
    } = require(`${pathToProject}/package.json`)

    const totalDependencies = {
        ...devDependencies,
        ...optionalDependencies,
        ...dependencies
    }

    return Object.keys(totalDependencies).reduce((memo, dependencyName) => {
        const { version: depVersion } = require(`${pathToProject}/node_modules/${dependencyName}/package.json`)
        Object.assign(memo, { [`${dependencyName}@${depVersion}`]: [[`${name}@${version}`]] })
        return memo
    }, {})
}

/**
 * Дерево в разрезе любого проекта
 * @param {String} pathToProject - путь до проекта
 * @type {Object} - дерево потребителей
 * @return {Object} - список всех зависимостей и их путей
 */
const getNodeModulesDependencies = (pathToProject) => {
    try {
        return parseNpmList(safeNpmList(pathToProject))
    } catch (e) {
        console.error(chalk.red(e))
        console.error(chalk.red('Не удалось сформровать список зависимостей, формирую плоский списоок'))
        return parseFallbackPlainDeps(pathToProject)
    }
}
module.exports = _.memoize(getNodeModulesDependencies)
