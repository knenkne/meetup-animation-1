/* eslint-disable */
module.exports = () => ({
    ...require('@sbol/dev.server').getDefaultConfig(),
    config: {
        ...require('@sbol/dev.server').getDefaultConfig().config,
        'log.url': '/api/log',
        lang: 'ru-RU',
        'base.client.url': '',
        'ufs.block.root.url': `http://localhost:${process.env.PORT}/UFS`,
        'mapi.url': '/sbtsbol/api/clientapi',
        'log.level': 'INFO',
        'session.autorenew.debounce': '60000',
        'session.autorenew.events': 'click,scroll,wheel',
        'user.id': '1843e35d41ccf6e63273495ba42df3c1',
        'api.url': '/sbtsbol/api',
        'error.500.url': 'temporary_unavailable',
        'ping.url': '/api/ping',
        'base.url': '/sbtsbol'
    },
    messages: {
        'main.message.from.html.messages': 'success',
        'lib.workflow:lib.workflow.message.from.html.messages': 'success'
    },
    navigation: {
        ...require('@sbol/dev.server').getDefaultConfig().navigation,
        'loans.dashboard': '/loans',
        'loans.dashboard.claims': '/loans/claim/{{id}}',
        'loans.dashboard.claims.alternate': 'https://node1.online.sberbank.ru/PhizIC/private/loans/claims?id={{erib.id}}',
        'loans.dashboard.claims.hash': '/loans#/claim/{{id}}',
        'link.gos.homepage': 'http://gosuslugi.ru',
        'link.loans.broken': '/loans?from={{date}}&to={{date}}'
    },
    launcher: {
        'region.no.version': {},
        'region.holy': {
            version: '1.2.3'
        },
        'region.holy.error': {
            version: '1.2.3'
        },
        'lib.app': {
            features: {
                'foo': {
                    value: 'anyValue',
                    options: {
                        position: '1',
                        view: 'banner'
                    }
                },
            },
            options: {
                checkTimeout: '5000'
            }
        }
    },
    regions: {},
    launcherConfig: {
        options: {
            'launcherConfigOption': 'launcherConfigValue'
        }
    }
})
