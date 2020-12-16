const { existsSync } = require('fs')
const path = require('path')

const chalk = require('chalk')

const getProjectPackage = require('../get-project-package')

const locateTargetFile = require('./locate-target-file')
const getModulePaths = require('./get-module-paths')

module.exports = (module, version, file, additionalRoots = []) => {
    const ownNodeModules = path.resolve(process.cwd(), 'node_modules', '@sbol')
    const modulePaths = getModulePaths(module, ownNodeModules).filter(existsSync)
    let files = [process.cwd(), ...modulePaths]
    
    if (additionalRoots.length) {
        additionalRoots.forEach((root) => {
            const rootNodeModules = path.resolve(process.cwd(), root, 'node_modules', '@sbol')
            const additionalModulePaths = getModulePaths(module, rootNodeModules).filter(existsSync)
            files = files.concat([path.resolve(process.cwd(), root), ...additionalModulePaths])
        })
    }
    
    const modulePath = files.find((possibleModulePath) => {
        const modulePackage = getProjectPackage(possibleModulePath)

        return (
            modulePackage.__.cleanName === module
        ) && (
            modulePackage.__.snapshotVersion === version || modulePackage.version === version
        )
    })
    
    if (!modulePath) {
        console.error(chalk.red(`Модуль "${module}@${version}" не был найден для файла ${file}`))
        return void 0
    }

    const filePath = locateTargetFile(modulePath, file)

    if (!filePath) {
        console.error(chalk.red(`Отсутствует файл ${file} по пути "${modulePath}"`))
    }

    return filePath
}
