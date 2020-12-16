module.exports = (config) => {
    require('@sbol/karma-config').vendor(config)

    config.set({
        files: config.files.slice(1)
    })
}
