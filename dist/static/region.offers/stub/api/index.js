const router = require('express').Router()

module.exports = router
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

    // Коннект dev API region.offers
    .use('/api/offers', require('./public'))

    // Коннект dev API region.scaffold
    .use(require('@sbol/region.scaffold/stub/api/public'))

    // Fallback 404
    .all('/api/*', (req, res) => res.status(404))
