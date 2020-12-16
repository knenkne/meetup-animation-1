const promoVersion = require('@sbol/promo/package').version

module.exports = {
    '/promo': {
        name: 'promo',
        version: promoVersion
    },
    entry: { name: 'entry', version: '0.0.0' }
}
