import path from 'path'

const pkg = require(path.resolve('package'))

module.exports = {
    launcher: {
        [process.env.PKG_ID]: {
            version: pkg.version || 'master',
            features: {},
            options: null
        },
    },
    config: {},
    navigation: {}
}
