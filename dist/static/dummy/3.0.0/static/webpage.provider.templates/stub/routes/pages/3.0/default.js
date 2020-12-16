module.exports = require('express')
    .Router()
    // CASES
    .get('/', (req, res) => {
        res.redirect('/3.0/default')
    })
    .get('/default', (req, res) => {
        res.render('3.0/index.hbs', require('../../../models/3.0/main'))
    })
    .get('/no-regions', (req, res) => {
        res.render('3.0/no-regions.hbs', require('../../../models/3.0/main'))
    })
    .get('/entry', (req, res) => {
        res.render('3.0/entry.hbs', require('../../../models/3.0/main'))
    })
