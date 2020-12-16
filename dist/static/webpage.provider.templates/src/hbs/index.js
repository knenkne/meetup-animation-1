const path = require('path')

const hbs = require('hbs')

const registerHelpers = require('./utils/register-helpers')
const registerPartialsWithExtensions = require('./utils/register-partials-with-extensions')

module.exports = (app, { messages, logger }) => {
    const templates = path.resolve(__dirname, 'templates')
    registerHelpers(hbs, { messages, logger })
    registerPartialsWithExtensions(hbs, templates)
    app.engine('hbs', hbs.__express)
    app.set('views', templates)
}
