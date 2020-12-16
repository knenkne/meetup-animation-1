import path from 'path'
import fs from 'fs'

import locatePath from 'locate-path'

module.exports = () => {
    const extConfigPath = locatePath.sync([
        path.resolve('.serverrc.js'),
        path.resolve('.serverrc.json')
    ])

    if (extConfigPath) {
        return require(extConfigPath)
    }

    // get from root config files with no ext
    const noExtConfigPath = locatePath.sync([
        path.resolve('.serverrc')
    ])

    if (noExtConfigPath) {
        return JSON.parse(fs.readFileSync(noExtConfigPath, 'utf8'))
    }

    return {}
}
