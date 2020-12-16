const express = require('express')

const path = require('path')
const fs = require('fs')

const router = express.Router()

module.exports = router
    .use('/PhizIC/user/images/SMALL', express.static('./stub/avatars'))
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
