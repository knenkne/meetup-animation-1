const path = require('path')

module.exports = (pathToFile) => {
    if (pathToFile.startsWith('.')) {
        return require(path.resolve(process.cwd(), pathToFile))
    }

    try {
        return require(path.resolve(process.cwd(), 'node_modules', pathToFile))
    } catch (error) {
        return require(pathToFile)
    }
}
