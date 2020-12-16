const path = require('path')

const router = require('express').Router()

let ufsInvalidSession = false

const timeout = (time) => (req, res, next) => setTimeout(next, time)

module.exports = router
    .all(['/api/log', '/api/log/v2'], (req, res) => {
        res.send()
    })
    .all('/sbtsbol/api/init', (req, res) =>
        res.send({
            messages: {
                'main.message.from.init.messages': 'success',
                'lib.workflow:lib.workflow.message.from.init.messages': 'success'
            },
            features: {
                foo: {
                    value: 'quux',
                    options: {
                        bar: 'true'
                    }
                }
            },
            options: {
                qux: 'true'
            }
        })
    )
    .all('/UFS/invalidate-session', (req, res) => {
        ufsInvalidSession = true

        res.send({ success: true })
    })
    .all('/sbtsbol/api/ufs/session/create', timeout(2000), (req, res) => {
        ufsInvalidSession = false

        res.send()
    })
    .all('/UFS/some-service', timeout(1000), (req, res) => {
        if (ufsInvalidSession) {
            res.status(403).send()
        } else {
            res.send({ success: true })
        }
    })
    .get('/static/region.holy/1.2.3/index.js', timeout(1000), (req, res) => {
        res.sendFile(path.resolve(__dirname, 'region.js'))
    })
    .get('/static/region.holy.error/1.2.3/index.js', timeout(1000), (req, res) => {
        res.sendFile(path.resolve(__dirname, 'region-error.js'))
    })
    .get('/static/lib.workflow/1.2.3/locales/ru.json', (req, res) => {
        res.send({
            'lib.workflow.message.from.html.messages': 'fail',
            'lib.workflow.message.from.init.messages': 'fail',
            'lib.workflow.message.original': 'success'
        })
    })
