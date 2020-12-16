const path = require('path')
const fs = require('fs')

const locatePath = require('locate-path').sync

module.exports = () => {
    // get from root config files with ext
    const extConfigPath = locatePath([
        path.resolve('.serverrc.js'),
        path.resolve('.serverrc.json')
    ])
    if (extConfigPath) {
        return require(extConfigPath)
    }

    // get from root config files with no ext
    const noExtConfigPath = locatePath([
        path.resolve('.serverrc')
    ])
    if (noExtConfigPath) {
        return JSON.parse(fs.readFileSync(noExtConfigPath, 'utf8'))
    }

    return {}
}
