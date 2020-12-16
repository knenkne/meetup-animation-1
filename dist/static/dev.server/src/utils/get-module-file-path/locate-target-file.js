const path = require('path')

const locatePath = require('locate-path').sync

module.exports = (modulePath = '', file = '') => {
    if (process.env.NODE_ENV === 'production') {
        return locatePath([
            path.resolve(modulePath, 'target', file),
            // vendors 2.4
            path.resolve(modulePath, 'dist', file.replace('index.js', 'vendor.dev.js'))
        ])
    }

    return locatePath([
        path.resolve(modulePath, 'target-dev', file),
        path.resolve(modulePath, 'target', file),
        // vendors 2.4
        path.resolve(modulePath, 'dist', file.replace('index.js', 'vendor.dev.js'))
    ])
}
