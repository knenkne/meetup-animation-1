const { readdirSync, existsSync } = require('fs')
const path = require('path')

const getModulePaths = (module, dependenciesPath) => {
    // По данному пути нет СБОЛ модулей
    if (!existsSync(dependenciesPath)) {
        return []
    }

    const modules = readdirSync(dependenciesPath)

    return modules.reduce((memo, sbolModule) => {
        const nextDependenciesPath = path.resolve(dependenciesPath, sbolModule, 'node_modules', '@sbol')

        return [
            ...memo,
            ...getModulePaths(module, nextDependenciesPath)
        ]
    }, [path.resolve(dependenciesPath, module)])
}

module.exports = getModulePaths
