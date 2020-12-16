const defaultData = require('../../../models/3.0/main.js')

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
        res.render('3.0/401.hbs', defaultData)
    })
    .get('/404', (req, res) => {
        res.render('3.0/404.hbs', defaultData)
    })
    .get(['/500', '/unavailable'], (req, res) => {
        res.render('3.0/500.hbs', defaultData)
    })
