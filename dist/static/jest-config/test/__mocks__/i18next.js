const path = require('path')

const locatePath = require('locate-path').sync

const localesPath = path.resolve('locales/ru.json')
let t = (key) => key

const extLocalesPath = locatePath([localesPath])
// Выдаем строку из локалей, если их удалось найти.
if (extLocalesPath) {
    const localesJson = require(extLocalesPath)

    t = (key, interpolation = {}) => {
        const raw = localesJson[key] || key

        return Object.entries(interpolation)
            .map(([interpolationKey, value]) => ({
                regexp: new RegExp(`{{${interpolationKey}}}`, 'g'),
                value,
            }))
            .reduce((acc, { regexp, value }) => acc.replace(regexp, value), raw)
    }
}

t.mockReturnValue = (key) => key

module.exports = {
    t,
    init: () => {},
    on: () => {},
    addResources: (key) => key,
    loadNamespaces: (key) => key
}
