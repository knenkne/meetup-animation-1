const path = require('path')

const searchFile = require('./search-file')

const pkgFile = searchFile('package.json')

const cwd = path.dirname(pkgFile)
const pkg = require(pkgFile)

const { optionalDependencies = {}, devDependencies = {}, dependencies = {} } = pkg

module.exports = () => ({
    ...pkg,
    __: {
        cwd,
        cleanName: pkg.name.replace('@sbol/', ''),
        totalDependencies: {
            ...devDependencies,
            ...optionalDependencies,
            ...dependencies
        }
    }
})
