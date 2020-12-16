const index = require('../lib')

module.exports = {
    ...index.configs.recommended,
    env: index.env,
    parserOptions: index.parserOptions
}
