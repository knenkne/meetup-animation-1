const path = require('path')

const searchFile = require('../utils/search-file')
const calcSnapshotVersion = require('../utils/calc-snapshot-version')

module.exports = (where = process.cwd()) => {
    const pkgFile = searchFile('package.json', where)

    const cwd = path.dirname(pkgFile)
    const pkg = require(pkgFile)

    const {
        optionalDependencies = {},
        devDependencies = {},
        dependencies = {},
        _requested: {
            raw
        } = {},
        name,
        version
    } = pkg

    const snapshotVersion = raw
        // Если зависимость данного модуля
        ? calcSnapshotVersion(raw)
        // Иначе берем из глобальной переменной
        : process.env.VERSION

    return {
        ...pkg,
        __: {
            cwd,
            // Версия на основе git+ssh
            snapshotVersion,
            actualVersion: snapshotVersion || version,
            cleanName: name.replace('@sbol/', ''),
            totalDependencies: {
                ...devDependencies,
                ...optionalDependencies,
                ...dependencies
            }
        }
    }
}
