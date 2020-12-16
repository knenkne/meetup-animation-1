const chalk = require('chalk')

console.warn(chalk.yellow('Workflow middleware переехала в \'@sbol/lib.workflow/middleware\''))

module.exports = require('../../middleware')
