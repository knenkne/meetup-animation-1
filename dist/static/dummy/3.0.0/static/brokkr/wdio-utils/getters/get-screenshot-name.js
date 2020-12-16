const path = require('path')

module.exports = (type) => (context) => {
    const {
        options: {
            featureName,
            scenarioName
        },
        meta: {
            viewport: {
                width
            },
            orientation
        },
        browser: {
            version
        },
        desiredCapabilities: {
            browserName
        }
    } = context

    const resolution = width || orientation || 'unknown'
    const browserVersion = parseInt(/\d+/.exec(version)[0], 10)
    const basePath = type === 'reference' ? 'cucumber' : 'reports'

    return path.join(
        basePath,
        'screenshots',
        featureName,
        scenarioName,
        `${browserName}_v${browserVersion}_${resolution}.png`
    )
}
