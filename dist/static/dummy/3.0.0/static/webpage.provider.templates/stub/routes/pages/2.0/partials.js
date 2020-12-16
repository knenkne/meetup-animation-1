const personalMenuData = require('../../../models/2.0/personal-menu.json')

module.exports = require('express')
    .Router()
    // CASES
    .get('/personal-menu', (req, res) => {
        res.render('2.0/personal-menu.hbs', personalMenuData)
    })
