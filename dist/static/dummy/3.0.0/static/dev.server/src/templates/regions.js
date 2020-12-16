const getPackageVersion = require('../utils/get-package-version')

module.exports = {
    'header-region': {
        name: 'region.header',
        version: getPackageVersion('region.header')
    },
    'product-region': {
        name: 'region.product',
        version: getPackageVersion('region.product')
    },
    'footer-region': {
        name: 'region.footer',
        version: getPackageVersion('region.footer')
    }
}
