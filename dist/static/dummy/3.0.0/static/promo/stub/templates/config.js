const { version: commonVersion } = require('@sbol/common/package')

const permissions = require('./permissions')
const navigation = require('./navigation')

module.exports = {
    // Рекомендованная настройка, первый релиз нового дизайна в SBOL.PRO, разрабатываем под него
    isSbolPro: true,

    'erib.url': `http://localhost:${process.env.PORT || '4242'}/ERIB`,
    'offers.url': '/api/offers',
    'pfm.block.root.url': '/api/offers',
    'ufs.block.root.url': `http://localhost:${process.env.PORT || '4242'}/UFS`,
    'mapi.url': '/clientapi',
    'catalog.url': '/api/catalog/items',
    'ping.url': '/ERIB/ping',
    'base.url': '/sbtsbol',
    'api.url': '/api',
    'log.url': '/api/log',
    'log.level': 'DEBUG',
    'base.client.url': '',
    'session.create.url': '/sbtsbol/api/ufs/create/url',

    eribNode: 'https://node3.online.sberbank.ru',
    lang: 'ru-RU',
    'analytics.version': null,
    'analytics.yandex.id': null,
    'analytics.yandex.level': null,
    'analytics.google.id': null,
    'analytics.google.level': null,
    'analytics.segmento.level': null,
    'user.id': '8caf496a71330d2a582fc32dde1e8a8b',
    'session.autorenew.events': 'click,scroll,wheel',
    'session.autorenew.debounce': '60000',
    'common.version': commonVersion,
    'session.cookie.name': 'SBTSBOL_SESSION_TIMESTAMP',
    'error.500.url': 'temporary_unavailable',

    permissions,

    banners: navigation
}
