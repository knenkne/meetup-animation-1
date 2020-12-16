const devServer = require('@sbol/dev.server')
const { version: scaffoldVersion } = require('@sbol/region.scaffold/package')
const { version: searchVersion } = require('@sbol/region.search/package')
// const { version: promoVersion } = require('@sbol/promo/package')

module.exports = () => {
    const defaultConfig = devServer.getDefaultConfig()

    const navigation = {
        ...defaultConfig.navigation,
        MAIN: '/PhizIC/private/accounts.do',
        index: '/main',
        'cards.dashboard': '/cards',
        'cards.debit': '/cards/debit',
        'cards.credit': '/cards/credit',
        operations: '/operations',
        brokerage: '/brokerage',
        dummy: '/dummy',
        catalog: '/catalog',
        'lib.offers': '/lib.offers',
        promo: '/promo'
    }

    return {
        ...defaultConfig,
        navigation,
        config: {
            ...defaultConfig.config,
            'offers.close.details': 'intrusive,nonInterested,error',
            isSbolPro: true,
            'erib.url': 'http://localhost:4242',
            'pfm.block.root.url': 'http://localhost:4242',
            'offers.max.offers': '100',
            'base.client.url': '',
            'log.level': 'DEBUG',
            banners: navigation
        },
        apps: {
            ...defaultConfig.apps,
            '/promo': {
                name: 'promo',
                // version: promoVersion
            }
        },
        regions: {
            'scaffold-region': {
                name: 'region.scaffold',
                version: scaffoldVersion
            }
        },
        launcher: {
            'lib.offers': {
                features: {
                    ShowPageMessage: {
                        value: 'true',
                        options: {
                            pageKey: 'pl-main-page'
                        }
                    },
                    catalog: {
                        value: 'true',
                        options: {
                            withProducts: 'webSynthetic',
                            apiVersion: '1'
                        }
                    }
                }
            },
            'region.search': {
                version: searchVersion
            }
        }
    }
}
