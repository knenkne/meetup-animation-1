const fs = require('fs')

const getLibsVersions = require('./get-libs-versions')

module.exports = () => Object.keys(getLibsVersions())
    .filter((name) => fs.existsSync(`node_modules/@sbol/${name}/locales`))
