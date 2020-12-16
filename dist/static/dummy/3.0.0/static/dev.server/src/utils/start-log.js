const chalk = require('chalk')

module.exports = (url) =>
    console.log(`
💣  Starting the development server...
💣  ${url}
💣  ${chalk.grey(`@sbol/dev.server@${require('../../package').version}`)}
`)
