const { execSync } = require('child_process') /* Дабы не грузить весь npm ради исполнения известной команды */

const _ = require('lodash')
const chalk = require('chalk')

const objToArray = (obj) => _.compact(Object.keys(obj).reduce((memo, key) => {
    memo[key] = obj[key]
    return memo
}, []))

const getMajor = (version) => version.split('.')[0]
const getMinor = (version) => version.split('.')[1]

const getLastInMajor = (version, allowedVersions) =>
    _.last(_.groupBy(allowedVersions, getMajor)[getMajor(version)])

const filterAllowedVersions = (viewVersions, lastMajorsCount, lastMinorsCount, lastPatchesCount) =>
    _.flattenDepth(_.map(
        objToArray(_.groupBy(viewVersions, getMajor)).slice(-lastMajorsCount || -Infinity),
        (group) => {
            if (lastPatchesCount) {
                return _.map(
                    objToArray(_.groupBy(group, getMinor)).slice(-lastMinorsCount || -Infinity),
                    (subGroup) => subGroup.slice(-lastPatchesCount || -Infinity)
                )
            } else {
                return group.slice(-lastMinorsCount || -Infinity)
            }
        }
    ), 2)

module.exports = (name, version, {
    lastMajorsCount = 3,
    lastMinorsCount = 3,
    lastPatchesCount = 3,
    strictVersions = true,
    registry,
    userconfig
} = {}) => {
    const flags = [
        '--json'
    ]

    if (registry) {
        flags.push(`--registry=${registry}`)
    }

    if (userconfig) {
        flags.push(`--userconfig=${userconfig}`)
    }

    const cmd = `npm view ${name} versions ${flags.join(' ')}`

    try {
        let viewVersions = JSON.parse(execSync(cmd, { encoding: 'utf-8', timeout: 5000 }))

        if (strictVersions) {
            viewVersions = viewVersions.filter((viewVersion) => /^\d+\.\d+\.\d+$/.test(viewVersion))
        }

        const allowedVersions = filterAllowedVersions(viewVersions, lastMajorsCount, lastMinorsCount, lastPatchesCount)

        return {
            passed: allowedVersions.includes(version),
            allowed: allowedVersions,
            lastInMajor: getLastInMajor(version, allowedVersions)
        }
    } catch (error) {
        console.error(chalk.red(error.stderr))
        console.error(chalk.red(`Не удалось определить существующие версии пакета "${name}". Registry ${registry}. Продолжаем без него.`))
        return {
            passed: true
        }
    }
}
