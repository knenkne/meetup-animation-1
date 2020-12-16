const { vendor } = require('@sbol/karma-config')

module.exports = (config) => {
    vendor(config)
    config.set({
        files: [
            { pattern: 'node_modules/@sbol/lib.vendor.react/target/index.js', watched: false, served: true },
            { pattern: 'tests/setup.js', watched: false, served: true },
            { pattern: 'target/index.js', watched: false, served: true },
            'tests/**/*.spec.js'
        ]
    })
}
