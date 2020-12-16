const path = require('path')
const fs = require('fs')

/**
 * Search specified filename from the given directory path up to root directory.
 * Params cannot be omitted
 *
 * @author Andrew Babkin <AVBabkin.SBT@sberbank.ru>
 * @param {String} filename - file name to search
 * @param {String} directory - start searching directory
 * @return {String} Fully qualified file name or Boolean(false) if the file not found
 */
const searchFile = (filename, directory = process.cwd()) => {
    // reached root directory and file not found
    const { root, dir } = path.parse(directory)
    if (root === dir) {
        return void 0
    }

    const filepath = path.join(directory, filename)
    // file is found
    if (fs.existsSync(filepath)) {
        return filepath
    }

    // search file in the upper directory
    return searchFile(filename, path.normalize(path.join(directory, '..')))
}

module.exports = searchFile
