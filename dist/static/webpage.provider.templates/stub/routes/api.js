module.exports = require('express')
    .Router()
    // API CASES
    .all('/warmUpSession', (req, res) => {
        res.status(200).send()
    })
