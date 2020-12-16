const getModuleFilePath = require('../utils/get-module-file-path')

module.exports = (additionalStaticRoots = []) => (req, res) => {
    const file = getModuleFilePath(req.params[0], req.params[1], req.params[2], additionalStaticRoots)

    if (file) {
        res.sendFile(file)
    } else {
        res.sendStatus(404)
    }
}
