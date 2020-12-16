const defaultData = require('../../../models/2.0/main.json')

module.exports = require('express')
    .Router()
    // CASES
    .get('/ssr', (req, res) => {
        const options = {
            ...defaultData,
            pageAlias: '404',
            ssr: '<script>window.initialized = true;</script><h3>SSR</h3>'
        }

        res.render('2.0/index.hbs', options)
    })
