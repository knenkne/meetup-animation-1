const semver = require('semver')
const _ = require('lodash')

const getNodeModulesDependencies = require('../utils/get-node-modules-dependencies')
const { split } = require('../utils/pkg')

const prepareList = (list) => list.map((listItem) => listItem.map(split))

const isInList = (dependencyPath, { id, path }, vulnerabilityId) => {
    if (vulnerabilityId !== id) {
        return false
    }

    let index = 0

    _.forEach(path, (auditListPathItem) => {
        const preparedAuditListPathItem = split(auditListPathItem)
        if (index >= 0) {
            index = _.findIndex(
                dependencyPath,
                (dependencyPathItem) => dependencyPathItem.name === preparedAuditListPathItem.name
                    && semver.satisfies(
                        dependencyPathItem.version,
                        preparedAuditListPathItem.version
                    ),
                index
            )
        }
    })

    return index >= 0
}

module.exports = (pkg, auditList, { pathToProject, blacklist, id } = {}) => {
    const dependencyPaths = getNodeModulesDependencies(pathToProject)[pkg]

    const preparedDependencyPaths = prepareList(dependencyPaths)

    const inclusionFunction = blacklist ? _.some : _.every

    return inclusionFunction(
        preparedDependencyPaths,
        (preparedDependencyPath) => _.some(
            auditList,
            (registeredItem) => isInList(
                preparedDependencyPath,
                registeredItem,
                id
            )
        )
    )
}
