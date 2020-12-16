const semver = require('semver')

const getNodeModulesDependencies = require('../utils/get-node-modules-dependencies')
const isCheckPackageVersion = require('../utils/is-check-package-version')
const { split } = require('../utils/pkg')
const lastAllowedVersions = require('../utils/last-allowed-versions')
const forceInstall = require('../utils/force-install')
const upVersion = require('../utils/up-version')
const universalRequire = require('../utils/universal-require')

module.exports = (config, statistics) => {
    const whiteListDependencies = universalRequire(`${config.listsPath}/white/dependency`)
    const blackListDependencies = universalRequire(`${config.listsPath}/black/dependency`)

    let anyFixable = false

    const packages = getNodeModulesDependencies(config.pathToProject)

    Object.keys(packages).forEach((pkg) => {
        const { name, version } = split(pkg)

        if (isCheckPackageVersion(pkg, config)) {
            const statisticsConfig = Object.assign({ pkg }, config)

            if (blackListDependencies.includes(name) || blackListDependencies.includes(`${name}@${version}`)) {
                statistics.addError(
                    `dependencies versions: Пакет "${pkg}" находится в blacklist`,
                    statisticsConfig
                )
            } else if (!config.onlyBlacklist && !whiteListDependencies[name]) {
                statistics.addWarning(
                    `dependencies versions: Пакет "${pkg}" отсутствует в whitelist`,
                    statisticsConfig
                )
            } else if (!config.onlyBlacklist) {
                const expected = whiteListDependencies[name]

                const lastCounts = expected.match(/^-(\d+)\.-(\d+)(?:\.-(\d+))?$/)

                if (lastCounts) {
                    const [, lastMajorsCount, lastMinorsCount, lastPatchesCount = 0] = lastCounts

                    const { passed, allowed = [], lastInMajor } = lastAllowedVersions(
                        name,
                        version,
                        {
                            lastMajorsCount,
                            lastMinorsCount,
                            lastPatchesCount,
                            registry: config.registry,
                            userconfig: config.userconfig,
                        }
                    )

                    if (passed && lastInMajor && version !== lastInMajor) {
                        statistics.addWarning(
                            `dependencies versions: Пакет "${pkg}" версии ${version} может скоро устареть.` +
                            ` У нас есть версия поновее: ${lastInMajor}.`,
                            statisticsConfig
                        )
                    }

                    if (config.fix && lastInMajor && version !== lastInMajor) {
                        anyFixable = true
                        upVersion(config.pathToProject, name, lastInMajor)
                        console.log(`dependencies versions: Обновление пакета "${name}" с версии ${version} до версии ${lastInMajor}. ` +
                            'Для все остального используйте команды "npm update" и "npm outdated".')
                    }

                    if (!passed && !config.fixForce) {
                        const versionsPattern = lastPatchesCount
                            ? `${lastMajorsCount} majors, ${lastMinorsCount} minors, ${lastPatchesCount} patches`
                            : `${lastMajorsCount} majors, ${lastMinorsCount} minors+patches`
                        statistics.addError(
                            `dependencies versions: Пакет "${pkg}" не соответствует требуемой версии последних ${versionsPattern}.\n` +
                            `    Подходящие версии: ${allowed.join(', ')}.\n` +
                            `    Для проверки версий используйте команду "npm view ${name} versions --registry=${config.registry}"`,
                            statisticsConfig
                        )
                    }
                } else if (!semver.satisfies(version, expected)) {
                    statistics.addError(
                        `dependencies versions: Пакет "${pkg}" не соответствует требуемой версии "${expected}"`,
                        statisticsConfig
                    )
                }
            }
        }
    })

    if (config.fixForce && anyFixable) {
        forceInstall(config)
    }
}
