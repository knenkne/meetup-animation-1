const path = require('path')
const fs = require('fs')

const cwd = process.cwd()

module.exports = function (relPath) {
    const fullPath = path.resolve(cwd, relPath)
    return JSON.parse(fs.readFileSync(fullPath))
}
