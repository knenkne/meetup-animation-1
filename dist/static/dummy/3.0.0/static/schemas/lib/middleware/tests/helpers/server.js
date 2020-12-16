const express = require('express')
const bodyParser = require('body-parser')

function createApp () {
    const app = express()

    app.use(bodyParser.json())

    function run(callback) {
        return app.listen(3000, () => {
            if (callback) {
                callback()
            }
        })
    }

    return {
        app,
        run
    }
}

module.exports = createApp
