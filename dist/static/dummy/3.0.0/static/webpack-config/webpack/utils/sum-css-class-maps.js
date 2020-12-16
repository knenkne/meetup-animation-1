const fs = require('fs')

const getProjectPackage = require('../utils/get-project-package')

const isSbolPackage = (lib) => lib.startsWith('@sbol/')

module.exports = (cssMapPath) => {
    // Лишние элементы в маппинге не страшны,
    // поэтому для простоты просматриваем непосредственные зависимости в package.json
    const dependenciesMaps = Object.keys(getProjectPackage().__.totalDependencies)
        .filter(isSbolPackage)
        .map((lib) => {
            const dist = process.env.NODE_ENV === 'production' ? 'target' : 'target-dev'
            const pathToLibMap = `${lib}/${dist}/${cssMapPath}`

            if (fs.existsSync(`node_modules/${pathToLibMap}`)) {
                return require(pathToLibMap)
            }

            return {}
        })

    return Object.assign({}, ...dependenciesMaps)
}
