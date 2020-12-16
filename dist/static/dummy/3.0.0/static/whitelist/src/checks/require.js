const _ = require('lodash')

const getPackageDependencies = require('../utils/get-package-dependencies')
const universalRequire = require('../utils/universal-require')

module.exports = (config, statistics) => {
    const requiredListDependencies = universalRequire(`${config.listsPath}/required`)

    _.forEach(requiredListDependencies, (name) => {
        if (_.isArray(name) && _.every(name, (pkgAlt) => !getPackageDependencies(config.pathToProject)[pkgAlt])) {
            statistics.addError(
                `required dependencies: Требуется один из пакетов "${name.join(', ')}"`,
                config
            )
        } else if (!_.isArray(name) && !getPackageDependencies(config.pathToProject)[name]) {
            statistics.addError(
                `required dependencies: Требуется пакет "${name}"`,
                config
            )
        }
    })
}
