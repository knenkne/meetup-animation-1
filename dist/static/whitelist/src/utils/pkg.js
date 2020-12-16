const _ = require('lodash')

const AT_SIGN = '@'

module.exports = {
    split: (pkg) => ({
        name: _.dropRight(pkg.split(AT_SIGN)).join(AT_SIGN),
        version: _.takeRight(pkg.split(AT_SIGN))[0]
    }),
    join: (pkg, version) => {
        if (_.isObject(pkg)) {
            return `${pkg.name}${AT_SIGN}${pkg.version}`
        }

        return `${pkg}${AT_SIGN}${version}`
    }
}
