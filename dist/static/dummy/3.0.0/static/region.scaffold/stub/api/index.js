const express = require('express')

const router = express.Router()

module.exports = router
    .use(require('./public'))
    .get('/sbtsbol/api/suggestions', (req, res) => res.send(require('./jsons/pages/pages.json')))
    .get('/ddp/api/search/examples', (req, res) => res.send(require('./jsons/search/examples.json')))
    .post('/api/init', (req, res) => res.send(require('./modules.json')))
    .all('/ERIB/PhizIC/images/*', (req, res) => {
        res.sendStatus(200)
    })
