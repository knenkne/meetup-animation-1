const router = require('express').Router()

const managerInfo = require('./private/getManagerInfo.do')

module.exports = router
    .post(['/api/log', '/sbtsbol/api/log', '/api/log/v2', '/sbtsbol/api/log/v2'], (req, res) => {
        req.body.messages.forEach(({ message, requestUrl }) => void console.log(message || requestUrl))
        res.send({ status: 0 })
    })
    .post('*/private/getManagerInfo.do', (req, res) => {
        res.send(managerInfo)
    })
    .post('*', (req, res) => {
        res.send({ status: 0 })
    })
