const getRouteLikeName = require('./get-route-like-name')
const getProjectPackage = require('./get-project-package')

module.exports = (apps, regions, port, baseClientUrl) => {
    const {
        __: {
            cleanName
        }
    } = getProjectPackage()

    // Находим все роуты, которые рендерят это приложение
    const appRoute = Object.keys(apps)
        .filter((route) => apps[route].name === cleanName)
        .find((route) => route === getRouteLikeName(cleanName))

    if (appRoute) {
        return `http://localhost:${port}${baseClientUrl}/${appRoute}`
    }

    // Если не роут, то, возможно, регион
    const region = Object.keys(regions)
        .find((node) => regions[node].name === cleanName)

    if (region) {
        return `http://localhost:${port}${baseClientUrl}/${region}`
    }

    throw new Error('Вы не зарегистрировали приложение для webpage.provider.bootstrap!')
}
