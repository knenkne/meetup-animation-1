const _ = require('lodash')

const extractAllLicenses = (string, regexp) => {
    const matches = regexp.exec(string)

    if (matches) {
        return _.compact(_.drop(matches))
    }

    return void 0
}

const includesToList = (list) => (license) => _.includes(list, license)
const isAndOperatorIncluded = (licenseName) => _.includes(licenseName, 'AND') || _.includes(licenseName, ',')
const isOrOperatorIncluded = (licenseName) => _.includes(licenseName, 'OR')

/**
 * Проверка, входит ли лицензия в тот или иной список
 * @param {Array} list - список лицензий (черный, белый список)
 * @param {Array|String} license - лицензия (втч конкатенация лицензий через запятую или оператор)
 * @param {Boolean} strict - считать ли оператор OR равным оператору AND
 * @return {Boolean} - входит ли licenseDraft в list
 */
module.exports = (list, license, { strict = false } = {}) => {
    if (isOrOperatorIncluded(license)) {
        const licenses = extractAllLicenses(license, /([^\s(),]+)(?: OR ([^\s(),]+))?/g)

        if (strict) {
            return _.every(licenses, includesToList(list))
        }

        return _.some(licenses, includesToList(list))
    }

    if (isAndOperatorIncluded(license)) {
        const licenses = extractAllLicenses(license, /([^\s(),]+)(?:(?: AND |, ?)([^\s(),]+))/g)

        return _.every(licenses, includesToList(list))
    }

    return _.includes(list, license)
}
