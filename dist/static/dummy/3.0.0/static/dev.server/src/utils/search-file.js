const { normalize, parse, join } = require('path')
const { existsSync } = require('fs')

const searchFile = (filename, directory = process.cwd()) => {
    // reached root directory and file not found
    const { root, dir } = parse(directory)
    if (root === dir) {
        return void 0
    }

    const filepath = join(directory, filename)
    // file is found
    if (existsSync(filepath)) {
        return filepath
    }

    // search file in the upper directory
    return searchFile(filename, normalize(join(directory, '..')))
}

module.exports = searchFile
