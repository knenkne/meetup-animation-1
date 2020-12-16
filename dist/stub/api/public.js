const path = require('path')
const fs = require('fs')

const router = require('express').Router()
const { getMiddleware } = require('@sbol/lib.workflow/middleware')

module.exports = router
    // Заглушка-демонстрация для workflow
    .use('/UFS/api/workflow/demo', getMiddleware(require('./demo-flow-config')))
    // Заглушка-демонстрация для workflow от дизайна 2.4
    .use('/UFS/api/workflow/demo-2.4', getMiddleware(require('./demo-flow-config-2.4')))
    // Сервис главной страницы синтетического приложения
    .get('/UFS/api/dummy/init',
        (req, res, next) => setTimeout(next, 3000),
        (req, res) => {
            res.send([
                'lib.app',
                'lib.widgets.core',
                'lib.widgets.web',
                'lib.analytics',
                'lib.offers'
            ])
        }
    )
    // Запросы к сервисам middle
    .get('/UFS/api/*', (req, res, next) => {
        const filePath = path.resolve(__dirname, `./jsons/${req.params[0]}.json`)
        if (fs.existsSync(filePath)) {
            res
                .header('Content-Type', 'application/json')
                .sendFile(filePath)
        } else {
            next()
        }
    })
