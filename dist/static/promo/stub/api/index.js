const router = require('express').Router()

const {
    promo: {
        features,
        options
    }
} = require('../templates/modules')

module.exports = router
    // Технические сервисы
    // Работа с сессией, лаунчером и сервисными свойствами
    .post([
        '/api/init',
        '/sbtsbol/api/init'
    ], (req, res) => {
        // Больше про лаунчер: https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=793288054
        res.send({
            // Версии приложений из лаунчера
            apps: {},
            // Конфигурации из лаунчера
            features,
            options
        })
    })
    // Логирование, сессии
    .all([
        '/api/log',
        '/api/warmUpSession',
        '/api/ufs/session/create',
        '/sbtsbol/api/log',
        '/sbtsbol/api/warmUpSession',
        '/sbtsbol/api/ufs/session/create'
    ], (req, res) => {
        res.send({ status: 0 })
    })

    // Коннект dev API lib.offers
    .use('/api/offers', require('@sbol/lib.offers/fixture/stub/api/public-stub'))
    // Коннект dev API region.scaffold
    .use(require('@sbol/region.scaffold/stub/api/public'))
