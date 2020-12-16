const path = require('path')

const express = require('express')
const proxy = require('express-http-proxy')

const { applyHbs } = require('../src')

const defaultData = require('./models/2.0/main.json')
const messages = require('./locales/ru.json')

const app = express()

applyHbs(app, { messages, logger: console })
app.listen(
    process.env.PORT,
    console.log(
        '🛠',
        'Dev server for templates available on the port:',
        process.env.PORT
    )
)

app.all('/', (req, res) => {
    res.redirect('/2.0')
})

app.use('/clean', (req, res) => {
    res.render('clean.hbs', defaultData)
})

app.use('/static/common/:anyVersion/*', (req, res) => {
    res.sendFile(path.resolve(`node_modules/@sbol/common/target/${req.params[0]}`))
})

app.use('/static/webpage.provider.bootstrap/:anyVersion/*', (req, res) => {
    res.sendFile(path.resolve(`node_modules/@sbol/webpage.provider.bootstrap/target/${req.params[0]}`))
})

app.use('/static/common.contents/:anyVersion/*', proxy('http://10.36.9.21', {
    proxyReqPathResolver: (req) => `/builds/sbol/common.contents/master/${req.params[0]}`
}))

app.use('/2.0', require('./routes/pages/2.0'))
app.use('/3.0', require('./routes/pages/3.0'))
app.use('/api', require('./routes/api'))
