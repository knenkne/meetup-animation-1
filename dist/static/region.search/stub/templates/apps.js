const dummyPkg = require('@sbol/dummy/package')

module.exports = {
    '/main': {
        name: 'main',
        // version: require('@sbol/index/package').version
    },
    '/catalog': {
        name: 'catalog',
        // version: require('@sbol/catalog/package').version
    },
    '/region.search': {
        name: 'dummy',
        version: dummyPkg.version
    }
}
