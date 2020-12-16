const path = require('path')

const _ = require('lodash')

/**
 * Синглтон список непосредственный зависимостей проекта
 * @type {Object} - зависимости проекта
 */
module.exports = _.memoize((pathToProject) => {
    const {
        dependencies = {},
        devDependencies = {},
        optionalDependencies = {}
    } = require(path.resolve(pathToProject, 'package.json'))

    return Object.assign({}, optionalDependencies, devDependencies, dependencies)
})
