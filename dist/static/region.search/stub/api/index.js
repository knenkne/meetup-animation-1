const express = require('express')
const pages = require('./jsons/pages/pages.json')
const examples = require('./jsons/search/examples.json')
const modules = require('./modules.json')

const router = express.Router()

module.exports = router
    // Коннект dev API данного приложения (в контексте UFS)
    .use(require('./public'))
    // Коннект dev API region.scaffold
    .use(require('@sbol/region.scaffold/stub/api/public'))
    .get('/sbtsbol/api/suggestions', (req, res) => res.send(pages))
    .get('/sbtsbol/ddp/api/search/examples', (req, res) => res.send(examples))
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
            modules
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

    .all('/ERIB/PhizIC/images/*', (req, res) => {
        res.sendStatus(200)
    })
    // Fallback 404
    .all('/api/*', (req, res) => res.status(404))
