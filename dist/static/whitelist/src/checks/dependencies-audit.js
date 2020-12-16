const semver = require('semver')
const _ = require('lodash')

const auditRegistered = require('../utils/audit-registered')
const getNodeModulesDependencies = require('../utils/get-node-modules-dependencies')
const { split } = require('../utils/pkg')
const universalRequire = require('../utils/universal-require')

module.exports = (config, statistics) => {
    const packages = getNodeModulesDependencies(config.pathToProject)

    const npmAuditWhitelist = universalRequire(`${config.listsPath}/white/audit`)
    const npmAuditBlacklist = universalRequire(`${config.listsPath}/black/audit`)
    const npmAdvisories = universalRequire(`${config.listsPath}/support/npm-advisories`)

    _.forEach(Object.keys(packages), (pkg) => {
        const { name, version } = split(pkg)

        const packageVulnerabilities = _.filter(npmAdvisories, ({ module_name: vulnerableName, vulnerable_versions: vulnerableVersions }) =>
            name === vulnerableName
            && semver.satisfies(version, vulnerableVersions)
        )

        const moreInfo = '\nДля большей информации используйте `npm audit --registry=https://registry.npmjs.org`'
        const statisticsConfig = Object.assign({ pkg }, config)

        if (packageVulnerabilities.length) {
            packageVulnerabilities.forEach(({ url, severity, id }) => {
                if (auditRegistered(pkg, npmAuditBlacklist, Object.assign({ blacklist: true, id }, config))) {
                    statistics.addError(
                        `npm audit: Пакет "${pkg}" ЗАПРЕЩЕН и содержит уязвимость критичности ${severity} (${url}).${moreInfo}`,
                        statisticsConfig
                    )
                } else if (!config.onlyBlacklist && !auditRegistered(pkg, npmAuditWhitelist, Object.assign({ blacklist: false, id }, config))) {
                    statistics.addWarning(
                        `npm audit: Пакет "${pkg}" НЕ ИССЛЕДОВАН и содержит уязвимость критичности ${severity} (${url}).${moreInfo}`,
                        statisticsConfig
                    )
                }
            })
        }
    })
}
