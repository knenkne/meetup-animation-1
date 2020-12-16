/* eslint-disable */

const profile = require('./jsons/profile')
const getManagerInfo = require('./jsons/getManagerInfo.do')
const userProperties = require('./jsons/userProperties.do')

module.exports = {
    design30: {
        // Basic configure
        resourcesUrl: '/static',
        assetsCommonVersion: '1.0.0',
        bootstrapVersion: '1.0.0',
        antifraudStaticRoot: '/eribStatic/antifraud',
        // any extend?

        // Middle build info
        versionNumber: 'VersionNumber: 20.0.0',
        buildNumber: 'BuildNumber: 500',
        commitHash: 'CommitHash: gds76fsa2',
        // any extend?

        // Through-services
        regions: {
            'header-region': {
                'name': 'region.header',
                'version': '1.0.0'
            },
            'product-region': {
                'name': 'region.product',
                'version': '3.0.0'
            },
            'footer-region': {
                'name': 'region.footer',
                'version': '1.0.0'
            },
            'chat-region': {
                'name': 'chat',
                'version': '17.0.0'
            }
        },

        // Route-services
        apps: {
            '': {
                'name': 'index',
                'version': '1.0.0'
            },
            '/cards': {
                'name': 'cards.dashboard',
                'version': '1.0.0'
            },
            '/cards/debit': {
                'name': 'cards.debit',
                'version': '1.0.0'
            },
            '/cards/credit': {
                'name': 'cards.credit',
                'version': '1.0.0'
            },
            '/brokerage': {
                'name': 'brokerage',
                'version': '1.0.0'
            }
        },

        // Common settings for JS
        config: {
            'lang': 'ru-RU',

            'res.url': '/static',
            'api.url': '/api',
            'log.url': '/log',
            'ping.url': '/ping',
            'erib.url': 'https://node1.online.sberbank.ru',
            'error.500.url': '/temporary_unavailable',
            'resources.root.url': '/static',
            'base.url': '/sbtsbol',
            'base.client.url': '/sbtsbol/private',

            'log.level': 'ERROR',
            'user.id': 'fu98124ndf',

            'common.version': '1.0.0',
            'common.contents.version': '0.1.0',

            'session.cookie.name': 'SBTSBOL_SESSION_TIMESTAMP',
            'session.autorenew.events': 'click,scroll',
            'session.autorenew.debounce': '1000',

            'analytics.version': '1.0.0',
            'analytics.yandex.id': '23456789',
            'analytics.google.id': 'UA-682304-AI',
            'analytics.yandex.level': 'ALL',
            'analytics.google.level': 'ALL',
            'analytics.segmento.level': 'ALL',
            'tariffPlan': 'sberbank1'
            // any extend?
        },

        // Per service settings for JS
        data: {
            'region.header': {
                'anyPrefilledData': 'prefilled'
            },
            'region.product': {
                'anyPrefilledData': 'prefilled'
            },
            'region.footer': {
                'anyPrefilledData': 'prefilled'
            },
            'index': {
                'dataForMainPage': 'causeMiddleInvokedWithIt'
            },
            'profile/info.do': profile,
            'userProperties.do': userProperties,
            'getManagerInfo.do': getManagerInfo,
            // All regions + first loaded app
        },

        // Navigation (ERIB <-> PL)
        navigation: {
            'MAIN': '/PhizIC/private/accounts.do',
            'index': '/',
            'cards.dashboard': '/cards',
            'cards.debit': '/cards/debit',
            'cards.credit': '/cards/credit',
            'operations': '/operations',
            'catalog': '/catalog',
            'brokerage': '/brokerage',
            'api.logout': '/api/logout',
            'payments.dashboard': '/payments/main',
            'profile': '/profile'
        },
        messages: {},
        launcher: {
            'region.scaffold': {
                features: {
                    ProductRegionThemeEnabled: {
                        value: "true",
                        "options": {
                            "Dark": "light",
                            "Light": "dark"
                        }
                    },
                    AllowManagerThemes: {
                        value: "true"
                    }
                }
            },
            'webpage.provider.bootstrap': {
                features: {
                    BootstrapLoader: {
                        value: 'true'
                    }
                }
            },
            'application.config': {
                options: {
                    DynatraceEnabled: 'true',
                    // DynatraceReportUrl: 'wow',
                    DynatraceCuc: 'wow',
                    DynatraceAgentUri: 'wow',
                    DynatraceApp: 'wow',
                }
            }
        },
        launcherConfig: {
            options: {
                DynatraceUrl: '/dynatrace-simulation-script'
            }
        }
    }
}
