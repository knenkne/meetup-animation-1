const Statistics = require('./statistics')
const checkMap = require('./checks')

const DEFAULT_CONFIG = {
    checkList: [],
    pathToProject: process.cwd(),
    quiet: false,
    root: false,
    force: false,
    printToConsole: false,
    cli: false,
    withDependencyPath: false,
    registry: 'http://sbtatlas.sigma.sbrf.ru/nexus/content/groups/sbol_npm_group/',
    userconfig: void 0,
    fix: false,
    fixForce: false,
    listsPath: '@sbol/whitelist/lists',
    onlyBlacklist: false
}

module.exports = async function whitelist (config = {}) {
    const mergedConfig = {}
    Object.keys(DEFAULT_CONFIG).forEach((key) => {
        mergedConfig[key] = config[key] === void 0 ? DEFAULT_CONFIG[key] : config[key]
    })
    
    const checks = mergedConfig.checkList.length ? mergedConfig.checkList : Object.keys(checkMap)

    const statistics = new Statistics()

    for (let i = 0; i < checks.length; i += 1) {
        const checkName = checks[i]
        const checkFunction = checkMap[checkName]
        await checkFunction(mergedConfig, statistics) // eslint-disable-line no-await-in-loop, comment: вообще это удобно
    }

    if (mergedConfig.printToConsole) {
        statistics.printResult({
            root: mergedConfig.root,
            cli: mergedConfig.cli,
            printToConsole: mergedConfig.printToConsole
        })
    }

    return statistics.result()
}
