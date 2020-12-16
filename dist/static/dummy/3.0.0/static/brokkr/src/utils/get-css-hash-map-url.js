module.exports = (id) => {
    const moduleDependencies = module.exports.getModuleDependencies(id) || []

    if (process.env.AUTOTESTING_PLACEMENT === 'dev') {
        return [module.exports.getDevMapUrl(id), ...moduleDependencies]
    }

    return [module.exports.getIftMapUrl(id), ...moduleDependencies]
}

module.exports.getDevMapUrl = () => `http://localhost:${process.env.PORT_DEV_SERVER}/temp/css-hash-map.json`
module.exports.getIftMapUrl = (id) => browser
    .$(`script[src*="${id}"]`)
    .getAttribute('src')
    .replace('/index.js', '/temp/css-hash-map.json')

const isAnyMainContentVisible = () =>
    browser.$('#gradient-region').isVisible() || browser.$('#main').isVisible()

module.exports.getModuleDependencies = (id) => {
    try {
        browser.waitUntil(isAnyMainContentVisible, { timeout: 15000 })
    } catch (error) {
        console.log('Модуль грузится слишком долго')
    }

    const { value: urls } = browser.execute((id, host) => {
        if (window.bootstrap
            && window.bootstrap.appsDependencies
            && window.bootstrap.appsDependencies[id]
            && window.bootstrap.config
            && window.bootstrap.config['res.url']
        ) {
            const resUrl = window.bootstrap.config['res.url']
            const dependencies = Object.values(window.bootstrap.appsDependencies[id])
            return dependencies
                .map((dependency) => {
                    const url = `${resUrl}/${dependency}`.replace('/index.js', '/temp/css-hash-map.json')

                    if (url.startsWith('http')) {
                        return url
                    }

                    return `${host}${url}`
                })
                .filter((dependency) => !dependency.includes('/lib.vendor.'))
        }

        return void ''
    }, id, `http://localhost:${process.env.PORT_DEV_SERVER}`)

    return urls
}
