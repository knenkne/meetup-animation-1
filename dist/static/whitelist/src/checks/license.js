const _ = require('lodash')
const chalk = require('chalk')
const licenseChecker = require('license-checker')

const isCheckPackageVersion = require('../utils/is-check-package-version')
const includesLicense = require('../utils/includes-license')
const universalRequire = require('../utils/universal-require')
const synonymousLicenses = require('../../lists/support/synonymous-licenses.json')
const textLikeLicenses = require('../../lists/support/text-like-licenses.json')

const clearImplicitLicensesMarker = (license) => license.replace(/\*/g, '')
const memoReplacer = (memoLicense, expectedName, originalName) => memoLicense.replace(originalName, expectedName)
const synonymousLicense = (license) => _.reduce(synonymousLicenses, memoReplacer, license)
const joinLicense = (licenseDraft) => _.isArray(licenseDraft) ? licenseDraft.join(', ') : licenseDraft
const updateTextLikeLicense = (licenseDraft, pkg) => {
    if (textLikeLicenses[pkg]) {
        return textLikeLicenses[pkg]
    }

    // TODO: нужно более красивое решение с ссылочными лицензиями и лизензиями в виде массивов и объектов
    if (!licenseDraft || !_.isString(licenseDraft) || licenseDraft.startsWith('http')) {
        return 'Undefined'
    }

    return licenseDraft
}

const prepareLicense = _.flow([joinLicense, clearImplicitLicensesMarker, synonymousLicense])

module.exports = (config, statistics) => new Promise((resolve, reject) => {
    const whiteListLicense = universalRequire(`${config.listsPath}/white/license`)
    const blackListLicense = universalRequire(`${config.listsPath}/black/license`)
    
    licenseChecker.init({ start: config.pathToProject }, (error, packages) => {
        if (error) {
            console.error(chalk.red('Что-то пошло не так при чтении дерева пакетов во время проверки лицензий'))
            reject(error)
        }

        _.forEach(packages, ({ licenses }, pkg) => {
            const preparedLicense = prepareLicense(updateTextLikeLicense(licenses, pkg))

            if (isCheckPackageVersion(pkg, Object.assign({ includeSbol: false }, config))) {
                const statisticsConfig = Object.assign({ pkg }, config)

                if (includesLicense(blackListLicense, preparedLicense, { strict: true })) {
                    statistics.addError(
                        `license: Лицензия "${licenses}" пакета "${pkg}" входит в blacklist`,
                        statisticsConfig
                    )
                } else if (!config.onlyBlacklist && licenses === 'Undefined') {
                    statistics.addWarning(
                        `license: Лицензия пакета "${pkg}" не была определна`,
                        statisticsConfig
                    )
                } else if (!config.onlyBlacklist && !includesLicense(whiteListLicense, preparedLicense)) {
                    statistics.addWarning(
                        `license: Лицензия "${licenses}" пакета "${pkg}" не входит в whitelist`,
                        statisticsConfig
                    )
                }
            }
        })

        resolve()
    })
})
