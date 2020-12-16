const getPackageVersion = require('../utils/get-package-version')

module.exports = {
    lang: 'ru-RU',

    'res.url': '/static',
    'api.url': '/sbtsbol/api',
    'mapi.url': '/sbtsbol/api/clientapi',
    'log.url': '/api/log',
    'ping.url': '/api/ping',
    'erib.url': `http://localhost:${process.env.PORT}`,
    'error.500.url': 'temporary_unavailable',
    'base.url': '/sbtsbol',
    'base.client.url': '',

    'log.level': 'DEBUG',
    'user.id': '1843e35d41ccf6e63273495ba42df3c1',

    'common.version': getPackageVersion('common'),

    'session.cookie.name': 'SBTSBOL_SESSION_TIMESTAMP',
    'session.autorenew.events': 'click,scroll,wheel',
    'session.autorenew.debounce': '60000',

    'analytics.version': getPackageVersion('lib.analytics'),
    'analytics.yandex.id': '23456789',
    'analytics.google.id': 'UA-682304-AI',
    'analytics.yandex.level': 'ALL',
    'analytics.google.level': 'ALL',
    'analytics.segmento.level': 'ALL'
}
