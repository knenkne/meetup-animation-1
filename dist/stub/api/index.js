const router = require('express').Router()
const {
    getMiddleware: {
        helpers: {
            stopAutoFlush,
            startAutoFlush,
            flushServerState
        }
    }
} = require('@sbol/lib.workflow/middleware')

stopAutoFlush()

module.exports = router
    // Сервис-настройка для отключения автоматической очистки процесса workflow на сервере
    .get('/workflow-auto-flush/stop', (req, res) => {
        stopAutoFlush()
        res.send({ status: 0, message: 'workflow auto flush stopped' })
    })
    // Сервис-настройка для включения автоматической очистки процесса workflow на сервере
    .get('/workflow-auto-flush/start', (req, res) => {
        startAutoFlush()
        res.send({ status: 0, message: 'workflow auto flush started' })
    })
    // Сервис-настройка для очистки процесса workflow на сервере
    .get('/workflow-flush', (req, res) => {
        flushServerState()
        res.send({ status: 0, message: 'workflow flush server state' })
    })

    // Технические сервисы
    .post([
        // Конфигурации, специфичные только для модуля
        '/api/init'
    ], (req, res) => {
        res.send({
            // Текстовые константы данного модуля
            messages: {},
            // Сервисные настройки данного модуля
            settings: {},
            // Фичи данного модуля
            features: {},
            // Опции данного модуля
            options: {},
            // Обновление доступных приложений
            apps: {},
            // Сессии данного модуля
            sessions: {
                UFS7: true,
                PHIZ_PFM: true
            }
        })
    })
    // Логирование, сессии
    .all([
        // Классический сервис логирования
        '/api/log', '/sbtsbol/api/log',
        // Сервис логирования с пакетированием
        '/api/log/v2', '/sbtsbol/api/log/v2',
        // Сервис подогрева сессии
        '/api/warmUpSession', '/sbtsbol/api/warmUpSession',
        // Сервис создания сессии UFS
        '/api/ufs/session/create', '/sbtsbol/api/ufs/session/create'
    ], (req, res) => {
        res.status(200).send()
    })

    // Коннект dev API lib.offers
    .use('/api/offers', require('@sbol/region.offers/stub/api/public'))
    // Коннект dev API region.scaffold
    .use(require('@sbol/region.scaffold/stub/api/public'))
    // Коннект dev API данного приложения (в контексте UFS)
    .use(require('./public'))

    // Fallback 404
    .all('/api/*', (req, res) => res.status(404))
