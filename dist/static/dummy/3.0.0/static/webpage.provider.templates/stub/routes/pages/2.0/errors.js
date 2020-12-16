const defaultData = require('../../../models/2.0/main.json')
const unavailableData = require('../../../models/2.0/unavailable.json')

module.exports = require('express')
    .Router()
    .get('/unsupported', (req, res) => {
        const options = {
            ...defaultData,
            pageAlias: '404'
        }

        res.render('2.0/index.hbs', options)
    })
    .get('/401', (req, res) => {
        res.render('2.0/401.hbs', unavailableData)
    })
    .get('/404', (req, res) => {
        res.render('2.0/404.hbs', unavailableData)
    })
    .get(['/500', '/unavailable'], (req, res) => {
        res.render('2.0/500.hbs', unavailableData)
    })
