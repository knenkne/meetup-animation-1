const defaultData = require('../../../models/2.0/main.json')

module.exports = require('express')
    .Router()
    // CASES
    .get('/alpha', (req, res) => {
        const options = {
            ...defaultData,
            envType: 'ALPHA'
        }

        res.render('index.hbs', options)
    })
    .get('/beta', (req, res) => {
        const options = {
            ...defaultData,
            envType: 'BETA'
        }

        res.render('index.hbs', options)
    })
