const { version: commonVersion } = require('@sbol/common/package')

const permissions = require('./permissions')
const navigation = require('./navigation')
const history = require('./history')

module.exports = {
    // Канал SBOL.PRO
    isSbolPro: false,
    // Страница отображена на домене ЕРИБ
    isErib: false,
    // Страница отображена на домене PL middle
    isPL: true,
    // HOST ЕРИБ
    'erib.url': `http://localhost:${process.env.PORT || '4242'}/ERIB`,
    // HOST ЕФС (SOWA)
    'ufs.block.root.url': `http://localhost:${process.env.PORT || '4242'}/UFS`,
    // HOST статических ресурсов
    'res.url': `static`,
    // HOST DDP
    'ddp.host': `http://localhost:${process.env.PORT || '4242'}/DDP`,
    // [DEPRECATED] Sub-route CMS баннеров
    'offers.url': '/api/offers',
    // Sub-route CMS баннеров
    'pfm.block.root.url': '/api/offers',
    // Sub-route mAPI, соединяется с erib.url
    'mapi.url': '/clientapi',
    'catalog.url': '/api/catalog/items',
    // Путь сервиса по прогреву сессии ЕРИБ
    'ping.url': '/ERIB/ping',
    // Sub-route всех сервисов PL middle
    'base.url': '/sbtsbol',
    // Sub-route API PL middle
    'api.url': '/api',
    // Сервис логирования
    'log.url': '/api/log',
    // Глобальный уровень логирования
    'log.level': 'DEBUG',
    // Sub-route для клиентских страниц PL middle
    'base.client.url': '',
    // Путь сервиса создания сессии UFS
    'session.create.url': '/sbtsbol/api/ufs/create/url',
    // Язык клиента
    lang: 'ru-RU',
    // Версия модуля аналитики
    'analytics.version': '6.0.9',
    // Идентификаторы счетчиков Яндекса, разбитые запятыми
    'analytics.yandex.id': null,
    // Уровень отправки метрик Яндекса, SILENT, VISIT, ALL
    'analytics.yandex.level': null,
    // Идентификаторы счетчиков Google, разбитые запятыми
    'analytics.google.id': null,
    // Уровень отправки метрик Google, SILENT, VISIT, ALL
    'analytics.google.level': null,
    // Уровень отправки метрик Segmento, SILENT, VISIT, ALL
    'analytics.segmento.level': null,
    // Адрес отправки метрик Sberbank Analytics
    'analytics.sberbank.url': null,
    // Хэш идентификатора клиента
    'user.id': '8caf496a71330d2a582fc32dde1e8a8b',
    // События для подогрева сессии
    'session.autorenew.events': 'click,scroll,wheel',
    // Debounce для подогрева сессии
    'session.autorenew.debounce': '60000',
    // Версия модуля common
    'common.version': commonVersion,
    // Название сессионной куки
    'session.cookie.name': 'SBTSBOL_SESSION_TIMESTAMP',
    // Sub-route редиректа на экран блокирующей ошибки
    'error.500.url': 'temporary_unavailable',
    // Путь редиректа на выход из СБОЛа
    'entry.login.url': 'https://online.sberbank.ru',
    // Максимальный размер пакета с логами v2
    'frontend.log.batch.capacity': 10,
    // Максимальное время ожидания до отправки пакета с логами v2
    'frontend.log.timeout': 10000,
    // [DEPRECATED] Права ЕРИБ
    permissions,
    // Баннерная навигация (управляет доступностью переходов в баннерах)
    banners: navigation,
    // Соответствие Истории Операций модулям сайта
    history
}
